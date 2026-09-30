import PageTopSection from "@/components/common/PageTopSection";
import CaseSturdiesDetailSection from "@/pages/CaseSturdiesDetailSection";
import { site } from "@/data";

interface CaseStudiesDetailPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const caseStudies = site.caseStudies?.caseStudies || [];
    return caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

export default async function CaseStudiesDetailPage({ params }: CaseStudiesDetailPageProps) {
    const { slug } = await params;
    const caseStudies = site.caseStudies?.caseStudies || [];

    // Find matching case study from site.json by slug
    const study = caseStudies.find(
        (s) => s.slug === slug || s.slug?.toLowerCase() === slug?.toLowerCase()
    ) || caseStudies[0];

    const formattedBreadcrumb = study?.title || "Case Study Details";

    return (
        <main>
            <PageTopSection
                title="Case Study Details"
                breadcrumbPath={`Case Studies / ${formattedBreadcrumb}`}
            />
            {/* Data flow: Parent passes dynamic case study data down to child */}
            <CaseSturdiesDetailSection data={study} />
        </main>
    );
}
