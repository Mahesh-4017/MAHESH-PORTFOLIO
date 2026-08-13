"use client";

import InteractiveProjectsShowcase from "@/components/projects/InteractiveProjectsShowcase";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 py-12 text-white"
    >
      <InteractiveProjectsShowcase />
    </motion.main>
  );
}