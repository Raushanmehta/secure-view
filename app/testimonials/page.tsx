"use client";

import TestimonialCard from "@/components/cards/TestimonialCard";
import PageTopSection from "@/components/common/PageTopSection";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { site, SecureViewTestimonialData, SectionProps, TestimonialItem } from "@/data";

export interface TestimonialsPageProps extends SectionProps<SecureViewTestimonialData> { }

export default function TestimonialsPage({
    data = site.testimonial,
    className = "",
}: TestimonialsPageProps = {}) {
    const {
        badge = "TESTIMONIALS",
        titlePart1 = "What Our",
        titleHighlight = "Clients Say",
        description = "Real feedback from businesses who trust us for their security needs.",
        testimonials = [],
    } = data || {};

    return (
        <main>
            <PageTopSection title="Testimonials" breadcrumbPath="Testimonials" />
            <section className={`relative w-full py-8 lg:py-14 bg-white text-neutral-900 overflow-hidden ${className || ""}`}>
                <div className="max-w-[1400px] mx-auto px-4">

                    {/* Section Header with Staggered Entrance */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-center max-w-3xl mx-auto space-y-4 mb-10 lg:mb-12"
                    >
                        {badge && (
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2">
                                <span className="text-xs lg:text-4xl font-normal text-[#84cc16]">[</span>
                                <span className="text-xs lg:text-lg uppercase tracking-[0.25em] font-bold flex items-center justify-center text-[#84cc16]">
                                    {badge}
                                </span>
                                <span className="text-xs lg:text-4xl font-normal text-[#84cc16]">]</span>
                            </motion.div>
                        )}

                        <motion.h1
                            variants={fadeInUp}
                            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide"
                        >
                            {titlePart1}{" "}
                            {titleHighlight && (
                                <span className="text-[#84cc16]">{titleHighlight}</span>
                            )}
                        </motion.h1>

                        {description && (
                            <motion.p
                                variants={fadeInUp}
                                className="text-neutral-600 text-sm sm:text-base leading-relaxed"
                            >
                                {description}
                            </motion.p>
                        )}
                    </motion.div>

                    {/* Testimonials Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-12 gap-x-8 mt-12 sm:mt-16">
                        {testimonials.map((item: TestimonialItem, index: number) => (
                            <TestimonialCard key={index} item={item} index={index} />
                        ))}
                    </div>

                </div>
            </section>
        </main>
    );
}