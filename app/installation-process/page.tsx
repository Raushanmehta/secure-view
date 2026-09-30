import PageTopSection from "@/components/common/PageTopSection";
import InstallationProcessSection from "@/sections/InstallationProcessSection";
import { site, InstallationProcessData } from "@/data";

export default function InstallationProcessPage() {
    const processData: InstallationProcessData = site.installationProcess;

    return (
        <main>
            <PageTopSection title="Installation Process" breadcrumbPath="Installation Process" />
            <InstallationProcessSection data={processData} />
        </main>
    );
}

