import { ReactNode } from "react";

export type Project = {
  summary: ReactNode;
  title: string;
  slug: string;
  description: string;
  year: string;
  role: string;
  stack: string[];
  features: string[];
  highlights: string[];
  cover: string;
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "BloomField COllege, Victoria (Austriala)",
    slug: "job-portal-platform",
    description:
      "A modern job portal interface with advanced search, filter system, and dynamic job detail pages designed for scalability.",
    year: "2025",
    role: "Frontend Developer",
    stack: ["Next.js", "React", "Tailwind", "TypeScript"],
    features: [
      "Job search with filters",
      "Dynamic job detail pages",
      "Pagination system",
      "Responsive UI",
      "SEO optimized pages",
    ],
    highlights: [
      "Reusable component architecture",
      "Clean routing structure",
      "Optimized Lighthouse performance",
    ],
    cover: "/projects/jobportal-cover.png",
    images: [
      "/jobportal-1.png",
      "/jobportal-2.png",
      "/jobportal-3.png",
      "/jobportal-4.png",
    ],
    githubUrl: "https://github.com/yourname/job-portal-ui",
    liveUrl: "http://bloomfield.bloomfieldcollege.net/",
    summary: undefined,
  },

  {
    title: "PrimeCart - E-commerce Website",
    slug: "primecart-ecommerce",
    description:
      "A global e-commerce platform with product listing, cart system, and modern UI.",
    year: "2026",
    role: "Frontend Developer",
    stack: ["Next.js", "React", "Tailwind"],
    features: [
      "Product listing",
      "Shopping cart",
      "Responsive UI",
      "Modern design",
    ],
    highlights: ["Scalable UI", "Clean architecture"],
    cover: "/projects/ecommerce-cover.png",
    images: ["/Ecommerce-1.png",
      "/Ecommerce-2.png",
      "/Ecommerce-3.png",
      "/Ecommerce-4.png",
    ],
    githubUrl:
      "https://github.com/Mahesh-4017/PrimeCart-Global-E-commerce-Website",
    liveUrl: "https://primecart-global-e-commerce-website.netlify.app/",
    summary: undefined,
  },

  {
    title: "Creative Agency Website UI",
    slug: "creative-agency-ui",
    description:
      "A modern creative agency landing page with animations and premium design.",
    year: "2025",
    role: "Frontend Developer",
    stack: ["HTML", "CSS", "JavaScript"],
    features: ["Landing page design", "Smooth animations", "Responsive layout"],
    highlights: ["Modern UI", "Clean design"],
    cover: "/projects/agency-cover.png",
    images: [
      "/Agency-1.png",
      "/Agency-2.png",
      "/Agency-3.png",
      "/Agency-4.png",
    ],
    githubUrl:
      "https://github.com/Mahesh-4017/Strategy-Creative-Agency-Website-UI",
    liveUrl: "https://strategy-creative-agency-website.netlify.app/",
    summary: undefined,
  },

  {
    title: "Clinic Website UI",
    slug: "clinic-website",
    description:
      "A healthcare website UI with appointment section and clean layout.",
    year: "2025",
    role: "Frontend Developer",
    stack: ["HTML", "CSS"],
    features: ["Doctor listing", "Appointment UI", "Responsive design"],
    highlights: ["Simple and clean UI"],
    cover: "/projects/clinic-cover.png",
    images: [
      "/Clinic-1.png",
      "/Clinic-2.png",
      "/Clinic-3.png",
      "/Clinic-4.png",
      "/Clinic-5.png",
      "/Clinic-6.png",
      "/Clinic-7.png",
    ],
    
    githubUrl: "https://github.com/Mahesh-4017/Clinic-Website-UI-HTML-CSS-",
    liveUrl: "https://clinic-website-ui.netlify.app/",
    summary: undefined,
  },

  {
    title: "Travel Booking Landing Page",
    slug: "travel-booking",
    description:
      "A modern travel booking UI with destination showcase and booking layout.",
    year: "2025",
    role: "Frontend Developer",
    stack: ["HTML", "CSS", "JavaScript"],
    features: ["Destination cards", "Booking UI", "Responsive layout"],
    highlights: ["Attractive design"],
    cover: "/projects/travel-cover.png",
    images: [
      "/Travel-1.png",
      "/Travel-2.png",
      "/Travel-3.png",
      "/Travel-4.png",
    ],
    githubUrl: "https://github.com/Mahesh-4017/Travel-Booking-Landing-Page",
    liveUrl: "https://travel-booking-landing.netlify.app/",
    summary: undefined,
  },

  {
    title: "Music Streaming App",
    slug: "music-app",
    description:
      "A music streaming web app with player controls and playlist features.",
    year: "2026",
    role: "Frontend Developer",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    features: ["Music player", "Playlist UI", "Modern design"],
    highlights: ["Interactive UI", "Smooth experience"],
    cover: "/projects/music-cover.png",
    images: [],
    githubUrl: "https://github.com/Mahesh-4017/Music-Streaming-App",
    liveUrl: "",
    summary: undefined,
  },

  {
    title: "QR Code Generator",
    slug: "qr-generator",
    description:
      "A simple QR code generator app that converts text/URL into QR codes.",
    year: "2025",
    role: "Frontend Developer",
    stack: ["JavaScript", "HTML", "CSS"],
    features: ["Generate QR code", "Download QR", "Fast UI"],
    highlights: ["Lightweight app"],
    cover: "/projects/qr-cover.png",
    images: [],
    githubUrl: "https://github.com/Mahesh-4017/QR-Code-Generator",
    liveUrl: "",
    summary: undefined,
  },

  {
    title: "Ecommerce Website (Basic)",
    slug: "ecommerce-basic",
    description:
      "Basic e-commerce UI with product layout and responsive design.",
    year: "2025",
    role: "Frontend Developer",
    stack: ["HTML", "CSS", "JavaScript"],
    features: ["Product cards", "Responsive layout"],
    highlights: ["Beginner-friendly project"],
    cover: "/projects/ecommerce-basic.png",
    images: [],
    githubUrl: "https://github.com/Mahesh-4017/Ecommerce-website",
    liveUrl: "",
    summary: undefined,
  },
  {
    title: "Mahesh Portfolio",
    slug: "mahesh-portfolio",
    description:
      "Personal portfolio showcasing my projects, skills, and experience with modern UI design.",
    year: "2026",
    role: "Frontend Developer",
    stack: ["Next.js", "React", "Tailwind", "TypeScript"],
    features: [
      "Responsive design",
      "Project showcase",
      "Smooth animations",
      "Contact form",
    ],
    highlights: ["Clean UI/UX", "Fast performance", "Reusable components"],
    cover: "/projects/portfolio-cover.png",
    images: [],
    githubUrl: "https://github.com/Mahesh-4017/MAHESH-PORTFOLIO",
    liveUrl: "",
    summary: undefined,
  },
];
