"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

type Project = {
  title: string;
  slug: string;
  summary: string;
  images?: string[];
  stack: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  const hasImage = !!project.images?.length;
  const thumbnail = project.images?.[0] ?? "";
  const initials = project.title
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.03] transition-transform duration-300 ease-out hover:shadow-xl"
    >
      <div className="relative aspect-[16/10]">
        {hasImage ? (
          <Image
            src={thumbnail}
            alt={`${project.title} thumbnail`}
            fill
            className="object-cover transition-opacity duration-300 group-hover:opacity-90"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-white text-2xl font-bold">
            {initials}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <h3 className="absolute bottom-4 left-4 max-w-full truncate text-lg font-semibold text-white">
          {project.title}
        </h3>
      </div>
      <p className="p-4 text-sm text-white/70 line-clamp-2">{project.summary}</p>
      <div className="flex flex-wrap gap-2 p-4 pt-0">
        {project.stack.map((tech) => (
          <Badge key={tech} className="bg-white/10 text-white ring-white/20">
            {tech}
          </Badge>
        ))}
      </div>
    </Link>
  );
}
