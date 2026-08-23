"use client";

import { motion } from "framer-motion";

const marqueeStyle = `
  @keyframes marqueeLeft {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  @keyframes marqueeRight {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0%); }
  }
  .animate-marquee-left {
    display: flex;
    width: max-content;
    animation: marqueeLeft 30s linear infinite;
  }
  .animate-marquee-right {
    display: flex;
    width: max-content;
    animation: marqueeRight 30s linear infinite;
  }
  .animate-marquee-left:hover,
  .animate-marquee-right:hover {
    animation-play-state: paused;
  }
`;

type LogoItem = {
  name: string;
  colorClass: string;
  glowClass: string;
  svg: React.ReactNode;
};

const ROW1: LogoItem[] = [
  {
    name: "HTML5",
    colorClass: "group-hover:text-orange-500 group-hover:border-orange-500/30",
    glowClass: "group-hover:bg-orange-500/10",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 transition-colors duration-300" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm17.3 6.18H6.74l.32 3.58h10.88l-.32 3.58H12v2.04l3.52-.98.24-2.72H9.06l-.16-1.88h7.94l.44-5.02z" />
      </svg>
    ),
  },
  {
    name: "CSS3",
    colorClass: "group-hover:text-blue-500 group-hover:border-blue-500/30",
    glowClass: "group-hover:bg-blue-500/10",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 transition-colors duration-300" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm17.3 6.18H12v3.58h4.54l-.44 5.02L12 15.76l-4.1-1.16-.26-3.02h2.24l.14 1.58L12 13.82l2.02-.56.24-2.58H6.9l-.44-5.02H18.8z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    colorClass: "group-hover:text-yellow-500 group-hover:border-yellow-500/30",
    glowClass: "group-hover:bg-yellow-500/10",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 transition-colors duration-300" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0h24v24H0V0zm20.06 17.06c-.85-.5-1.5-.75-2.2-.75-.65 0-1.1.3-1.1.9 0 1.25 3.1 1.2 3.1 3.8 0 1.7-1.25 2.7-3.15 2.7-1.75 0-2.8-.75-3.55-1.9l1.6-1.05c.5.8 1.1 1.15 1.95 1.15.85 0 1.2-.4 1.2-1 0-1.35-3.1-1.3-3.1-3.8 0-1.6 1.15-2.7 2.9-2.7 1.55 0 2.5.6 3.15 1.6l-1.55 1zM11.75 19.3h-2.15v-6.95h-2.2v-1.85h6.55v1.85h-2.2V19.3z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    colorClass: "group-hover:text-blue-400 group-hover:border-blue-400/30",
    glowClass: "group-hover:bg-blue-400/10",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 transition-colors duration-300" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0h24v24H0zm10.74 13.91H7.8v5.39h-2v-5.39H2.9v-1.72h7.84v1.72zm9.1 2.22c0 1-.58 1.61-1.64 1.61-1 0-1.53-.47-1.73-1.23l-1.68.74c.48 1.34 1.57 2.25 3.46 2.25 2.19 0 3.6-1.21 3.6-3.23 0-4-5.11-3.26-5.11-4.74 0-.6.54-.95 1.27-.95.84 0 1.38.39 1.59.98l1.65-.8c-.53-1.23-1.76-1.98-3.24-1.98-2.02 0-3.32 1.12-3.32 3.01 0 3.73 5.02 3.02 5.02 4.37z" />
      </svg>
    ),
  },
  {
    name: "React JS",
    colorClass: "group-hover:text-cyan-400 group-hover:border-cyan-400/30",
    glowClass: "group-hover:bg-cyan-400/10",
    svg: (
      <svg viewBox="-11.5 -10.23 23 20.46" className="h-6 w-6 transition-colors duration-300" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Next JS",
    colorClass: "group-hover:text-white group-hover:border-white/30",
    glowClass: "group-hover:bg-white/5",
    svg: (
      <svg viewBox="0 0 180 180" className="h-6 w-6 transition-colors duration-300" fill="none">
        <mask id="nextMask"><circle cx="90" cy="90" r="90" fill="#fff" /></mask>
        <g mask="url(#nextMask)">
          <circle cx="90" cy="90" r="90" fill="currentColor" />
          <path fill="#fff" d="M149.508 157.52L69.142 54H54v72h14.4V72.235l69.881 89.92a90.016 90.016 0 0011.227-4.635z" />
          <path fill="#fff" d="M115.2 54h14.4v72h-14.4z" />
        </g>
      </svg>
    ),
  },
  {
    name: "Node JS",
    colorClass: "group-hover:text-green-500 group-hover:border-green-500/30",
    glowClass: "group-hover:bg-green-500/10",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 transition-colors duration-300" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 1.344a1.8 1.8 0 0 0-.9.23L4.1 5.564a1.8 1.8 0 0 0-.9 1.56v7.76a1.8 1.8 0 0 0 .9 1.56l7 3.99a1.8 1.8 0 0 0 1.8 0l7-3.99a1.8 1.8 0 0 0 .9-1.56V7.124a1.8 1.8 0 0 0-.9-1.56l-7-3.99a1.8 1.8 0 0 0-.9-.23zm.1 2.378l6 3.42V14.1l-6 3.42-6-3.42V7.142l6-3.42z" />
      </svg>
    ),
  },
  {
    name: "Express JS",
    colorClass: "group-hover:text-neutral-200 group-hover:border-neutral-200/30",
    glowClass: "group-hover:bg-neutral-200/5",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 transition-colors duration-300">
        <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="bold" fontFamily="monospace">ex</text>
      </svg>
    ),
  },
];

