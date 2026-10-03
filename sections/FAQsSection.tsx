"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import {
    fadeInLeft,
    fadeInRight,
    fadeInUp,
    staggerContainer,
    staggerItem,
    buttonHoverTap,
    accordionVariants,
    defaultViewport,
} from "@/utils/animations";
import { site, SecureViewFaqData } from "@/data";

export interface FAQItem {
    question: string;
    answer: string;
}

export interface FAQsSectionProps {
    data?: SecureViewFaqData;
    className?: string;
}

export default function FAQsSection({ data = site.faq, className = "" }: FAQsSectionProps) {
    const faqData = data || site.faq;
    const {
        badge = "FAQ",
        titlePart1 = "Frequently Asked",
        titleHighlight = "Questions",
        description1 = "Have questions about our CCTV installation and security services? We’ve got you covered. Find quick answers to common queries below.",
        description2 = "If you still need help, feel free to get in touch with our team. We're always happy to assist you with the right information and guidance for your security needs.",
        buttonText = "Contact Us",
        buttonHref = "/contact",
        image = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
        quoteTitlePart1 = "Safer Spaces,",
        quoteTitleHighlight = "Brighter Tomorrows",
        quoteDescription = "Reliable CCTV solutions for homes, businesses and beyond.",
        faqItems = [],
    } = faqData || {};

    const [activeIndex, setActiveIndex] = useState<number | null>(0); // First item open by default

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={`relative w-full py-8 lg:py-14 bg-white text-neutral-900 overflow-hidden ${className}`}>
            <div className="max-w-[1400px] mx-auto px-4 space-y-6 lg:space-y-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

                    {/* Left Column: Heading, Subtitle & Contact Button (7 Cols) */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        className="lg:col-span-7 space-y-4"
                    >
                        <div className="space-y-4">
                            {/* FAQ Small Pill/Tag */}
                            <div className="inline-flex items-center gap-2">
                                <motion.span
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 48 }}
                                    viewport={defaultViewport}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="h-[2px] bg-[#84cc16]"
                                />
                                <span className="text-xs lg:text-sm uppercase tracking-[0.25em] font-bold text-[#84cc16]">
                                    {badge}
                                </span>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-[#0a1930]">
                                {titlePart1} <br />
                                <span className="text-[#84cc16]">{titleHighlight}</span>
                            </h2>

                            {/* Description Paragraph 1 */}
                            {description1 && (
                                <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl">
                                    {description1}
                                </p>
                            )}

                            {/* Description Paragraph 2 */}
                            {description2 && (
                                <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-xl">
                                    {description2}
                                </p>
                            )}
                        </div>

                        {/* Contact Us Button */}
                        <div className="pt-2">
                            <motion.div {...buttonHoverTap} className="inline-block">
                                <Link
                                    href={buttonHref}
                                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#84cc16] text-white font-bold text-sm transition-all duration-300 hover:bg-[#65a30d] shadow-lg shadow-lime-500/25"
                                >
                                    {buttonText}
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column: Layered Image & Floating Card (5 Cols) */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        className="lg:col-span-5 relative"
                    >
                        {/* Soft Pale Lime Background Shape Block */}
                        <div className="absolute top-8 left-8 right-0 bottom-0 bg-[#f7fee7] rounded-[3rem] -z-10" />

                        {/* Main Technician Image Container */}
                        <div className="relative overflow-hidden rounded-r-4xl rounded-l-[80px] shadow-xl border border-neutral-100 w-full h-[400px]">
                            <Image
                                src={image}
                                alt="Security CCTV Cameras"
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="object-cover"
                            />
                        </div>

                        {/* Floating Left Quote Card ("Safer Spaces, Brighter Tomorrows") */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={defaultViewport}
                            className="absolute top-28 lg:top-20 -left-0 lg:-left-24 bg-[#f7fee7] border border-lime-200/70 px-5 py-4 lg:px-7 lg:py-5 rounded-4xl max-w-[200px] lg:max-w-[240px] z-20 space-y-2 backdrop-blur-sm"
                        >
                            <h3 className="text-[#0a1930] font-extrabold lg:text-3xl text-xl leading-snug">
                                {quoteTitlePart1} <br />
                                <span className="text-[#84cc16]">{quoteTitleHighlight}</span>
                            </h3>
                            <p className="text-neutral-600 text-xs leading-relaxed">
                                {quoteDescription}
                            </p>
                        </motion.div>
                    </motion.div>

                </div>


                {/* ================= BOTTOM SECTION: ACCORDION FAQ LIST ================= */}
                <motion.div
                    variants={staggerContainer(0.08, 0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="space-y-3 pt-4"
                >
                    {faqItems.map((item: FAQItem, index: number) => {
                        const isOpen = activeIndex === index;

                        return (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                className={`rounded-xl transition-all duration-300 border-2 ${isOpen
                                    ? "bg-[#f7fee7]/60 border-[#84cc16]/50 shadow-md shadow-lime-500/10"
                                    : "bg-[#f8f9fa] border-neutral-200/80 hover:border-[#84cc16]/40"
                                    }`}
                            >
                                {/* Question Header Button */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between px-6 py-3 lg:py-3 text-left cursor-pointer gap-4"
                                >
                                    <h3 className="text-sm lg:text-lg font-semibold text-[#0a1930] transition-colors">
                                        {item.question}
                                    </h3>

                                    {/* Up / Down Arrow Indicator */}
                                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-colors shadow-sm ${isOpen
                                        ? "bg-[#84cc16] text-white border-[#84cc16]"
                                        : "bg-white text-neutral-700 border-neutral-200"
                                        }`}>
                                        {isOpen ? (
                                            <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                                        ) : (
                                            <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                                        )}
                                    </div>
                                </button>

                                {/* Answer Content Panel (Animated with Framer Motion) */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            variants={accordionVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="overflow-hidden px-6 pb-5"
                                        >
                                            <div className="pt-3 border-t border-[#84cc16]/20 text-neutral-600 text-sm sm:text-base leading-relaxed">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
}