import { NextRequest } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, provider, model, stream = true } = body;

    const apiKey = process.env.API_HUB_KEY;
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "API_HUB_KEY is not set in environment variables" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!baseUrl) {
      return new Response(
        JSON.stringify({ error: "NEXT_PUBLIC_API_BASE_URL is not set" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Support both /api/v1 and /v1 paths
    const endpoint = `${baseUrl.replace(/\/$/, "")}/api/v1/chat/completions`;

    const payload = {
      provider: provider || "gemini",
      model: model || "gemini-3.8-flash",
      messages: messages || [],
      stream: !!stream,
      temperature: 0.7,
    };

    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!upstream.ok) {
      const errText = await upstream.text();
      return new Response(
        JSON.stringify({
          error: `Upstream error ${upstream.status}`,
          details: errText,
        }),
        { status: upstream.status, headers: { "Content-Type": "application/json" } }
      );
    }

    // Stream the response through
    if (stream && upstream.body) {
      return new Response(upstream.body, {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        },
      });
    }

    const data = await upstream.json();
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error("Chat API error:", err);
    return new Response(
      JSON.stringify({ error: err?.message || "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}