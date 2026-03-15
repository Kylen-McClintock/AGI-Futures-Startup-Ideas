import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { problems } from '@/data/problem-atlas-data';
import ProblemDetailClient from './page-client';

export const dynamicParams = true; // allow dynamic resolution just in case
export const revalidate = 3600; // cache for 1 hour

export async function generateStaticParams() {
    return problems.map((p) => ({
        slug: p.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const problem = problems.find((p) => p.slug === slug);
    
    if (!problem) return {};

    return {
        title: `${problem.title} | Problem Atlas | AGI Futures`,
        description: problem.short_descriptor + '. ' + problem.preview_text.slice(0, 100) + '...',
        alternates: {
            canonical: `https://agifutures.com/problem-atlas/${slug}`
        }
    };
}

export default async function ProblemDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const problem = problems.find((p) => p.slug === slug);

    if (!problem) {
        notFound();
    }

    // Determine prev/next for navigation (optional enhancement from task)
    const currentIndex = problems.findIndex(p => p.slug === slug);
    const prevProblem = currentIndex > 0 ? problems[currentIndex - 1] : null;
    const nextProblem = currentIndex < problems.length - 1 ? problems[currentIndex + 1] : null;

    return (
        <ProblemDetailClient 
            problem={problem} 
            prevProblem={prevProblem ? { slug: prevProblem.slug, title: prevProblem.title } : null}
            nextProblem={nextProblem ? { slug: nextProblem.slug, title: nextProblem.title } : null}
        />
    );
}
