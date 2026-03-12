import { ProjectDetails } from "@/app/components/pages/project/project-details";
import { ProjectSections } from "@/app/components/pages/project/project-sections";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph-query";
import type {
  ProjectPageData,
  ProjectsPageStaticData,
} from "@/app/types/page-info";
import { Metadata } from "next";

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
  query ProjectQuery {
    project(where: {slug: "${slug}"}) {
    thumbnail {
      url
    }
    sections {
      title
      image {
        url
      }
    }
    title
    shortDescription
    description {
      raw
      text
    }
    technologies {
      name
    }
    liveProjectUrl
    githubUrl
  }
}
  `;

  return fetchHygraphQuery(query, 60 * 60 * 24); // 24 hours;
};

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { project } = await getProjectDetails(slug);

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const query = `
    query ProjectSlugQuery {
      projects(first: 100) {
        slug
      }
    }
  `;

  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query);

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getProjectDetails(slug);
  const project = data.project;

  return {
    title: project.title,
    description: project.description.text,
    openGraph: {
      images: [
        {
          url: project.thumbnail.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}