const ROW2: LogoItem[] = [
  {
    name: "MongoDB Atlas",
    colorClass: "group-hover:text-green-600 group-hover:border-green-600/30",
    glowClass: "group-hover:bg-green-600/10",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 transition-colors duration-300" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 .002a28.09 28.09 0 0 0-4.444 7.62C6.611 10.153 6 12.637 6 15c0 3.314 2.686 6 6 6s6-2.686 6-6c0-2.363-.611-4.847-1.556-7.378A28.09 28.09 0 0 0 12 .002zm0 3.033c.895 2.146 1.79 4.39 2.502 6.7C15.114 11.758 15.5 13.414 15.5 15c0 1.933-1.567 3.5-3.5 3.5S8.5 16.933 8.5 15c0-1.586.386-3.242.998-5.267C10.21 7.425 11.105 5.18 12 3.035z" />
      </svg>
    ),
  },
  {
    name: "Compass",
    colorClass: "group-hover:text-emerald-500 group-hover:border-emerald-500/30",
    glowClass: "group-hover:bg-emerald-500/10",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
  },
  {
    name: "Firebase Auth",
    colorClass: "group-hover:text-amber-500 group-hover:border-amber-500/30",
    glowClass: "group-hover:bg-amber-500/10",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 transition-colors duration-300" fill="currentColor">
        <path d="M19.78 17.65L12.5 3.56c-.22-.43-.84-.43-1.06 0L8.43 9.38l-4.57 8.27c-.22.4.07.9.53.9h14.86c.46 0 .75-.5.53-.9z" />
        <path d="M12.5 3.56c-.22-.43-.84-.43-1.06 0L8.43 9.38l8.28.67z" fill="currentColor" fillOpacity="0.7" />
      </svg>
    ),
  },
  {
    name: "Firebase RTDB",
    colorClass: "group-hover:text-yellow-500 group-hover:border-yellow-500/30",
    glowClass: "group-hover:bg-yellow-500/10",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 transition-colors duration-300" fill="currentColor">
        <path d="M19.78 17.65L12.5 3.56c-.22-.43-.84-.43-1.06 0L8.43 9.38l-4.57 8.27c-.22.4.07.9.53.9h14.86c.46 0 .75-.5.53-.9z" />
        <path d="M12 9l-4 6h8z" fill="currentColor" fillOpacity="0.6" />
      </svg>
    ),
  },
  {
    name: "Firestore",
    colorClass: "group-hover:text-orange-500 group-hover:border-orange-500/30",
    glowClass: "group-hover:bg-orange-500/10",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 transition-colors duration-300" fill="currentColor">
        <path d="M19.78 17.65L12.5 3.56c-.22-.43-.84-.43-1.06 0L8.43 9.38l-4.57 8.27c-.22.4.07.9.53.9h14.86c.46 0 .75-.5.53-.9z" />
        <path d="M8.5 15h7v2.5h-7z" fill="currentColor" fillOpacity="0.6" />
      </svg>
    ),
  },
  {
    name: "Git",
    colorClass: "group-hover:text-red-500 group-hover:border-red-500/30",
    glowClass: "group-hover:bg-red-500/10",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 transition-colors duration-300" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M23.3 10.9L13.1.7c-.9-.9-2.4-.9-3.3 0L7.4 3.1l3.3 3.3c.7-.2 1.5-.1 2.1.5.6.6.7 1.4.5 2.1l3.3 3.3c.7-.2 1.5-.1 2.1.5.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.6-.6-.7-1.4-.5-2.1L12 9.8c-.2.2-.4.3-.7.3s-.5-.1-.7-.3c-.6-.6-.7-1.4-.5-2.1L6.8 4.4 1 10.2c-.9.9-.9 2.4 0 3.3l10.2 10.2c.9.9 2.4.9 3.3 0l8.8-8.8c1-.9 1-2.4 0-3.3z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    colorClass: "group-hover:text-white group-hover:border-white/30",
    glowClass: "group-hover:bg-white/5",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 transition-colors duration-300" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    colorClass: "group-hover:text-purple-400 group-hover:border-purple-400/30",
    glowClass: "group-hover:bg-purple-400/10",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 transition-colors duration-300" fill="currentColor">
        <path fill="#F24E1E" d="M8.5 24c2.485 0 4.5-2.015 4.5-4.5V15H8.5C6.015 15 4 17.015 4 19.5S6.015 24 8.5 24z" />
        <path fill="#A259FF" d="M8.5 15c2.485 0 4.5-2.015 4.5-4.5V6H8.5C6.015 6 4 8.015 4 10.5S6.015 15 8.5 15z" />
        <path fill="#F24E1E" d="M8.5 6C10.985 6 13 3.985 13 1.5S10.985 0 8.5 0 4 2.015 4 4.5 6.015 6 8.5 6z" />
        <path fill="#FF7262" d="M15.5 6c2.485 0 4.5-2.015 4.5-4.5S17.985 0 15.5 0h-2.5v6h2.5z" />
        <path fill="#1ABCFE" d="M15.5 15c2.485 0 4.5-2.015 4.5-4.5S17.985 6 15.5 6h-2.5v9h2.5z" />
      </svg>
    ),
  },
  {
    name: "Canva",
    colorClass: "group-hover:text-cyan-400 group-hover:border-cyan-400/30",
    glowClass: "group-hover:bg-cyan-400/10",
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 transition-colors duration-300">
        <circle cx="12" cy="12" r="11" fill="url(#canvaGrad)" />
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="bold" fontFamily="system-ui">Canva</text>
        <defs>
          <linearGradient id="canvaGrad" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#00C4CC" />
            <stop offset="1" stopColor="#7D2AE8" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

export default function SkillsLogos() {
  // Duplicate arrays to facilitate seamless infinite marquee loop
  const list1 = [...ROW1, ...ROW1, ...ROW1];
  const list2 = [...ROW2, ...ROW2, ...ROW2];

  return (
    <section className="relative overflow-hidden py-14 text-white">
      <style dangerouslySetInnerHTML={{ __html: marqueeStyle }} />

      {/* Decorative Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-[-10%] top-[-20%] h-80 w-80 rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-20%] h-80 w-80 rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-cyan-400">
            Ecosystem
          </p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl tracking-tight">
            Tools & Technologies
          </h2>
        </motion.div>

        {/* Marquee Row 1 (Moves Left) */}
        <div className="relative flex w-full overflow-x-hidden py-3 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="animate-marquee-left gap-4 flex">
            {list1.map((item, idx) => (
              <div
                key={`r1-${item.name}-${idx}`}
                className={`group relative flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-3.5 backdrop-blur-md transition-all duration-300 cursor-pointer ${item.colorClass}`}
              >
                {/* Glow Backdrop Effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-md -z-10 ${item.glowClass}`} />
                <div className="text-white/40 group-hover:text-current transition-colors duration-300">
                  {item.svg}
                </div>
                <span className="font-mono text-xs font-semibold text-white/50 group-hover:text-white transition-colors duration-300">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 (Moves Right) */}
        <div className="relative flex w-full overflow-x-hidden py-3 mt-2 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="animate-marquee-right gap-4 flex">
            {list2.map((item, idx) => (
              <div
                key={`r2-${item.name}-${idx}`}
                className={`group relative flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-3.5 backdrop-blur-md transition-all duration-300 cursor-pointer ${item.colorClass}`}
              >
                {/* Glow Backdrop Effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-md -z-10 ${item.glowClass}`} />
                <div className="text-white/40 group-hover:text-current transition-colors duration-300">
                  {item.svg}
                </div>
                <span className="font-mono text-xs font-semibold text-white/50 group-hover:text-white transition-colors duration-300">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
