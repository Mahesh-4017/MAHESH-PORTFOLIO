"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Monitor, Cpu, Keyboard, Volume2, Power, CheckCircle, Info } from "lucide-react";

type Hotspot = {
  id: string;
  name: string;
  top: string;
  left: string;
  icon: React.ElementType;
  title: string;
  specs: string[];
  color: string;
};

const HOTSPOTS: Hotspot[] = [
  {
    id: "monitors",
    name: "Workspace Display",
    top: "36%",
    left: "50%",
    icon: Monitor,
    title: "Triple QHD Display Setup",
    color: "from-blue-500 to-cyan-400",
    specs: [
      "3x 27\" QHD IPS Monitors (75Hz, Color-Accurate)",
      "Tokyo Night Storm theme on VS Code",
      "JetBrains Mono Nerd Font for optimal reading",
      "Custom layout for simultaneous dev & browser debugging"
    ]
  },
  {
    id: "rig",
    name: "Performance Engine",
    top: "52%",
    left: "81%",
    icon: Cpu,
    title: "Liquid Cooled Workstation",
    color: "from-purple-500 to-indigo-400",
    specs: [
      "CPU: AMD Ryzen 9 7900X (12 Cores / 24 Threads, 5.6GHz)",
      "GPU: NVIDIA GeForce RTX 4080 Super 16GB VRAM",
      "Memory: 64GB DDR5 G.Skill Trident Z5 6000MHz",
      "Storage: 2TB Samsung 990 Pro PCIe 4.0 NVMe SSD"
    ]
  },
  {
    id: "keyboard",
    name: "Input Station",
    top: "67%",
    left: "49%",
    icon: Keyboard,
    title: "Custom Mechanical Keyboard",
    color: "from-pink-500 to-rose-400",
    specs: [
      "Layout: GMMK Pro 75% Gasket Mount",
      "Switches: Gateron Brown Tactile (Lubed & Filmed)",
      "Keycaps: PBT Olivia Double-shot Cherry Profile",
      "Cable: Coiled Aviator Cable (Custom Ice Blue & Purple)"
    ]
  },
  {
    id: "audio",
    name: "Sound & Ambiance",
    top: "40%",
    left: "18%",
    icon: Volume2,
    title: "Audio & Acoustics Engine",
    color: "from-emerald-500 to-teal-400",
    specs: [
      "Speakers: Yamaha HS5 Active Studio Monitors",
      "DAC/Interface: Focusrite Scarlett Solo (4th Gen)",
      "Headphones: Beyerdynamic DT 990 Pro (250 Ohm Open-Back)",
      "Vibe: Lo-Fi beats & synthwave for focused programming"
    ]
  }
];

