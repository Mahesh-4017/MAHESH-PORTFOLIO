"use client";

import Container from "@/components/layout/Container";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Rocket, ShieldCheck } from "lucide-react";

const HIGHLIGHTS = [
  {
    title: "Fast UI",
    desc: "Core Web Vitals focused. No heavy junk shipped to the browser.",
    icon: Rocket,
  },
  {
    title: "Clean Code",
    desc: "Predictable components, readable structure, scalable patterns.",
    icon: Code2,
  },
  {
    title: "SEO Ready",
    desc: "Correct headings and metadata with proper content structure.",
    icon: ShieldCheck,
  },
  {
    title: "Production Stack",
    desc: "Next.js, React, Node, MongoDB. Real builds that survive deployment.",
    icon: Sparkles,
  },
];

const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "MongoDB",
  "Express",
  "REST APIs",
  "Auth",
  "Stripe",
  "Git",
  "Docker",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerWrap: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function HomePage() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="border-b border-white/10">
        <Container className="py-24">
          <motion.div
            variants={staggerWrap}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-3xl text-center"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-semibold md:text-6xl"
            >
              Building fast modern
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent">
                web products
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-white/70"
            >
              Portfolio sites, SaaS dashboards, landing pages and full stack
              applications built with performance in mind.
            </motion.p>

            
          </motion.div>
        </Container>
      </section>

      {/* HIGHLIGHTS */}
      <section>
        <Container className="py-20">
          <motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2"
          >
            {HIGHLIGHTS.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Icon size={18} />
                  </div>

                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="mt-2 text-white/70">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* SKILLS */}
      <section className="border-y border-white/10">
        <Container className="py-16">
          <h3 className="text-2xl font-semibold">Stack</h3>
          <p className="mt-2 text-white/70">
            Tools used to build real production applications.
          </p>

          <motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {SKILLS.map((skill) => (
              <motion.span
                key={skill}
                variants={fadeUp}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section>
        <Container className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.05] p-12 text-center"
          >
            <h3 className="text-3xl font-semibold">
              Need a site or product built?
            </h3>

            <p className="mt-3 text-white/70">
              Portfolio, landing page, admin dashboard or full application.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/projects"
                className="flex items-center gap-2 rounded-xl bg-purple-500 px-6 py-3 text-sm font-semibold text-black hover:bg-yellow-400 transition"
              >
                View Projects
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm hover:bg-white/10 transition"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <Container className="py-10">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Mahesh. Built with Next.js.
          </p>
        </Container>
      </footer>

    </main>
  );
}