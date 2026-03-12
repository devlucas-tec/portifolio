import { Project } from "@/app/types/projects";
import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi"; // Se estiver usando react-icons

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center lg:items-start py-8 border-b border-gray-800 last:border-b-0">
      <div className="w-full lg:w-[420px] h-[220px] lg:h-[300px] flex-shrink-0 overflow-hidden rounded-lg">
        <Image
          src={project.thumbnail.url}
          alt={`Thumbnail project ${project.title}`}
          width={420}
          height={300}
          unoptimized
          className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-gray-50 group">
          <Image src="/images/icons/project-title-icon.svg" width={20} height={20} alt="" /> 
          <strong className="text-xl font-medium">{project.title}</strong>
        </div>

        <p className="text-gray-400 my-6 leading-relaxed">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-x-2 gap-y-3 mb-8">
          {project.technologies.map((tech) => (
            <span 
              key={tech.name}
              className="text-emerald-400 bg-emerald-900/30 text-sm py-1 px-3 rounded-lg font-medium"
            >
              {tech.name}
            </span>
          ))}
        </div>

        <Link 
          href={`/projects/${project.slug}`}
          className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors font-medium text-sm"
        >
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};