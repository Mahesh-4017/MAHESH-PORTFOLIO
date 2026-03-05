import Container from "./Container";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <Container className="flex flex-col gap-2 text-sm text-gray-600">
        <div className="flex flex-wrap gap-4">
          <a className="hover:text-black" href={site.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:text-black" href={site.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="hover:text-black" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
        <p>© {new Date().getFullYear()} {site.name}</p>
      </Container>
    </footer>
  );
}
