"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type HeroProps = {
  name?: string;
  role?: string;
  location?: string;
  summary?: string;
};

const SKILLS = [
  "Next.js",
  "React",
  "JavaScript (Basic)",
  "Django",
  "API Design",
  "Performance",
  "SEO",
  "React Native",
];

function cn(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

function TypingLine({ text, speed = 22 }: { text: string; speed?: number }) {
  const [out, setOut] = useState("");

  useEffect(() => {
    let i = 0;
    const id = window.setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, speed);

    return () => window.clearInterval(id);
  }, [text, speed]);

  return (
    <span className="whitespace-pre-wrap">
      {out}
      <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-white/60 align-middle" />
    </span>
  );
}

export default function Hero({
  name = "Mahesh",
  role = "Developer",
  location = "India",
  summary = "I build fast web products with clean UI, predictable code, and real performance. No bloated libraries, no messy hacks.",
}: HeroProps) {
  const commands = useMemo(
    () => [
      `whoami`,
      `role --current`,
      `stack --production`,
      `projects --featured`,
      `contact --ready`,
    ],
    []
  );

  const [cmdIndex, setCmdIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCmdIndex((p) => (p + 1) % commands.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, [commands.length]);

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background grid + glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-70 bg-[conic-gradient(from_180deg,#00d5ff,#a855f7,#ffb700,#34d399,#00d5ff)]" />
        <div className="absolute -bottom-56 -right-56 h-[560px] w-[560px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_60%)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
        {/* Left: message */}
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for freelance and full time
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            {name}
            <span className="block text-white/70">{role}</span>
          </h1>

          <p className="mt-4 max-w-xl text-white/70">{summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              View Projects
              <span className="ml-2">→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              Contact
            </Link>

            <div className="ml-auto hidden items-center gap-2 text-xs text-white/55 md:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {location}
            </div>
          </div>
        </div>

        {/* Right: console card */}
        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
            {/* window top bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-2 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-xs text-white/50">mahesh.dev console</span>
              <span className="text-xs text-white/40">secure</span>
            </div>

            {/* console body */}
            <div className="px-3 py-4 font-mono text-sm">
              <div className="text-white/60">booting profile...</div>

              <div className="mt-3 rounded-2xl border border-white/10 bg-black/40 p-4">
                <div className="text-white/70">
                  <span className="text-emerald-300">mahesh</span>
                  <span className="text-white/40">@</span>
                  <span className="text-cyan-300">portfolio</span>
                  <span className="text-white/40">:</span>
                  <span className="text-purple-300">~</span>
                  <span className="text-white/40">$</span>{" "}
                  <TypingLine text={commands[cmdIndex]} />
                </div>

                <div className="mt-4 space-y-2 text-white/70">
                  <div>
                    <span className="text-white/45">Name:</span> {name}
                  </div>
                  <div>
                    <span className="text-white/45">Role:</span> {role}
                  </div>
                  <div>
                    <span className="text-white/45">Focus:</span> UI performance, clean architecture
                  </div>
                  <div>
                    <span className="text-white/45">Delivery:</span> ship, measure, improve
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-xs text-white/55">Response time</p>
                    <p className="mt-1 text-lg text-white">fast</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-xs text-white/55">Code quality</p>
                    <p className="mt-1 text-lg text-white">strict</p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs text-white/45">
                Tip: Use the contact page for real scope, budget, timeline.
              </p>
            </div>
          </div>

          {/* edge highlight */}
          <div aria-hidden="true" className="pointer-events-none absolute -inset-0.5 rounded-3xl opacity-40 blur-2xl bg-[conic-gradient(from_180deg,#00d5ff,#a855f7,#ffb700,#34d399,#00d5ff)]" />
        </div>
      </div>
    </section>
  );
}