"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle2, Monitor, ShieldCheck } from "lucide-react";
import { fadeInUp, fadeInLeft } from "@/utils/animations";
import { site, ServiceItem } from "@/data";
import { renderIcon } from "@/utils/icons";
import NeedHelpCard from "@/components/cards/NeedHelpCard";

interface ServiceDetailSectionProps {
    initialSlug?: string;
}

function Surveillance24Icon({ className = "w-14 h-14 text-[#84cc16]" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            {/* Clockwise circular arrow cycle */}
            <path
                d="M50 32c0 10.5-8.5 19-19 19s-19-8.5-19-19c0-9.5 7-17.4 16.2-18.8"
                strokeWidth="2.8"
                strokeLinecap="round"
            />
            {/* Arrow pointer head */}
            <path
                d="M48 13.5l4 4.5-5.5 2.5"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* Checkmark in top region */}
            <path
                d="M26 21l4 4 9-9"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* 24 label in center */}
            <text
                x="31"
                y="43"
                textAnchor="middle"
                fontSize="16"
                fontWeight="800"
                fontFamily="inherit"
                fill="currentColor"
                stroke="none"
            >
                24
            </text>
        </svg>
    );
}

export default function ServiceDetailSection({ initialSlug }: ServiceDetailSectionProps = {}) {
    const router = useRouter();
    const servicesData = site.services;
    const servicesList: ServiceItem[] = servicesData.servicesList;

    // Use initialSlug or fallback to first slug
    const fallbackSlug = servicesList[0]?.slug || "";
    const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
    const activeSlug = selectedSlug ?? (initialSlug || fallbackSlug);

    const activeService = servicesList.find((s) => s.slug === activeSlug) || servicesList[0];

    const sidebarTitle = servicesData?.sidebarTitle || "Our Services";
    const helpCta = servicesData?.helpCta;
    const heroImage = activeService?.heroImage || activeService?.image || "";
    const heroImageAlt = activeService?.heroImageAlt || activeService?.title || "Service Hero";
    const overview = activeService?.overview;
    const featureHighlights = activeService?.featureHighlights || [];
    const benefits = activeService?.benefits;
    const benefitsList = benefits?.benefitsList || [];

    const handleTabClick = (slug: string) => {
        setSelectedSlug(slug);
        router.push(`/services/${slug}`, { scroll: false });
    };

    return (
        <section className="relative w-full py-8 lg:py-14 bg-white text-neutral-900 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Sidebar: Navigation List & Help Card (4 Cols) */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="order-2 lg:order-1 lg:col-span-4 space-y-6"
                    >
                        {/* Services Navigation Box */}
                        <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-4 space-y-3 shadow-sm">
                            <h3 className="text-xl font-bold text-neutral-900 mb-4 px-2">
                                {sidebarTitle}
                            </h3>

                            <div className="space-y-2">
                                {servicesList.map((tab) => {
                                    const isActive = activeSlug === tab.slug;
                                    return (
                                        <motion.button
                                            key={tab.slug}
                                            onClick={() => handleTabClick(tab.slug)}
                                            whileHover={{ x: 4 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${isActive
                                                ? "bg-[#84cc16] text-black font-semibold shadow-md"
                                                : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-100"
                                                }`}
                                        >
                                            <span className="truncate pr-2">{tab.title}</span>
                                            <div
                                                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isActive
                                                    ? "bg-black text-[#84cc16]"
                                                    : "bg-neutral-100 text-neutral-500"
                                                    }`}
                                            >
                                                <ChevronRight className="w-4 h-4" />
                                            </div>
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Need Help CTA Box */}
                        {helpCta && (
                            <NeedHelpCard helpCta={helpCta} />
                        )}
                    </motion.div>

                    {/* Right Main Content Area (8 Cols) */}
                    <div className="order-1 lg:order-2 lg:col-span-8 space-y-6">

                        {/* Top Main Hero Image */}
                        {heroImage && (
                            <motion.div
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden group shadow-lg"
                            >
                                <Image
                                    src={heroImage}
                                    alt={heroImageAlt}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 66vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                            </motion.div>
                        )}

                        {/* Service Overview Block */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="space-y-4"
                        >
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-neutral-900">
                                {overview?.title || "Service"}{" "}
                                {overview?.titleHighlight && (
                                    <span className="text-[#84cc16]">{overview.titleHighlight}</span>
                                )}
                            </h2>
                            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                                {activeService?.description || overview?.description}
                            </p>
                        </motion.div>

                        {/* Two Feature Highlights Grid */}
                        {featureHighlights && featureHighlights.length > 0 && (
                            <div className="flex flex-col gap-6">
                                {featureHighlights.map((feature, idx: number) => {
                                    const isEven = idx % 2 === 0;

                                    return (
                                        <div key={feature.title + idx} className="overflow-hidden">
                                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                                                {/* Content Side */}
                                                <motion.div
                                                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true, amount: 0.2 }}
                                                    transition={{ duration: 0.6 }}
                                                    className={`md:col-span-6 flex gap-5 sm:gap-6 items-start ${isEven ? "" : "order-1 md:order-2"
                                                        }`}
                                                >
                                                    {/* Icon Column with Vertical Green Line */}
                                                    <div className="flex flex-col items-center shrink-0 self-stretch">
                                                        {/* Circular Green Icon */}
                                                        <motion.div
                                                            whileHover={{ scale: 1.1, rotate: isEven ? 6 : -6 }}
                                                            transition={{ type: "spring", stiffness: 350, damping: 20 }}
                                                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#84cc16] text-white flex items-center justify-center shadow-lg shadow-[#84cc16]/25 shrink-0 ring-4 ring-[#84cc16]/20 cursor-pointer"
                                                        >
                                                            {renderIcon(
                                                                feature.icon,
                                                                isEven ? Monitor : ShieldCheck,
                                                                "w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]"
                                                            )}
                                                        </motion.div>

                                                        {/* Thick Vertical Green Line Running Down */}
                                                        <motion.div
                                                            initial={{ scaleY: 0, originY: 0 }}
                                                            whileInView={{ scaleY: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                                                            className="w-[3px] bg-[#84cc16] rounded-full flex-1 my-3 min-h-[140px]"
                                                        />
                                                    </div>

                                                    {/* Right: Title, Description, Checkpoints */}
                                                    <div className="space-y-2 flex-1">
                                                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B132A] tracking-tight">
                                                            {feature.title}
                                                        </h3>

                                                        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                                                            {feature.description}
                                                        </p>

                                                        {feature.points && feature.points.length > 0 && (
                                                            <div className="space-y-3 pt-2">
                                                                {feature.points.map((item: string, pIdx: number) => (
                                                                    <motion.div
                                                                        key={pIdx}
                                                                        whileHover={{ x: 4 }}
                                                                        transition={{ duration: 0.2 }}
                                                                        className="flex items-center gap-3 text-sm sm:text-base font-semibold text-neutral-600"
                                                                    >
                                                                        <CheckCircle2 className="w-7 h-7 text-white fill-[#84cc16] shrink-0" />
                                                                        <span>{item}</span>
                                                                    </motion.div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </motion.div>

                                                {/* Image Side */}
                                                <motion.div
                                                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true, amount: 0.2 }}
                                                    transition={{ duration: 0.6 }}
                                                    className={`relative md:col-span-6 rounded-3xl overflow-hidden h-72 sm:h-80 md:h-[300px] shadow-xl group ${isEven ? "" : "order-2 md:order-1"
                                                        }`}
                                                >
                                                    <Image
                                                        src={feature.image}
                                                        alt={feature.title}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, 40vw"
                                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </motion.div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Benefits With Our Service Footer Block */}
                        {benefits && (
                            <div className="pt-4 space-y-4">
                                <motion.div
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    className="text-start space-y-2"
                                >
                                    <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B132A] tracking-wide">
                                        {benefits.title}{" "}
                                        {benefits.titleHighlight && (
                                            <span className="text-[#84cc16]">{benefits.titleHighlight}</span>
                                        )}
                                    </h3>
                                    {benefits.description && (
                                        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                                            {benefits.description}
                                        </p>
                                    )}
                                </motion.div>

                                {/* 4 Cards with Horizontal Timeline & Vertical Connectors */}
                                {benefitsList && benefitsList.length > 0 && (
                                    <div className="pt-3">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                            {benefitsList.map((benefit, idx: number) => {
                                                const isCustom24 = benefit.icon === "Surveillance24";

                                                return (
                                                    <div key={idx} className="relative flex flex-col items-center">
                                                        {/* Top Connector: Horizontal Line + Node + Vertical Line */}
                                                        <div className="w-full flex flex-col items-center relative h-12">
                                                            {/* Continuous Horizontal Line Segment with Grow Animation */}
                                                            <motion.div
                                                                initial={{ scaleX: 0 }}
                                                                whileInView={{ scaleX: 1 }}
                                                                viewport={{ once: true }}
                                                                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                                                                className={`hidden lg:block absolute top-[11px] h-[2px] bg-[#84cc16] z-0 origin-left ${idx === 0
                                                                    ? "left-1/2 -right-3"
                                                                    : idx === benefitsList.length - 1
                                                                        ? "-left-3 right-1/2"
                                                                        : "-left-3 -right-3"
                                                                    }`}
                                                            />

                                                            {/* Circular Node with Spring Entrance */}
                                                            <motion.div
                                                                initial={{ scale: 0 }}
                                                                whileInView={{ scale: 1 }}
                                                                viewport={{ once: true }}
                                                                transition={{ type: "spring", stiffness: 350, damping: 20, delay: 0.1 * idx + 0.1 }}
                                                                className="relative z-10 w-6 h-6 rounded-full border-2 border-[#84cc16] bg-white flex items-center justify-center shadow-sm"
                                                            >
                                                                <div className="w-2.5 h-2.5 rounded-full bg-[#84cc16]" />
                                                            </motion.div>

                                                            {/* Vertical line connecting from node bottom straight into card top */}
                                                            <motion.div
                                                                initial={{ scaleY: 0, originY: 0 }}
                                                                whileInView={{ scaleY: 1 }}
                                                                viewport={{ once: true }}
                                                                transition={{ duration: 0.4, delay: 0.1 * idx + 0.25 }}
                                                                className="w-[2px] h-[22px] bg-[#84cc16]"
                                                            />
                                                        </div>

                                                        {/* The Card */}
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 25 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.5, delay: 0.1 * idx + 0.3 }}
                                                            whileHover={{ y: -6 }}
                                                            className="w-full bg-white border border-neutral-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)] transition-all duration-300 min-h-[190px] cursor-pointer"
                                                        >
                                                            {/* Icon with Hover Animation */}
                                                            <motion.div
                                                                whileHover={{ scale: 1.15, rotate: 6 }}
                                                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                                                className="w-16 h-16 flex items-center justify-center text-[#84cc16]"
                                                            >
                                                                {isCustom24 ? (
                                                                    <Surveillance24Icon className="w-14 h-14 text-[#84cc16]" />
                                                                ) : (
                                                                    renderIcon(
                                                                        benefit.icon,
                                                                        ShieldCheck,
                                                                        "w-14 h-14 text-[#84cc16] stroke-[2.2]"
                                                                    )
                                                                )}
                                                            </motion.div>

                                                            {/* Title (stacked into 2 lines matching the image) */}
                                                            <h4 className="font-extrabold text-[#0B132A] text-base sm:text-lg leading-tight tracking-tight">
                                                                <span className="block">{benefit.titleLine1}</span>
                                                                <span className="block">{benefit.titleLine2}</span>
                                                            </h4>
                                                        </motion.div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </section>
    );
}