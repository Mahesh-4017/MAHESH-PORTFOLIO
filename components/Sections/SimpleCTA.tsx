"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Compass } from "lucide-react";

export default function SimpleCTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-md">
      {/* Glow backgrounds */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 -top-20 h-44 w-44 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />
        <div className="absolute -right-20 -bottom-20 h-44 w-44 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent md:text-4xl">
          Interested in working together?
        </h3>

        <p className="mt-4 text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
          I am available for freelance roles, full-time contracts, and collaborative development. Whether you need a landing page, complex SaaS dashboard, or full-stack integrations, let's connect.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-black hover:bg-white/90 hover:scale-[1.02] transition"
          >
            Explore Projects
            <Compass size={14} />
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/10 hover:border-white/25 hover:scale-[1.02] transition"
          >
            Send Inquiry
            <ArrowRight size={14} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
