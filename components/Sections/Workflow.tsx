"use client";

import { motion } from "framer-motion";
import { Compass, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Planning & Architecture",
    description: "Structuring user flows, defining database schemas (MongoDB/Firebase), mapping component layouts, and picking optimal color harmonies.",
    icon: Compass,
    color: "from-purple-500 to-indigo-500",
    shadow: "shadow-purple-500/10",
  },
  {
    number: "02",
    title: "Interactive Development",
    description: "Writing high-quality Next.js/React code, engineering modular CSS, structuring backend APIs, and refining Framer Motion animations.",
    icon: Code2,
    color: "from-pink-500 to-rose-500",
    shadow: "shadow-pink-500/10",
  },
  {
    number: "03",
    title: "Performance & SEO Launch",
    description: "Polishing site speed indices, resolving console errors, adding descriptive title tags/metadata, and deploying fully responsive builds.",
    icon: Rocket,
    color: "from-cyan-500 to-teal-500",
    shadow: "shadow-cyan-500/10",
  },
];

export default function Workflow() {
  return (
    <section className="text-white py-12 relative overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-purple-400 font-medium">
          Professional Process
        </span>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
          How I Build Web Apps
        </h2>
        <p className="mt-4 text-xs text-white/55 leading-relaxed">
          From brainstorming visual concepts to shipping fast, optimized code, here is my developer roadmap.
        </p>
      </div>

      {/* Grid of Steps */}
      <div className="grid gap-8 md:grid-cols-3 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 -translate-y-12 -z-10" />

        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
            >
              {/* Highlight Glow */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute -right-5 -bottom-5 h-24 w-24 rounded-full bg-gradient-to-br ${step.color} opacity-10 blur-xl`} />
              </div>

              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-white/30 group-hover:text-white/60 transition">
                    STEP {step.number}
                  </span>
                  
                  {/* Icon Circle */}
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-white shadow-lg ${step.shadow} group-hover:scale-110 transition duration-300`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold group-hover:text-purple-300 transition-colors">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-white/60">
                  {step.description}
                </p>
              </div>

              {/* Indicator Dot */}
              <div className="mt-8 flex items-center gap-2 text-[10px] font-mono text-purple-400 opacity-60 group-hover:opacity-100 transition">
                <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${step.color}`} />
                <span>ACTIVE PROCESS</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
