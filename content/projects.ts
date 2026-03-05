export type Project = {
  title: string
  slug: string
  summary: string
  stack: string[]
  highlights: string[]
  images: string[]
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: "Job Portal UI",
    slug: "job-portal-ui",
    summary:
      "A responsive job listing UI with search, filters, and detail pages.",

    stack: ["Next.js", "React", "Tailwind"],

    highlights: [
      "Responsive layout",
      "Reusable components",
      "Clean routing",
    ],

    images: [
      "/projects/jobportal-1.png",
      "/projects/jobportal-2.png",
      "/projects/jobportal-3.png",
    ],

    githubUrl: "https://github.com/yourname/job-portal-ui",

    liveUrl: "https://example.com",
  },

  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    summary:
      "Personal portfolio with projects, about, and contact form.",

    stack: ["Next.js", "Tailwind"],

    highlights: [
      "Fast Lighthouse scores",
      "Simple content structure",
    ],

    images: [
      "/projects/portfolio-1.png",
      "/projects/portfolio-2.png",
      "/projects/portfolio-3.png",
    ],

    githubUrl: "https://github.com/yourname/portfolio",
  },
]