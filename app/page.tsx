import Container from "@/components/layout/Container";
import Hero from "@/components/Sections/Hero";
import SkillsLogos from "@/components/Sections/SkillsLogos";
import Skills from "@/components/Sections/Skills";
import ProjectSlider from "@/components/projects/ProjectSlider";
import Workflow from "@/components/Sections/Workflow";
import FeaturedContent from "@/components/Sections/FeaturedContent";
import SimpleCTA from "@/components/Sections/SimpleCTA";
import Reveal from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <Container className="space-y-10 pb-24">
      {/* Hero Section */}
      <Reveal>
        <Hero />
      </Reveal>

      {/* Tech Stack Marquee Section */}
      <Reveal>
        <SkillsLogos />
      </Reveal>

      {/* Featured Projects Slider */}
      <Reveal>
        <ProjectSlider />
      </Reveal>

      {/* Skills & Programming Languages Section */}
      <Reveal>
        <Reveal>
          <Skills />
        </Reveal>
      </Reveal>

      {/* Developer Workflow Timeline */}
      <Reveal>
        <Workflow />
      </Reveal>

      {/* About & Blog Highlights Section */}
      <Reveal>
        <FeaturedContent />
      </Reveal>

      {/* Clean Call To Action Section */}
      <Reveal>
        <SimpleCTA />
      </Reveal>
    </Container>
  );
}
