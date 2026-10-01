import PageTopSection from "@/components/common/PageTopSection";
import ContactSection from "@/sections/ContactSection";
import { site } from "@/data";

export default function ContactPage() {
    const contactData = site.contact;

    return (
        <main>
            <PageTopSection title="Contact Us" breadcrumbPath="Contact Us" />
            <ContactSection data={contactData} />
        </main>
    );
}