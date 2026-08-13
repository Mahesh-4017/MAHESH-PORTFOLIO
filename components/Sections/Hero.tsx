"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
  "Python",
  "Django",
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

      // Modify alpha of visited background pixels with a soft edge transition
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const vIdx = y * width + x;
          if (visited[vIdx] === 1) {
            const pIdx = vIdx * 4;
            const r = data[pIdx];
            const g = data[pIdx + 1];
            const b = data[pIdx + 2];
            const dist = Math.sqrt((r - targetR) ** 2 + (g - targetG) ** 2 + (b - targetB) ** 2);
            
            const minDist = 10;
            if (dist <= minDist) {
              data[pIdx + 3] = 0;
            } else {
              const alphaFactor = (dist - minDist) / (maxDist - minDist);
              data[pIdx + 3] = Math.max(0, Math.min(255, Math.round(data[pIdx + 3] * alphaFactor)));
            }
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
  role = "Frontend Developer",
  summary = "I build fast web products with clean UI, predictable code, and real performance. No bloated libraries, no messy hacks.",
}: HeroProps) {
  const [processedSuit, setProcessedSuit] = useState("/images/mahesh-suit.jpg");
  const [processedRacer, setProcessedRacer] = useState("/images/mahesh-racer.jpg");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    processTransparentImage("/images/mahesh-suit.jpg").then(setProcessedSuit);
    processTransparentImage("/images/mahesh-racer.jpg").then(setProcessedRacer);
  }, []);

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

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-8 sm:px-6 md:gap-14 md:px-6 md:py-16 lg:grid-cols-2">
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

        {/* RIGHT PANEL (INCREASED SIZE & CLEAN TRANSPARENT BACKGROUND) */}
        <div className="order-2 relative flex items-center justify-center min-h-[580px]">
          {/* Sizable frame block containing the cut-out portraits - Completely borderless, no background color */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative h-[580px] w-full max-w-[440px] overflow-hidden group transition-all duration-700 flex items-center justify-center"
          >
            {/* Hover Image (Racer) with Liquid "Throw" circular clip-path transition */}
            <img
              src={processedRacer}
              alt="Mahesh Racing Mode"
              style={{
                clipPath: isHovered ? "circle(135% at 50% 50%)" : "circle(0% at 50% 85%)",
                transition: "clip-path 1.1s cubic-bezier(0.25, 1, 0.3, 1), transform 1.1s cubic-bezier(0.25, 1, 0.3, 1)",
              }}
              className="absolute inset-0 h-full w-auto mx-auto object-contain object-bottom scale-95 opacity-100"
            />

            {/* Default Image (Suit) */}
            <img
              src={processedSuit}
              alt="Mahesh Developer"
              style={{
                transition: "transform 1.1s cubic-bezier(0.25, 1, 0.3, 1), opacity 0.7s ease",
              }}
              className={`absolute inset-0 h-full w-auto mx-auto object-contain object-bottom ${
                isHovered ? "opacity-0 scale-90" : "opacity-100 scale-100"
              }`}
            />

            {/* Dynamic Status Tag */}
            <div className="absolute bottom-6 left-6 z-20 rounded-xl border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md transition-all duration-500 group-hover:border-pink-500/30">
              <div className="font-mono text-[10px] tracking-widest text-white/90 group-hover:hidden flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                MAHESH // DEV
              </div>
              <div className="font-mono text-[10px] tracking-widest text-pink-400 hidden group-hover:flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-400 animate-ping" />
                RACING MODE // ON
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}