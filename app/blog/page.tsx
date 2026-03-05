"use client";

import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Blog = {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
};

export const site = {
  name: "Mahesh",
  role: "Full Stack Developer"
};

type BadgeProps = {
  children: React.ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="px-3 py-1 text-xs rounded-full bg-purple-600/20 border border-purple-500/40 text-purple-300">
      {children}
    </span>
  );
}

const BLOGS: Blog[] = [
  { id: "1", title: "React Patterns That Scale", category: "React", date: "2026-02-20", readTime: "6 min" },
  { id: "2", title: "Next.js App Router Practical Guide", category: "Next.js", date: "2026-02-14", readTime: "8 min" },
  { id: "3", title: "Tailwind UI Systems Without Mess", category: "UI", date: "2026-02-05", readTime: "5 min" },
  { id: "4", title: "API Pagination That Won’t Die", category: "Backend", date: "2026-01-25", readTime: "7 min" },
  { id: "5", title: "MongoDB Indexing for Real Apps", category: "DB", date: "2026-01-10", readTime: "9 min" },
  { id: "6", title: "Django + Next.js Integration", category: "Django", date: "2025-12-28", readTime: "10 min" },
  { id: "7", title: "Git Workflow for Solo and Teams", category: "Git", date: "2025-12-10", readTime: "4 min" },
  { id: "8", title: "React Native UI That Feels Premium", category: "RN", date: "2025-11-29", readTime: "6 min" },
  { id: "9", title: "Performance Budget Checklist", category: "Perf", date: "2025-11-12", readTime: "5 min" },
];

function CloudLayer({
  className,
  duration,
  reverse,
}: {
  className: string;
  duration: number;
  reverse?: boolean;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={className}
      initial={{ x: reverse ? "6%" : "-6%", opacity: 0.0 }}
      animate={{ x: reverse ? "-6%" : "6%", opacity: 1 }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      {/* simple SVG clouds strip */}
      <svg viewBox="0 0 1200 220" className="h-full w-full">
        <g fill="white">
          <path d="M130 160c-25 0-45-17-48-40-26-3-47-25-47-53 0-30 24-54 54-54 9 0 18 2 25 6 10-21 31-36 56-36 31 0 57 22 63 52 23 3 41 23 41 47 0 27-22 49-49 49H130z" opacity="0.55" />
          <path d="M520 168c-30 0-55-21-58-50-31-4-55-31-55-66 0-38 31-69 69-69 12 0 23 3 33 8 13-27 40-46 71-46 40 0 73 28 81 67 29 4 51 30 51 62 0 35-29 64-64 64H520z" opacity="0.35" />
          <path d="M900 162c-24 0-44-16-47-38-24-3-43-23-43-50 0-28 23-51 51-51 8 0 17 2 24 5 10-20 30-34 54-34 29 0 53 21 59 48 21 3 38 21 38 44 0 25-21 46-46 46H900z" opacity="0.50" />
        </g>
      </svg>
    </motion.div>
  );
}

function SectionShell({
  children,
  id,
  label,
}: {
  children: React.ReactNode;
  id: string;
  label: string;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className="min-h-[100dvh] relative flex items-center"
    >
      {children}
    </section>
  );
}

function BlogSquare({ b }: { b: Blog }) {
  return (
    <div className="group relative h-[180px] w-[180px] rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur transition hover:bg-white/[0.07]">
      <div className="text-xs text-white/60">{b.category}</div>
      <div className="mt-2 text-base font-semibold leading-snug text-white">
        {b.title}
      </div>
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/50">
        <span>{b.date}</span>
        <span>{b.readTime}</span>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(60% 60% at 30% 25%, rgba(168,85,247,0.22), transparent 60%), radial-gradient(55% 55% at 70% 75%, rgba(0,213,255,0.18), transparent 60%)",
        }}
      />
    </div>
  );
}

