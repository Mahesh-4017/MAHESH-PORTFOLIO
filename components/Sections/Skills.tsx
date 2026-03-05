import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind"],
  Tools: ["Git", "GitHub", "VS Code", "Postman"],
  Basics: ["Responsive UI", "API integration", "Component design"],
};

export default function Skills() {
  return (
    <section className="py-10">
      <h2 className="text-xl font-semibold">Skills</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {Object.entries(skills).map(([group, items]) => (
          <Card key={group}>
            <h3 className="font-semibold">{group}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {items.map((x) => (
                <Badge key={x}>{x}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
