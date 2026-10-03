"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport, } from "@/utils/animations";
import { site } from "@/data";


export interface LegalContentBlock {
    id: string;
    title: string;
    highlight?: string;
    content: string | string[];
    isLastUpdated?: boolean;
}

export interface LegalPolicyData {
    pageTitle?: string;
    breadcrumbText?: string;
    lastUpdated?: string;
    sections?: LegalContentBlock[];
}

export type LegalPolicyType = "privacyPolicy" | "warrantyPolicy" | "Disclaimer" | "termsAndConditions";

export interface LegalSectionProps {
    data?: LegalPolicyData | LegalContentBlock[];
    type?: LegalPolicyType;
    className?: string;
}

export default function LegalSection({ data, type = "privacyPolicy", className = "" }: LegalSectionProps) {

    const resolvedSource = data || site.legal?.[type] || site.legal?.privacyPolicy;

    let contentList: LegalContentBlock[] = [];
    let lastUpdated: string | undefined;
    let breadcrumbText: string = "Privacy Policy";

    if (Array.isArray(resolvedSource)) {
        contentList = resolvedSource;
    } else if (resolvedSource && typeof resolvedSource === "object") {
        contentList = resolvedSource.sections || [];
        lastUpdated = resolvedSource.lastUpdated;
        breadcrumbText = resolvedSource.breadcrumbText || "Privacy Policy";
    }

    return (
        <section className={`relative w-full py-8 lg:py-14 bg-white text-neutral-800 overflow-hidden ${className}`}>

            {/* Breadcrumb Header */}
            <motion.header
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                className="max-w-[1400px] mx-auto px-4">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Link href="/" className="hover:text-[#84cc16] transition-colors">
                        Home
                    </Link>
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                    <span className="text-neutral-900 font-medium">{breadcrumbText}</span>
                </div>
            </motion.header>

            {/* Main Content Container */}
            <motion.main
                variants={staggerContainer(0.08, 0.05)}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                className="max-w-[1400px] mx-auto px-4 space-y-4 lg:space-y-6 mt-4">
                {/* Last Updated badge from data if present */}
                {lastUpdated && (
                    <motion.div
                        variants={staggerItem}
                        className="inline-flex items-center gap-2 text-sm lg:text-base text-neutral-600 mb-2">
                        <span className="font-semibold text-neutral-800">
                            Last Updated:
                        </span>
                        <span className="text-[#84cc16] font-bold">
                            {lastUpdated}
                        </span>
                    </motion.div>
                )}

                {contentList.map((section: LegalContentBlock) => {
                    // Conditionally apply special styling for the "Last Updated" block
                    if (section.isLastUpdated) {
                        return (
                            <motion.div
                                key={section.id}
                                variants={staggerItem}
                                className="inline-flex items-center gap-2 text-sm lg:text-base text-neutral-600">
                                <span className="font-semibold text-neutral-800">
                                    {section.title}
                                </span>
                                <span className="text-[#84cc16] font-bold">
                                    {section.highlight}
                                </span>
                            </motion.div>
                        );
                    }

                    // Standard content block rendering
                    return (
                        <motion.div
                            key={section.id}
                            id={section.id}
                            variants={staggerItem}
                            className=" lg:space-y-2 ">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-neutral-950 tracking-wide mt-2 lg:mt-4">
                                {section.title}{" "}
                                {section.highlight && (
                                    <span className="text-[#84cc16]">{section.highlight}</span>
                                )}
                            </h2>

                            {/* Render content as single string or mapped paragraphs */}
                            {Array.isArray(section.content) ? (
                                section.content.map((paragraph, pIdx) => (
                                    <p
                                        key={`${section.id}-p-${pIdx}`}
                                        className="text-base sm:text-lg leading-relaxed text-neutral-600 "
                                    >
                                        {paragraph}
                                    </p>
                                ))
                            ) : (
                                <p className="text-base sm:text-lg leading-relaxed text-neutral-600 ">
                                    {section.content}
                                </p>
                            )}
                        </motion.div>
                    );
                })}
            </motion.main>


        </section>
    );
}