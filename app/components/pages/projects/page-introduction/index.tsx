'use client'

import { Link } from "@/app/components/link"
import { SectionTitle } from "@/app/components/section-title"
import { HiArrowNarrowLeft } from "react-icons/hi"
import { motion } from "framer-motion"

export const PageIntroduction = () => {
  return (
    /* Adicionado bg-slate-950/85 e bg-blend-multiply para seguir o padrão da Hero.
       Isso garante que o texto seja legível independente da imagem de fundo.
    */
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-6 bg-slate-950/50 bg-blend-multiply">
      
      <SectionTitle 
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />

      <motion.div 
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-gray-200 text-center max-w-[640px] my-6 text-sm sm:text-base leading-relaxed">
          Aqui você encontra a trajetória prática da minha carreira. Utilizando um ecossistema variado de tecnologias, desenvolvi estes projetos para testar limites e explorar novas arquiteturas de software. Cada entrega representa uma oportunidade de aprendizado consolidada.
        </p>

        <Link 
          href="/" 
          className="flex items-center gap-2 text-gray-200 hover:text-violet-400 transition-colors group"
        >
          <HiArrowNarrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Voltar para Home
        </Link>
      </motion.div>
    </section>
  )
}