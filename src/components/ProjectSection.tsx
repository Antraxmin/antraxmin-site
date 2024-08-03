import { projects } from "@/data/project";
import ProjectCard from "./ProjectCard";

const ProjectSection: React.FC = () => {
  return (
    <section>
      <h3 className="text-lg font-bold mb-4 mt-10">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;