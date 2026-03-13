import { Project } from '@/app/types/projects'
import Image from 'next/image'

type ProjectCardProps = {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const technologies = project.technologies.map((x) => x.name).join(', ')

  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-slate-900/80 overflow-hidden group border-2 border-slate-800 hover:border-violet-500/50 transition-all duration-500 shadow-lg hover:shadow-[0_0_20px_rgba(167,139,250,0.15)]">
      
      {/* Container da Imagem com Zoom e Filtro */}
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={380}
          height={200}
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all grayscale-[30%] group-hover:grayscale-0"
          alt={`Thumbnail do projeto ${project.title}`}
          src={project.thumbnail.url}
          unoptimized
        />
      </div>

      {/* Conteúdo do Card */}
      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-violet-400 transition-all text-lg">
          {project.title}
        </strong>
        
        <p className="mt-2 text-gray-400 line-clamp-4 text-sm leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Tecnologias com tom lilás suave */}
        <span className="text-violet-400/60 text-xs font-mono block mt-auto truncate group-hover:text-violet-400 transition-colors">
          {technologies}
        </span>
      </div>
    </div>
  )
}