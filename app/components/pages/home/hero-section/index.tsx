'use client'

import Image from 'next/image'
import { Button } from '../../../button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'

const MOCK_CONTACTS = [
    {
        url: 'https://github.com/devlucas-tec',
        icon: <TbBrandGithub className="text-gray-400 hover:text-gray-200 transition-colors" />
    },
    {
        url: 'https://www.linkedin.com/in/lucas-barbosa-75822135a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        icon: <TbBrandLinkedin  className="text-gray-400 hover:text-gray-200 transition-colors" />
    },
    {
        url:'https://wa.me/5583989198365',
        icon: <TbBrandWhatsapp className="text-gray-400 hover:text-gray-200 transition-colors" />
    }
]
export const HeroSection = () => {
    const handleContact = () => {
        const contactSection = document.querySelector('#contact')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lb:pb-[110px]">
            <div className="container flex items-start mx-auto flex-col-reverse lg:flex-row justify-between px-4 gap-8">
                
                
                <div className="w-full lg:max-w-[640px]">
                    <p className="text-emerald-400 font-mono mb-2">Olá, meu nome é</p>
                    <h2 className="text-4xl md:text-6xl font-medium text-gray-100 mb-4">Lucas Barbosa</h2>

                    <div className="text-gray-400 my-6 text-sm md:text-base leading-relaxed">
    <p className="text-gray-400 my-6 text-sm sm:text-base">
        Apaixonado por desvendar o que acontece "por baixo do capô" da tecnologia, sigo 
        minha formação em <strong>Análise e Desenvolvimento de Sistemas</strong> (IFPB - Campus Esperança) 
        e <strong>Técnico em Informática</strong> (Lourdinas - Campina Grande, PB). 
    </p>
    <p className="mt-4">
        Meu objetivo é transformar problemas complexos em soluções digitais eficientes e 
        escaláveis, unindo uma base técnica sólida à vontade constante de aprender. 
        Estou pronto para novos desafios — <strong>vamos construir algo incrível juntos?</strong>
    </p>
</div>

                    {/* Techs Placeholder */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        {['Java', 'Spring', 'TypeScript', 'Next.js', 'Node.js', 'JavaScript', 'HTML', 'CSS'].map((tech) => (
                            <span key={tech} className="bg-emerald-900/30 text-emerald-400 px-3 py-1 rounded-md text-sm border border-emerald-500/20">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Contato */}
                    <div className=" mt-6 lg:mt-10 flex sm:items-center gap-6 sm:flex-row">
                        <Button className='w-max shadow-button' onClick={handleContact}>
                            Entre em Contato
                            <HiArrowNarrowRight size={18} />
                        </Button>

                        <div className='text-2xl text-gray-600 flex items-center h-20 gap-3'>
                            {MOCK_CONTACTS.map((contact, index) => (
                                <a href = {contact.url}
                                    key = {`contact-${index}`}
                                    target="_blank"
                                    className='hover:text-gray-100 transition-colors'>
                                        {contact.icon}
                                    
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative border-2 border-emerald-500 rounded-2xl p-2">
                    <Image
                        width={420}
                        height={404}
                        src="/images/profile-pic.png"
                        alt="Foto de perfil do Lucas"
                        className="rounded-xl shadow-2xl object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}