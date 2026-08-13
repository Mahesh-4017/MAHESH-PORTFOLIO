"use client";

import { useState, useEffect } from "react";
import { projects, type Project } from "@/content/projects";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  Globe, 
  Terminal, 
  Code2, 
  Sparkles, 
  Laptop, 
  Layers, 
  ChevronRight,
  Maximize2,
  RefreshCw,
  Info,
  FolderOpen
} from "lucide-react";

export default function InteractiveProjectsShowcase() {
  // Sort projects: liveUrl first, then github-only
  const sortedProjects = [...projects].sort((a, b) => {
    const hasLiveA = a.liveUrl ? 1 : 0;
    const hasLiveB = b.liveUrl ? 1 : 0;
    return hasLiveB - hasLiveA;
  });

  const [selectedProject, setSelectedProject] = useState<Project>(sortedProjects[0]);
  const [filter, setFilter] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"live" | "specs">("live");
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>("App.tsx");
  const [showIframe, setShowIframe] = useState<boolean>(false);
  const [activeDemoUrl, setActiveDemoUrl] = useState<string>("");
  const [isSidebarHidden, setIsSidebarHidden] = useState<boolean>(true);

  const demoLinks = selectedProject.demoLinks || (selectedProject.liveUrl ? [{ label: "Website", url: selectedProject.liveUrl }] : []);
  const activeDemoLabel = demoLinks.find(d => d.url === activeDemoUrl)?.label || "Website";

  // Filter projects
  const filteredProjects = sortedProjects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Full-Stack") return p.stack.includes("Node.js") || p.stack.includes("MongoDB") || p.stack.includes("Firebase");
    if (filter === "Next.js/React") return p.stack.includes("Next.js") || p.stack.includes("React");
    if (filter === "HTML/CSS") return p.stack.includes("HTML") && !p.stack.includes("React") && !p.stack.includes("Next.js");
    return true;
  });

  // When selected project changes, default to first demo link if available, otherwise specs
  useEffect(() => {
    setShowIframe(false);
    const links = selectedProject.demoLinks || (selectedProject.liveUrl ? [{ label: "Website", url: selectedProject.liveUrl }] : []);
    if (links.length > 0) {
      setActiveDemoUrl(links[0].url);
      setViewMode("live");
    } else {
      setActiveDemoUrl("");
      setViewMode("specs");
    }
    setIframeKey((prev) => prev + 1);
  }, [selectedProject]);

  const reloadIframe = () => {
    setIframeKey((prev) => prev + 1);
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
          Interact with live applications directly inside the browser sandbox, or inspect their file structures, stack details, and terminal readouts.
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

      {/* Main Sandbox Grid */}
      <div className={`grid gap-6 transition-all duration-300 ${isSidebarHidden ? "grid-cols-1" : "lg:grid-cols-[380px_1fr]"}`}>
        {/* Left Side: Scrollable project list */}
        {!isSidebarHidden && (
          <div className="flex flex-col gap-3 max-h-[640px] overflow-y-auto pr-1">
          {filteredProjects.map((p) => {
            const isSelected = selectedProject.slug === p.slug;
            return (
              <button
                key={p.slug}
                onClick={() => setSelectedProject(p)}
                className={`group relative flex flex-col text-left rounded-2xl border p-5 transition-all duration-300 ${
                  isSelected
                    ? "border-purple-500 bg-purple-500/10 shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                }`}
              >
                <div className="flex items-start justify-between w-full">
                  <span className="text-xs text-white/40 font-mono">{p.year}</span>
                  <div className="flex gap-2 opacity-65 group-hover:opacity-100 transition-opacity">
                    {p.githubUrl && <Github className="h-4 w-4 text-white/70" />}
                    {p.liveUrl && <Globe className="h-4 w-4 text-white/70" />}
                  </div>
                </div>

                <h3 className={`mt-2 text-base font-semibold transition-colors ${
                  isSelected ? "text-purple-300" : "text-white group-hover:text-purple-300"
                }`}>
                  {p.title}
                </h3>

                <p className="mt-2 text-xs text-white/60 line-clamp-2 leading-relaxed">
                  {p.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/70"
                    >
                      {s}
                    </span>
                  ))}
                  {p.stack.length > 3 && (
                    <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/40">
                      +{p.stack.length - 3} more
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
        )}

        {/* Right Side: Mock Browser Sandbox */}
        <div className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden shadow-2xl min-h-[580px] lg:h-[640px] flex-1">
          
          {/* Mock Browser Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 bg-black/40 px-4 py-3 gap-3">
            
            {/* Dots + Tab selector */}
            <div className="flex items-center gap-4">
              {/* OS Dots */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>

              {/* Sidebar toggle */}
              <button
                onClick={() => setIsSidebarHidden(!isSidebarHidden)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-semibold text-white/85 hover:text-white transition-all select-none"
                title={isSidebarHidden ? "Show Projects Sidebar" : "Hide Projects Sidebar"}
              >
                <FolderOpen className={`h-3.5 w-3.5 transition-colors ${isSidebarHidden ? "text-white/60" : "text-purple-400"}`} />
                <span className="hidden sm:inline">{isSidebarHidden ? "Show Projects" : "Hide Projects"}</span>
              </button>

              {/* View Selector Tabs */}
              <div className="flex bg-white/5 rounded-lg p-0.5 border border-white/5">
                {demoLinks.length > 0 && (
                  <button
                    onClick={() => setViewMode("live")}
                    className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-all ${
                      viewMode === "live"
                        ? "bg-white text-black"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    <Globe className="h-3.5 w-3.5" />
                    Live Sandbox
                  </button>
                )}
                <button
                  onClick={() => setViewMode("specs")}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-all ${
                    viewMode === "specs" || demoLinks.length === 0
                      ? "bg-white text-black"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  <Code2 className="h-3.5 w-3.5" />
                  Dev Specs
                </button>
              </div>
            </div>

            {/* URL Display / Action controls */}
            <div className="flex items-center gap-3 flex-1 sm:justify-end">
              {viewMode === "live" && activeDemoUrl ? (
                <>
                  <div className="flex items-center gap-2 rounded-xl bg-black/45 px-3 py-1.5 text-xs text-white/50 border border-white/5 w-full max-w-[320px] font-mono select-none overflow-hidden text-ellipsis whitespace-nowrap">
                    <Globe className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{activeDemoUrl}</span>
                  </div>

                  <button
                    onClick={reloadIframe}
                    title="Reload Sandbox"
                    className="p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition text-white/80"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                  </button>
                </>
              ) : (
                <div className="flex items-center gap-2 rounded-xl bg-black/45 px-3 py-1.5 text-xs text-white/50 border border-white/5 w-full max-w-[320px] font-mono select-none overflow-hidden text-ellipsis whitespace-nowrap">
                  <Terminal className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                  <span>mahesh.dev/specs/{selectedProject.slug}</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition text-xs font-medium text-white/95 whitespace-nowrap"
                    title="View Source on GitHub"
                  >
                    <Github className="h-3.5 w-3.5 text-white/70" />
                    Code
                  </a>
                )}
                {viewMode === "live" && activeDemoUrl && (
                  <a
                    href={activeDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500 hover:bg-purple-600 transition text-xs font-semibold text-white shadow-lg shadow-purple-500/25 whitespace-nowrap"
                    title={`Open Live ${activeDemoLabel} in New Tab`}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Open {activeDemoLabel}
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Sub-tab Bar for multi-link projects */}
          {viewMode === "live" && demoLinks.length > 1 && (
            <div className="flex bg-black/60 border-b border-white/10 px-4 py-2 gap-2 overflow-x-auto items-center">
              {demoLinks.map((link) => {
                const isActive = activeDemoUrl === link.url;
                return (
                  <button
                    key={link.label}
                    onClick={() => {
                      setActiveDemoUrl(link.url);
                      setIframeKey((prev) => prev + 1);
                    }}
                    className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200 border ${
                      isActive
                        ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
                        : "bg-white/5 text-white/60 border-transparent hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Globe className="h-3.5 w-3.5" />
                    {link.label}
                  </button>
                );
              })}
            </div>
          )}
          {/* Sandbox Body Content */}
          <div className="relative flex-1 bg-black/40 overflow-hidden">
            <AnimatePresence mode="wait">
              {viewMode === "live" && activeDemoUrl ? (
                /* IFRAME / LIVE PREVIEW VIEW */
                <motion.div
                  key={`iframe-${selectedProject.slug}-${iframeKey}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full relative"
                >
                  <iframe
                    src={activeDemoUrl}
                    className="w-full h-full bg-white border-none"
                    title={selectedProject.title}
                    sandbox="allow-scripts allow-same-origin allow-forms"
                  />
                  
                  {/* Floating glassmorphic helper bar */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/85 border border-white/10 rounded-xl p-3 backdrop-blur text-xs flex flex-col sm:flex-row gap-3 items-center justify-between text-white/80 pointer-events-auto shadow-2xl z-30">
                    <div className="flex gap-2 items-center text-left">
                      <Info className="h-4 w-4 text-purple-400 shrink-0" />
                      <p className="leading-snug">
                        Loaded inside sandbox. If the website does not load due to security policies, click the button to open it in a new window.
                      </p>
                    </div>
                    <a
                      href={activeDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500 hover:bg-purple-600 transition text-[11px] font-semibold text-white shadow-lg shadow-purple-500/25 whitespace-nowrap"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Open In New Tab
                    </a>
                  </div>
                </motion.div>
              ) : (
                /* SPECS MOCK CODE EDITOR VIEW */
                <motion.div
                  key={`specs-${selectedProject.slug}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col h-full"
                >
                  {/* File Tabs (VS Code style tabs) */}
                  <div className="flex border-b border-white/10 bg-black/40 px-3">
                    {["App.tsx", "package.json", "README.md"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex items-center gap-1.5 border-b-2 px-4 py-2.5 text-xs font-mono transition-all duration-300 ${
                          activeTab === tab 
                            ? "border-purple-500 text-white bg-white/[0.03]" 
                            : "border-transparent text-white/50 hover:text-white/80 hover:bg-white/[0.01]"
                        }`}
                      >
                        <span className={tab === "App.tsx" ? "text-cyan-400" : tab === "package.json" ? "text-yellow-400" : "text-emerald-400"}>
                          {tab === "App.tsx" ? "TS" : tab === "package.json" ? "{}" : "md"}
                        </span>
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Code Screen */}
                  <div className="flex-1 flex flex-col bg-black/60 font-mono text-[11px] sm:text-xs leading-relaxed text-white/80 overflow-y-auto p-4 select-text">
                    {activeTab === "App.tsx" && (
                      <div className="space-y-4">
                        <div>
                          <span className="text-purple-400">import</span> {"{"} <span className="text-cyan-400">Developer</span> {"}"} <span className="text-purple-400">from</span> <span className="text-emerald-300">"@/profile"</span>;
                          <br />
                          <span className="text-purple-400">import</span> {"{"} <span className="text-cyan-400">Stack</span> {"}"} <span className="text-purple-400">from</span> <span className="text-emerald-300">"@/stack"</span>;
                        </div>

                        <div>
                          <span className="text-purple-400">const</span> <span className="text-yellow-300">ProjectConfig</span> = {"{"}
                          <div className="pl-4">
                            name: <span className="text-emerald-300">"{selectedProject.title}"</span>,
                            <br />
                            role: <span className="text-emerald-300">"{selectedProject.role}"</span>,
                            <br />
                            year: <span className="text-emerald-300">"{selectedProject.year}"</span>,
                            <br />
                            stack: [
                            {selectedProject.stack.map((s, idx) => (
                              <span key={s}>
                                <span className="text-emerald-300">"{s}"</span>
                                {idx < selectedProject.stack.length - 1 ? ", " : ""}
                              </span>
                            ))}
                            ]
                          </div>
                          {"};"}
                        </div>

                        <div>
                          <span className="text-purple-400">export default function</span> <span className="text-yellow-300">showcase</span>() {"{"}
                          <div className="pl-4 text-white/60">
                            <span className="text-purple-400">return</span> (
                            <div className="pl-4 space-y-2">
                              <div>
                                <span className="text-white/40">&lt;</span>
                                <span className="text-purple-300">Highlights</span>
                                <span className="text-white/40">&gt;</span>
                                <ul className="pl-4 text-white/80 space-y-1">
                                  {selectedProject.highlights.map((h, i) => (
                                    <li key={i} className="list-disc">
                                      <span className="text-emerald-300">{h}</span>
                                    </li>
                                  ))}
                                </ul>
                                <span className="text-white/40">&lt;/</span>
                                <span className="text-purple-300">Highlights</span>
                                <span className="text-white/40">&gt;</span>
                              </div>
                            </div>
                            );
                          </div>
                          {"}"}
                        </div>
                      </div>
                    )}

                    {activeTab === "package.json" && (
                      <div className="space-y-1">
                        <div>{"{"}</div>
                        <div className="pl-4">
                          <span className="text-purple-300">"name"</span>: <span className="text-emerald-300">"{selectedProject.slug}"</span>,
                          <br />
                          <span className="text-purple-300">"version"</span>: <span className="text-emerald-300">"1.0.0"</span>,
                          <br />
                          <span className="text-purple-300">"dependencies"</span>: {"{"}
                          <div className="pl-4">
                            {selectedProject.stack.map((s, idx) => (
                              <div key={s}>
                                <span className="text-cyan-300">"{s.toLowerCase()}"</span>: <span className="text-emerald-300">"^latest"</span>
                                {idx < selectedProject.stack.length - 1 ? "," : ""}
                              </div>
                            ))}
                          </div>
                          {"}"}
                        </div>
                        <div>{"}"}</div>
                      </div>
                    )}

                    {activeTab === "README.md" && (
                      <div className="space-y-4 font-sans text-sm text-white/90">
                        <h1 className="text-2xl font-bold border-b border-white/10 pb-2 text-white">
                          # {selectedProject.title}
                        </h1>
                        <p className="text-white/70 leading-relaxed text-sm">
                          {selectedProject.description}
                        </p>
                        
                        <h3 className="text-base font-semibold text-white">Key Features</h3>
                        <ul className="list-disc pl-5 space-y-1 text-white/70 text-sm">
                          {selectedProject.features.map((f, i) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
