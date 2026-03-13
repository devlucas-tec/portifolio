'use client'

import { ProjectCard } from "./project-card";
import { Link } from "@/app/components/link"; 
import { fadeUpAnimation } from "@/app/lib/animations";
import type { Project } from "@/app/types/projects";
import { motion } from "framer-motion";

type ProjectListProps = {
  projects: Project[];
};

export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <section className="container py-32 px-4">
      {/* Explicação das classes:
        - grid: Ativa o modo Grid
        - grid-cols-1: 1 coluna no celular (garante a centralização)
        - md:grid-cols-2: 2 colunas em tablets
        - lg:grid-cols-3: Máximo de 3 colunas em telas grandes
        - justify-items-center: Garante que se houver só 1, ele fique no meio da linha
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 justify-items-center">
        {projects?.map((project, i) => (
          <motion.div
            key={project.title}
            {...fadeUpAnimation}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="w-full max-w-[380px]" 
          >
            <Link href={`/projects/${project.slug}`} className="block">
              <ProjectCard project={project} />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};