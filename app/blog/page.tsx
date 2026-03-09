"use client";

import React from "react";
import Link from "next/link";
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
  role: "Full Stack Developer",
};

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

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
      {children}
    </span>
  );
}

function BlogCard({ blog, featured = false }: { blog: Blog; featured?: boolean }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06] ${
        featured ? "p-6 sm:p-8" : "p-5"
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(60% 60% at 20% 20%, rgba(168,85,247,0.18), transparent 60%), radial-gradient(50% 50% at 80% 80%, rgba(0,213,255,0.12), transparent 60%)",
        }}
      />

      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <Badge>{blog.category}</Badge>
          <span className="text-xs text-white/45">{blog.readTime}</span>
        </div>

        <h3
          className={`mt-4 font-semibold leading-snug text-white ${
            featured ? "text-2xl sm:text-3xl" : "text-lg"
          }`}
        >
          {blog.title}
        </h3>

        <p className={`mt-3 text-white/60 ${featured ? "max-w-2xl text-sm sm:text-base" : "text-sm"}`}>
          {featured
            ? "Practical writing focused on building real products with cleaner architecture, better performance, and less useless complexity."
            : "Useful notes, practical patterns, and direct implementation ideas for real projects."}
        </p>

        <div className="mt-6 flex items-center justify-between text-sm text-white/45">
          <span>{blog.date}</span>
          <Link href={`/blog/${blog.id}`} className="text-white/80 transition hover:text-white">
            Read article
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Page() {
  const reduced = useReducedMotion();
  const featured = BLOGS[0];
  const rest = BLOGS.slice(1);

  return (
    <main className="overflow-x-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,213,255,0.10),transparent_30%)]" />
          <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={reduced ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              Articles on React, Next.js, Backend, UI
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
              Clear writing about building fast products, cleaner interfaces, scalable frontend systems, backend structure, and development choices that do not collapse in real work.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "Next.js", "Django", "APIs", "Performance", "UI Systems"].map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm text-white/45">Featured article</p>
              <h2 className="mt-1 text-2xl font-semibold sm:text-3xl">Start here</h2>
            </div>
            <Link href="/blog" className="text-sm text-white/60 transition hover:text-white">
              View all posts
            </Link>
          </div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={reduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <BlogCard blog={featured} featured />
          </motion.div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mb-8">
            <p className="text-sm text-white/45">Recent writing</p>
            <h2 className="mt-1 text-2xl font-semibold sm:text-3xl">Latest posts</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {rest.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={reduced ? false : { opacity: 0, y: 24 }}
                whileInView={reduced ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <BlogCard blog={blog} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
            <p className="text-sm text-white/45">Still scrolling?</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
              Read the work or build something serious
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/65 sm:text-base">
              Explore projects, read more articles, or get in touch for actual product work.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}