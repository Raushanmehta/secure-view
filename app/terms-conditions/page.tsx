import PageTopSection from "@/components/common/PageTopSection"
import LegalSection from "@/sections/LegalSection"
import { site } from "@/data";

export default function TermsAndConditionsPage() {
    const legalData = site.legal?.termsAndConditions;

    return (
        <main>
            <PageTopSection
                title={legalData?.pageTitle || "Terms & Conditions"}
                breadcrumbPath={legalData?.breadcrumbText || "Terms & Conditions"}
            />
            <LegalSection data={legalData} />
        </main>
    );
}