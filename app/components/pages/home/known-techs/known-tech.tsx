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
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium text-lg">{tech.name}</p>
        
        <div className="text-4xl"> 
           <div className="w-10 h-10 flex items-center justify-center"> 
              <CMSIcon icon={tech.iconSvg} />
           </div>
        </div>
      </div>

      <span>{relativeTime} de experiência</span>
    </div>
  )
}