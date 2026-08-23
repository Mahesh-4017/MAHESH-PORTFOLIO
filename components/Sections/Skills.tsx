"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, Wrench, Layers3, Server, Globe, Shield, Terminal, Database } from "lucide-react";

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Parallax motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100, mass: 0.5 };
  const bgX = useSpring(useTransform(x, [-0.5, 0.5], [-25, 25]), springConfig);
  const bgY = useSpring(useTransform(y, [-0.5, 0.5], [-25, 25]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set((mouseX / rect.width) - 0.5);
    y.set((mouseY / rect.height) - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden py-20 text-white rounded-3xl border border-neutral-900/60 bg-black/40"
    >
      {/* Parallax Workspace Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden select-none pointer-events-none">
        <motion.div
          className="relative w-full h-full scale-[1.1]"
          style={{ x: bgX, y: bgY }}
        >
          <Image
            src="/images/programming.png"
            alt="Programming Workspace Background"
            fill
            className="object-cover opacity-[0.18] brightness-[0.45] contrast-[1.1] saturate-[1.1]"
          />
        </motion.div>

        {/* Ambient Color Glow Gradients */}
        <div className="absolute left-[10%] top-10 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl animate-pulse" />
        <div className="absolute right-[12%] top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-pink-500/5 blur-3xl" />

        {/* Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      </div>

      <div className="mx-auto max-w-6xl px-4 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
            Expertise
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
            Skills that build real products
          </h2>
          <p className="mt-4 text-xs text-white/55 leading-relaxed">
            Not random tools dumped into a list. This is the stack used to ship
            fast, responsive, production-ready interfaces.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          
          {/* 1. LANGUAGES BOX (col-span-1) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/45 p-6 backdrop-blur-xl flex flex-col justify-between"
          >
            {/* Corner hover glow */}
            <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5">
                  <Code2 className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Base Coding</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">Languages</h3>
              <p className="text-[11px] text-neutral-400 mb-6 leading-normal">
                Strong foundation in modern scripting and structural programming.
              </p>

              {/* Languages List */}
              <div className="space-y-3">
                {[
                  { name: "TypeScript", desc: "Strict Types & Interfaces", color: "bg-blue-500" },
                  { name: "JavaScript", desc: "ES6+ Logic & Web API", color: "bg-yellow-400" },
                  { name: "CSS3", desc: "Variables, Grids & Flexbox", color: "bg-indigo-400" },
                  { name: "HTML5", desc: "Semantic DOM & Standards", color: "bg-orange-500" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 rounded-lg bg-white/[0.02] border border-white/[0.03]">
                    <span className={`h-1.5 w-1.5 rounded-full ${item.color}`} />
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-neutral-200">{item.name}</span>
                      <span className="text-[9px] text-neutral-500">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-1.5 text-[9px] font-mono text-blue-400/80">
              <Globe size={11} />
              <span>Cross-Browser Compliant</span>
            </div>
          </motion.div>

          {/* 2. FRAMEWORKS & STACK BOX (col-span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/45 p-6 backdrop-blur-xl md:col-span-2"
          >
            {/* Top hover glow */}
            <div className="absolute right-10 top-0 h-36 w-36 rounded-full bg-purple-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5">
                <Layers3 className="h-5 w-5 text-purple-400" />
              </div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Main stack</span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">Frameworks & Stack</h3>
            <p className="text-[11px] text-neutral-400 mb-6 max-w-lg leading-normal">
              My core engine for launching performant user interfaces and secure backend routing.
            </p>

            {/* Frameworks Grid */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
              {[
                { name: "Next.js", desc: "App Router, SSR, Optimization", tag: "Full-Stack" },
                { name: "React", desc: "Virtual DOM, Hooks, Component-driven", tag: "UI Library" },
                { name: "Tailwind CSS", desc: "Utility-first CSS, fluid responsiveness", tag: "Styling" },
                { name: "Node.js", desc: "Runtime, File-system, Event loop", tag: "Runtime" },
                { name: "Express", desc: "Server framework, middleware APIs", tag: "API Engine" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.04] transition duration-300 ${
                    idx === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-neutral-200">{item.name}</span>
                    <span className="text-[8px] font-mono uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20 px-1.5 py-0.5 rounded">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-[10px] text-neutral-500 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3. DEV DATABASES & TOOLS BOX (col-span-3 - Full Width) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/45 p-6 backdrop-blur-xl md:col-span-3"
          >
            {/* Center hover glow */}
            <div className="absolute left-1/3 bottom-0 h-32 w-32 rounded-full bg-pink-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5">
                <Wrench className="h-5 w-5 text-pink-400" />
              </div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Environment</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Dev Databases & Tools</h3>
                <p className="text-[11px] text-neutral-400 max-w-xl leading-normal">
                  Version control, serverless databases, state tracking, and development utilities that round out my delivery workspace.
                </p>
              </div>

              {/* Tools Flex Wrap */}
              <div className="flex flex-wrap gap-2.5 max-w-xl lg:justify-end">
                {[
                  { name: "Git", cat: "VCS", icon: Terminal },
                  { name: "GitHub", cat: "Hosting", icon: Globe },
                  { name: "MongoDB", cat: "NoSQL DB", icon: Database },
                  { name: "Firebase", cat: "BaaS DB", icon: Server },
                  { name: "VS Code", cat: "IDE", icon: Code2 },
                  { name: "Postman", cat: "API Client", icon: Shield },
                ].map((item, idx) => {
                  const ToolIcon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/[0.06] bg-neutral-900/60 hover:bg-neutral-800/80 transition duration-300 group/tool"
                    >
                      <ToolIcon size={12} className="text-neutral-450 group-hover/tool:text-pink-400 transition" />
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[11px] font-semibold text-neutral-200">{item.name}</span>
                        <span className="text-[8px] font-mono text-neutral-500 uppercase">{item.cat}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}