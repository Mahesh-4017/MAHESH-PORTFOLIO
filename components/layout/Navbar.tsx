"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Container from "./Container";
import { site } from "@/content/site";
import { Github, Linkedin, Instagram, Search, LogIn } from "lucide-react";
import "@/app/globals.css"

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const router = useRouter();
  const [q, setQ] = useState("");

  function onSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    const query = q.trim();
    if (!query) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
    setQ("");
  }

  return (
    <header className="sticky top-0 z-50">

      {/* GLASS BACKGROUND */}
      <div className="absolute inset-0 -z-10 backdrop-blur-xl bg-gradient-to-b from-black/80 via-black/60 to-transparent border-b border-white/10" />

      {/* GLOW LINE */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-full blur-sm" />

      <Container className="flex items-center justify-between py-4">

        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl links font-extrabold tracking-tight bg-clip-text text-red drop-shadow-[0_0_12px_rgba(168,85,247,0.6)] transition-all duration-500 hover:scale-110"
        >
          {site.name}
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className=" md:flex items-center gap-8 text-sm font-medium">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative group px-1 py-2 text-gray-200 transition duration-300 hover:text-white"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* EXPANDING SEARCH */}
          <form
            onSubmit={onSearchSubmit}
            className="group flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 transition-all duration-500 focus-within:w-64 w-10 hover:w-56"
          >
            <Search size={18} className="text-white shrink-0" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles..."
              className="ml-2 w-0 bg-transparent text-white outline-none placeholder:text-gray-400 transition-all duration-500 group-focus-within:w-44 group-hover:w-36"
            />
          </form>

          {/* SOCIAL ICONS */}
          <div className=" sm:flex items-center gap-2">
            {[
              { icon: Github, link: site.links.github },
              { icon: Linkedin, link: site.links.linkedin },
              { icon: Instagram, link: site.links.instagram ?? "#" },
            ].map(({ icon: Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="rounded-full p-2 text-gray-300 transition-all duration-300 hover:text-white hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]"
                aria-label="social"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* RESUME BUTTON (PRIMARY CTA) */}
          <a
            href="/MAHESH CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative  md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.9)]"
          >
            Resume
          </a>

          {/* LOGIN ICON */}
          <Link
            href="/login"
            className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white transition-all duration-300 hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]"
          >
            <LogIn size={18} />
          </Link>

        </div>
      </Container>

      {/* MOBILE NAVIGATION */}
      <div className="hidden border-t border-white/10 bg-black/60 backdrop-blur-xl">
        <Container className="flex gap-4 py-3 overflow-x-auto no-scrollbar">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="whitespace-nowrap rounded-full px-4 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition"
            >
              {i.label}
            </Link>
          ))}
        </Container>
      </div>

    </header>
  );
}