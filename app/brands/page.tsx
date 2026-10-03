"use client";

import BrandsCard from "@/components/cards/BrandsCard";
import PageTopSection from "@/components/common/PageTopSection";
import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { site, SecureViewBrandsData, SectionProps, BrandItem } from "@/data";

export type BrandsPageProps = SectionProps<SecureViewBrandsData>;

export default function BrandsPage({
    data = site.brands,
    className = "",
}: BrandsPageProps) {
    const {
        badge = "Brand We Work With",
        titlePart1 = "Trusted Security",
        titleHighlight = "Brands",
        description = "We partner with leading CCTV and security brands to deliver reliable, high-performance solutions for your safety.",
        brandsList = [],
    } = data || {};

    return (
        <main>
            <PageTopSection title="Brands" breadcrumbPath="Brands" />
            <section className={`relative w-full py-8 lg:py-14 bg-white text-neutral-900 overflow-hidden ${className || ""}`}>
                <div className="max-w-[1400px] mx-auto px-4">

                    {/* Section Header with Staggered Entrance */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-center max-w-3xl mx-auto space-y-4 mb-4 lg:mb-8"
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

                        <motion.h2
                            variants={fadeInUp}
                            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide"
                        >
                            {titlePart1}{" "}
                            {titleHighlight && (
                                <span className="text-[#84cc16]">{titleHighlight}</span>
                            )}
                        </motion.h2>

                        {description && (
                            <motion.p
                                variants={fadeInUp}
                                className="text-neutral-600 text-sm sm:text-base leading-relaxed"
                            >
                                {description}
                            </motion.p>
                        )}
                    </motion.div>

                    {/* All Brands Grid loaded completely from site.json */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-8">
                        {brandsList.map((brand: BrandItem, index: number) => (
                            <BrandsCard key={brand.id || index} brand={brand} />
                        ))}
                    </div>

                </div>
            </section>
        </main>
    );
}