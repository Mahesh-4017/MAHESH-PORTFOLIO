"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Code2, Gauge } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

type HeroProps = {
  name?: string;
  role?: string;
  location?: string;
  summary?: string;
};

const SKILLS = [
  "Next.js",
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
];

// Helper to remove white/grey backgrounds from images on the client side using BFS flood fill
const processTransparentImage = (src: string): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        resolve(src);
        return;
      }
      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      const width = canvas.width;
      const height = canvas.height;

      // Target background color is RGB(247, 247, 247)
      const targetR = 247;
      const targetG = 247;
      const targetB = 247;
      const maxDist = 35; // Maximum distance to consider as background

      // visited array to keep track of background pixels
      const visited = new Uint8Array(width * height);
      const queue: number[] = [];

      const getPixelIndex = (x: number, y: number) => (y * width + x) * 4;

      // Helper to check color similarity
      const isBgColor = (r: number, g: number, b: number) => {
        const dist = Math.sqrt((r - targetR) ** 2 + (g - targetG) ** 2 + (b - targetB) ** 2);
        return dist < maxDist;
      };

      // Add all border pixels to queue if they match the background color
      for (let x = 0; x < width; x++) {
        const idxTop = getPixelIndex(x, 0);
        if (isBgColor(data[idxTop], data[idxTop + 1], data[idxTop + 2])) {
          visited[0 * width + x] = 1;
          queue.push(x, 0);
        }
        const idxBot = getPixelIndex(x, height - 1);
        if (isBgColor(data[idxBot], data[idxBot + 1], data[idxBot + 2])) {
          visited[(height - 1) * width + x] = 1;
          queue.push(x, height - 1);
        }
      }
      for (let y = 0; y < height; y++) {
        const idxLeft = getPixelIndex(0, y);
        if (isBgColor(data[idxLeft], data[idxLeft + 1], data[idxLeft + 2])) {
          if (!visited[y * width + 0]) {
            visited[y * width + 0] = 1;
            queue.push(0, y);
          }
        }
        const idxRight = getPixelIndex(width - 1, y);
        if (isBgColor(data[idxRight], data[idxRight + 1], data[idxRight + 2])) {
          if (!visited[y * width + (width - 1)]) {
            visited[y * width + (width - 1)] = 1;
            queue.push(width - 1, y);
          }
        }
      }

      // BFS to find all connected background pixels (prevents keying out details inside the subject)
      let head = 0;
      const dx = [0, 0, 1, -1];
      const dy = [1, -1, 0, 0];

      while (head < queue.length) {
        const cx = queue[head++];
        const cy = queue[head++];

        for (let i = 0; i < 4; i++) {
          const nx = cx + dx[i];
          const ny = cy + dy[i];

          if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
            const vIdx = ny * width + nx;
            if (visited[vIdx] === 0) {
              const pIdx = vIdx * 4;
              if (isBgColor(data[pIdx], data[pIdx + 1], data[pIdx + 2])) {
                visited[vIdx] = 1;
                queue.push(nx, ny);
              }
            }
          }
        }
      }

      // Create edge arrays to track outline pixels for erosion and feathering
      const edge1 = new Uint8Array(width * height);
      const edge2 = new Uint8Array(width * height);

      // Find edge1: subject pixels (visited === 0) adjacent to background (visited === 1)
      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          const idx = y * width + x;
          if (visited[idx] === 0) {
            if (
              visited[idx - 1] === 1 ||
              visited[idx + 1] === 1 ||
              visited[idx - width] === 1 ||
              visited[idx + width] === 1
            ) {
              edge1[idx] = 1;
            }
          }
        }
      }

      // Find edge2: subject pixels (visited === 0 and edge1 === 0) adjacent to edge1
      for (let y = 2; y < height - 2; y++) {
        for (let x = 2; x < width - 2; x++) {
          const idx = y * width + x;
          if (visited[idx] === 0 && edge1[idx] === 0) {
            if (
              edge1[idx - 1] === 1 ||
              edge1[idx + 1] === 1 ||
              edge1[idx - width] === 1 ||
              edge1[idx + width] === 1
            ) {
              edge2[idx] = 1;
            }
          }
        }
      }

      // Modify alpha of visited background pixels and apply erosion/feathering to edge pixels
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const vIdx = y * width + x;
          const pIdx = vIdx * 4;

          if (visited[vIdx] === 1) {
            data[pIdx + 3] = 0;
          } else if (edge1[vIdx] === 1) {
            data[pIdx + 3] = 0;
          } else if (edge2[vIdx] === 1) {
            data[pIdx + 3] = Math.round(data[pIdx + 3] * 0.3);
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);
      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = () => {
      resolve(src);
    };
  });
};

