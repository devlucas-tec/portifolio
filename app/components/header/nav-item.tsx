'use client'

import { cn } from '@/app/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItemProps = {
  href: string
  label: string
}

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname()

  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <Link
      href={href}
      className={cn(
        'text-gray-400 flex items-center gap-2 font-medium font-mono transition-colors hover:text-gray-50 group',
        isActive && 'text-gray-50',
      )}
    >
      <span className={cn(
        "text-violet-400 transition-colors",
        isActive ? "opacity-100" : "opacity-70 group-hover:opacity-100"
      )}>
        #
      </span>
      {label}
    </Link>
  )
}