/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/jsx-no-comment-textnodes */
import Container from "./Container";
import { site } from "@/content/site";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-black">
      
      {/* glowing line */}
      <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60"></div>

      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-wide">
              {site.name}
            </h2>

            <p className="text-gray-400 max-w-sm">
              Building modern web experiences with scalable architecture,
              performance focused engineering, and beautiful UI.
            </p>

            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} {site.name}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Navigation</h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                // eslint-disable-next-line @next/next/no-html-link-for-pages
                <a className="hover:text-white transition-colors duration-300" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors duration-300" href="/projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors duration-300" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors duration-300" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Connect</h3>

            <div className="flex gap-5">

              <a
                href={site.links.github}
                target="_blank"
                className="group p-3 rounded-xl border border-white/10 hover:border-purple-500 transition"
              >
                <Github className="text-gray-400 group-hover:text-white transition" size={20} />
              </a>

              <a
                href={site.links.linkedin}
                target="_blank"
                className="group p-3 rounded-xl border border-white/10 hover:border-blue-500 transition"
              >
                <Linkedin className="text-gray-400 group-hover:text-white transition" size={20} />
              </a>

              <a
                href={`mailto:${site.email}`}
                className="group p-3 rounded-xl border border-white/10 hover:border-green-500 transition"
              >
                <Mail className="text-gray-400 group-hover:text-white transition" size={20} />
              </a>

            </div>

            <p className="text-gray-500 text-sm">
              Available for freelance and collaborations
            </p>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-16 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
          <p>Designed & Built with Next.js + Tailwind</p>
          <p className="opacity-70">Made with precision</p>
        </div>

      </Container>
    </footer>
  );
}