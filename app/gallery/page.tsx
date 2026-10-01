import PageTopSection from "@/components/common/PageTopSection";
import GallerySection from "@/sections/GallerySection";
import { site } from "@/data";

export default function GalleryPage() {
    const galleryData = site.gallery;

    return (
        <main>
            <PageTopSection
                title={galleryData?.pageTop?.title || "Gallery"}
                breadcrumbPath={galleryData?.pageTop?.breadcrumbPath || "Gallery"}
            />
            <GallerySection data={galleryData} />
        </main>
    );
}