"use client";

import Container from "@/components/layout/Container";
import { site } from "@/content/site";
import { Badge } from "@/components/ui/Badge";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";

type Section = {
  kicker: string;
  title: string;
  desc: string;
  bullets?: string[];
  badges?: string[];
};

const SECTIONS: Section[] = [
  {
    kicker: "01",
    title: "Who I am",
    desc: `I am ${site.name}, a ${site.role}. I build responsive interfaces with React and Next.js.`,
    badges: ["React", "Next.js", "Tailwind", "JavaScript"],
  },
  {
    kicker: "02",
    title: "What I build",
    desc:
      "Clean components, fast pages, simple UX. I care about real performance, not fake polish.",
    bullets: [
      "Design system friendly UI",
      "Reusable components",
      "SEO ready pages",
      "Performance first",
    ],
  },
  {
    kicker: "03",
    title: "How I work",
    desc:
      "I keep code readable, predictable, and scalable. No messy hacks that break later.",
    bullets: [
      "Consistent patterns",
      "Clear naming",
      "Simple state flows",
      "Ship, measure, improve",
    ],
  },
  {
    kicker: "04",
    title: "My stack",
    desc: "Frontend and backend tools I use for production apps.",
    badges: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind",
      "React",
      "React Native",
      "Next.js",
      "Git",
      "GitHub",
      "Django",
    ],
  },
  {
    kicker: "05",
    title: "What you get",
    desc:
      "A site that feels premium, loads fast, and stays maintainable when features grow.",
    bullets: [
      "Pixel clean UI",
      "Mobile first layout",
      "Best practice structure",
      "Future proof components",
    ],
  },
  {
    kicker: "06",
    title: "Let’s build",
    desc:
      "If you want a portfolio, landing page, admin panel, or full app, I can build it cleanly.",
    bullets: ["Freelance", "Full time", "Remote", "Project based"],
  },
];

function SnakeBackground({
  progress,
  reduced,
}: {
  progress: MotionValue<number>;
  reduced: boolean;
}) {
  const dashOffset = useTransform(progress, [0, 1], reduced ? [0, 0] : [1400, 0]);

  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:64px_64px]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="snakeGrad"
            x1="0"
            y1="0"
            x2="1200"
            y2="900"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#00D5FF" stopOpacity="0.75" />
            <stop offset="30%" stopColor="#A855F7" stopOpacity="0.75" />
            <stop offset="60%" stopColor="#FF4ECD" stopOpacity="0.75" />
            <stop offset="85%" stopColor="#FFB700" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#34D399" stopOpacity="0.75" />
          </linearGradient>
        </defs>

        <motion.path
          d="M 80 120
             C 260 40, 360 220, 520 160
             S 780 120, 900 240
             S 1040 420, 820 470
             S 520 540, 640 700
             S 860 880, 1120 760"
          fill="none"
          stroke="url(#snakeGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1400"
          style={{ strokeDashoffset: dashOffset }}
          opacity="0.55"
        />
      </svg>
    </div>
  );
}

function RainbowOrb({
  progress,
  reduced,
}: {
  progress: MotionValue<number>;
  reduced: boolean;
}) {
  const y = useTransform(progress, [0, 1], reduced ? [0, 0] : [-120, 260]);
  const x = useTransform(progress, [0, 1], reduced ? [0, 0] : [60, -60]);
  const scale = useTransform(progress, [0, 1], reduced ? [1, 1] : [1, 1.15]);

  return (
    <motion.div
      aria-hidden="true"
      className="absolute -top-28 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full blur-2xl opacity-70"
      style={{ x, y, scale }}
    >
      <div
        className="h-full w-full rounded-full"
        style={{
          background:
            "conic-gradient(from 180deg, #00d5ff, #a855f7, #ff4ecd, #ffb700, #34d399, #00d5ff)",
        }}
      />
    </motion.div>
  );
}

export default function AboutPage() {
  const reduced = useReducedMotion();
  const pageRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={pageRef} className="relative text-white">
      {/* INTRO SCREEN: shows immediately on open */}
      <section className="min-h-[100dvh] flex items-center justify-center px-6">
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.92 }}
          animate={reduced ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            About Page
          </div>

          <h1 className="mt-6 text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            About {site.name}
          </h1>

          <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
            {site.role}. I build modern web apps with React, Next.js and scalable
            backend systems. Scroll to see details.
          </p>

          <motion.div
            aria-hidden="true"
            animate={reduced ? {} : { y: [0, 12, 0] }}
            transition={reduced ? {} : { repeat: Infinity, duration: 1.5 }}
            className="mt-12 text-white/50 text-sm"
          >
            Scroll ↓
          </motion.div>
        </motion.div>
      </section>

      {/* STICKY animated background for remaining sections */}
      <div className="pointer-events-none sticky top-0 z-0 h-[100dvh] overflow-hidden">
        <SnakeBackground progress={scrollYProgress} reduced={!!reduced} />
        <RainbowOrb progress={scrollYProgress} reduced={!!reduced} />
      </div>

      {/* CONTENT SECTIONS */}
      <div className="relative z-10">
        <Container className="py-0">
          <div className="snap-y snap-mandatory">
            {SECTIONS.map((s, idx) => (
              <section
                key={s.kicker}
                className="snap-start min-h-[100dvh] flex items-center py-16"
                aria-labelledby={`about-title-${idx}`}
              >
                <motion.div
                  initial={reduced ? false : { opacity: 0, y: 18 }}
                  whileInView={reduced ? {} : { opacity: 1, y: 0 }}
                  viewport={{ amount: 0.55, once: false }}
                  transition={{ duration: 0.6 }}
                  className="w-full mx-auto max-w-3xl rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                      {s.kicker}
                    </span>
                    <span className="text-xs text-white/50">Scroll</span>
                  </div>

                  <h2
                    id={`about-title-${idx}`}
                    className="mt-5 text-3xl font-semibold text-white md:text-5xl"
                  >
                    {s.title}
                  </h2>

                  <p className="mt-4 max-w-2xl text-white/70">{s.desc}</p>

                  {s.bullets?.length ? (
                    <ul className="mt-6 grid gap-2 text-white md:grid-cols-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {s.badges?.length ? (
                    <div className="mt-6 flex flex-wrap gap-2" aria-label="Skills">
                      {s.badges.map((b) => (
                        <Badge className="text-white" key={b}>{b}</Badge>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-8 flex items-center gap-3">
                    <span className="text-xs text-white/40">
                      Section {idx + 1} of {SECTIONS.length}
                    </span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                </motion.div>
              </section>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}