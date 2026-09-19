"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const initialMessage: Message = {
  role: "assistant",
  content:
    "Halo! Aku bisa membantu memilih layanan pendampingan yang sesuai dengan kebutuhan tulisanmu.",
};

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const content = input.trim();

    if (!content || isLoading) return;

    const nextMessages = [...messages, { role: "user" as const, content }];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.slice(-8) }),
      });
      const result = (await response.json()) as { content?: string; error?: string };

      if (!response.ok || !result.content) {
        throw new Error(result.error ?? "Jawaban tidak tersedia.");
      }

      setMessages((current) => [
        ...current,
        { role: "assistant", content: result.content ?? "" },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : "Maaf, coba beberapa saat lagi.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <aside className={`ai-chat ${isOpen ? "ai-chat-open" : ""}`}>
      {isOpen && (
        <div className="ai-chat-panel">
          <div className="ai-chat-header">
            <div>
              <span className="section-label">ASISTEN CENDIKIAKSARA</span>
              <h2>Tanya tentang tulisanmu</h2>
            </div>
            <button
              type="button"
              className="ai-chat-close"
              aria-label="Tutup asisten"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="ai-chat-messages" aria-live="polite" ref={messagesRef}>
            {messages.map((message, index) => (
              <div className={`ai-chat-message ${message.role}`} key={`${message.role}-${index}`}>
                {message.content}
              </div>
            ))}
            {isLoading && <div className="ai-chat-message assistant">Sedang menyusun jawaban...</div>}
          </div>

          <form className="ai-chat-form" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Tulis pertanyaan..."
              aria-label="Pertanyaan untuk asisten"
            />
            <button type="submit" disabled={isLoading || !input.trim()} aria-label="Kirim pertanyaan">
              ↗
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className="ai-chat-toggle"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Tutup asisten CendikiAksara" : "Buka asisten CendikiAksara"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span aria-hidden="true">Aa</span>
        <span>{isOpen ? "Tutup" : "Tanya AI"}</span>
      </button>
    </aside>
  );
}
