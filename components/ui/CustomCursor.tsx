"use client";

import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "link" | "external" | "text";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const [mode, setMode] = useState<CursorMode>("default");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    document.body.style.cursor = "none";

    const handleMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX}px`;
        cursorRef.current.style.top = `${event.clientY}px`;
      }

      setVisible(true);

      const target = event.target as HTMLElement | null;

      const interactive = target?.closest(
        "a, button, [role='button']"
      );

      if (interactive) {
        const href = interactive.getAttribute("href");

        if (
          href?.startsWith("http") ||
          interactive.getAttribute("target") === "_blank"
        ) {
          setMode("external");
        } else {
          setMode("link");
        }

        return;
      }

      const input = target?.closest(
        "input, textarea, [contenteditable='true']"
      );

      if (input) {
        setMode("text");
        return;
      }

      setMode("default");
    };

    const handleLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      document.body.style.cursor = "";

      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const icon = {
    default: ".",
    link: "",
    external: "",
    text: "",
  }[mode];

  const color = {
    default: "text-white",
    link: "text-white",
    external: "text-emerald-400",
    text: "text-white/60",
  }[mode];

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`pointer-events-none fixed z-[99999] hidden -translate-x-1/2 -translate-y-1/2 md:block ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <span
        className={`text-lg font-medium leading-none ${color}`}
      >
        {icon}
      </span>
    </div>
  );
}