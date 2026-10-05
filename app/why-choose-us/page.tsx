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
                title={"Why Choose Us"}
                breadcrumbPath="Why Choose Us"
            />
            <WhyChooseUsSection data={whyChooseUs} variant="light" />
            <TestimonialSection data={testimonial} />
        </main>
    );
}
