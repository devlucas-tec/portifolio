import { RichText as CMSRichText } from '@graphcms/rich-text-react-renderer'
import { ComponentProps } from 'react'

type RichTextProps = ComponentProps<typeof CMSRichText>

export const RichText = ({ ...props }: RichTextProps) => {
  return (
    <CMSRichText
      {...props}
      renderers={{
        bold: ({ children }) => (
          <b className="text-white font-semibold">{children}</b>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside pl-2 flex flex-col gap-1">
            {children}
          </ul>
        ),
        a: ({ children, ...props }) => (
          <a
            {...props}
            /* Trocado cyan-400 por violet-400 para o link e violet-300 no hover */
            className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2"
          >
            {children}
          </a>
        ),
      }}
    />
  )
}