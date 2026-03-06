"use client";

import Link from "next/link";

const techStack = [
  {
    name: "HTML",
    logo: "/icons/html.png",
  },
  {
    name: "CSS",
    logo: "/icons/css.png", // CSS logo (SVG)
  },
  {
    name: "JavaScript",
    logo: "/icons/javascript.png", // JS logo (SVG)
  },
  {
    name: "React.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", // React logo (CDN)
  },
  {
    name: "React Native",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", // React logo (CDN)
  },
  {
    name: "Python",
    logo: "/icons/python.png", // Python logo (SVG)
  },
  {
    name: "Git",
    logo: "/icons/git.png", // Git logo (SVG)
  },
  {
    name: "GitHub",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", // GitHub logo (CDN)
  },
  {
    name: "Django",
    logo: "/icons/django.png", // Django logo (SVG)
  },
  // Add more logos as needed
];

export default function TechStack() {
  return (
    <section className="py-10">
      <h2 className="bg-gradient-to-r to-indigo-400 bg-clip-text text-transparent text-4xl font-bold text-center">
        Technologies I Know
      </h2>

      <div className="mt-6 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            <div rel="noreferrer">
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-24 h-24 rounded-full object-contain"
              />
            </div>
            <p className="text-center text-lg font-semibold text-gray-900 mt-2">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}