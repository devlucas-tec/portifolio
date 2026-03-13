'use client'

import { getRelativeTimeString } from '@/app/utils/get-relative-time'
import { KnownTech as IKnownTech } from '@/app/types/projects'
import { CMSIcon } from '@/app/components/cms-icon'

type KnownTechProps = {
  tech: IKnownTech
}

export const KnownTech = ({ tech }: KnownTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    'pt-BR',
  ).replace('há ', '')

  return (
    /* Mudanças principais:
       - bg-[#0f0720]/20: Um fundo roxo quase preto para profundidade.
       - hover:text-violet-300: Um lilás mais claro que o 400 para garantir leitura no brilho.
       - hover:border-violet-500/30: Borda sutil.
    */
    <div className="p-6 rounded-lg bg-slate-800/10 border border-slate-700/20 text-gray-400 flex flex-col gap-2 hover:text-violet-300 hover:bg-violet-500/10 hover:border-violet-500/30 transition-all duration-300 group">
      <div className="flex items-center justify-between">
        <p className="font-medium text-lg text-gray-200 group-hover:text-violet-400 transition-colors">
          {tech.name}
        </p>
        
        <div className="text-4xl"> 
           <div className="w-10 h-10 flex items-center justify-center group-hover:text-violet-400 group-hover:scale-110 transition-all"> 
              <CMSIcon icon={tech.iconSvg} />
           </div>
        </div>
      </div>

      <span className="text-sm font-mono opacity-80 group-hover:opacity-100 transition-opacity">
        {relativeTime} de experiência
      </span>
    </div>
  )
}