export default function Skills() {
  const skills = ["React", "Next.js", "Tailwind CSS", "TypeScript", "shadcn/ui"];

  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-8 text-primary">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-muted-foreground">
        {skills.map((skill, index) => (
          <li key={index} className="bg-muted p-4 rounded-lg text-center">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
