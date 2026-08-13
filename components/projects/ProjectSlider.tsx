"use client";

import { useState } from "react";
import { projects, type Project } from "@/content/projects";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Github, Globe } from "lucide-react";
import Link from "next/link";

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Get visible projects (3 on desktop, 2 on tablet, 1 on mobile)
  const getVisibleProjects = (): Project[] => {
    const visible: Project[] = [];
    for (let i = 0; i < 3; i++) {
      visible.push(projects[(currentIndex + i) % projects.length]);
    }
    return visible;
  };

  return (
    <div className="w-full text-white py-10 relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-purple-400 font-medium">
            Featured Portfolio
          </span>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
            aria-label="Previous Project"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
            aria-label="Next Project"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Sliding Track Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {getVisibleProjects().map((project, index) => {
          return (
            <motion.div
              key={`${project.slug}-${index}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:border-purple-500/40 hover:bg-white/[0.05]"
            >
              {/* Background ambient glow on card hover */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl" />
                <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl" />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full">
                    {project.year}
                  </span>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition">
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition">
                        <Globe className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-bold group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-white/60 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="mt-6">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[9px] font-medium text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="text-[9px] text-white/45 self-center">
                      +{project.stack.length - 3} more
                    </span>
                  )}
                </div>

                <Link
                  href="/projects"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs font-semibold text-white/90 hover:bg-white hover:text-black transition duration-300"
                >
                  Interactive Preview
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
