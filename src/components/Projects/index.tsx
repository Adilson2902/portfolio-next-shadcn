'use client';
import { useEffect, useState } from "react";
import CardProjects from "./CardProjects";
import { Button } from "../ui/button";

interface Project {
  id: number;
  title: string;
  gitLink: string;
  website: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('https://api.github.com/users/Adilson2902/repos?sort=created&direction=desc');
        const data = await res.json();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formattedProjects: Project[] = data.map((repo: any) => ({
          id: repo.id,
          title: repo.name,
          gitLink: repo.html_url,
          website: repo.homepage || repo.html_url,
        }));

        setProjects(formattedProjects);
      } catch (err) {
        console.error("Erro ao buscar repositórios do GitHub:", err);
      }
    };

    fetchProjects();
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <section className="py-20 px-4 w-full flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-primary text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-5">
        {currentProjects.map((project) => (
          <CardProjects
            key={project.id}
            title={project.title}
            gitLink={project.gitLink}
            website={project.website}
          />
        ))}
      </div>

      <div className="flex gap-4 mt-8 items-center justify-center">
        <Button
          onClick={handlePrev}
          disabled={currentPage === 1}
          variant="default"
          type="button"
          className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          Anterior
        </Button>

        <span className="text-primary">
          Página {currentPage} de {totalPages}
        </span>

        <Button
          onClick={handleNext}
          variant="default"
          type="button"
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          Próxima
        </Button>
      </div>
    </section>
  );
}
