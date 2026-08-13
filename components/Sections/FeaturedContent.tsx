"use client";

import Link from "next/link";
import { ArrowRight, User2, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedContent() {
  return (
    <section className="relative overflow-hidden py-12">
      {/* Background ambient glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="absolute top-1/2 left-1/4 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-purple-500/5 blur-[80px]" />
        <div className="absolute top-1/2 right-1/4 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-pink-500/5 blur-[80px]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* About Card */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-8 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.05] hover:shadow-[0_0_40px_-15px_rgba(168,85,247,0.25)]"
        >
          {/* Top border glow line on hover */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
              <User2 className="h-6 w-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-purple-400/80">My Story</span>
              <h3 className="text-xl font-bold text-white mt-0.5">About Me</h3>
            </div>
          </div>
          
          <p className="mt-5 text-sm leading-relaxed text-white/60">
            Discover my background, code craftsmanship principles, race engineering analysis interests, and my professional journey. Learn how I apply high-performance physics tuning models to software optimization problems.
          </p>
          
          <div className="mt-8 flex items-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-500/10 px-4 py-2.5 text-xs font-semibold text-purple-300 border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500 transition-all duration-300"
            >
              Read My Journey
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Blog Card */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-8 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/30 hover:bg-white/[0.05] hover:shadow-[0_0_40px_-15px_rgba(236,72,153,0.25)]"
        >
          {/* Top border glow line on hover */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-pink-400/80">Tech & Race Logs</span>
              <h3 className="text-xl font-bold text-white mt-0.5">Latest Articles</h3>
            </div>
          </div>
          
          <p className="mt-5 text-sm leading-relaxed text-white/60">
            Explore my writings covering modern web engineering patterns, Next.js performance tips, CSS wizardry, and racing telemetry breakdowns. I write for developers who value speed, clean abstractions, and detailed statistics.
          </p>
          
          <div className="mt-8 flex items-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-xl bg-pink-500/10 px-4 py-2.5 text-xs font-semibold text-pink-300 border border-pink-500/20 group-hover:bg-pink-500 group-hover:text-white group-hover:border-pink-500 transition-all duration-300"
            >
              Browse Articles
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
