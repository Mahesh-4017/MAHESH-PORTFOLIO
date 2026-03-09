"use client";

import { motion } from "framer-motion";

const techStack = [
  { name: "HTML", logo: "/icons/html.png" },
  { name: "CSS", logo: "/icons/css.png" },
  { name: "JavaScript", logo: "/icons/javascript.png" },
  { name: "React.js", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "React Native", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Python", logo: "/icons/python.png" },
  { name: "Git", logo: "/icons/git.png" },
  { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
  { name: "Django", logo: "/icons/django.png" },
];

export default function TechStack() {
  return (
    <section className="relative py-24 text-white">

      {/* glow background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4">

        {/* heading */}
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Technologies I Use
          </h2>

          <p className="mt-4 text-white/70 max-w-xl mx-auto">
            Tools and frameworks used to build scalable modern web applications.
          </p>
        </div>

        {/* grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl text-center transition"
            >

              {/* hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-purple-500/30 blur-2xl" />
                <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-cyan-500/30 blur-2xl" />
              </div>

              <div className="relative z-10 flex flex-col items-center gap-4">

                <motion.img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-16 w-16 object-contain"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2
                  }}
                />

                <p className="text-sm font-semibold tracking-wide text-white/90">
                  {tech.name}
                </p>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}