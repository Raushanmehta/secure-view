import PageTopSection from "@/components/common/PageTopSection";
import LegalSection from "@/sections/LegalSection";
import { site } from "@/data";

export default function PrivacyPolicyPage() {
    const legalData = site.legal?.privacyPolicy;

    return (
        <main>
            <PageTopSection
                title={legalData?.pageTitle || "Privacy Policy"}
                breadcrumbPath={legalData?.breadcrumbText || "Privacy Policy"}
            />
            <LegalSection data={legalData} />
        </main>
    );
}