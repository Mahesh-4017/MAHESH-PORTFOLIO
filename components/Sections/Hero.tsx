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

function TypingLine({ text, speed = 22 }: { text: string; speed?: number }) {
  const [out, setOut] = useState("");

  useEffect(() => {
    let i = 0;
    setOut("");

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
      "whoami",
      "role --current",
      "stack --production",
      "projects --featured",
      "contact --ready",
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
      {/* MOBILE BACKGROUND */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 md:hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_38%),radial-gradient(circle_at_bottom,rgba(0,213,255,0.12),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:26px_26px]" />
      </div>

      {/* DESKTOP BACKGROUND */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[conic-gradient(from_180deg,#00d5ff,#a855f7,#ffb700,#34d399,#00d5ff)] opacity-70 blur-3xl" />
        <div className="absolute -bottom-56 -right-56 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_60%)] opacity-40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 sm:py-14 md:gap-10 md:px-6 md:py-20 lg:grid-cols-2">
        {/* LEFT */}
        <div className="order-1 flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/75 backdrop-blur sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for freelance and full time
          </div>

          <h1 className="mt-5 text-3xl font-semibold leading-[1.05] sm:text-4xl md:mt-6 md:text-5xl lg:text-6xl">
            {name}
            <span className="mt-1 block text-white/70">{role}</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
            {summary}
          </p>

          <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
            {SKILLS.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/80 sm:text-xs"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 md:mt-9">
            <Link
              href="/projects"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              View Projects
              <span className="ml-2">→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              Contact
            </Link>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs text-white/55 md:hidden">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {location}
          </div>
        </div>

        {/* RIGHT */}
        <div className="order-2 relative">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-3 backdrop-blur sm:p-4 md:rounded-3xl">
            {/* top bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-1 pb-3 sm:px-2">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-[10px] text-white/50 sm:text-xs">mahesh.dev console</span>
              <span className="text-[10px] text-white/40 sm:text-xs">secure</span>
            </div>

            {/* body */}
            <div className="px-1 py-4 font-mono text-xs sm:px-3 sm:text-sm">
              <div className="text-white/60">booting profile...</div>

              <div className="mt-3 rounded-2xl border border-white/10 bg-black/40 p-3 sm:p-4">
                <div className="overflow-hidden text-white/70 break-words">
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

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[11px] text-white/55 sm:text-xs">Response time</p>
                    <p className="mt-1 text-base text-white sm:text-lg">fast</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[11px] text-white/55 sm:text-xs">Code quality</p>
                    <p className="mt-1 text-base text-white sm:text-lg">strict</p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-[11px] leading-5 text-white/45 sm:text-xs">
                Tip: Use the contact page for real scope, budget, timeline.
              </p>
            </div>
          </div>

          {/* desktop glow only */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-0.5 hidden rounded-3xl bg-[conic-gradient(from_180deg,#00d5ff,#a855f7,#ffb700,#34d399,#00d5ff)] opacity-40 blur-2xl md:block"
          />
        </div>
      </div>
    </section>
  );
}