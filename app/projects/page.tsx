"use client";

import InteractiveProjectsShowcase from "@/components/projects/InteractiveProjectsShowcase";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <Container className="py-12">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full text-white"
      >
        <InteractiveProjectsShowcase />
      </motion.main>
    </Container>
  );
}