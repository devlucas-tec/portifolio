'use client'

import Image from 'next/image'
import { Button } from '../../../button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { HomePageInfo } from '@/app/types/page-info'
import { RichText } from '@/app/components/rich-text'
import { TechBadge } from '@/app/components/tech-badge'
import { CMSIcon } from '@/app/components/cms-icon'



type HeroSectionProps = {
    homeInfo: HomePageInfo
}

export const HeroSection = ({ homeInfo }: HeroSectionProps) => {
    const handleContact = () => {
        const contactSection = document.querySelector('#contact')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex items-start mx-auto flex-col-reverse lg:flex-row justify-between px-4 gap-8">
                
                {/* Lado Esquerdo: Textos e Informações */}
                <div className="w-full lg:max-w-[640px]">
                    <p className="font-mono text-emerald-400">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Lucas Barbosa</h2> {/* Corrigido: </h2> */}
                    
                    <div className="my-6 text-gray-400 text-sm sm:text-base">
                        <RichText content={homeInfo.introduction.raw} />
                    </div>

                    {/* Techs */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        {homeInfo.technologies.map((tech)=> (
                            <TechBadge name={tech.name} />
                        ))}
                    </div>

                    {/* Contato */}
                    <div className="mt-6 lg:mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
                        <Button className='w-max shadow-button' onClick={handleContact}>
                            Entre em Contato
                            <HiArrowNarrowRight size={18} />
                        </Button>

                        <div className='text-2xl flex items-center h-20 gap-3'>
                            {homeInfo.socials.map((contact, index) => (
                                <a href={contact.url}
                                   key={`contact-${index}`}
                                   target="_blank"
                                   rel="noreferrer"
                                   className='hover:text-gray-100 transition-colors'>
                                    <CMSIcon icon={contact.iconSvg} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div> {/* Fechamento da div de conteúdo movido para cá */}

                {/* Lado Direito: Imagem */}
                <div className="relative border-2 border-emerald-500 rounded-2xl p-2 w-max mx-auto lg:mx-0">
                    <Image
                        width={420}
                        height={404}
                        src={homeInfo.profilePicture.url}
                        alt="Foto de perfil do Lucas"
                        className="rounded-xl shadow-2xl object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}