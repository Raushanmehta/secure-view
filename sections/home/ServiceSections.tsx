"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/cards/ServiceCard";
import { fadeInUp, staggerContainer, containerVariants, } from "@/utils/animations";
import { site, SecureViewServicesData, SectionProps } from "@/data";

export interface ServiceSectionProps extends SectionProps<SecureViewServicesData> { }

export default function ServiceSection({ data, className }: ServiceSectionProps = {}) {
    const servicesData = data || site.services;
    const {
        badge,
        titlePart1,
        titleHighlight,
        description,
        services = [],
    } = servicesData || {};

    return (
        <section className={`relative w-full py-8 lg:py-14 bg-black text-white overflow-hidden ${className || ""}`}>
            <div className="max-w-[1400px] mx-auto px-4">

                {/* Section Header with Staggered Entrance */}
                <motion.div
                    variants={staggerContainer(0.1, 0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center max-w-2xl mx-auto space-y-2 mb-4 lg:mb-8">
                    {badge && (
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2">
                            <span className="text-xs lg:text-4xl font-normal text-[#84cc16]">[</span>
                            <span className="text-xs lg:text-lg uppercase tracking-[0.25em] font-bold flex items-center justify-center text-[#84cc16]">
                                {badge}
                            </span>
                            <span className="text-xs lg:text-4xl font-normal text-[#84cc16]">]</span>
                        </motion.div>
                    )}

                    <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide">
                        {titlePart1} {titleHighlight && <span className="text-[#84cc16]">{titleHighlight}</span>}
                    </motion.h2>

                    {description && (
                        <motion.p variants={fadeInUp} className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                            {description}
                        </motion.p>
                    )}
                </motion.div>

                {/* Services Grid with Staggered Container */}
                {services && services.length > 0 && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.05 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={service.title + index}
                                service={service}
                                index={index}
                                isHighlighted={service.isHighlighted}
                            />
                        ))}
                    </motion.div>
                )}

            </div>
        </section>
    );
}