'use client'

import { HorizontalDivider } from '@/app/components/divider/horizontal'
import { SectionTitle } from '@/app/components/section-title'
import { ProjectCard } from './project-card'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from '@/app/components/link'
import { Project } from '@/app/types/projects'
import { motion } from 'framer-motion'

type HighlightedProjectsProps = {
  projects: Project[]
}

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em destaque" />
      <HorizontalDivider className="mb-16" />

      <div className="flex flex-col gap-16">
        {projects?.map((project, i) => (
          <motion.div 
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <ProjectCard project={project} />
            {i !== projects.length - 1 && <HorizontalDivider className="mt-16" />}
          </motion.div>
        ))}

        <div className="flex items-center gap-2">
          <span className="text-gray-400">Se interessou?</span>
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 transition-colors group"
          >
            Ver todos
            <HiArrowNarrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}