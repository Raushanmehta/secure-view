import PageTopSection from "@/components/common/PageTopSection";
import ServiceDetailSection from "@/pages/ServiceDetailSection";
import { site, ServiceItem } from "@/data";

interface ServiceDetailPageProps {
    params?: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    const servicesList: ServiceItem[] = site.services?.servicesList || [];
    return servicesList.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps = {}) {
    const resolvedParams = params ? await params : undefined;
    const slug = resolvedParams?.slug;

    const servicesList: ServiceItem[] = site.services?.servicesList || [];
    const currentService = servicesList.find(
        (s) => s.slug === slug || s.slug?.toLowerCase() === slug?.toLowerCase()
    );

    const formattedTitle = currentService?.title || (slug
        ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
        : "Service Details");

    return (
        <main>
            <PageTopSection
                title={formattedTitle}
                breadcrumbPath={`Services / ${formattedTitle}`}
            />
            <ServiceDetailSection initialSlug={slug || currentService?.slug} />
        </main>
    );
}
