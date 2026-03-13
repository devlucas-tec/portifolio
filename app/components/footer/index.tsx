import { IoMdHeart } from "react-icons/io"

export const Footer = () => {
  return (

    <footer className="h-14 w-full flex items-center justify-center bg-gray-950 border-t border-gray-900">
      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">
        Made with
        <IoMdHeart 
          size={13} 
          className="inline text-violet-500 mx-1 animate-pulse drop-shadow-[0_0_5px_rgba(139,92,246,0.5)]" 
        />
        by
        <strong className="font-medium text-gray-300 hover:text-violet-400 transition-colors">
          Lucas Barbosa
        </strong>
      </span>
    </footer>
  )
}