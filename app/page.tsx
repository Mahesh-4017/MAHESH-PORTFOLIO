import Container from "@/components/layout/Container";
import Hero from "@/components/Sections/Hero";
import FeaturedProjects from "@/components/Sections/FeaturedProjects";
import Skills from "@/components/Sections/Skills";
import Reveal from "@/components/ui/Reveal";
import CTAContent from "@/components/Sections/CTAContact"

export default function HomePage() {
  return (
    <Container>
      <Hero />
      <Reveal>
        <FeaturedProjects />
      </Reveal>
      <CTAContent/>
      <Skills />
    </Container>
  );
}
