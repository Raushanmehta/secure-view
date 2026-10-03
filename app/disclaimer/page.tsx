import PageTopSection from "@/components/common/PageTopSection"
import LegalSection from "@/sections/LegalSection"
import { site } from "@/data";

export default function DisclaimerPage() {
    const legalData = site.legal?.disclaimer;

    return (
        <main>
            <PageTopSection
                title={legalData?.pageTitle || "Disclaimer"}
                breadcrumbPath={legalData?.breadcrumbText || "Disclaimer"}
            />
            <LegalSection data={legalData} />
        </main>
    );
}