'use client'

import { motion } from 'framer-motion'
import { ComponentProps } from 'react'

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string
}

export const TechBadge = ({ name, ...props }: TechBadgeProps) => {
  return (
    <motion.span
className="text-gray-300 bg-slate-900/80 border border-violet-500 text-sm py-1 px-3 rounded-lg backdrop-blur-sm shadow-[0_0_15px_rgba(167,139,250,0.4)]"
{...props}
    >
      {name}
    </motion.span>
  )
}