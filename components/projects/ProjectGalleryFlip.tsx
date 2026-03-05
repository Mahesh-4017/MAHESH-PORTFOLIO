"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  title: string;
};

export default function ProjectGallery({ images, title }: Props) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const timerRef = useRef<number | null>(null);

  // Keep active valid if images length changes
  useEffect(() => {
    if (!images?.length) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (active > images.length - 1) setActive(0);
  }, [images.length, active]);

  const goTo = useCallback(
    (index: number) => {
      if (!images?.length) return;
      const next = ((index % images.length) + images.length) % images.length;
      setActive((prev) => (prev === next ? prev : next));
    },
    [images]
  );

  const next = useCallback(() => {
    if (!images?.length) return;
    setActive((prev) => (prev + 1) % images.length);
  }, [images]);

  const prev = useCallback(() => {
    if (!images?.length) return;
    setActive((prev) => (prev - 1 + images.length) % images.length);
  }, [images]);

  // Autoplay: create interval once, avoid rebuild on every active change
  useEffect(() => {
    if (!images?.length) return;

    if (timerRef.current) window.clearInterval(timerRef.current);

    if (!paused && images.length > 1) {
      timerRef.current = window.setInterval(() => {
        // functional update avoids stale active
        setActive((prev) => (prev + 1) % images.length);
      }, 3000);
    }

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [paused, images.length]);

  if (!images?.length) return null;

  return (
    <div
      className="grid gap-6 lg:grid-cols-[1fr_280px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* MAIN IMAGE */}
      <div className="rounded-2xl border border-white/10 p-3 bg-white/[0.03]">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
          <div className="relative w-full h-full">
            <Image
              src={images[active]}
              alt={`${title} ${active + 1}`}
              fill
              className="object-cover"
              // DO NOT always use priority; it hurts performance if this is below the fold
              priority={false}
              sizes="(min-width: 1024px) 700px, 100vw"
            />
          </div>

          <div className="absolute bottom-3 left-3 text-xs text-white bg-black/40 px-3 py-1 rounded-full">
            {active + 1} / {images.length}
          </div>
        </div>

        <div className="flex gap-3 mt-3">
          <button
            onClick={prev}
            className="px-4 py-2 text-sm bg-white/10 rounded hover:bg-white/20"
          >
            Prev
          </button>

          <button
            onClick={next}
            className="px-4 py-2 text-sm bg-white/10 rounded hover:bg-white/20"
          >
            Next
          </button>

          <button
            onClick={() => setPaused((p) => !p)}
            className="px-4 py-2 text-sm bg-white text-black rounded"
          >
            {paused ? "Resume" : "Pause"}
          </button>
        </div>
      </div>

      {/* THUMBNAILS */}
      <div className="grid grid-cols-3 gap-3 max-h-[450px] overflow-y-auto">
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => goTo(i)}
            className={`relative rounded-lg overflow-hidden border ${
              i === active
                ? "border-white"
                : "border-white/20 hover:border-white/40"
            }`}
          >
            <div className="relative aspect-square w-full">
              <Image
                src={src}
                alt={`${title} thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="120px"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}