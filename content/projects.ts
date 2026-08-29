export type Project = {
  title: string;
  slug: string;
  description: string;
  summary: string;
  year: string;
  role: string;
  stack: string[];
  features: string[];
  highlights: string[];
  cover: string;
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  adminUrl?: string;
  demoLinks?: { label: string; url: string }[];
  noScroll?: boolean;
};

export const projects: Project[] = [
  {
    title: "Food Ordering App UI",
    slug: "food-website",
    description:
      "A vibrant, high-fidelity mobile-first food ordering UI with custom category filters, animated add-to-cart operations, and a slide-out shopping cart sheet.",
    summary:
      "A vibrant food discovery and ordering UI design with interactive cart animations.",
    year: "2025",
    role: "Full Stack Developer",
    stack: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
    features: [
      "Vibrant categorised food grids",
      "Add-to-cart animated triggers",
      "Drawer-style slide-out shopping cart list",
      "Responsive multi-device layout",
    ],
    highlights: [
      "Premium custom layout styles",
      "Physics-based drawer drag transitions",
      "Performant component rendering logic",
    ],
    cover: "/projects/travel-cover.png",
    images: [
      "/projects/travel-cover.png"
    ],
    githubUrl: "https://github.com/Mahesh-4017/Food-Website",
    liveUrl: "https://foodie-ordering-01.netlify.app/",
  },
  {
    title: "Admin Panel for ReadyForJob",
    slug: "admin-panel-ready-for-job",
    description:
      "A production-ready full-stack job board platform featuring admin dashboards, job seeker profiles, real-time application status tracking, and secure Firebase authentication.",
    summary:
      "A complete full-stack job board platform with admin dashboard, application tracking, and secure Firebase auth.",
    year: "2026",
    role: "Full-Stack Developer",
    stack: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind", "TypeScript"],
    features: [
      "Role-based workflows (Admin vs Job Seeker)",
      "Interactive job posting and applicant tracking",
      "Real-time application status updates",
      "Dynamic search and autocomplete filters",
      "Environment-configured API clients",
    ],
    highlights: [
      "Production-deployed on Vercel (Frontend) and Render (Backend)",
      "Optimized MongoDB indexing for faster search queries",
      "Secure and fluid Next.js router guards",
    ],
    cover: "/projects/admin-panel-cover.png",
    images: [
      "/projects/admin-panel-cover.png"
    ],
    githubUrl: "https://github.com/Mahesh-4017/Ready-For-Job-Website",
    liveUrl: "https://ready-for-job-website.vercel.app/",
    adminUrl: "https://admin.readyforjob.vercel.app/",
    demoLinks: [
      { label: "Website", url: "https://ready-for-job-website.vercel.app/" },
      { label: "Admin Panel", url: "https://admin.readyforjob.vercel.app/" }
    ],
  },
  {
    title: "ReadyForJob - Full-Stack Job Portal",
    slug: "ready-for-job-website",
    description:
      "A production-ready full-stack job board platform featuring recruiter dashboards, job seeker profiles, real-time application status tracking, and secure Firebase authentication.",
    summary:
      "A complete full-stack job board platform with recruiter dashboard, application tracking, and secure Firebase auth.",
    year: "2026",
    role: "Full-Stack Developer",
    stack: ["Next.js", "React", "Node.js", "MongoDB", "Firebase", "Tailwind", "TypeScript"],
    features: [
      "Role-based workflows (Recruiter vs Job Seeker)",
      "Interactive job posting and applicant tracking",
      "Real-time application status updates",
      "Dynamic search and autocomplete filters",
      "Environment-configured API clients",
    ],
    highlights: [
      "Production-deployed on Vercel (Frontend) and Render (Backend)",
      "Optimized MongoDB indexing for faster search queries",
      "Secure and fluid Next.js router guards",
    ],
    cover: "/projects/jobportal-cover.png",
    images: [
      "/projects/jobportal-cover.png"
    ],
    githubUrl: "https://github.com/Mahesh-4017/Ready-For-Job-Website",
    liveUrl: "https://ready-for-job-website-oeqo.vercel.app/",
    adminUrl: "https://admin.readyforjob.vercel.app/",
    demoLinks: [
      { label: "Website", url: "https://ready-for-job-website-oeqo.vercel.app/" },
      { label: "Admin Panel", url: "https://admin.readyforjob.vercel.app/" }
    ],
  },
  {
    title: "PrimeCart - E-commerce Website",
    slug: "primecart-ecommerce",
    description:
      "A global e-commerce platform with product listing, cart system, responsive layout, and modern fluid UI.",
    summary:
      "A global e-commerce platform featuring product lists, dynamic cart, and modern responsive design.",
    year: "2026",
    role: "Full Stack Developer",
    stack: ["Next.js", "React", "Tailwind", "TypeScript"],
    features: [
      "Dynamic product grids with search & filter",
      "Interactive shopping cart with state management",
      "Sleek product detail pages",
      "Fully responsive mobile-friendly layout",
    ],
    highlights: ["Scalable architecture", "Optimized image loading", "Premium typography"],
    cover: "/projects/ecommerce-cover.png",
    images: [
      "/projects/ecommerce-cover.png",
      "/Ecommerce-1.png",
      "/Ecommerce-2.png",
      "/Ecommerce-3.png",
      "/Ecommerce-4.png",
    ],
    githubUrl: "https://github.com/Mahesh-4017/PrimeCart-Global-E-commerce-Website",
    liveUrl: "https://primecart-global-e-commerce-website.netlify.app/",
  },
  {
    title: "MaheshOS - Web Desktop Simulation",
    slug: "mahesh-os",
    description:
      "An interactive web operating system simulation featuring draggable and resizable windows, a working file manager, a CLI terminal emulator, and custom widget systems.",
    summary:
      "A web desktop simulation of a custom OS with draggable windows, file explorer, and terminal.",
    year: "2026",
    role: "Full Stack Developer",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    features: [
      "Draggable, resizable, and stackable windows",
      "Functional interactive terminal simulation",
      "Simulated apps: File Explorer, Notepad, Browser, Music Player",
      "Custom system stats widget dashboard",
    ],
    highlights: [
      "Advanced React context state management for window depth mapping",
      "Fluid drag physics built using Framer Motion",
      "Fully responsive desktop controls on tablet & mobile",
    ],
    cover: "/projects/agency-cover.png",
    images: [
      "/projects/agency-cover.png"
    ],
    githubUrl: "https://github.com/Mahesh-4017/MaheshOS",
    liveUrl: "https://maheshos.netlify.app/",
    noScroll: true,
  },
  {
    title: "Creative Agency Website UI",
    slug: "creative-agency-ui",
    description:
      "A premium creative agency landing page design featuring custom layouts, smooth animations, and interactive client sections.",
    summary:
      "A beautiful creative agency landing page showcasing modern typography, spacing, and animations.",
    year: "2025",
    role: "Full Stack Developer",
    stack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Pixel-perfect responsive layout grid",
      "Custom scroll-triggered transitions",
      "Interactive case study galleries",
      "Dynamic contact inquiries form UI",
    ],
    highlights: ["Ultra-clean CSS grid organization", "High performance (100 Lighthouse score)", "Harmonious dark color scheme"],
    cover: "/projects/agency-cover.png",
    images: [
      "/projects/agency-cover.png",
      "/Agency-1.png",
      "/Agency-2.png",
      "/Agency-3.png",
      "/Agency-4.png",
    ],
    githubUrl: "https://github.com/Mahesh-4017/Strategy-Creative-Agency-Website-UI",
    liveUrl: "https://strategy-creative-agency-website.netlify.app/",
  },
  {
    title: "Clinic Website UI",
    slug: "clinic-website",
    description:
      "A healthcare clinic portal design featuring custom scheduling systems, specialist cards, and a clean professional layout.",
    summary:
      "A professional medical clinic portal with booking forms and doctor directory pages.",
    year: "2025",
    role: "Full Stack Developer",
    stack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Medical specialty filter controls",
      "Interactive consultation request form",
      "Service description layouts",
      "Accessible footer and navigation setups",
    ],
    highlights: ["Ultra-clean semantic HTML layout", "Fully responsive layout grid", "Lightweight, zero-library footprint"],
    cover: "/projects/clinic-cover.png",
    images: [
      "/projects/clinic-cover.png",
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
  },
  {
    title: "Travel Booking Landing Page",
    slug: "travel-booking",
    description:
      "A colorful travel landing page UI featuring destination listings, trip packages, search forms, and smooth review sliders.",
    summary:
      "An attractive travel landing page with destination cards and booking forms.",
    year: "2025",
    role: "Full Stack Developer",
    stack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Dynamic booking search interface",
      "Destination highlight cards",
      "Interactive testimonial carousels",
      "Call to Action registration form",
    ],
    highlights: ["Vibrant design accents", "Highly responsive CSS grids", "Organised styling organization"],
    cover: "/projects/travel-cover.png",
    images: [
      "/projects/travel-cover.png",
      "/Travel-1.png",
      "/Travel-2.png",
      "/Travel-3.png",
      "/Travel-4.png",
    ],
    githubUrl: "https://github.com/Mahesh-4017/Travel-Booking-Landing-Page",
    liveUrl: "https://travel-booking-landing.netlify.app/",
  },
  {
    title: "QR Code Generator",
    slug: "qr-generator",
    description:
      "A utility web application that quickly encodes input URLs or texts into dynamic, downloadable high-resolution QR codes.",
    summary:
      "A fast, responsive tool to encode text or links into high-res downloadable QR codes.",
    year: "2025",
    role: "Full Stack Developer",
    stack: ["JavaScript", "HTML", "CSS"],
    features: [
      "Instant client-side QR generation",
      "Dynamic download formats (PNG/SVG)",
      "Adjustable dimensions inputs",
      "Responsive layout card design",
    ],
    highlights: ["Lightweight zero-backend generation", "Optimized script rendering speed", "Minimalist visual scheme"],
    cover: "/projects/qr-cover.png",
    images: ["/projects/qr-cover.png"],
    githubUrl: "https://github.com/Mahesh-4017/QR-Code-Generator",
    liveUrl: "https://mahesh-4017.github.io/QR-Code-Generator/",
  },
  {
    title: "Mahesh Portfolio",
    slug: "mahesh-portfolio",
    description:
      "A premium, state-of-the-art personal developer portfolio designed to showcase skills, projects, and connect channels with rich aesthetics.",
    summary:
      "Personal portfolio showcasing work, skills, and contact pathways with modern design tokens.",
    year: "2026",
    role: "Full Stack Developer",
    stack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    features: [
      "Dynamic Interactive Showcase",
      "Framer Motion layout transitions",
      "Theme-integrated responsive forms",
      "Structured Next.js project directory",
    ],
    highlights: ["Sleek modern Glassmorphic style", "Fast performance indicators", "Fully structured SEO markup"],
    cover: "/projects/portfolio-cover.png",
    images: ["/projects/portfolio-cover.png"],
    githubUrl: "https://github.com/Mahesh-4017/MAHESH-PORTFOLIO",
    liveUrl: "https://mahesh-portfolio-01.netlify.app/",
  },


  {
    title: "Music Streaming App",
    slug: "music-app",
    description:
      "A music playback web portal featuring custom audio players, visual sound trackers, and playlist management dashboards.",
    summary:
      "A modern web audio player with play/pause states and playlist grid views.",
    year: "2026",
    role: "Full Stack Developer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Interactive audio control slider bar",
      "Album/Playlist collection selector grids",
      "Volume, loop, and shuffle modifiers",
      "Responsive navigation sidebar layout",
    ],
    highlights: ["Fluid audio element synchronization", "Clean, premium dark UI mockup", "Responsive media query scaling"],
    cover: "/projects/music-cover.png",
    images: ["/projects/music-cover.png"],
    githubUrl: "https://github.com/Mahesh-4017/Music-Streaming-App",
    liveUrl: "https://music-streaming-app-03.netlify.app/",
  },

  {
    title: "Apex GT - Luxury Sports Car Website",
    slug: "apex-gt-car-website",
    description:
      "Apex GT is a modern luxury sports-car web application designed for speed, performance, and an immersive driving experience. Explore a stunning collection of high-performance GT cars through a sleek, futuristic interface featuring smooth CSS animations, cinematic transitions, interactive car sections, real-time spec matrices, and VIP test drive booking.",
    summary:
      "A high-performance dark-luxury hypercar showcase built with GSAP 3D ScrollTrigger parallax and interactive configurators.",
    year: "2026",
    role: "Full Stack Developer",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "GSAP"],
    features: [
      "GSAP 3D ScrollTrigger story scrub",
      "Interactive drive mode & paint configurator",
      "Real-time performance telemetry matrix",
      "VIP test-drive reservation system",
    ],
    highlights: [
      "Obsidian luxury dark aesthetics",
      "60fps cinematic horizontal scroll transitions",
      "Glassmorphic HUD dashboard overlays",
    ],
    cover: "/projects/travel-cover.png",
    images: ["/projects/travel-cover.png"],
    githubUrl: "https://github.com/Mahesh-4017/Apex-GT-Car-Website",
    liveUrl: "https://apex-gt-car-website.netlify.app/",
  },
  {
    title: "Enterprise SaaS Admin Dashboard",
    slug: "admin-dashboard",
    description:
      "A modern enterprise admin dashboard built with Next.js 16 and Firebase. Designed as a standalone management hub for real-time analytics, user access control, live order streams, stock inventory management, GST invoice generation, and customer CRM.",
    summary:
      "A production-ready SaaS administration panel with real-time Firebase Firestore syncing, revenue analytics, and CRM.",
    year: "2026",
    role: "Full Stack Developer",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "Firestore"],
    features: [
      "Live Firestore snapshot listeners for orders",
      "Interactive sales trajectory curve charts",
      "Automated GST invoice generator",
      "Team leaderboard & performance spotlights",
    ],
    highlights: [
      "Electric Violet & Luxury Cream design system",
      "Zero-CLS Next.js 16 Turbopack build",
      "Multi-provider authentication flows",
    ],
    cover: "/projects/admin-panel-cover.png",
    images: ["/projects/admin-panel-cover.png"],
    githubUrl: "https://github.com/Mahesh-4017/Admin-Dashboard",
    liveUrl: "https://dashboard-4017.netlify.app/",
  },
  {
    title: "Go-Pick Modern E-Commerce Platform",
    slug: "go-pick",
    description:
      "Go-Pick is a high-performance fashion and lifestyle e-commerce platform featuring 7 major departments and 25+ sub-categories. Built with Next.js 15, Framer Motion, and Firebase, it offers instant query search modals, interactive cart drawers, wishlist persistence, and smooth mobile UI.",
    summary:
      "A feature-rich e-commerce store with dynamic category search, wishlist, shopping bag, and Firebase auth.",
    year: "2026",
    role: "Full Stack Developer",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Firebase"],
    features: [
      "Instant multi-category search & filtering",
      "Framer Motion animated shopping bag & wishlist",
      "Firebase Auth & Firestore profile sync",
      "Responsive off-canvas mobile navigation",
    ],
    highlights: [
      "Performant Next.js 15 App Router architecture",
      "Rich visual micro-animations",
      "Tax & free shipping calculator",
    ],
    cover: "/projects/ecommerce-cover.png",
    images: ["/projects/ecommerce-cover.png"],
    githubUrl: "https://github.com/Mahesh-4017/Go-Pick-Modern-E-Commerce-Website",
    liveUrl: "https://go-pick-modern-e-commerce-website.netlify.app",
  },

  {
    title: "AuraClean Eco Personal Care",
    slug: "soap-website",
    description:
      "AuraClean is a modern web application for a premium organic detergent brand. Built with React, Vite, and Tailwind CSS, it features interactive stain treatment guides, a smart dosing calculator, glassmorphic cart drawer, and a 3-stage animated video order confirmation.",
    summary:
      "An eco-friendly soap brand platform with detergent dosing calculators, stain solvers, and animated checkout.",
    year: "2026",
    role: "Full Stack Developer",
    stack: ["React", "Vite", "Tailwind CSS", "Firebase", "JavaScript"],
    features: [
      "Interactive stain solver & dosage calculator",
      "Glassmorphic shopping cart with payment gateways",
      "3-stage animated order confirmation screen",
      "Firebase authentication with profile management",
    ],
    highlights: [
      "Fresh eco-green luxury aesthetic",
      "Interactive diagnostic tools",
      "Physics-based drawer transitions",
    ],
    cover: "/projects/agency-cover.png",
    images: ["/projects/agency-cover.png"],
    githubUrl: "https://github.com/Mahesh-4017/Soap-website",
    liveUrl: "https://soap-website-03.netlify.app",
  },

  {
    title: "Rock Paper Scissors JS Game",
    slug: "rock-paper-scissors-game-js",
    description:
      "A clean and responsive Rock Paper Scissors web game built using pure JavaScript, HTML5, and CSS3. Features custom match scoring, dynamic round winner announcements, animated choice icons, and instant replay controls.",
    summary:
      "An interactive browser game with real-time score tracking and smooth match UI against computer AI.",
    year: "2026",
    role: "Frontend Developer",
    stack: ["JavaScript", "HTML5", "CSS3"],
    features: [
      "Automated computer choice generation",
      "Persistent score counter",
      "Smooth match visual feedback",
      "Mobile-optimized button layouts",
    ],
    highlights: [
      "Zero external dependencies",
      "Instant response match engine",
      "Crisp minimalist UI",
    ],
    cover: "/projects/travel-cover.png",
    images: ["/projects/travel-cover.png"],
    githubUrl: "https://github.com/Mahesh-4017/Rock-paper-scissors-game-js",
    liveUrl: "https://rock-paper-scissors-03.netlify.app/",
  },
  {
    title: "BloomField College Portal",
    slug: "job-portal-platform",
    description:
      "A modern college portal interface with course listings, admissions dashboards, and student search systems.",
    summary:
      "A clean portal interface designed for course directory navigation and student registration workflows.",
    year: "2025",
    role: "Full Stack Developer",
    stack: ["Next.js", "React", "Tailwind", "TypeScript"],
    features: [
      "Dynamic student dashboard panel",
      "Filterable course catalog grids",
      "Responsive admissions forms",
      "Optimized SEO tags for academic search visibility",
    ],
    highlights: [
      "Reusable component-driven codebase",
      "Robust state management for complex enrollment forms",
      "Accessible ARIA compliant UI components",
    ],
    cover: "/projects/jobportal-cover.png",
    images: [
      "/projects/jobportal-cover.png",
      "/jobportal-1.png",
      "/jobportal-2.png",
      "/jobportal-3.png",
      "/jobportal-4.png",
    ],
    githubUrl: "https://github.com/Mahesh-4017/job-portal-ui",
    liveUrl: "http://bloomfield.bloomfieldcollege.net/",
  },
];

