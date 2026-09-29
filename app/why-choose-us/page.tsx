"use client";

import { site } from "@/data";
import PageTopSection from "@/components/common/PageTopSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";
import TestimonialSection from "@/sections/TestimonialSection";

export default function WhyChooseUsPage() {
    const { pageTopSection, whyChooseUs, testimonial } = site;

    return (
        <main>
            <PageTopSection
                title={pageTopSection?.title || "Why Choose Us"}
                breadcrumbPath="Why Choose Us"
            />
            <WhyChooseUsSection data={whyChooseUs} />
            <TestimonialSection data={testimonial} />
        </main>
    );
}