export default function Hero({
  name = "Mahesh",
  role = "Full Stack Developer",
  summary = "I build fast web products with clean UI, predictable code, and real performance. No bloated libraries, no messy hacks.",
}: HeroProps) {
  const [processedSuit, setProcessedSuit] = useState("/images/mahesh-suit.jpg");
  const [processedRacer, setProcessedRacer] = useState("/images/mahesh-racer.jpg");
  const [persona, setPersona] = useState<"dev" | "racer">("dev");

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 150, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 22 });

  const widget1X = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 22 });
  const widget1Y = useSpring(useTransform(y, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 22 });

  const widget2X = useSpring(useTransform(x, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 22 });
  const widget2Y = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 22 });

  useEffect(() => {
    processTransparentImage("/images/mahesh-suit.jpg").then(setProcessedSuit);
    processTransparentImage("/images/mahesh-racer.jpg").then(setProcessedRacer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const normX = (e.clientX - rect.left) / width - 0.5;
    const normY = (e.clientY - rect.top) / height - 0.5;
    x.set(normX);
    y.set(normY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* MOBILE BACKGROUND (NO BLUE) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 md:hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_38%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.12),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:26px_26px]" />
      </div>

      {/* DESKTOP BACKGROUND (NO BLUE - CONIC USES PURPLE/PINK/EMERALD/YELLOW) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[conic-gradient(from_180deg,#a855f7,#ec4899,#ffb700,#34d399,#a855f7)] opacity-60 blur-3xl" />
        <div className="absolute -bottom-56 -right-56 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_60%)] opacity-30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-8 sm:px-6 md:gap-14 md:px-6 md:py-1 lg:grid-cols-2">
        {/* LEFT PANEL */}
        <div className="order-1 flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/75 backdrop-blur sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance and full time
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-5xl md:mt-6 md:text-6xl lg:text-7xl">
            {name}
            <span className="mt-2 block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent">{role}</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            {summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <span
                key={s}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/80 font-medium sm:text-xs"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="/projects"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/95 hover:scale-[1.02]"
            >
              View Projects
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 hover:scale-[1.02]"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* RIGHT PANEL (3D PERSPECTIVE CARD DECK & FLOATING WIDGETS) */}
        <div className="order-2 relative flex items-center justify-center min-h-[650px] lg:justify-end select-none">
          {/* Dynamic Background Glow circle that shifts color depending on persona */}
          <div className="absolute -inset-4 -z-10 flex items-center justify-center pointer-events-none">
            <div
              className={`h-[380px] w-[380px] rounded-full blur-[80px] opacity-40 transition-all duration-1000 ${persona === "dev"
                ? "bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600"
                : "bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500"
                }`}
            />
          </div>

          {/* Perspective Wrapper Container */}
          <div className="relative w-full max-w-[420px] flex items-center justify-center" style={{ perspective: "1000px" }}>

            {/* Main Interactive 3D Card */}
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => setPersona(persona === "dev" ? "racer" : "dev")}
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d",
              }}
              className={`relative h-[560px] w-full rounded-[2.5rem] border p-6 flex flex-col justify-between overflow-visible transition-all duration-500 shadow-2xl cursor-pointer ${persona === "dev"
                ? "border-cyan-500/20 bg-gradient-to-b from-black/80 to-cyan-950/10 hover:border-cyan-400/40 shadow-cyan-500/5"
                : "border-pink-500/20 bg-gradient-to-b from-black/80 to-pink-950/10 hover:border-pink-400/40 shadow-pink-500/5"
                }`}
            >
              {/* Persona Tab Switcher - Floating on top of the card */}
              <div
                onClick={(e) => e.stopPropagation()} // Stop click from triggering parent card toggle
                className="absolute top-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1 rounded-full border border-white/10 bg-black/60 p-1 backdrop-blur-md"
              >
                <button
                  onClick={() => setPersona("dev")}
                  className={`relative rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${persona === "dev" ? "text-cyan-400" : "text-white/60 hover:text-white"
                    }`}
                >
                  {persona === "dev" && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 rounded-full bg-cyan-500/10 border border-cyan-500/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  Developer
                </button>
                <button
                  onClick={() => setPersona("racer")}
                  className={`relative rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${persona === "racer" ? "text-pink-400" : "text-white/60 hover:text-white"
                    }`}
                >
                  {persona === "racer" && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 rounded-full bg-pink-500/10 border border-pink-500/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  Racer
                </button>
              </div>

              {/* Main Image Layer Stack (cut-out portraits) */}
              <div
                className="absolute inset-2 rounded-[2rem] overflow-hidden bg-black/20"
                style={{ transform: "translateZ(0px)" }}
              >
                {/* Developer Persona (Suit) */}
                <motion.img
                  src={processedSuit}
                  alt="Mahesh Developer"
                  animate={{
                    opacity: persona === "dev" ? 1 : 0,
                    scale: persona === "dev" ? 1 : 1.05,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover object-bottom animate-none"
                />

                {/* Racer Persona (Racing Suit) */}
                <motion.img
                  src={processedRacer}
                  alt="Mahesh Racer"
                  animate={{
                    opacity: persona === "racer" ? 1 : 0,
                    scale: persona === "racer" ? 1 : 1.05,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover object-bottom"
                />

                {/* Dark Vignette Overlay for Premium Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />
              </div>

              {/* Decorative HUD Elements inside the card */}
              <div className="absolute top-5 left-5 text-[9px] font-mono text-white/30 tracking-widest uppercase pointer-events-none">
                SYS.LOC // 2026.08
              </div>
              <div className="absolute top-5 right-5 text-[9px] font-mono text-white/30 tracking-widest uppercase pointer-events-none">
                {persona === "dev" ? "DEV_MODE" : "RACE_MODE"}
              </div>

              {/* Dynamic Status Tag (Bottom Left) */}
              <div className="absolute bottom-6 left-6 z-20 rounded-xl border border-white/10 bg-black/75 px-4 py-2.5 backdrop-blur-md transition-all duration-300">
                {persona === "dev" ? (
                  <div className="font-mono text-[9px] font-semibold tracking-widest text-white/90 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    MAHESH // SOFTWARE.EXE
                  </div>
                ) : (
                  <div className="font-mono text-[9px] font-semibold tracking-widest text-pink-400 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-pink-500 animate-ping" />
                    SPEEDMODE // ACTIVE
                  </div>
                )}
              </div>

              {/* Interactive Help Indicator (Bottom Right) */}
              <div className="absolute bottom-7 right-7 z-20 font-mono text-[8px] text-white/20 uppercase tracking-widest pointer-events-none">
                Click to flip
              </div>
            </motion.div>

            {/* FLOATING WIDGET 1: Developer Code Config (Floats on Top-Right of Card) */}
            <motion.div
              style={{
                x: widget1X,
                y: widget1Y,
                transform: "translateZ(50px)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: persona === "dev" ? 1 : 0,
                scale: persona === "dev" ? 1 : 0.8,
                pointerEvents: persona === "dev" ? "auto" : "none",
              }}
              transition={{ duration: 0.4 }}
              className="hidden sm:block absolute -right-10 bottom-12 z-20 w-64 rounded-2xl border border-cyan-500/20 bg-black/85 p-4 shadow-xl shadow-cyan-500/5 backdrop-blur-md"
            >
              <div className="mb-2.5 flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-500/80" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
                  <span className="h-2 w-2 rounded-full bg-green-500/80" />
                  <span className="ml-1 text-[9px] font-mono text-white/40">mahesh.ts</span>
                </div>
                <Code2 size={11} className="text-cyan-400" />
              </div>
              <pre className="font-mono text-[10px] leading-relaxed text-white/90">
                <div>
                  <span className="text-pink-400 font-medium">const</span>{" "}
                  <span className="text-cyan-400 font-medium">engineer</span> = &#123;
                </div>
                <div className="pl-3.5">
                  role: <span className="text-amber-300">"Frontend"</span>,
                </div>
                <div className="pl-3.5">
                  stack: [<span className="text-emerald-400">"Next"</span>,{" "}
                  <span className="text-emerald-400">"TS"</span>],
                </div>
                <div className="pl-3.5">
                  speed: <span className="text-purple-400">"Optimized"</span>,
                </div>
                <div className="pl-3.5">
                  ux: <span className="text-rose-400">"Premium"</span>
                </div>
                <div>&#125;;</div>
              </pre>
            </motion.div>

            {/* FLOATING WIDGET 2: Racer Telemetry Status (Floats on Bottom-Left of Card) */}
            <motion.div
              style={{
                x: widget2X,
                y: widget2Y,
                transform: "translateZ(60px)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: persona === "racer" ? 1 : 0,
                scale: persona === "racer" ? 1 : 0.8,
                pointerEvents: persona === "racer" ? "auto" : "none",
              }}
              transition={{ duration: 0.4 }}
              className="hidden sm:block absolute -left-12 bottom-12 z-20 w-64 rounded-2xl border border-pink-500/20 bg-black/85 p-4 shadow-xl shadow-pink-500/5 backdrop-blur-md"
            >
              <div className="mb-3 flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pink-500" />
                  </span>
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-pink-400">
                    Live Telemetry
                  </span>
                </div>
                <Gauge size={11} className="text-pink-400" />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="rounded-xl bg-white/5 p-2 border border-white/5">
                  <div className="font-mono text-[8px] uppercase tracking-wider text-white/40">
                    Velocity
                  </div>
                  <div className="flex items-baseline gap-0.5">
                    <span className="font-mono text-base font-bold text-white">262</span>
                    <span className="font-mono text-[7px] text-pink-400">KM/H</span>
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 p-2 border border-white/5">
                  <div className="font-mono text-[8px] uppercase tracking-wider text-white/40">
                    Trans
                  </div>
                  <div className="flex items-baseline gap-0.5">
                    <span className="font-mono text-base font-bold text-white">6</span>
                    <span className="font-mono text-[7px] text-amber-400">GEAR</span>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <div className="mb-1 flex justify-between font-mono text-[8px] uppercase tracking-wider text-white/40">
                  <span>Engine Speed</span>
                  <span className="text-pink-400">11.8K RPM</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    animate={{ width: ["82%", "94%", "87%"] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-pink-500 to-amber-500"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}