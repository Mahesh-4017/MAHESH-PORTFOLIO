import Link from "next/link";
import { Github, Linkedin, Mail, Home, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import Container from "../../components/layout/Container";

export default function EndFooter() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black text-white">

      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.06] 
        [background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] 
        [background-size:40px_40px]" />

        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <Container className="relative py-24">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            End of page
          </p>

          <h2 className="mt-6 text-4xl font-semibold sm:text-5xl">
            You&apos;ve reached the end.
          </h2>

          <p className="mt-4 text-white/60">
            Nothing else down here. But you can still explore the rest of the
            portfolio or reach out.
          </p>

          {/* action buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              <Home size={18} />
              Back Home
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              View Projects
              <ArrowUpRight size={16} />
            </Link>

          </div>

          {/* socials */}
          <div className="mt-10 flex justify-center gap-4">

            <a
              href={site.links.github}
              target="_blank"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <Github size={18} />
            </a>

            <a
              href={site.links.linkedin}
              target="_blank"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href={`mailto:${site.email}`}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <Mail size={18} />
            </a>

          </div>

          <p className="mt-12 text-xs text-white/40">
            © {new Date().getFullYear()} {site.name}
          </p>

        </div>
      </Container>

      {/* floating corner icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="/"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur hover:scale-110 transition"
        >
          <Home size={18} />
        </Link>
      </div>

    </section>
  );
}