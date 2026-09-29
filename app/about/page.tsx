"use client";

import { site } from "@/data";
import PageTopSection from "@/components/common/PageTopSection";
import AboutSection from "@/sections/home/AboutSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";
import CtaSection from "@/components/common/CtaSection";

export default function AboutPage() {
    const { pageTopSection, about, whyChooseUs, cta } = site;

    return (
        <main>
            <PageTopSection
                title={pageTopSection?.title || "About Us"}
                breadcrumbPath={pageTopSection?.breadcrumbPath || "About Us"}
            />
            <AboutSection data={about} />
            <WhyChooseUsSection data={whyChooseUs} />
            <CtaSection data={cta} />
        </main>
    );
}