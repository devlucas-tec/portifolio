type CMSIconProps = {
    icon: string;
}

export const CMSIcon = ({ icon }: CMSIconProps) => {
    // Se 'icon' for undefined ou vazio, não renderiza nada e evita o erro
    if (!icon) return null; 

    return (
        <div 
            dangerouslySetInnerHTML={{
                __html: icon
            }}
        />
    )
}