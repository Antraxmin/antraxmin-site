import Image from 'next/image';
import { Project } from '@/types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 w-full max-w-xs mx-auto bg-gray-800">
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <Image 
          src={project.image} 
          alt={project.title} 
          layout="fill" 
          objectFit="cover"
        />
      </div>
      <div className="p-4 bg-gray-800"> 
        <h4 className="font-bold text-sm bg-gray-800 mb-1 text-white truncate">{project.title}</h4>
        <p className="text-gray-300 text-xs bg-gray-800 text-xs mb-2 line-clamp-2">{project.description}</p>
        <div className="bg-gray-800 flex flex-wrap gap-1">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className={`text-xs font-semibold rounded-full px-2 py-0.5 ${tech.color} bg-opacity-80`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;