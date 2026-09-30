import PageTopSection from "@/components/common/PageTopSection";
import GallerySection from "@/sections/GallerySection";

export default function GalleryPage() {
    return (
        <main>
            <PageTopSection title="Gallery" breadcrumbPath="Gallery" />
            <GallerySection />
        </main>
    );
}