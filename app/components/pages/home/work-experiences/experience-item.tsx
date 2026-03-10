import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"

export const ExperienceItem = () => {
    return (
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image 
                    src="/images/experience-icon.svg" 
                    alt="Experience Icon"
                    width={40}
                    height={40}
                    className="rounded-full"
                    />
                </div>

                <div className="h-full w-[1px] bg-gray-800">

                </div>
            </div>

            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a href = "#"                     className="text-gray-500 hover:text-emerald-500 transition-colors ">
                        @LinkDaEmpresa
                    </a>
                    <h4 className="text-gray-300">
                        Desenvolvedor...
                    </h4>
                    <span className="text-gray-500">
                        Jan 2020 - Dez 2021
                    </span>
                    <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum reprehenderit consectetur natus sint fuga tempora ex impedit aperiam perferendis optio commodi dolores, error repellat dolorum excepturi ipsam minus velit consequuntur!</p>
                </div>

                <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    <TechBadge name="React" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="TypeScript" />

                </div>
            </div>
        </div>
    )
}