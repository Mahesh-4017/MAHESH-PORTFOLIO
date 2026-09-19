"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

type Topic = "Freelance" | "Full-time" | "Collab" | "Bug Fix" | "Consulting";

const TOPICS: Topic[] = [
  "Freelance",
  "Full-time",
  "Collab",
  "Bug Fix",
  "Consulting",
];

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactPage() {
  const EMAIL = "sain903481@email.com";
  const WHATSAPP = "919034850987";
  const GITHUB = "https://github.com/MAHESH-4017";
  const LINKEDIN = "https://www.linkedin.com/in/mahesh-sain/";

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

    return `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [EMAIL, subject, topic, name, from, message]);

  const waHref = useMemo(() => {
    const text = [
      "Hi Mahesh, I'm contacting you.",
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

      window.setTimeout(() => {
        setCopied(null);
      }, 1500);
    } catch {
      // Clipboard access can fail in some browsers.
    }
  }

  const canSend =
    from.trim().includes("@") && message.trim().length >= 10;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />

        <div className="absolute left-1/2 top-[-280px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-3xl" />

        <div className="absolute right-[-180px] top-[35%] h-[420px] w-[420px] rounded-full bg-emerald-500/[0.035] blur-3xl" />

        <div className="absolute bottom-[-200px] left-[-150px] h-[450px] w-[450px] rounded-full bg-blue-500/[0.025] blur-3xl" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <Container className="relative py-20 md:py-28">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/65 backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            Available for new opportunities
          </div>

          <h1 className="mt-7 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
            Let&apos;s build
            <span className="block text-white/45">
              something great.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            Have a project, job opportunity, collaboration, or technical
            problem? Send me a message and let&apos;s talk about it.
          </p>
        </div>

        {/* Main grid */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[360px_1fr]">
          {/* LEFT */}
          <aside className="space-y-6">
            {/* Contact card */}
            <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white">
                    Contact details
                  </p>
                  <p className="mt-1 text-xs text-white/40">
                    Direct ways to reach me
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2">
                  <Sparkles className="h-4 w-4 text-white/60" />
                </div>
              </div>

              <div className="space-y-3">
                {/* Email */}
                <button
                  type="button"
                  onClick={() => copy(EMAIL, "email")}
                  className="group flex w-full items-center gap-4 rounded-2xl border border-white/8 bg-black/20 p-4 text-left transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                    <Mail className="h-4 w-4 text-white/70" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] uppercase tracking-wider text-white/35">
                      Email
                    </p>

                    <p className="mt-1 truncate text-sm text-white/85">
                      {EMAIL}
                    </p>
                  </div>

                  <div className="text-white/35 transition group-hover:text-white/70">
                    {copied === "email" ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </div>
                </button>

                {/* WhatsApp */}
                <button
                  type="button"
                  onClick={() => copy(`+${WHATSAPP}`, "wa")}
                  className="group flex w-full items-center gap-4 rounded-2xl border border-white/8 bg-black/20 p-4 text-left transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                    <MessageCircle className="h-4 w-4 text-white/70" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] uppercase tracking-wider text-white/35">
                      WhatsApp
                    </p>

                    <p className="mt-1 text-sm text-white/85">
                      +{WHATSAPP}
                    </p>
                  </div>

                  <div className="text-white/35 transition group-hover:text-white/70">
                    {copied === "wa" ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </div>
                </button>

                {/* GitHub */}
                <Link
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-black/20 p-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                    <Github className="h-4 w-4 text-white/70" />
                  </div>

                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-wider text-white/35">
                      GitHub
                    </p>
                    <p className="mt-1 text-sm text-white/85">
                      View my projects
                    </p>
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-white/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70" />
                </Link>

                {/* LinkedIn */}
                <Link
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-black/20 p-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                    <Linkedin className="h-4 w-4 text-white/70" />
                  </div>

                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-wider text-white/35">
                      LinkedIn
                    </p>
                    <p className="mt-1 text-sm text-white/85">
                      Connect with me
                    </p>
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-white/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70" />
                </Link>

                {/* Resume */}
                <Link
                  href="/Mahesh_CV.pdf"
                  className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-black/20 p-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                    <Download className="h-4 w-4 text-white/70" />
                  </div>

                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-wider text-white/35">
                      Resume
                    </p>
                    <p className="mt-1 text-sm text-white/85">
                      Download CV
                    </p>
                  </div>

                  <Download className="h-4 w-4 text-white/30 transition group-hover:text-white/70" />
                </Link>
              </div>
            </div>

            {/* Response card */}
            <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10">
                  <Check className="h-4 w-4 text-emerald-400" />
                </div>

                <div>
                  <p className="text-sm font-medium">
                    Good messages get good replies
                  </p>
                  <p className="mt-1 text-xs text-white/40">
                    Include the important details.
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3 text-sm text-white/55">
                {[
                  "Project scope or role",
                  "Timeline and requirements",
                  "Budget or salary range",
                  "Relevant links or references",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* RIGHT FORM */}
          <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-7">
            {/* Form heading */}
            <div className="flex flex-col gap-4 border-b border-white/8 pb-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-lg font-medium">
                  Start a conversation
                </p>

                <p className="mt-1 text-sm text-white/40">
                  Tell me what you&apos;re working on.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-white/40">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Typically replies within 24h
              </div>
            </div>

            {/* Topics */}
            <div className="mt-6">
              <label className="text-xs font-medium uppercase tracking-wider text-white/40">
                What are you looking for?
              </label>

              <div className="mt-3 flex flex-wrap gap-2">
                {TOPICS.map((item) => {
                  const active = item === topic;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setTopic(item)}
                      className={cn(
                        "rounded-full border px-4 py-2 text-xs font-medium transition-all duration-200",
                        active
                          ? "border-white/20 bg-white text-black"
                          : "border-white/10 bg-white/[0.025] text-white/55 hover:border-white/20 hover:text-white"
                      )}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Inputs */}
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-xs font-medium text-white/50"
                >
                  Your name
                </label>

                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="mt-2 h-12 w-full rounded-2xl border border-white/10 bg-black/25 px-4 text-sm text-white outline-none placeholder:text-white/20 transition-all focus:border-white/25 focus:bg-white/[0.04] focus:ring-4 focus:ring-white/[0.03]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-white/50"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-2 h-12 w-full rounded-2xl border border-white/10 bg-black/25 px-4 text-sm text-white outline-none placeholder:text-white/20 transition-all focus:border-white/25 focus:bg-white/[0.04] focus:ring-4 focus:ring-white/[0.03]"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-white/50"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project, role, requirements, timeline, or anything you'd like to discuss..."
                  rows={7}
                  className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-sm leading-6 text-white outline-none placeholder:text-white/20 transition-all focus:border-white/25 focus:bg-white/[0.04] focus:ring-4 focus:ring-white/[0.03]"
                />

                <div className="mt-2 flex justify-between text-[11px] text-white/25">
                  <span>Minimum 10 characters</span>
                  <span>{message.length} characters</span>
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="mt-7 overflow-hidden rounded-2xl border border-white/8 bg-black/20">
              <div className="border-b border-white/8 px-4 py-3">
                <p className="text-[11px] font-medium uppercase tracking-wider text-white/35">
                  Message preview
                </p>
              </div>

              <div className="p-4">
                <div className="flex flex-wrap gap-x-2 text-sm">
                  <span className="text-white/35">Subject</span>
                  <span className="text-white/75">{subject}</span>
                </div>

                <div className="mt-4 min-h-[70px] whitespace-pre-wrap text-sm leading-6 text-white/50">
                  {message.trim()
                    ? message
                    : "Your message preview will appear here..."}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={mailtoHref}
                aria-disabled={!canSend}
                onClick={(e) => {
                  if (!canSend) e.preventDefault();
                }}
                className={cn(
                  "inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl px-5 text-sm font-medium transition-all duration-300",
                  canSend
                    ? "bg-white text-black hover:bg-white/90 hover:shadow-lg hover:shadow-white/10"
                    : "cursor-not-allowed bg-white/10 text-white/25"
                )}
              >
                <Send className="h-4 w-4" />
                Send Email
              </a>

              <a
                href={canSend ? waHref : undefined}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={!canSend}
                className={cn(
                  "inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl border px-5 text-sm font-medium transition-all duration-300",
                  canSend
                    ? "border-white/10 bg-white/[0.04] text-white hover:border-white/20 hover:bg-white/[0.08]"
                    : "cursor-not-allowed border-white/8 bg-white/[0.02] text-white/25"
                )}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>

            {/* Status */}
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/30">
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  canSend ? "bg-emerald-400" : "bg-white/20"
                )}
              />

              {canSend
                ? "Your message is ready to send."
                : "Enter a valid email and message to continue."}
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 text-xs text-white/25 sm:flex-row">
          <p>Mahesh Sain · Full Stack Developer</p>

          <div className="flex items-center gap-4">
            <Link
              href="/projects"
              className="transition hover:text-white/60"
            >
              View Projects
            </Link>

            <span className="h-1 w-1 rounded-full bg-white/20" />

            <Link
              href="/about"
              className="transition hover:text-white/60"
            >
              About Me
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}