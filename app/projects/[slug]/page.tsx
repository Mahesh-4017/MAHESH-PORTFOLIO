import Container from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { notFound } from "next/navigation";
import ProjectGallery from "@/components/projects/ProjectGalleryFlip";
import { projects, type Project } from "@/content/projects";

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
      <h1 className="text-3xl font-semibold text-white">{project.title}</h1>

      <p className="mt-2 text-white/70">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
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