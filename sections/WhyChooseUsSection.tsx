"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { site, SecureViewWhyChooseUsData, SectionProps } from "@/data";
import { renderIcon } from "@/utils/icons";

export interface WhyChooseUsSectionProps extends SectionProps<SecureViewWhyChooseUsData> {
    theme?: "light" | "dark";
}

export default function WhyChooseUsSection({
    data,
    className = "",
    variant,
    theme,
}: WhyChooseUsSectionProps = {}) {
    const whyChooseUs = data || site.whyChooseUs;
    const isLight = variant === "light" || theme === "light" || className.includes("bg-white");

    const {
        badge = "WHY CHOOSE US",
        titlePart1 = "Why Choose",
        titleHighlight = "SecureView?",
        description = "We provide reliable, high-quality CCTV solutions with a focus on security, service and complete customer satisfaction.",
        image = {
            src: "/images/why-choose-uss.jpg",
            alt: "Employee holding an access card to a door reader",
        },
        features = [],
    } = whyChooseUs || {};

    return (
        <section
            className={`relative w-full lg:py-14 py-8 overflow-hidden transition-colors duration-300 ${isLight ? "bg-white text-neutral-900" : "bg-black text-white"
                } ${className}`}
        >
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-12 lg:gap-16 items-center">

                    {/* Left Column: Image with Green Geometric Background Accent (5 Cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 relative flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-[551px] aspect-[551/622] group">
                            {/* Floating animated Green background shapes */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                className="absolute inset-0 h-full w-full"
                            >
                                <svg
                                    viewBox="0 0 551 622"
                                    className="h-full w-full"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <defs>
                                        <linearGradient id="greenTopLeft" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0" stopColor="#6ccb2e" />
                                            <stop offset="1" stopColor="#52b427" />
                                        </linearGradient>
                                        <linearGradient id="greenBottomRight" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0" stopColor="#5ec22b" />
                                            <stop offset="1" stopColor="#3f9c1f" />
                                        </linearGradient>
                                    </defs>

                                    {/* Top-left shape: flat left edge, slanted right edge */}
                                    <path
                                        d="M30 28 H190 Q210 28 207 48 L196 120 L44 225 Q14 225 14 205 V44 Q14 28 30 28 Z"
                                        fill="url(#greenTopLeft)"
                                    />

                                    {/* Bottom-right shape: flat right edge, slanted left edge */}
                                    <path
                                        d="M500 120 H516 Q531 120 531 136 L526 545 Q524 577 490 577 H278 Q260 577 262 558 L270 500 L470 300 Z"
                                        fill="url(#greenBottomRight)"
                                    />
                                </svg>
                            </motion.div>

                            {/* Photo with smooth zoom on hover */}
                            <div className={`absolute left-[5.8%] top-[10%] h-[78.1%] w-[83.5%] overflow-hidden rounded-[12px] ${isLight
                                    ? "shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5"
                                    : "shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
                                }`}>
                                <Image
                                    src={image.src}
                                    alt={image.alt || "Why Choose Us"}
                                    fill
                                    priority
                                    sizes="(max-width: 640px) 90vw, 460px"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                {/* Soft overlay highlight on hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#84cc16]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Headings & 2x2 Feature Cards Grid (7 Cols) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.12, delayChildren: 0.1 },
                            },
                        }}
                        className="lg:col-span-7 space-y-2 lg:space-y-5"
                    >
                        {/* Top Subtitle Badge & Headings */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: 30 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
                            }}
                            className="space-y-3"
                        >
                            {badge && (
                                <div className="inline-flex items-center gap-3">
                                    <motion.span
                                        initial={{ width: 0 }}
                                        whileInView={{ width: 48 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className="h-[2px] bg-[#84cc16]"
                                    />
                                    <span className={`text-xs lg:text-sm uppercase tracking-[0.25em] font-bold ${isLight ? "text-[#65a30d]" : "text-[#84cc16]"
                                        }`}>
                                        {badge}
                                    </span>
                                </div>
                            )}

                            {/* Main Headline */}
                            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide ${isLight ? "text-neutral-950" : "text-white"
                                }`}>
                                {titlePart1}{" "}
                                {titleHighlight && (
                                    <span className={isLight ? "text-[#65a30d]" : "text-[#84cc16]"}>{titleHighlight}</span>
                                )}
                            </h2>

                            {/* Description */}
                            {description && (
                                <p className={`text-sm sm:text-base leading-relaxed max-w-xl ${isLight ? "text-neutral-600" : "text-neutral-400"
                                    }`}>
                                    {description}
                                </p>
                            )}
                        </motion.div>

                        {/* 2x2 Features Grid with Stagger & Card Micro-Interactions */}
                        {features && features.length > 0 && (
                            <motion.div
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: { staggerChildren: 0.1 },
                                    },
                                }}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                            >
                                {features.map((feature, idx) => {
                                    const isHighlighted = (feature as any).isHighlighted;

                                    return (
                                        <motion.div
                                            key={feature.title || idx}
                                            variants={{
                                                hidden: { opacity: 0, y: 25 },
                                                visible: {
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: { duration: 0.5, ease: "easeOut" },
                                                },
                                            }}
                                            whileHover={{ y: -6, scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            transition={{ type: "spring", stiffness: 350, damping: 22 }}
                                            className={`group relative rounded-xl p-5 flex flex-col items-center text-center space-y-3 transition-all duration-300 border cursor-pointer ${isLight
                                                    ? isHighlighted
                                                        ? "bg-gradient-to-b from-lime-50/80 to-white border-[#84cc16] shadow-xl shadow-[#84cc16]/10"
                                                        : "bg-white border-neutral-200/90 shadow-sm hover:border-[#84cc16] hover:shadow-xl hover:shadow-[#84cc16]/10"
                                                    : isHighlighted
                                                        ? "bg-gradient-to-b from-neutral-900 to-[#142304] border-[#84cc16] shadow-xl shadow-[#84cc16]/10"
                                                        : "bg-black border-neutral-800 hover:border-[#84cc16]/50 hover:shadow-lg hover:shadow-[#84cc16]/5"
                                                }`}
                                        >
                                            {/* Icon Badge with spring rotation & scale */}
                                            <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#84cc16] group-hover:text-black ${isLight
                                                    ? "bg-lime-100/90 border border-lime-200 text-[#65a30d]"
                                                    : "bg-[#2D3E07] border border-neutral-800 text-[#84cc16]"
                                                }`}>
                                                {renderIcon(
                                                    feature.icon,
                                                    ShieldCheck,
                                                    "w-7 h-7 transition-transform duration-300 group-hover:rotate-6"
                                                )}
                                            </div>

                                            {/* Content */}
                                            <div className="space-y-1.5 flex flex-col items-center">
                                                <h3 className={`text-lg font-bold transition-colors duration-300 ${isLight
                                                        ? "text-neutral-900 group-hover:text-[#65a30d]"
                                                        : "text-white group-hover:text-[#84cc16]"
                                                    }`}>
                                                    {feature.title}
                                                </h3>
                                                <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? "text-neutral-600" : "text-neutral-400"
                                                    }`}>
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        )}

                    </motion.div>

                </div>
            </div>
        </section>
    );
}