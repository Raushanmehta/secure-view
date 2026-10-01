"use client";

import PricingCard from "@/components/cards/PricingCard";
import PageTopSection from "@/components/common/PageTopSection";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { site, SecureViewPricingData, PricingPlanItem } from "@/data";

interface PricingPageProps {
    data?: SecureViewPricingData;
    className?: string;
}

export default function PricingPage({ data = site.pricing, className = "" }: PricingPageProps) {
    const {
        badge = "PRICING PLANS",
        titlePart1 = "Simple Plans for Your",
        titleHighlight = "Security Needs",
        description = "Choose the right CCTV solution for your home or business. Transparent pricing, no hidden costs.",
        plans = [],
    } = data || {};

    return (
        <main>
            <PageTopSection title="Pricing" breadcrumbPath="Pricing" />
            <section className={`relative w-full py-8 lg:py-14 bg-white text-neutral-900 overflow-hidden ${className || ""}`}>
                <div className="max-w-[1400px] mx-auto px-4">

                    {/* Section Header with Staggered Entrance */}
                    <motion.div
                        variants={staggerContainer(0.12, 0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-center max-w-4xl mx-auto space-y-4 mb-8 lg:mb-12"
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

                    {/* Staggered Animated Pricing Cards Grid */}
                    <motion.div
                        variants={staggerContainer(0.15, 0.2)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch pt-2"
                    >
                        {plans.map((plan: PricingPlanItem, index: number) => (
                            <PricingCard key={plan.id || index} plan={plan} index={index} />
                        ))}
                    </motion.div>

                </div>
            </section>
        </main>
    );
}