'use client'

import { cn } from '@/app/lib/utils'
import { motion } from 'framer-motion'

type SectionTitleProps = {
  subtitle: string
  title: string
  className?: string
}

export const SectionTitle = ({
  subtitle,
  title,
  className,
}: SectionTitleProps) => {
  const animProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true }, 
  }

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <motion.span
        className="font-mono text-sm text-violet-400 drop-shadow-[0_0_8px_rgba(167,139,250,0.4)]"
        {...animProps}
        transition={{ duration: 0.5 }}
      >{`../${subtitle}`}</motion.span>
      
      <motion.h3
        className="text-3xl font-medium text-gray-50"
        {...animProps}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h3>
    </div>
  )
}