import PageTopSection from "@/components/common/PageTopSection";
import BlogDetailSection from "@/pages/BlogDetailSection";
import { site } from "@/data";

interface BlogDetailPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const blogPosts = site.blog?.blogPosts || [];
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { slug } = await params;
    const blogPosts = site.blog?.blogPosts || [];

    const currentPost = blogPosts.find(
        (p) => p.slug === slug || p.slug?.toLowerCase() === slug?.toLowerCase()
    ) || blogPosts[0];

    const formattedBreadcrumb = currentPost?.title || "Blog Detail";

    return (
        <main>
            <PageTopSection
                title="Blog Details"
                breadcrumbPath={`Blog / ${formattedBreadcrumb}`}
            />
            <BlogDetailSection
                post={currentPost}
                allPosts={blogPosts}
                categories={site.blog?.categories}
                sidebarCta={site.blog?.sidebarCta}
            />
        </main>
    );
}