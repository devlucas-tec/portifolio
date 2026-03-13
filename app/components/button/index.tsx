import { cn } from "@/app/lib/utils"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> 

export const Button = ({ children, className, ...props}: ButtonProps) => {
    return (
        <button 
            className={cn(
                'px-6 py-3 rounded-md flex items-center justify-center gap-2 bg-violet-800 text-slate-300 font-medium transition-all',
                'hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed',
                'active:scale-95',
                className
            )} 
            {...props}
        >
            {children}
        </button>
    )
}