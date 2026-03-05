import Container from "@/components/layout/Container";
import Link from "next/link";

const HIGHLIGHTS = [
  { title: "Fast UI", desc: "Core Web Vitals focused. No heavy junk shipped to the browser." },
  { title: "Clean Code", desc: "Predictable components, readable structure, scalable patterns." },
  { title: "SEO Ready", desc: "Correct headings, metadata ready, and real content structure." },
  { title: "Production Stack", desc: "Next.js, React, Node, MongoDB. Deployments that don’t break." },
];

const SKILLS = [
  "React", "Next.js", "TypeScript", "Tailwind", "Node.js", "MongoDB",
  "Express", "REST APIs", "Auth", "Stripe", "Git", "Docker",
];

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* PROOF STRIP */}
      <section className="border-t border-white/10 bg-black">
        <Container className="py-10">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs text-white/60">Focus</p>
              <p className="mt-2 text-lg font-semibold">Performance first</p>
              <p className="mt-2 text-sm text-white/70">
                You already saw Lighthouse. This site is built to score high.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs text-white/60">Delivery</p>
              <p className="mt-2 text-lg font-semibold">Ship, measure, improve</p>
              <p className="mt-2 text-sm text-white/70">
                Build fast, test real users, then iterate.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs text-white/60">Quality</p>
              <p className="mt-2 text-lg font-semibold">No messy hacks</p>
              <p className="mt-2 text-sm text-white/70">
                Maintainable code that doesn’t collapse when features grow.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-black">
        <Container className="py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold">What I actually deliver</h2>
            <p className="mt-3 text-white/70">
              Not “beautiful UI” marketing. Real output that matters in production.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {HIGHLIGHTS.map((x) => (
              <div
                key={x.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur"
              >
                <p className="text-xl font-semibold">{x.title}</p>
                <p className="mt-2 text-white/70">{x.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SKILLS */}
      <section className="border-y border-white/10 bg-black">
        <Container className="py-14">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-2xl font-semibold">Stack</h3>
              <p className="mt-2 text-white/70">
                Tools I use for production apps, not tutorials.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-black">
        <Container className="py-16">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <h3 className="text-3xl font-semibold">Need a site or product built?</h3>
            <p className="mt-3 text-white/70">
              Portfolio, landing page, admin panel, or full app. Clean build, fast delivery.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/projects"
                className="rounded-xl bg-[#9B59B6] px-6 py-3 text-sm font-medium text-black hover:bg-[#FFB800] transition"
              >
                View Projects
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <Container className="py-10">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Mahesh. Built with Next.js.
          </p>
        </Container>
      </footer>
    </main>
  );
}