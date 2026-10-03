"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { fadeInLeft, staggerContainer, staggerItem, transitions } from "@/utils/animations";
import { site, SectionProps, SecureViewOurAmcData } from "@/data";

export interface OurAmcSectionProps extends SectionProps<SecureViewOurAmcData> { }

export default function OurAmcSection({ data, className = "" }: OurAmcSectionProps = {}) {
    const ourAmcData = data || site.ourAmcData || {};
    const badge = ourAmcData.badge || "OUR AMC PLANS";
    const titlePart1 = ourAmcData.titlePart1 || "Simple Plans,";
    const titleHighlight = ourAmcData.titleHighlight || "Complete";
    const titlePart2 = ourAmcData.titlePart2 || "Peace of Mind";
    const description = ourAmcData.description || "Choose the right AMC plan to keep your CCTV system secure, reliable and hassle-free all year round.";
    const amcPlans = ourAmcData.plans || [];

    return (
        <section className={`w-full py-8 lg:py-14 bg-neutral-50 text-neutral-900 overflow-hidden ${className}`}>
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

                    {/* Left Column: Section Text */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-4 xl:col-span-3 space-y-3">
                        {badge && (
                            <div className="inline-flex items-center gap-3">
                                <motion.span
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 48 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="inline-block h-[2px] bg-[#84cc16]"
                                />
                                <motion.span
                                    whileHover={{ scale: 1.05 }}
                                    transition={transitions.fast}
                                    className="inline-block text-[#84cc16] font-semibold text-sm uppercase tracking-wide cursor-default">
                                    {badge}
                                </motion.span>
                            </div>
                        )}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1930] tracking-tight leading-tight">
                            {titlePart1} <br />
                            <span className="text-[#84cc16]">{titleHighlight}</span> <br />
                            {titlePart2}
                        </h2>
                        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-md">
                            {description}
                        </p>
                    </motion.div>

                    {/* Right Column: Pricing Cards with Stagger Animations */}
                    <motion.div
                        variants={staggerContainer(0.12, 0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-8 xl:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
                        {amcPlans.map((plan: any) => (
                            <motion.div
                                key={plan.id || plan.name}
                                variants={staggerItem}
                                whileHover={{ y: -5 }}
                                transition={transitions.smooth}
                                className={`relative bg-white rounded-xl p-4 sm:p-5 flex flex-col justify-between shadow-sm transition-all duration-300 ${plan.isPopular ? "border-2 border-[#84cc16] shadow-lg shadow-[#84cc16]/10" : "border border-neutral-200/80 hover:border-[#84cc16]/40 hover:shadow-md"
                                    }`}>
                                {/* Most Popular Badge */}
                                {plan.isPopular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#84cc16] text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                                        {plan.popularBadge || "Most Popular"}
                                    </div>
                                )}

                                {/* Plan Details */}
                                <div className="space-y-3.5">
                                    <div className="space-y-1">
                                        <h3 className="text-lg sm:text-xl font-bold text-[#0a1930] tracking-tight">
                                            {plan.name}
                                        </h3>
                                        <p className="text-neutral-600 text-xs leading-relaxed min-h-[32px]">
                                            {plan.description || plan.target}
                                        </p>
                                    </div>

                                    <div className="flex items-baseline gap-1 pt-0.5">
                                        <span className="text-2xl sm:text-3xl font-black text-[#84cc16] tracking-tight">
                                            {plan.price}
                                        </span>
                                        <span className="text-neutral-500 text-xs font-medium">
                                            /year
                                        </span>
                                    </div>

                                    <ul className="space-y-2 pt-2.5 border-t border-neutral-100">
                                        {plan.features?.map((feature: string) => (
                                            <li key={feature} className="flex items-start gap-2 text-xs">
                                                <div className="w-6 h-6 rounded-full bg-[#84cc16] flex items-center justify-center shrink-0 mt-0.5">
                                                    <Check className="w-4 h-4 text-white stroke-[3]" />
                                                </div>
                                                <span className="text-neutral-700 leading-snug font-medium">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Choose Plan Button */}
                                <div className="mt-5 pt-3.5 border-t border-neutral-100">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={transitions.spring}>
                                        <Link
                                            href={plan.buttonHref || "/contact-us"}
                                            className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm ${plan.isPopular
                                                ? "bg-neutral-950 text-white hover:bg-neutral-800 shadow-md"
                                                : "bg-white border border-neutral-300 text-[#0a1930] hover:border-[#84cc16] hover:text-[#84cc16]"
                                                }`}>
                                            <span>{plan.buttonText || "Choose Plan"}</span>
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}