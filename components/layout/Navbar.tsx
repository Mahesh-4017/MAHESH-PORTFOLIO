"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Container from "./Container";
import { site } from "@/content/site";
import { Github, Linkedin, Instagram, Search, LogIn } from "lucide-react";
import "@/app/globals.css";

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
      <div className="absolute inset-0 -z-10 border-b border-white/10 bg-gradient-to-b from-black/80 via-black/60 to-transparent backdrop-blur-xl" />

      <Container className="py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3">
          {/* LOGO */}
          <Link
            href="/"
            className="shrink-0 text-lg font-extrabold tracking-tight text-white drop-shadow-[0_0_12px_rgba(168,85,247,0.6)] transition-all duration-500 hover:scale-105 sm:text-2xl"
          >
            {site.name}
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex lg:gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-1 py-2 text-gray-200 transition duration-300 hover:text-white"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* DESKTOP SEARCH */}
            <form
              onSubmit={onSearchSubmit}
              className="group hidden items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 transition-all duration-500 md:flex md:w-10 md:hover:w-52 md:focus-within:w-60"
            >
              <Search size={18} className="shrink-0 text-white" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search articles..."
                className="ml-2 w-0 bg-transparent text-sm text-white outline-none placeholder:text-gray-400 transition-all duration-500 md:group-hover:w-32 md:group-focus-within:w-40"
              />
            </form>

            {/* SOCIAL ICONS */}
            <div className="hidden items-center gap-2 sm:flex">
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
                  className="rounded-full p-2 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]"
                  aria-label="social"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* RESUME BUTTON */}
            <a
              href="/Mahesh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.9)] md:inline-flex"
            >
              Resume
            </a>

            {/* LOGIN ICON */}
            <Link
              href="/login"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]"
            >
              <LogIn size={18} />
            </Link>
          </div>
        </div>

        {/* MOBILE SEARCH */}
        <form
          onSubmit={onSearchSubmit}
          className="mt-3 flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 md:hidden"
        >
          <Search size={18} className="shrink-0 text-white" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search articles..."
            className="ml-2 w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-400"
          />
        </form>

        {/* MOBILE NAV */}
        <div className="mt-3 border-t border-white/10 pt-3 md:hidden">
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}