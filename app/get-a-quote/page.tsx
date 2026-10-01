import PageTopSection from "@/components/common/PageTopSection";
import GetAQuoteSection from "@/sections/GetAQuoteSection";
import { site } from "@/data";

export default function GetAQuotePage() {
    const quoteData = site.getAQuote;

    return (
        <main>
            <PageTopSection title="Get A Quote" breadcrumbPath="Get A Quote" />
            <GetAQuoteSection data={quoteData} />
        </main>
    );
}