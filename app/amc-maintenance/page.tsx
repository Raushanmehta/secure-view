import { site } from "@/data";
import PageTopSection from "@/components/common/PageTopSection";
import AmcSection from "@/sections/AmcSection";
import OurAmcSection from "@/sections/OurAmcSection";
import EnquirySection from "@/sections/EnquirySection";
import ProcessAmcSection from "@/sections/ProcessAmcSection";

export default function AMCMaintenancePage() {
    return (
        <main>
            <PageTopSection title="AMC Maintenance" breadcrumbPath="AMC Maintenance" />
            <AmcSection data={site.amcData} />
            <OurAmcSection data={site.ourAmcData} />
            <EnquirySection data={site.amcEnquiryData} />
            <ProcessAmcSection data={site.amcProcessData} />
        </main>
    );
}