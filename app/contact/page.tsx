"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";

type Topic = "Freelance" | "Full-time" | "Collab" | "Bug Fix" | "Consulting";

const TOPICS: Topic[] = ["Freelance", "Full-time", "Collab", "Bug Fix", "Consulting"];

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactPage() {
  const EMAIL = "sain903481@email.com";
  const WHATSAPP = "9190348-50987";
  const GITHUB = "https://github.com/MAHESH-4017";
  const LINKEDIN = "https://www.linkedin.com/in/mahesh-215bb9385/"; // change

  const [topic, setTopic] = useState<Topic>("Freelance");
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState<null | "email" | "wa">(null);

  const subject = useMemo(() => {
    const who = name.trim() ? ` | ${name.trim()}` : "";
    return `Contact: ${topic}${who}`;
  }, [topic, name]);

  const mailtoHref = useMemo(() => {
    const body = [
      `Topic: ${topic}`,
      name ? `Name: ${name}` : "",
      from ? `Email: ${from}` : "",
      "",
      message || "",
    ]
      .filter(Boolean)
      .join("\n");
    return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [EMAIL, subject, topic, name, from, message]);

  const waHref = useMemo(() => {
    const text = [
      `Hi, I'm contacting you.`,
      `Topic: ${topic}`,
      name ? `Name: ${name}` : "",
      from ? `Email: ${from}` : "",
      "",
      message || "",
    ]
      .filter(Boolean)
      .join("\n");
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
  }, [WHATSAPP, topic, name, from, message]);

  async function copy(text: string, kind: "email" | "wa") {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(kind);
      window.setTimeout(() => setCopied(null), 1200);
    } catch {
      // ignore
    }
  }

  const canSend = from.trim().includes("@") && message.trim().length >= 10;

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-70 animate-[float_10s_ease-in-out_infinite] bg-[conic-gradient(from_180deg,#00d5ff,#a855f7,#ffb700,#34d399,#00d5ff)]" />
        <div className="absolute -bottom-48 -right-48 h-[560px] w-[560px] rounded-full blur-3xl opacity-50 animate-[float2_12s_ease-in-out_infinite] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_60%)]" />
      </div>

      <Container className="relative py-16 md:py-20">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open for serious work only
          </div>

          <h1 className="mt-6 text-4xl font-semibold md:text-6xl">
            Contact Command Center
          </h1>

          <p className="mt-4 text-white/70">
            Pick a topic, write a real message, then send via Email or WhatsApp. No fluff.
          </p>
        </div>

        {/* Main */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[380px_1fr]">
          {/* Left panel */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/70">Quick actions</p>
              <span className="text-xs text-white/40">v1.0</span>
            </div>

            <div className="mt-5 grid gap-3">
              <button
                onClick={() => copy(EMAIL, "email")}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-left hover:border-white/25 hover:bg-black/40 transition"
              >
                <div>
                  <p className="text-sm text-white/70">Email</p>
                  <p className="mt-1 font-medium">{EMAIL}</p>
                </div>
                <span className="text-xs text-white/50 group-hover:text-white/70">
                  {copied === "email" ? "Copied" : "Copy"}
                </span>
              </button>

              <button
                onClick={() => copy(`+${WHATSAPP}`, "wa")}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-left hover:border-white/25 hover:bg-black/40 transition"
              >
                <div>
                  <p className="text-sm text-white/70">WhatsApp</p>
                  <p className="mt-1 font-medium">+{WHATSAPP}</p>
                </div>
                <span className="text-xs text-white/50 group-hover:text-white/70">
                  {copied === "wa" ? "Copied" : "Copy"}
                </span>
              </button>

              <Link
                href={GITHUB}
                target="_blank"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-4 hover:border-white/25 hover:bg-black/40 transition"
              >
                <div>
                  <p className="text-sm text-white/70">GitHub</p>
                  <p className="mt-1 font-medium">Open profile</p>
                </div>
                <span className="text-xs text-white/50">→</span>
              </Link>

              <Link
                href={LINKEDIN}
                target="_blank"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-4 hover:border-white/25 hover:bg-black/40 transition"
              >
                <div>
                  <p className="text-sm text-white/70">LinkedIn</p>
                  <p className="mt-1 font-medium">Open profile</p>
                </div>
                <span className="text-xs text-white/50">→</span>
              </Link>

              <Link
                href="/Mahesh_CV.pdf"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-4 hover:border-white/25 hover:bg-black/40 transition"
              >
                <div>
                  <p className="text-sm text-white/70">Resume</p>
                  <p className="mt-1 font-medium">Download</p>
                </div>
                <span className="text-xs text-white/50">↓</span>
              </Link>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm text-white/70">What I reply to</p>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                  Clear scope and timeline
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                  Budget or salary range
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                  Links or references
                </li>
              </ul>
            </div>
          </div>

          {/* Right panel */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-white/70">Compose message</p>
              <div className="flex flex-wrap gap-2">
                {TOPICS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTopic(t)}
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs transition",
                      t === topic
                        ? "border-white/30 bg-white/10 text-white"
                        : "border-white/10 bg-black/20 text-white/70 hover:border-white/25 hover:text-white"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs text-white/60">Your name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your name"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/25"
                />
              </div>

              <div>
                <label className="text-xs text-white/60">Your email</label>
                <input
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="you@email.com"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/25"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-xs text-white/60">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Explain scope, timeline, budget, and links. Minimum 10 characters."
                  rows={6}
                  className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/25"
                />
              </div>
            </div>

            {/* Live preview */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs text-white/60">Preview</p>
              <p className="mt-2 text-sm text-white/80">
                <span className="text-white/60">Subject:</span> {subject}
              </p>
              <div className="mt-3 whitespace-pre-wrap text-sm text-white/70">
                {message.trim()
                  ? message
                  : "Write a real message. If you send one line like 'hi', you will be ignored."}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={mailtoHref}
                className={cn(
                  "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition",
                  canSend
                    ? "bg-[#9B59B6] text-black hover:bg-[#FFB800]"
                    : "bg-white/10 text-white/40 cursor-not-allowed"
                )}
                aria-disabled={!canSend}
                onClick={(e) => {
                  if (!canSend) e.preventDefault();
                }}
              >
                Send Email
              </a>

              <a
                href={waHref}
                target="_blank"
                className={cn(
                  "inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium transition",
                  canSend
                    ? "border-white/15 bg-white/5 text-white/90 hover:bg-white/10"
                    : "border-white/10 bg-black/20 text-white/40 cursor-not-allowed"
                )}
                aria-disabled={!canSend}
                onClick={(e) => {
                  
                }}
              >
                WhatsApp
              </a>

              <span className="ml-auto inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                {canSend ? "Ready to send" : "Enter valid email and message"}
              </span>
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes float {
          0% { transform: translate(-50%, 0px); }
          50% { transform: translate(-50%, 22px); }
          100% { transform: translate(-50%, 0px); }
        }
        @keyframes float2 {
          0% { transform: translate(0px, 0px); }
          50% { transform: translate(-18px, -20px); }
          100% { transform: translate(0px, 0px); }
        }
      `}</style>
    </section>
  );
}