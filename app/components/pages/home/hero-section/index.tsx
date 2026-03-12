'use client'

import Image from 'next/image'
import { Button } from '../../../button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { HomePageInfo } from '@/app/types/page-info'
import { RichText } from '@/app/components/rich-text'
import { TechBadge } from '@/app/components/tech-badge'
import { CMSIcon } from '@/app/components/cms-icon'
import { motion } from 'framer-motion' // Importado
import { techBadgeAnimation } from '@/app/lib/animations' // Importado

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
                
                {/* Lado Esquerdo Animado: Slide da esquerda para direita */}
                <motion.div 
                    className="w-full lg:max-w-[640px]"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="font-mono text-emerald-400">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Lucas Barbosa</h2>
                    
                    <div className="my-6 text-gray-400 text-sm sm:text-base">
                        <RichText content={homeInfo.introduction.raw} />
                    </div>

                    {/* Techs com animação em cascata */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        {homeInfo.technologies.map((tech, i)=> (
                            <TechBadge 
                                key={tech.name} 
                                name={tech.name} 
                                {...techBadgeAnimation}
                                transition={{ duration: 0.2, delay: i * 0.1 }}
                            />
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
                </motion.div>

                
                <motion.div 
                    className="relative border-2 border-emerald-500 rounded-2xl p-2 w-max mx-auto lg:mx-0 origin-center"
                    initial={{ opacity: 0, y: 200, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 200, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        width={420}
                        height={404}
                        src={homeInfo.profilePicture.url}
                        alt="Foto de perfil do Lucas"
                        className="w-full h-auto rounded-xl shadow-2xl object-cover "
                        priority
                    />
                </motion.div>
            </div>
        </section>
    )
}