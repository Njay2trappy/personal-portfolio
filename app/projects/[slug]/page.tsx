import { notFound } from 'next/navigation';
import ProjectDetails from './_components/ProjectDetails';
import { PROJECTS } from '@/lib/data';
import { Metadata } from 'next';

const normalizeSlug = (value: string) =>
    decodeURIComponent(value).trim().toLowerCase();

export const generateStaticParams = async () => {
    return PROJECTS.map((project) => ({ slug: normalizeSlug(project.slug) }));
};

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const project = PROJECTS.find(
        (project) => normalizeSlug(project.slug) === normalizeSlug(slug),
    );

    return {
        title: `${project?.title} - ${project?.techStack
            .slice(0, 3)
            .join(', ')}`,
        description: project?.description,
    } as Metadata;
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const project = PROJECTS.find(
        (project) => normalizeSlug(project.slug) === normalizeSlug(slug),
    );

    if (!project) {
        return notFound();
    }

    return <ProjectDetails project={project} />;
};

export default Page;
