import Container from "@/components/layout/Container";
import Hero from "@/components/Sections/Hero";
import Skills from "@/components/Sections/Skills";
import ProjectSlider from "@/components/projects/ProjectSlider";
import Workflow from "@/components/Sections/Workflow";
import SimpleCTA from "@/components/Sections/SimpleCTA";
import Reveal from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <Container className="space-y-10 pb-24">
      {/* Hero Section */}
      <Reveal>
        <Hero />
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

      {/* Clean Call To Action Section */}
      <Reveal>
        <SimpleCTA />
      </Reveal>
    </Container>
  );
}