export default function Workspace() {
  const [isPowerOn, setIsPowerOn] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.4 };
  const moveX = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);
  const moveY = useSpring(useTransform(y, [-0.5, 0.5], [-15, 15]), springConfig);
  const tiltX = useSpring(useTransform(y, [-0.5, 0.5], [3, -3]), springConfig);
  const tiltY = useSpring(useTransform(x, [-0.5, 0.5], [-3, 3]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const relativeX = (mouseX / rect.width) - 0.5;
    const relativeY = (mouseY / rect.height) - 0.5;
    
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setActiveHotspot(null);
  };

  const togglePower = () => {
    setIsPowerOn(!isPowerOn);
    setActiveHotspot(null);
  };

  return (
    <section className="text-white py-16 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-[20%] top-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[20%] bottom-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-purple-400 font-medium block mb-2">
              Setup & Environment
            </span>
            <h2 className="text-3xl font-bold md:text-4xl bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
              My Coding Rig & Workspace
            </h2>
            <p className="mt-3 text-xs text-white/55 leading-relaxed">
              An immersive look at the environment where visual concepts turn into production-grade Next.js applications. 
              Hover over the pulsing hotspots to inspect my hardware specifications.
            </p>
          </div>

          {/* Power Control Widget */}
          <div className="flex items-center gap-3 bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-2.5 backdrop-blur-md self-start md:self-auto shadow-md">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Rig Status</span>
              <span className={`text-xs font-semibold ${isPowerOn ? "text-emerald-400" : "text-rose-400"}`}>
                {isPowerOn ? "ONLINE / ACTIVE" : "STANDBY / OFFLINE"}
              </span>
            </div>
            <button
              onClick={togglePower}
              className={`flex h-10 w-10 items-center justify-center rounded-lg border transition duration-300 ${
                isPowerOn
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                  : "bg-neutral-800 border-neutral-700 text-neutral-400 hover:text-white"
              }`}
              title={isPowerOn ? "Shut Down Rig" : "Power Up Rig"}
            >
              <Power size={18} className={isPowerOn ? "animate-pulse" : ""} />
            </button>
          </div>
        </div>

        {/* Workspace Visual Studio Container */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl cursor-default group"
          style={{
            perspective: 1000
          }}
        >
          {/* Parallax Image Wrapper */}
          <motion.div
            className="relative w-full h-full scale-[1.05]"
            style={{
              x: moveX,
              y: moveY,
              rotateX: tiltX,
              rotateY: tiltY
            }}
          >
            <Image
              src="/images/programming.png"
              alt="Developer Workspace"
              fill
              priority
              className={`object-cover select-none transition-all duration-700 ${
                isPowerOn 
                  ? "brightness-[0.8] contrast-[1.05] saturate-[1.1]" 
                  : "brightness-[0.2] contrast-[0.9] saturate-[0.3] filter grayscale-[60%]"
              }`}
            />

            {/* Ambient Screen Glow Overlay */}
            {isPowerOn && (
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-purple-500/5 mix-blend-screen pointer-events-none opacity-80" />
            )}
          </motion.div>

          {/* Vignette Gradients for Seamless Blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/80 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/80 to-transparent pointer-events-none" />

          {/* SYSTEM STANDBY OVERLAY (When Powered Off) */}
          <AnimatePresence>
            {!isPowerOn && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-xs pointer-events-none"
              >
                {/* CRT Scanline effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none" />
                
                <div className="flex flex-col items-center p-6 rounded-xl border border-neutral-800 bg-neutral-900/80 max-w-xs text-center backdrop-blur-sm pointer-events-auto">
                  <div className="h-2 w-2 rounded-full bg-rose-500 animate-ping mb-3" />
                  <span className="text-xs font-mono text-neutral-400 tracking-wider">WORKSPACE OFFLINE</span>
                  <p className="text-[10px] text-neutral-500 mt-2 leading-relaxed">
                    System specs are unavailable in standby mode. Click the power icon above to activate the rig.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* HOTSPOTS LAYER */}
          {isPowerOn && (
            <div className="absolute inset-0 z-20">
              {HOTSPOTS.map((hotspot) => {
                const Icon = hotspot.icon;
                const isActive = activeHotspot === hotspot.id;

                return (
                  <div
                    key={hotspot.id}
                    className="absolute"
                    style={{ top: hotspot.top, left: hotspot.left }}
                  >
                    {/* Hotspot Pulse Trigger */}
                    <button
                      className="relative -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-10 w-10 group/btn focus:outline-none"
                      onMouseEnter={() => setActiveHotspot(hotspot.id)}
                      onClick={() => setActiveHotspot(isActive ? null : hotspot.id)}
                    >
                      {/* Pulse Ring 1 */}
                      <span className={`absolute inline-flex h-7 w-7 rounded-full opacity-75 animate-ping bg-gradient-to-r ${hotspot.color}`} />
                      
                      {/* Pulse Ring 2 */}
                      <span className={`absolute inline-flex h-5 w-5 rounded-full opacity-60 bg-gradient-to-r ${hotspot.color} scale-110 group-hover/btn:scale-125 transition duration-300`} />
                      
                      {/* Center Point */}
                      <span className="relative flex h-3.5 w-3.5 rounded-full bg-white items-center justify-center shadow-md">
                        <span className={`h-1.5 w-1.5 rounded-full bg-neutral-950 group-hover/btn:bg-purple-600 transition`} />
                      </span>
                    </button>

                    {/* Tooltip Spec Card */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 10, x: "-50%" }}
                          animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
                          exit={{ opacity: 0, scale: 0.9, y: 10, x: "-50%" }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          onMouseLeave={() => setActiveHotspot(null)}
                          className="absolute bottom-6 left-0 z-30 w-72 rounded-xl border border-neutral-800 bg-neutral-950/90 p-4 shadow-2xl backdrop-blur-md pointer-events-auto"
                        >
                          {/* Card Header */}
                          <div className="flex items-center gap-2 border-b border-neutral-800 pb-2 mb-3">
                            <div className={`p-1.5 rounded-lg bg-gradient-to-r ${hotspot.color} text-white`}>
                              <Icon size={14} />
                            </div>
                            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                              {hotspot.title}
                            </h4>
                          </div>

                          {/* Specifications List */}
                          <ul className="space-y-2">
                            {hotspot.specs.map((spec, i) => (
                              <li key={i} className="flex items-start gap-2 text-[10px] text-neutral-300 leading-normal">
                                <span className="text-purple-400 mt-1 select-none">•</span>
                                <span>{spec}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Subtle Card Footer */}
                          <div className="mt-3 pt-2 border-t border-neutral-900 flex items-center justify-between text-[8px] font-mono text-neutral-500">
                            <span>{hotspot.name}</span>
                            <span className="flex items-center gap-0.5 text-purple-400/80">
                              <CheckCircle size={8} /> VERIFIED RIG
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}

          {/* Quick HUD Specs overlay at the bottom margin (For keyboard accessibility / visual aid) */}
          {isPowerOn && (
            <div className="absolute bottom-4 left-4 z-20 flex gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-neutral-950/80 border border-neutral-800 px-2.5 py-1 text-[9px] font-mono text-neutral-400 backdrop-blur-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                ACCELERATED WITH WEBGPU
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
