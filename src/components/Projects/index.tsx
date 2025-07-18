import { Card, CardContent } from "@/components/ui/card";

export default function Projects() {
  const projects = [
    { title: "Projeto 1", description: "Descrição do projeto 1" },
    { title: "Projeto 2", description: "Descrição do projeto 2" },
  ];

  return (
    <section className="py-20 px-4 w-full flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-8 text-primary text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardContent>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
