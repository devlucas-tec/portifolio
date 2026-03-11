import { HeroSection } from './components/pages/home/hero-section'
import { HighlightedProjects } from './components/pages/home/highlighted-projects'
import { KnownTechs } from './components/pages/home/known-techs'
import { HomePageData } from './types/page-info'
import { fetchHygraphQuery } from './utils/fetch-hygraph-query'

export const metadata = {
  title: 'Home',
}

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
        highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
          technologies {
            name
          }
        }
      }
    }
  `

 return fetchHygraphQuery(
  query,
  1000 * 60 * 60 * 24
 )
}

export default async function Home() {
  const data = await getPageData()

  // CORREÇÃO DO ERRO: Verifica se 'data' ou 'data.page' existem antes de desestruturar
  if (!data || !data.page) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p>Dados não encontrados no CMS. Verifique o slug "home" no Hygraph.</p>
      </div>
    )
  }

  const { page: pageData } = data

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs techs={pageData.knownTechs} />
      <HighlightedProjects projects={pageData.highlightProjects} />
    </>
  )
}