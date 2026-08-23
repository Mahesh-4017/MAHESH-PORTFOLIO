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
import { useRef, useState } from "react";

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
    desc: "I’m a passionate Full Stack Developer who enjoys turning ideas into modern, responsive, and user-friendly web applications. I handle complete web solutions from concept to deployment with a focus on seamless user experience.",
    bullets: [
      "End-to-End Web Solutions",
      "User-Centric Interfaces",
      "Modern Web Standards",
      "Rapid Problem Solving",
    ],
  },
  {
    kicker: "02",
    title: "Technical Specialization",
    desc: "On the frontend, I create clean, interactive web experiences with React and modern UI tools. On the backend, I engineer scalable APIs and databases using Node.js, Express, PHP, MongoDB, and MySQL.",
    badges: ["React", "Next.js", "Tailwind", "JavaScript", "Node.js", "Express", "MongoDB", "MySQL", "PHP"],
    bullets: [
      "Responsive Frontend Design",
      "Scalable Backend & REST APIs",
      "Database Architecture & SQL/NoSQL",
      "Performance & Security Optimization",
    ],
  },
  {
    kicker: "03",
    title: "Development Philosophy",
    desc: "I believe great development goes beyond writing code—it's about solving real problems and delivering genuine value. I focus on writing clean, maintainable, and future-proof code.",
    bullets: [
      "Clean & Maintainable Code",
      "User-Focused Solutions",
      "Continuous Skill Growth",
      "High-Performance Deployments",
    ],
  },
  {
    kicker: "04",
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
    kicker: "05",
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
    kicker: "06",
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
      "Node.js",
      "Express",
      "MongoDB",
      "MySQL",
      "PHP",
      "Git",
      "GitHub",
      "Firebase",
    ],
  },
  {
    kicker: "07",
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
    kicker: "08",
    title: "Let’s build",
    desc:
      "If you want a portfolio, landing page, admin panel, or full app, I can build it cleanly.",
    bullets: ["Freelance", "Full time", "Remote", "Project based"],
  },
  {
    kicker: "09",
    title: "Frequently Asked Questions",
    desc: "Here are some quick answers to common questions about my development workflow, stack, and availability.",
  },
];

const FAQS = [
  {
    question: "What is your primary development stack?",
    answer: "I specialize in the MERN/PERN stack (MongoDB, Express, React, Node.js) and Next.js / TypeScript. I also build backend systems using SQL databases (MySQL) and PHP, and integrate Firebase for real-time applications."
  },
  {
    question: "Do you handle both frontend and backend development?",
    answer: "Yes! As a Full Stack Developer, I design databases, build secure REST APIs, and develop high-performance frontend interfaces with fluid animations and responsive layouts."
  },
  {
    question: "How do you optimize web application performance?",
    answer: "I focus on image optimization (lossless compression, modern formats), server-side rendering (SSR), API response caching, and minimizing bundle sizes to ensure fast load times."
  },
  {
    question: "Are you open to freelance projects or full-time remote roles?",
    answer: "Yes, I am available for freelance contracts, part-time collaborations, and full-time remote positions. Let's connect through the Contact page!"
  }
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
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

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
            {site.role}. I build modern, responsive interfaces and robust backend databases to power complete web solutions.
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
                  viewport={{ amount: 0.3, once: false }}
                  transition={{ duration: 0.6 }}
                  className="w-full mx-auto max-w-3xl rounded-3xl border border-white/10 bg-black/70 p-8 backdrop-blur-md"
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

                  <p className="mt-4 max-w-2xl text-white/70 whitespace-pre-line text-sm leading-relaxed">{s.desc}</p>

                  {s.bullets?.length ? (
                    <ul className="mt-6 grid gap-2 text-white md:grid-cols-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                          <span className="text-sm text-white/85">{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {s.badges?.length ? (
                    <div className="mt-6 flex flex-wrap gap-2" aria-label="Skills">
                      {s.badges.map((b) => (
                        <Badge className="text-white bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/20" key={b}>{b}</Badge>
                      ))}
                    </div>
                  ) : null}

                  {/* FAQ Accordion container */}
                  {s.title === "Frequently Asked Questions" && (
                    <div className="mt-6 space-y-3">
                      {FAQS.map((faq, fIdx) => {
                        const isOpen = activeFaq === fIdx;
                        return (
                          <div key={fIdx} className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden transition-colors duration-300 hover:border-purple-500/20">
                            <button
                              onClick={() => setActiveFaq(isOpen ? null : fIdx)}
                              className="flex w-full items-center justify-between p-4 text-left font-semibold text-sm text-white/90 hover:bg-white/[0.02] transition-colors"
                            >
                              <span>{faq.question}</span>
                              <span className={`text-purple-400 font-bold transition-transform duration-300 select-none ${isOpen ? "rotate-45" : ""}`}>+</span>
                            </button>
                            <motion.div
                              initial={false}
                              animate={{ height: isOpen ? "auto" : 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="p-4 pt-0 text-xs leading-relaxed text-white/60 border-t border-white/5 bg-black/10">
                                {faq.answer}
                              </p>
                            </motion.div>
                          </div>
                        );
                      })}
                    </div>
                  )}

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