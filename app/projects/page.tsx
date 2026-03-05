import Link from "next/link";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 text-white">
      <h1 className="text-3xl font-semibold">Projects</h1>

      <div className="mt-8 grid gap-6">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="border border-white/10 p-6 rounded-xl hover:bg-white/5"
          >
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="text-white/60 mt-2">{p.summary}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}