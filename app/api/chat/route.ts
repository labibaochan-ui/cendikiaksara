import { NextResponse } from "next/server";

const gatewayUrl = "https://api.experientiallabs.ai/v1/chat/completions";
const model = "gpt-5.6-luna";

export async function POST(request: Request) {
  const apiKey = process.env.EXPLABS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "EXPLABS_API_KEY belum dikonfigurasi di server." },
      { status: 500 }
    );
  }

  const body = (await request.json()) as {
    messages?: Array<{ role: "user" | "assistant"; content: string }>;
  };

  if (!body.messages?.length || body.messages.length > 12) {
    return NextResponse.json(
      { error: "Percakapan tidak valid." },
      { status: 400 }
    );
  }

  const response = await fetch(gatewayUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      max_tokens: 300,
      messages: [
        {
          role: "system",
          content:
            "Kamu adalah asisten CendikiAksara. Jawab dalam bahasa Indonesia dengan ramah, ringkas, dan membantu. Jelaskan bahwa CendikiAksara menyediakan pendampingan menulis, bukan jasa joki atau penulisan naskah.",
        },
        ...body.messages,
      ],
    }),
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Layanan AI sedang tidak tersedia." },
      { status: response.status }
    );
  }

  const result = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const content = result.choices?.[0]?.message?.content;

  if (!content) {
    return NextResponse.json(
      { error: "AI tidak mengembalikan jawaban." },
      { status: 502 }
    );
  }

  return NextResponse.json({ content });
}
