import { cn } from "@/app/lib/utils"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> 

export const Button = ({ children, className, ...props}: ButtonProps) => {
    return (
        <button className={cn(
            'px-6 py-3 rounded-md flex items-center justify-center gap-2 bg-emerald-600 text-gray-50 font-medium hover:bg-emerald-700/80 transition-all disabled:opacity-50',
            className
        )} {...props}>
            {children}
        </button>
    )
}