"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

export default function IntroPreloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [displayText, setDisplayText] = useState("............");
  const targetText = "MAHESH // DEV";

  useEffect(() => {
    // Check if splash has already played in this tab session
    const hasPlayed = sessionStorage.getItem("splash-played");
    if (hasPlayed === "true") {
      setIsVisible(false);
      return;
    }

    // 1. Progress Bar Interval
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Random incremental speed
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  // 2. Decoder Text Effect
  useEffect(() => {
    if (!isVisible) return;

    let iteration = 0;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    let interval: NodeJS.Timeout;

    // Start decoding text when progress starts
    if (progress > 5) {
      interval = setInterval(() => {
        setDisplayText((prev) =>
          targetText
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return targetText[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= targetText.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 35);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [progress, isVisible]);

  // 3. Hide Preloader after loaded
  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem("splash-played", "true");
      }, 800); // Small pause for dramatic effect
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  // Lock body scroll while loader is visible to prevent scrolling & hide headers
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: "-100vh",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black font-mono text-white"
        >
          {/* Ambient Glows */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />
          </div>

          <div className="w-full max-w-md px-6">
            {/* Command Header */}
            <div className="mb-8 flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
              <Terminal className="h-4 w-4 text-purple-400 animate-pulse" />
              <div className="flex flex-col text-[10px] text-white/55">
                <span>SYSTEM BOOTING</span>
                <span className="font-semibold text-purple-300">mahesh_os --v3.0.sh</span>
              </div>
            </div>

            {/* Display / Decode text */}
            <div className="text-center">
              <span className="text-[11px] uppercase tracking-[0.25em] text-white/40">
                Initializing Environment
              </span>
              <h1 className="mt-2 text-2xl font-black tracking-widest text-purple-400">
                {displayText}
              </h1>
            </div>

            {/* Progress Container */}
            <div className="mt-10">
              <div className="flex items-center justify-between text-[10px] text-white/50 mb-2">
                <span>LOADING DEPENDENCIES...</span>
                <span>{progress}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div 
                  className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Status indicators */}
            <div className="mt-8 flex justify-between border-t border-white/5 pt-4 text-[9px] text-white/35">
              <span>[OK] React core Loaded</span>
              <span>[OK] Node stack Ready</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
