import PageTopSection from "@/components/common/PageTopSection"
import LegalSection from "@/sections/LegalSection"
import { site } from "@/data";

export default function WarrantyPolicyPage() {
    const legalData = site.legal?.warrantyPolicy;

    return (
        <main>
            <PageTopSection
                title={legalData?.pageTitle || "Warranty Policy"}
                breadcrumbPath={legalData?.breadcrumbText || "Warranty Policy"}
            />
            <LegalSection data={legalData} />
        </main>
    );
}