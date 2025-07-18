import CardSkills from "./CardSkills";

export default function Skills() {
  const frontendSkills = [
    { title: "HTML", experience: "Experienced" },
    { title: "CSS", experience: "Experienced" },
    { title: "JavaScript", experience: "Experienced" },
    { title: "TypeScript", experience: "Experienced" },
    { title: "React", experience: "Experienced" },
    { title: "Next.js", experience: "Experienced" },
    { title: "Tailwind CSS", experience: "Experienced" },
    { title: "shadcn/ui", experience: "Experienced" },
  ];

  const backendSkills = [
    { title: "Node.js", experience: "Intermediate" },
    { title: "Express", experience: "Intermediate" },
    { title: "MongoDB", experience: "Intermediate" },
    { title: "MySQL", experience: "Basic" },
    { title: "PostgreSQL", experience: "Basic" },
    { title: "Prisma", experience: "Experienced" },
    { title: "Firebase Auth", experience: "Experienced" },
  ];

  const mobileSkills = [
    { title: "React Native", experience: "Experienced" },
    { title: "Expo", experience: "Experienced" },
    { title: "TypeScript", experience: "Experienced" },
    { title: "Tailwind CSS", experience: "Experienced" },
    { title: "Firebase", experience: "Experienced" },
  ];
  return (
    <section className="py-20 px-4 flex w-full justify-center flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-primary">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-2 gap-2 text-muted-foreground mt-3">
         <CardSkills  title="Front Development" skillsExperience={frontendSkills}/> 
         <CardSkills  title="Back Development" skillsExperience={backendSkills}/>
         <CardSkills  title="Android Development" skillsExperience={mobileSkills}/>
      </ul>
    </section>
  );
}
