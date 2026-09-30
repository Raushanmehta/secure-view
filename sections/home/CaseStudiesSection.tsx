"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, containerVariants, } from "@/utils/animations";
import CaseSturdiesCard from "@/components/cards/CaseSturdiesCard";
import { site, SecureViewCaseStudiesData, SectionProps } from "@/data";

export interface CaseStudiesSectionProps extends SectionProps<SecureViewCaseStudiesData> { }

export default function CaseStudiesSection({ data, className }: CaseStudiesSectionProps = {}) {
    const caseStudiesData = data || site.caseStudies;
    const {
        badge,
        titlePart1,
        titleHighlight,
        description,
        caseStudies = [],
    } = caseStudiesData || {};

    return (
        <section className={`relative w-full py-8 lg:py-14 bg-white text-neutral-900 overflow-hidden ${className || ""}`}>
            <div className="max-w-[1400px] mx-auto px-4">

                {/* Section Header with Staggered Entrance */}
                <motion.div
                    variants={staggerContainer(0.1, 0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center max-w-3xl mx-auto space-y-4 mb-4 lg:mb-8">
                    {badge && (
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2">
                            <span className="text-xs lg:text-4xl font-normal text-[#84cc16]">[</span>
                            <span className="text-xs lg:text-lg uppercase tracking-[0.25em] font-bold flex items-center justify-center text-[#84cc16]">
                                {badge}
                            </span>
                            <span className="text-xs lg:text-4xl font-normal text-[#84cc16]">]</span>
                        </motion.div>
                    )}

                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide">
                        {titlePart1} {titleHighlight && <span className="text-[#84cc16]">{titleHighlight}</span>}
                    </motion.h2>

                    {description && (
                        <motion.p
                            variants={fadeInUp}
                            className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                            {description}
                        </motion.p>
                    )}
                </motion.div>

                {/* Case Studies Cards Grid with Staggered Container */}
                {caseStudies && caseStudies.length > 0 && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.05 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {caseStudies.slice(0, 3).map((study, index) => (
                            <CaseSturdiesCard
                                key={study.title + index}
                                study={study}
                                index={index}
                            />
                        ))}
                    </motion.div>
                )}

            </div>
        </section>
    );
}