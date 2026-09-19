"use client";

import { useEffect, useRef } from "react";

type Ripple = {
  x: number;
  y: number;
  r: number;
  a: number;
  s: number;
  w: number;
  hue: number;
};

export default function LiquidCursor() {
  const ripplesRef = useRef<Ripple[]>([]);
  const hueRef = useRef(260);
  const lastMoveRef = useRef(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const canvas = document.createElement("canvas");

    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";

    canvas.setAttribute("aria-hidden", "true");

    document.body.appendChild(canvas);

    const context = canvas.getContext("2d");

    if (!context) {
      canvas.remove();
      return;
    }

    // TypeScript now knows ctx can never be null
    const ctx: CanvasRenderingContext2D = context;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();

    window.addEventListener("resize", resize);

    function nextHue() {
      hueRef.current = (hueRef.current + 3) % 360;
      return hueRef.current;
    }

    function addRipple(
      x: number,
      y: number,
      strong = false
    ) {
      ripplesRef.current.push({
        x,
        y,
        r: strong ? 5 : 2,
        a: strong ? 0.55 : 0.32,
        s: strong ? 5.5 : 3.5,
        w: strong ? 3 : 2,
        hue: nextHue(),
      });

      if (ripplesRef.current.length > 35) {
        ripplesRef.current.splice(
          0,
          ripplesRef.current.length - 35
        );
      }
    }

    function onMove(e: PointerEvent) {
      const now = performance.now();

      if (now - lastMoveRef.current < 22) {
        return;
      }

      lastMoveRef.current = now;

      addRipple(e.clientX, e.clientY);
    }

    function onDown(e: PointerEvent) {
      addRipple(e.clientX, e.clientY, true);
      addRipple(e.clientX, e.clientY, true);
    }

    window.addEventListener("pointermove", onMove, {
      passive: true,
    });

    window.addEventListener("pointerdown", onDown, {
      passive: true,
    });

    let animationFrame = 0;

    function draw() {
      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      ctx.save();

      ctx.globalCompositeOperation = "lighter";

      const ripples = ripplesRef.current;

      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];

        ripple.r += ripple.s;
        ripple.a -= 0.018;

        if (ripple.a <= 0) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.beginPath();

        ctx.arc(
          ripple.x,
          ripple.y,
          ripple.r,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle = `hsla(
          ${ripple.hue},
          90%,
          70%,
          ${ripple.a}
        )`;

        ctx.lineWidth = ripple.w;

        ctx.shadowBlur = 12;

        ctx.shadowColor = `hsla(
          ${ripple.hue},
          90%,
          65%,
          ${ripple.a * 0.8}
        )`;

        ctx.stroke();
      }

      ctx.restore();

      animationFrame = requestAnimationFrame(draw);
    }

    animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);

      canvas.remove();
    };
  }, []);

  return null;
}