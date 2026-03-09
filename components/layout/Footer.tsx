import Link from "next/link";
import Container from "./Container";
import { site } from "@/content/site";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-black text-white">
      {/* background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-70" />
      </div>

      <Container className="relative py-12 sm:py-16">
        {/* top section */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr_0.9fr]">
          {/* brand block */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">
              Portfolio
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
              {site.name}
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
              Building modern web experiences with scalable architecture,
              sharp performance, and UI that does not collapse under real use.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
              >
                View Work
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* navigation card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
              Navigation
            </h3>

            <div className="mt-5 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/70 transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight
                    size={16}
                    className="opacity-50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* connect card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
              Connect
            </h3>

            <div className="mt-5 flex gap-3">
              <a
                href={site.links.github}
                target="_blank"
                rel="noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition hover:border-fuchsia-500/50 hover:bg-white/[0.08]"
                aria-label="GitHub"
              >
                <Github
                  size={18}
                  className="text-white/70 transition group-hover:text-white"
                />
              </a>

              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition hover:border-cyan-500/50 hover:bg-white/[0.08]"
                aria-label="LinkedIn"
              >
                <Linkedin
                  size={18}
                  className="text-white/70 transition group-hover:text-white"
                />
              </a>

              <a
                href={`mailto:${site.email}`}
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition hover:border-emerald-500/50 hover:bg-white/[0.08]"
                aria-label="Email"
              >
                <Mail
                  size={18}
                  className="text-white/70 transition group-hover:text-white"
                />
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                Status
              </p>
              <div className="mt-2 flex items-center gap-2 text-sm text-white/75">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                Available for freelance and collaborations
              </div>
              <p className="mt-3 break-all text-sm text-white/55">{site.email}</p>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Built with Next.js and Tailwind CSS</p>
        </div>
      </Container>
    </footer>
  );
}