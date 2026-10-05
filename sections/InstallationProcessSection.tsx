"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileSearch, Wrench, ArrowRight, CheckCircle2 } from "lucide-react";
import { fadeInUp, fadeInLeft } from "@/utils/animations";
import { renderIcon } from "@/utils/icons";
import { site, InstallationProcessData, SectionProps } from "@/data";
import NeedHelpCard from "@/components/cards/NeedHelpCard";

export type InstallationProcessSectionProps = SectionProps<InstallationProcessData>;

export default function InstallationProcessSection({ data }: InstallationProcessSectionProps = {}) {
    const processData = data || site.installationProcess;
    const [activeStep, setActiveStep] = useState(0);

    const steps = processData?.steps || [];
    const featureCards = processData?.featureCards || [];

    return (
        <section className="relative w-full py-8 lg:py-14 bg-white text-neutral-900 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

                    {/* Left Column (4 cols): Navigation list + Need Help Card */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="order-2 lg:order-1 lg:col-span-4 space-y-6"
                    >
                        {/* 1. Installation Process Steps Box */}
                        <div className="bg-[#F8FAFC] border border-neutral-200/80 rounded-2xl p-4 sm:p-5 space-y-3 shadow-sm">
                            <h3 className="text-xl font-bold text-[#0B132A] px-2 pb-1">
                                {processData?.navigationTitle || "Installation Process"}
                            </h3>

                            <div className="space-y-2.5">
                                {steps.map((step, idx) => {
                                    const isActive = activeStep === idx;

                                    return (
                                        <motion.button
                                            key={step.title}
                                            onClick={() => setActiveStep(idx)}
                                            whileHover={{ x: 4 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${isActive
                                                ? "bg-[#84cc16] text-white font-semibold shadow-md"
                                                : "bg-white text-neutral-800 hover:bg-neutral-50 border border-neutral-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className={`shrink-0 ${isActive ? "text-white" : "text-[#0B132A]"}`}>
                                                    {renderIcon(step.icon, FileSearch, "w-5 h-5")}
                                                </span>
                                                <span className="truncate">{step.title}</span>
                                            </div>

                                            <div
                                                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isActive
                                                    ? "bg-white/20 text-white"
                                                    : "bg-[#84cc16] text-white"
                                                    }`}
                                            >
                                                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                                            </div>
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* 2. Need Help With Your Installation? CTA Box */}
                        <NeedHelpCard />
                    </motion.div>

                    {/* Right Column (8 cols): Hero Image, Titles, 2 Feature Cards Grid */}
                    <div className="order-1 lg:order-2 lg:col-span-8 space-y-6">

                        {/* Top Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="relative w-full h-[260px] sm:h-[340px] md:h-[400px] rounded-3xl overflow-hidden shadow-sm group"
                        >
                            <Image
                                src="/images/installation/hero-installation.png"
                                alt={processData?.titleHighlight || "CCTV Installation Process"}
                                fill
                                sizes="(max-width: 1024px) 100vw, 66vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>

                        {/* CCTV Installation Process Heading & Descriptions */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="space-y-3"
                        >
                            <div className="w-16 h-1 bg-[#84cc16] rounded-full mb-3" />

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B132A] tracking-tight">
                                {processData?.titlePart1 || "CCTV"}{" "}
                                <span className="text-[#84cc16]">{processData?.titleHighlight || "Installation Process"}</span>
                            </h2>

                            <p className="text-base sm:text-lg font-medium text-neutral-600 leading-relaxed pt-1">
                                {processData?.description}
                            </p>
                        </motion.div>

                        {/* Two Highlight Cards Grid (Site Survey & Planning + Professional Installation) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {featureCards.map((card, idx) => (
                                <motion.div
                                    key={card.id || card.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                                    className="space-y-4"
                                >
                                    <div className="relative mb-6">
                                        <div className="rounded-2xl overflow-hidden shadow-sm aspect-[16/10]">
                                            <motion.img
                                                src={card.image}
                                                alt={card.title}
                                                whileHover={{ scale: 1.04 }}
                                                transition={{ duration: 0.4 }}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        {/* Floating Icon Badge with actual rendered Lucide Icon */}
                                        <div className="absolute -bottom-5 left-5 sm:-bottom-6 sm:left-6 z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#84cc16] border-4 border-white shadow-lg flex items-center justify-center text-white">
                                            {renderIcon(card.icon, idx === 0 ? FileSearch : Wrench, "w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]")}
                                        </div>
                                    </div>

                                    <div className="space-y-2 pt-2">
                                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B132A] tracking-tight">
                                            {card.title}
                                        </h3>
                                        <p className="text-sm text-neutral-500 leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>

                                    <div className="space-y-2.5 pt-1">
                                        {card.features?.map((item: string, itemIdx: number) => (
                                            <div key={itemIdx} className="flex items-center gap-2.5">
                                                <CheckCircle2 className="w-7 h-7 text-white fill-[#84cc16] shrink-0" />
                                                <span className="text-sm font-semibold text-[#0B132A]/85">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}