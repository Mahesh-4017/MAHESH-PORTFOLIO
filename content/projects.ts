import { ReactNode } from "react"

export type Project = {
  summary: ReactNode
  title: string
  slug: string
  description: string
  year: string
  role: string
  stack: string[]
  features: string[]
  highlights: string[]
  cover: string
  images: string[]
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: "BloomField COllege, Victoria (Austriala)",
    slug: "job-portal-platform",

    description: "A modern job portal interface with advanced search, filter system, and dynamic job detail pages designed for scalability.",

    year: "2025",
    role: "Frontend Developer",

    stack: ["Next.js", "React", "Tailwind", "TypeScript"],

    features: [
      "Job search with filters",
      "Dynamic job detail pages",
      "Pagination system",
      "Responsive UI",
      "SEO optimized pages"
    ],

    highlights: [
      "Reusable component architecture",
      "Clean routing structure",
      "Optimized Lighthouse performance"
    ],

    cover: "/projects/jobportal-cover.png",

    images: [
      "/jobportal-1.png",
      "/jobportal-2.png",
      "/jobportal-3.png",
      "/jobportal-4.png"
    ],

    githubUrl: "https://github.com/yourname/job-portal-ui",

    liveUrl: "http://bloomfield.bloomfieldcollege.net/",
    summary: undefined
  },

  {
    title: "Ecommerce website",
    slug: "developer-portfolio",

    description: "A modern developer portfolio showcasing projects, skills, and contact information with animated UI sections.",

    year: "2026",
    role: "Full Stack Developer",

    stack: ["Next.js", "Tailwind", "Framer Motion"],

    features: [
      "Animated UI sections",
      "Project gallery",
      "Contact form",
      "SEO optimized structure"
    ],

    highlights: [
      "Clean design system",
      "Fast performance",
      "Reusable components"
    ],

    cover: "/projects/portfolio-cover.png",

    images: [
      "/projects/portfolio-1.png",
      "/projects/portfolio-2.png",
      "/projects/portfolio-3.png"
    ],

    githubUrl: "https://github.com/yourname/portfolio",

    liveUrl: "https://example.com",
    summary: undefined
  },
   {
    title: "Developer Portfolio",
    slug: "developer-portfolio",

    description: "A modern developer portfolio showcasing projects, skills, and contact information with animated UI sections.",

    year: "2026",
    role: "Full Stack Developer",

    stack: ["Next.js", "Tailwind", "Framer Motion"],

    features: [
      "Animated UI sections",
      "Project gallery",
      "Contact form",
      "SEO optimized structure"
    ],

    highlights: [
      "Clean design system",
      "Fast performance",
      "Reusable components"
    ],

    cover: "/projects/portfolio-cover.png",

    images: [
      "/projects/portfolio-1.png",
      "/projects/portfolio-2.png",
      "/projects/portfolio-3.png"
    ],

    githubUrl: "https://github.com/yourname/portfolio",

    liveUrl: "https://example.com",
    summary: undefined
  }
]