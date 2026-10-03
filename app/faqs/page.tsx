import PageTopSection from "@/components/common/PageTopSection";
import FAQsSection from "@/sections/FAQsSection";
import { site } from "@/data";

export default function Faqs() {
    return (
        <main>
            <PageTopSection title="FAQs" breadcrumbPath="FAQs" />
            <FAQsSection data={site.faq} />
        </main>
    );
}