'use client'

import Image from 'next/image'
import { NavItem } from './nav-item'
import Link from 'next/link'
import { motion } from 'framer-motion'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '/projects',
  },
]

export const Header = () => {
  return (
    <motion.header
      
      className="absolute top-0 z-10 h-24 w-full flex items-center justify-center px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="hover:opacity-80 transition-opacity mt-4">
          <Image
            width={60} 
            height={60}
            src="/images/lb-logo.svg"
            alt="Logo LB Dev"
            className="object-contain"
          />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </motion.header>
  )
}