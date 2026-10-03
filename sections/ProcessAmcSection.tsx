"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { fadeInLeft, fadeInRight, scaleIn, staggerContainer, staggerItem, transitions } from "@/utils/animations";
import { site, SectionProps, SecureViewAmcProcessData } from "@/data";

export type ProcessAmcSectionProps = SectionProps<SecureViewAmcProcessData>;

export default function ProcessAmcSection({ data, className = "" }: ProcessAmcSectionProps = {}) {
    const amcProcessData = data || site.amcProcessData || {};
    const processBadge = amcProcessData.processBadge || "OUR AMC PROCESS";
    const processTitlePart1 = amcProcessData.processTitlePart1 || "A Simple &";
    const processTitleHighlight = amcProcessData.processTitleHighlight || "Hassle-Free Process";
    const processDescription = amcProcessData.processDescription || "We make CCTV maintenance easy, structured, and completely transparent.";
    const processSteps = amcProcessData.processSteps || [
        { num: "01", title: "Enquiry", desc: "Share your requirements with us." },
        { num: "02", title: "Assessment", desc: "Our team evaluates your system." },
        { num: "03", title: "Plan Activation", desc: "Choose the best AMC plan for your needs." },
        { num: "04", title: "Ongoing Support", desc: "Enjoy uninterrupted security with regular service." },
    ];
    const faqBadge = amcProcessData.faqBadge || "FREQUENTLY ASKED QUESTIONS";
    const faqTitlePart1 = amcProcessData.faqTitlePart1 || "AMC & Maintenance";
    const faqTitleHighlight = amcProcessData.faqTitleHighlight || "FAQs";
    const faqDescription = amcProcessData.faqDescription || "Find answers to common questions about our CCTV AMC and maintenance services.";
    const image = amcProcessData.image || "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop";
    const imageAlt = amcProcessData.imageAlt || "Security monitoring control room";
    const amcFaqs = amcProcessData.faqs || [];

    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <section className={`relative w-full py-8 lg:py-14 bg-neutral-50 text-neutral-900 overflow-hidden ${className}`}>
            <div className="max-w-[1400px] mx-auto px-4 space-y-10">
                <div className="">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

                        {/* Left Title Info (4 Cols) */}
                        <div className="lg:col-span-4 space-y-3">
                            {processBadge && (
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
                                        {processBadge}
                                    </motion.span>
                                </div>
                            )}
                            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1930] tracking-tight">
                                {processTitlePart1} <span className="text-[#84cc16]">{processTitleHighlight}</span>
                            </h4>
                            <p className="text-neutral-600 text-sm leading-relaxed">
                                {processDescription}
                            </p>
                        </div>

                        <motion.div
                            variants={staggerContainer(0.1, 0.05)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
                            {processSteps.map((step: { num: string; title: string; desc: string }, index: number) => (
                                <motion.div
                                    key={step.num}
                                    variants={staggerItem}
                                    whileHover={{ y: -4 }}
                                    transition={transitions.fast}
                                    className="relative flex flex-col items-center text-center space-y-3 transition-all duration-300">
                                    {/* Step Number Circle */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 6 }}
                                        transition={transitions.spring}
                                        className="w-16 h-16 rounded-full bg-[#84cc16] text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-md font-mono">
                                        {step.num}
                                    </motion.div>

                                    <div className="space-y-1">
                                        <h5 className="font-bold text-[#0a1930] text-base">{step.title}</h5>
                                        <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
                                    </div>

                                    {index !== processSteps.length - 1 && (
                                        <div className="hidden md:flex absolute top-8 -right-2.5 sm:-right-3.5 -translate-y-1/2 text-[#84cc16] pointer-events-none">
                                            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-5 relative">
                        <motion.div
                            variants={scaleIn}
                            whileHover={{ y: -4 }}
                            transition={transitions.smooth}
                            className="relative w-full h-[360px] sm:h-[420px] rounded-xl overflow-hidden shadow-md border border-neutral-200/70 bg-neutral-900">
                            <Image
                                src={image}
                                alt={imageAlt}
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="object-cover hover:scale-105 transition-transform duration-500" />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-7 space-y-5">
                        {/* Header */}
                        <div className="space-y-2">
                            {faqBadge && (
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
                                        {faqBadge}
                                    </motion.span>
                                </div>
                            )}
                            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-[#0a1930]">
                                {faqTitlePart1} <span className="text-[#84cc16]">{faqTitleHighlight}</span>
                            </h4>
                            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                                {faqDescription}
                            </p>
                        </div>

                        {/* Accordion List */}
                        <div className="space-y-3 pt-2">
                            {amcFaqs.map((faq: { question: string; answer: string }, index: number) => {
                                const isOpen = openFaqIndex === index;

                                return (
                                    <div
                                        key={index}
                                        className={`rounded-xl transition-all duration-300 border ${isOpen
                                            ? "bg-[#f8f9fa] border-[#84cc16]/50 shadow-sm"
                                            : "bg-white border-neutral-200/80 hover:border-neutral-300"
                                            }`}>
                                        <button
                                            onClick={() => toggleFaq(index)}
                                            className="w-full flex items-center justify-between px-4 py-3 text-left cursor-pointer">
                                            <span className="font-bold text-[#0a1930] text-sm sm:text-base pr-4">
                                                {faq.question}
                                            </span>
                                            <div
                                                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen
                                                    ? "bg-[#84cc16] text-white"
                                                    : "bg-neutral-100 text-[#0a1930]"
                                                    }`}>
                                                {isOpen ? (
                                                    <Minus className="w-4 h-4 stroke-[3]" />
                                                ) : (
                                                    <Plus className="w-4 h-4 stroke-[3]" />
                                                )}
                                            </div>
                                        </button>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                                    className="overflow-hidden px-4 sm:px-5 pb-4 sm:pb-5">
                                                    <p className="pt-2 border-t border-neutral-200/80 text-neutral-600 text-xs sm:text-sm leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}