"use client";

import Link from "next/link";
import { usePathname }  from "next/navigation";    

type NavItemProps = {
    label: string;
    href: string;
}


export const NavItem = ({ label, href }: NavItemProps) => {
    const pathName = usePathname();

    const isActive = pathName === href;
    return (
        <Link href={href} className="{cn(
            'text-sm font-medium transition-colors hover:text-emerald-400',
            isActive && 'text-gray-50'
            )}">
            <span className="text-emerald-400">#</span>
            {label}
        </Link>
    )
}