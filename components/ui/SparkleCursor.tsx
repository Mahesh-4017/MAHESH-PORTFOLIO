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

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "1";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d", { alpha: true })!; // force non-null

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    function nextHue() {
      hueRef.current = (hueRef.current + 4) % 360;
      return hueRef.current;
    }

    function addRipple(x: number, y: number, strong = false) {
      ripplesRef.current.push({
        x,
        y,
        r: strong ? 19 : 12,
        a: strong ? 0.55 : 0.5,
        s: strong ? 8 : 5,
        w: strong ? 9 : 6,
        hue: nextHue(),
      });

      if (ripplesRef.current.length > 50) {
        ripplesRef.current.shift();
      }
    }

    function onMove(e: PointerEvent) {
      addRipple(e.clientX, e.clientY, false);
    }

    function onDown(e: PointerEvent) {
      addRipple(e.clientX, e.clientY, true);
      addRipple(e.clientX, e.clientY, true);
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });

    let raf = 0;

    function draw() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.filter = "blur(0.2px)";

      const ripples = ripplesRef.current;

      for (let i = ripples.length - 1; i >= 0; i--) {
        const p = ripples[i];

        p.r += p.s;
        p.a -= 0.008;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(270, 100%, 70%, ${Math.max(p.a * 1.3, 0)})`;
        ctx.stroke();

        if (p.a <= 0) {
          ripples.splice(i, 1);
        }
      }

      ctx.restore();
      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      canvas.remove();
    };
  }, []);

  return null;
}