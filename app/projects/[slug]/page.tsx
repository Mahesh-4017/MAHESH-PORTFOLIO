// Server Component (no 'use client')
import Container from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { notFound } from "next/navigation";
import ProjectGallery from "@/components/projects/ProjectGalleryFlip";
import { projects, type Project } from "@/content/projects";
import Image from "next/image";

// Note: motion removed; using CSS transitions instead


export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p: Project) => p.slug === slug);

  if (!project) return notFound();

  const images = project.images ?? ["/placeholder.png"];

  return (
    <Container className="py-12">
    <section className="relative mb-8 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="relative aspect-[16/9]">
        <Image
          src={images?.[0] ?? "/placeholder.png"}
          alt={`${project.title} hero`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <h1 className="absolute bottom-4 left-4 text-3xl font-bold text-white">
          {project.title}
        </h1>
      </div>
      <p className="p-6 text-white/80 text-lg leading-relaxed">{project.description}</p>
    </section>

      <div className="mt-4 text-white flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Badge className="text-white" key={tech}>{tech}</Badge>
        ))}
      </div>

      {/* Gallery */}
      <div className="mt-10">
        <ProjectGallery images={images} title={project.title} />
      </div>

      <h2 className="mt-10 text-xl font-semibold text-white">
        Highlights
      </h2>

      <ul className="mt-3 list-disc pl-6 text-white/70">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <div className="mt-8 flex gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="underline text-white/80 hover:text-white"
          >
            Live
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="underline text-white/80 hover:text-white"
          >
            GitHub
          </a>
        )}
      </div>
    </Container>
  );
}