export default function Page() {
  const reduced = useReducedMotion();

  const topRow = useMemo(() => BLOGS.slice(0, 3), []);
  const midRow = useMemo(() => BLOGS.slice(3, 6), []);
  const gridWall = useMemo(() => BLOGS, []);

  return (
<main className="bg-black text-white overflow-x-hidden no-scrollbar">
      <div className="">
        {/* 1. CLOUD INTRO */}
        <SectionShell id="intro" label="Blog intro">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.18),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,213,255,0.12),transparent_60%)]" />
            <CloudLayer className="absolute top-14 left-0 h-44 w-[140%] opacity-[0.18]" duration={18} />
            <CloudLayer className="absolute top-44 left-0 h-40 w-[150%] opacity-[0.12]" duration={26} reverse />
            <CloudLayer className="absolute top-72 left-0 h-36 w-[160%] opacity-[0.08]" duration={34} />
          </div>

          <div className="relative mx-auto w-full max-w-6xl px-6">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 18 }}
              animate={reduced ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
                Writing about React, Next.js, UI, Backend
              </div>

              <h1 className="mt-6 text-6xl font-semibold tracking-tight md:text-7xl">
                Blog by{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  {site.name}
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-white/70">
                Scroll to move through sections. Each screen is one step. No clutter.
              </p>

              <motion.div
                aria-hidden="true"
                animate={reduced ? {} : { y: [0, 12, 0] }}
                transition={reduced ? {} : { repeat: Infinity, duration: 1.6 }}
                className="mt-12 text-sm text-white/50"
              >
                Scroll ↓
              </motion.div>
            </motion.div>
          </div>
        </SectionShell>

        {/* 2. INNER SLIDE REVEAL */}
        <SectionShell id="reveal" label="Slide reveal section">
          <div className="relative mx-auto w-full max-w-6xl px-6">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <motion.div
                initial={reduced ? false : { opacity: 0, x: -40 }}
                whileInView={reduced ? {} : { opacity: 1, x: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-4xl font-semibold">
                  Stories, not noise
                </h2>
                <p className="mt-4 text-white/70">
                  You asked for sections that feel like slides. This is a proper scroll story.
                  Next section shows rows appearing from opposite directions.
                </p>
              </motion.div>

              <motion.div
                initial={reduced ? false : { opacity: 0, x: 40, scale: 0.98 }}
                whileInView={reduced ? {} : { opacity: 1, x: 0, scale: 1 }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.7 }}
                className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
              >
                <div className="text-xs text-white/60">Featured</div>
                <div className="mt-2 text-xl font-semibold">Latest posts</div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["React", "Next.js", "Tailwind", "Django", "GitHub"].map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-6 rounded-[32px] blur-2xl opacity-40"
                  style={{
                    background:
                      "radial-gradient(55% 55% at 30% 25%, rgba(168,85,247,0.22), transparent 60%), radial-gradient(55% 55% at 70% 75%, rgba(0,213,255,0.16), transparent 60%)",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </SectionShell>

        {/* 3. UP DOWN ROWS */}
        <SectionShell id="rows" label="Rows reveal section">
          <div className="relative mx-auto w-full max-w-6xl px-6">
            <h2 className="text-4xl font-semibold">Drop in rows</h2>
            <p className="mt-3 text-white/70 max-w-2xl">
              Top row comes down. Bottom row comes up. Clean and readable.
            </p>

            <div className="mt-10 space-y-8">
              <motion.div
                initial={reduced ? false : { opacity: 0, y: -40 }}
                whileInView={reduced ? {} : { opacity: 1, y: 0 }}
                viewport={{ amount: 0.4 }}
                transition={{ duration: 0.7 }}
                className="flex flex-wrap gap-6"
              >
                {topRow.map((b) => (
                  <BlogSquare key={b.id} b={b} />
                ))}
              </motion.div>

              <motion.div
                initial={reduced ? false : { opacity: 0, y: 40 }}
                whileInView={reduced ? {} : { opacity: 1, y: 0 }}
                viewport={{ amount: 0.4 }}
                transition={{ duration: 0.7 }}
                className="flex flex-wrap gap-6 md:justify-end"
              >
                {midRow.map((b) => (
                  <BlogSquare key={b.id} b={b} />
                ))}
              </motion.div>
            </div>
          </div>
        </SectionShell>

        {/* 4. 180 DEG GRID WALL */}
        <SectionShell id="grid" label="Grid wall section">
          <div className="relative mx-auto w-full max-w-6xl px-6">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl font-semibold">All posts</h2>
                <p className="mt-3 text-white/70 max-w-2xl">
                  This is your 180 degree grid. It flips into place with real perspective.
                </p>
              </div>
              <a
                href="#intro"
                className="text-sm text-white/60 hover:text-white"
                aria-label="Back to top"
              >
                Back to top
              </a>
            </div>

            <motion.div
              initial={reduced ? false : { opacity: 0, rotateY: 180, scale: 0.92 }}
              whileInView={reduced ? {} : { opacity: 1, rotateY: 0, scale: 1 }}
              viewport={{ amount: 0.35 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              style={{ transformStyle: "preserve-3d", perspective: 1200 }}
              className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4"
            >
              {gridWall.map((b) => (
                <motion.div
                  key={b.id}
                  whileHover={reduced ? {} : { y: -6, rotateX: 6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <BlogSquare b={b} />
                </motion.div>
              ))}
            </motion.div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-10 -bottom-20 h-64 blur-3xl opacity-30"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(168,85,247,0.28), transparent 60%), radial-gradient(50% 50% at 65% 50%, rgba(0,213,255,0.18), transparent 60%)",
              }}
            />
          </div>
        </SectionShell>
      </div>
    </main>
  );
}