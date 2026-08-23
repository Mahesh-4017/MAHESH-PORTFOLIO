"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

type HeroProps = {
  name?: string;
  role?: string;
  summary?: string;
};

const SKILLS = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "REST APIs",
];

export default function Hero({
  name = "Mahesh Sain",
  role = "Full Stack Engineer & Web Developer",
  summary = "I build fast, responsive Next.js applications and robust backend services. Focused on clean code, modern web performance, and intuitive user experiences.",
}: HeroProps) {
  const [persona, setPersona] = useState<"developer" | "racer">("developer");

  return (
    <section className="relative overflow-hidden bg-[#09090b] text-neutral-100 py-16 md:py-24 border-b border-neutral-800/80">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          
          {/* LEFT COLUMN: CLEAN PROFESSIONAL TYPOGRAPHY */}
          <div className="flex flex-col lg:col-span-7">
            
            {/* STATUS BADGE */}
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Available for Full-Time Roles & Freelance Projects</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white leading-[1.15]">
              Full Stack Software Engineer & Web Developer
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-400">
              Hi, I’m <span className="font-semibold text-white">{name}</span>. {summary}
            </p>

            {/* QUICK HIGHLIGHTS */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-neutral-800/80 py-5 max-w-2xl">
              <div>
                <div className="text-2xl font-bold text-white font-mono">100%</div>
                <div className="text-xs text-neutral-400 mt-1">Core Web Vitals Performance</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono">Full Stack</div>
                <div className="text-xs text-neutral-400 mt-1">Frontend & Backend APIs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono">India</div>
                <div className="text-xs text-neutral-400 mt-1">Based & Open to Remote</div>
              </div>
            </div>

            {/* TECH STACK CHIPS */}
            <div className="mt-6 flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-neutral-800 bg-neutral-900/80 px-3 py-1 text-xs font-medium text-neutral-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-neutral-200 active:scale-[0.98]"
              >
                View Projects
                <ArrowUpRight size={16} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-[46px] items-center justify-center rounded-lg border border-neutral-700 bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800 hover:border-neutral-600 active:scale-[0.98]"
              >
                Get in Touch
              </Link>

              <div className="flex items-center gap-2 ml-0 sm:ml-2">
                <a
                  href="https://github.com/MAHESH-4017"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-700 transition"
                  title="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mahesh-sain/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-700 transition"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: CLEAN PORTRAIT CARD WITH PERSONA TOGGLE */}
          <div className="flex justify-center lg:col-span-5">
            <div className="w-full max-w-sm rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 shadow-xl">
              
              {/* CARD TOP BAR */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Briefcase size={15} className="text-neutral-400" />
                  <span className="text-xs font-medium text-neutral-300">Mahesh Sain</span>
                </div>

                {/* Persona Switcher */}
                <div className="flex items-center gap-1 rounded-lg bg-neutral-800/80 p-1 border border-neutral-700/50">
                  <button
                    onClick={() => setPersona("developer")}
                    className={`rounded-md px-2.5 py-1 text-xs font-medium transition ${
                      persona === "developer"
                        ? "bg-white text-black font-semibold shadow-sm"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Developer
                  </button>
                  <button
                    onClick={() => setPersona("racer")}
                    className={`rounded-md px-2.5 py-1 text-xs font-medium transition ${
                      persona === "racer"
                        ? "bg-white text-black font-semibold shadow-sm"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Racer
                  </button>
                </div>
              </div>

              {/* PORTRAIT IMAGE */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
                <Image
                  src={persona === "developer" ? "/images/mahesh-suit.jpg" : "/images/mahesh-racer.jpg"}
                  alt={name}
                  fill
                  priority
                  className="object-cover object-center transition-all duration-300"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-neutral-800 bg-neutral-900/90 p-3 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">{name}</div>
                      <div className="text-xs text-neutral-400">
                        {persona === "developer" ? "Full Stack Software Engineer" : "Motorsport Persona"}
                      </div>
                    </div>
                    <span className="inline-flex items-center justify-center rounded-full bg-emerald-500/10 p-1 text-emerald-400">
                      <CheckCircle2 size={16} />
                    </span>
                  </div>
                </div>
              </div>

              {/* FOOTER INFO */}
              <div className="mt-3 flex items-center justify-between text-xs text-neutral-400 px-1 pt-1">
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="text-neutral-500" /> India
                </span>
                <span className="font-mono text-neutral-500">Next.js 16 • React 19</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}