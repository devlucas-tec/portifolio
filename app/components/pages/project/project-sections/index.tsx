"use client";

import Image from "next/image";
import type { ProjectSection } from "@/app/types/projects";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@/app/lib/animations";

type ProjectSectionsProps = {
  sections: ProjectSection[];
};

export const ProjectSections = ({ sections }: ProjectSectionsProps) => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-12 md:gap-32">
      {sections.map((section) => (
        <motion.div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-medium text-gray-200 border-b-2 border-transparent hover:border-violet-500 transition-all pb-2">
            {section.title}
          </h2>

          <div className="w-full bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-violet-500/50 transition-colors duration-500">
            <Image
              src={section.image.url}
              alt={`Imagem da sessão ${section.title}`}
              width={1080}
              height={672}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>
        </motion.div>
      ))}
    </section>
  );
};