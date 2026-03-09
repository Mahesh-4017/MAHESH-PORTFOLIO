"use client";

import { motion } from "framer-motion";
import { Code2, Wrench, Layers3 } from "lucide-react";

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind"],
  Tools: ["Git", "GitHub", "VS Code", "Postman"],
  Basics: ["Responsive UI", "API integration", "Component design"],
};

const groupIcons = {
  Frontend: Code2,
  Tools: Wrench,
  Basics: Layers3,
};

export default function Skills() {
  return (
    <section className="relative overflow-hidden py-20 text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute right-[12%] top-24 h-44 w-44 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
            Expertise
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            Skills that build real products
          </h2>
          <p className="mt-4 text-base leading-7 text-white/65">
            Not random tools dumped into a list. This is the stack used to ship
            fast, responsive, production-ready interfaces.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {Object.entries(skills).map(([group, items], index) => {
            const Icon = groupIcons[group as keyof typeof groupIcons];

            return (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -left-10 top-0 h-28 w-28 rounded-full bg-purple-500/20 blur-2xl" />
                  <div className="absolute -right-10 bottom-0 h-28 w-28 rounded-full bg-cyan-500/20 blur-2xl" />
                </div>

                <div className="relative z-10">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold">{group}</h3>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {items.map((item, itemIndex) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.15 + itemIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.08 }}
                        className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm font-medium text-white/85 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}