"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

type Props = {
  images: string[];
  title: string;
};

export default function ProjectGalleryFlip({ images, title }: Props) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const imageCount = images?.length ?? 0;

  const safeActive = imageCount > 0 ? active % imageCount : 0;

  const goTo = useCallback(
    (index: number) => {
      if (!imageCount) return;
      const nextIndex = ((index % imageCount) + imageCount) % imageCount;
      setActive(nextIndex);
    },
    [imageCount]
  );

  const next = useCallback(() => {
    if (!imageCount) return;
    setActive((prev) => (prev + 1) % imageCount);
  }, [imageCount]);

  const prev = useCallback(() => {
    if (!imageCount) return;
    setActive((prev) => (prev - 1 + imageCount) % imageCount);
  }, [imageCount]);

  useEffect(() => {
    if (!imageCount) return;

    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (!paused && imageCount > 1) {
      timerRef.current = window.setInterval(() => {
        setActive((prev) => (prev + 1) % imageCount);
      }, 3500);
    }

    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [paused, imageCount]);

  if (!imageCount) return null;

  return (
    <div
      className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="absolute -left-10 top-0 h-36 w-36 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-36 w-36 rounded-full bg-cyan-500/20 blur-3xl" />
        </div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-[22px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={images[safeActive]}
              initial={{ opacity: 0, rotateY: -90, scale: 0.96 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: 90, scale: 0.96 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src={images[safeActive]}
                alt={`${title} ${safeActive + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 900px, 100vw"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

          <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs text-white/80 backdrop-blur">
            {title}
          </div>

          <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs text-white/80 backdrop-blur">
            {safeActive + 1} / {imageCount}
          </div>

          {imageCount > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur transition hover:scale-105 hover:bg-black/55"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={next}
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur transition hover:scale-105 hover:bg-black/55"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={prev}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10"
            >
              <ChevronLeft className="h-4 w-4" />
              Prev
            </button>

            <button
              onClick={next}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <button
            onClick={() => setPaused((p) => !p)}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:scale-[1.02]"
          >
            {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            {paused ? "Resume" : "Pause"}
          </button>
        </div>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-medium text-white/85">Preview</p>
          <p className="text-xs text-white/45">{imageCount} shots</p>
        </div>

        <div className="grid max-h-[560px] grid-cols-2 gap-3 overflow-y-auto pr-1 sm:grid-cols-3 lg:grid-cols-2">
          {images.map((src, i) => (
            <motion.button
              key={`${src}-${i}`}
              onClick={() => goTo(i)}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative overflow-hidden rounded-2xl border transition ${
                i === safeActive
                  ? "border-white shadow-[0_0_0_1px_rgba(255,255,255,0.5)]"
                  : "border-white/10 hover:border-white/30"
              }`}
              aria-label={`Go to image ${i + 1}`}
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={src}
                  alt={`${title} thumbnail ${i + 1}`}
                  fill
                  className={`object-cover transition duration-300 ${
                    i === safeActive ? "scale-105" : "group-hover:scale-105"
                  }`}
                  sizes="160px"
                />
                <div
                  className={`absolute inset-0 transition ${
                    i === safeActive
                      ? "bg-gradient-to-t from-black/20 to-transparent"
                      : "bg-black/20 group-hover:bg-black/10"
                  }`}
                />
              </div>

              <div className="absolute bottom-2 left-2 rounded-full bg-black/45 px-2 py-1 text-[10px] text-white/85 backdrop-blur">
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}