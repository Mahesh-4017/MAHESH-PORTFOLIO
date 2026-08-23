"use client";

import { useState, useRef, useEffect } from "react";
import { projects, type Project } from "@/content/projects";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Globe, Sparkles } from "lucide-react";

// Sub-component to render and dynamically scale an iframe as a desktop page preview
function DesktopIframe({
  src,
  title,
  duration,
  delay,
  noScroll,
}: {
  src: string;
  title: string;
  duration: number;
  delay: number;
  noScroll?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(0.3); // fallback initial scale
  const [iframeHeight, setIframeHeight] = useState<number>(1000); // default height for scrolling

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0) {
          setScale(width / 1280);
          if (noScroll && height > 0) {
            // For non-scrolling layouts, force the iframe height to match the container aspect ratio exactly
            setIframeHeight(1280 * (height / width));
          } else {
            // For scrolling sites, keep standard desktop height
            setIframeHeight(1000);
          }
        }
      }
    });

    observer.observe(container);
    return () => {
      observer.disconnect();
    };
  }, [noScroll]);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden bg-[#0d0d0d]">
      <iframe
        src={src}
        loading="lazy"
        className="scrolling-iframe"
        title={title}
        sandbox="allow-scripts allow-same-origin allow-forms"
        style={{
          height: `${iframeHeight}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          "--iframe-scale": scale,
          animation: noScroll ? "none" : `scrollWebpage ${duration}s ease-in-out ${delay}s infinite alternate`,
        } as React.CSSProperties}
      />
    </div>
  );
}

export default function InteractiveProjectsShowcase() {
  const [filter, setFilter] = useState<string>("All");

  // Filter projects based on stack
  const filteredProjects = projects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Full-Stack") return p.stack.includes("Node.js") || p.stack.includes("MongoDB") || p.stack.includes("Firebase");
    if (filter === "Next.js/React") return p.stack.includes("Next.js") || p.stack.includes("React");
    if (filter === "HTML/CSS") return p.stack.includes("HTML") && !p.stack.includes("React") && !p.stack.includes("Next.js");
    return true;
  });

  const getDisplayUrl = (project: Project) => {
    const url = project.liveUrl || project.githubUrl || "";
    if (!url) return "offline";
    try {
      const parsed = new URL(url);
      return parsed.hostname.replace("www.", "");
    } catch {
      return url.replace("https://", "").replace("http://", "").replace("www.", "");
    }
  };

  return (
    <div className="w-full text-white">
      {/* Title Header */}
      <div className="mb-10 text-center md:text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
          <Sparkles className="h-3.5 w-3.5" />
          Interactive Portfolio
        </div>
        <h2 className="mt-3 text-3xl font-semibold md:text-5xl bg-gradient-to-r from-white via-white/90 to-white/45 bg-clip-text text-transparent">
          Explore My Projects
        </h2>
        <p className="mt-4 text-white/65 max-w-2xl">
          Browse through live previews of my applications scrolling in real-time. Click any card to launch the live project in a new tab.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2.5 mb-8">
        {["All", "Next.js/React", "Full-Stack", "HTML/CSS"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-xl px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
              filter === cat
                ? "bg-white text-black shadow-lg shadow-white/10"
                : "border border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Interactive Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            const targetUrl = project.liveUrl || project.githubUrl || "#";
            const displayUrl = getDisplayUrl(project);

            // Compute variable scroll speeds and offsets based on project index
            const duration = 22 + (idx % 3) * 6; // 22s, 28s, 34s
            const delay = (idx % 4) * 1.5; // 0s, 1.5s, 3.0s, 4.5s

            return (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden hover:border-purple-500/40 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Click Link Overlay */}
                <a
                  href={targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20 cursor-pointer"
                  title={`Open ${project.title} in a new tab`}
                />

                {/* macOS Style Mock Browser Header */}
                <div className="flex items-center justify-between bg-black/40 border-b border-white/5 px-4 py-3 select-none">
                  {/* OS window action dots */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/70 group-hover:bg-red-500 transition-colors duration-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70 group-hover:bg-yellow-500 transition-colors duration-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70 group-hover:bg-emerald-500 transition-colors duration-300" />
                  </div>

                  {/* Address bar capsule */}
                  <div className="flex items-center gap-1.5 rounded-lg bg-black/35 px-3 py-1 text-[11px] text-white/40 border border-white/5 w-1/2 max-w-[200px] font-mono select-none overflow-hidden text-ellipsis whitespace-nowrap justify-center">
                    {project.liveUrl ? (
                      <Globe className="h-3 w-3 text-emerald-400/70 shrink-0" />
                    ) : (
                      <Github className="h-3 w-3 text-purple-400/70 shrink-0" />
                    )}
                    <span className="truncate text-white/50">{displayUrl}</span>
                  </div>

                  {/* Hover indicator link */}
                  <div className="text-white/30 group-hover:text-purple-400 transition-colors duration-300">
                    <ExternalLink className="h-3.5 w-3.5" />
                  </div>
                </div>

                {/* Webpage Mockup Scroll Box */}
                <div className="relative h-[280px] w-full overflow-hidden bg-[#0d0d0d] border-b border-white/5">
                  {project.liveUrl ? (
                    <DesktopIframe
                      src={project.liveUrl}
                      title={project.title}
                      duration={duration}
                      delay={delay}
                      noScroll={project.noScroll}
                    />
                  ) : (
                    <div className="w-full h-full relative overflow-hidden bg-zinc-900 flex items-center justify-center">
                      {project.cover ? (
                        <img
                          src={project.cover}
                          alt={project.title}
                          className="scrolling-fallback"
                          style={{
                            animation: project.noScroll ? "none" : `scrollFallback ${duration}s ease-in-out ${delay}s infinite alternate`
                          }}
                        />
                      ) : (
                        <div className="text-xs text-white/40 font-mono">No Live Preview Available</div>
                      )}
                    </div>
                  )}

                  {/* Gradient shadow overlay */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Project Info Footer */}
                <div className="flex flex-col p-5 flex-grow bg-black/10">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                    <span className="text-[10px] text-white/30 font-mono mt-1 shrink-0">{project.year}</span>
                  </div>

                  <p className="mt-2 text-xs text-white/60 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Stack Badges */}
                  <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-white/5 border border-white/5 px-2 py-0.5 text-[9px] font-medium text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="rounded bg-white/5 border border-white/5 px-2 py-0.5 text-[9px] font-medium text-white/30">
                        +{project.stack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
