"use client";

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
    <section className="container py-32">
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">
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