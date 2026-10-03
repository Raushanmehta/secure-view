"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { fadeInLeft, fadeInRight, scaleIn, transitions } from "@/utils/animations";
import { site, SectionProps, SecureViewAmcData } from "@/data";

export interface AmcSectionProps extends SectionProps<SecureViewAmcData> { }

export default function AmcSection({ data, className = "" }: AmcSectionProps = {}) {
    const amcData = data || site.amcData || {};
    const badge = amcData.badge || "CCTV AMC & MAINTENANCE";
    const titlePart1 = amcData.titlePart1 || "Reliable Maintenance";
    const titlePart2 = amcData.titlePart2 || "for Uninterrupted";
    const titleHighlight = amcData.titleHighlight || "Security";
    const description = amcData.description || "Keep your CCTV system running smoothly with our professional AMC and maintenance services. We ensure maximum uptime, quick issue resolution, and complete peace of mind for your home or business.";
    const features = amcData.features || [
        "Regular system health check",
        "Preventive maintenance",
        "Quick issue resolution",
        "Genuine replacement support",
        "Dedicated technical assistance",
    ];
    const buttonText = amcData.buttonText || "Get a Free Quote";
    const buttonHref = amcData.buttonHref || "/contact-us";
    const image = amcData.image || "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop";
    const imageAlt = amcData.imageAlt || "Technician maintaining security camera";
    const stats = amcData.stats || [
        { value: "24/7", label: "Support Availability" },
        { value: "500+", label: "Happy Clients" },
        { value: "100%", label: "System Uptime Focus" },
    ];

    return (
        <section className={`relative w-full py-8 lg:py-14 bg-white text-neutral-900 overflow-hidden ${className}`}>
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-6 space-y-4">

                        {/* Header Content Block */}
                        <div className="space-y-3">
                            {/* Top Subtitle Badge */}
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

                            {/* Main Heading */}
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[#0a1930]">
                                {titlePart1} <br />
                                {titlePart2} <br />
                                <span className="text-[#84cc16]">{titleHighlight}</span>
                            </h2>

                            {/* Description */}
                            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-xl">
                                {description}
                            </p>
                        </div>

                        {/* Checklist items with green check badges */}
                        <div className="space-y-3 pt-1">
                            {features.map((feature: string, index: number) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 4 }}
                                    transition={transitions.fast}
                                    className="flex items-center gap-3.5"
                                >
                                    <div className="w-6 h-6 rounded-full bg-[#84cc16] text-white flex items-center justify-center shrink-0 shadow-sm">
                                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                                    </div>
                                    <span className="text-sm sm:text-base font-semibold text-[#0a1930]">
                                        {feature}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Get a Free Quote Button */}
                        <div className="pt-2">
                            <motion.div
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.98 }}
                                transition={transitions.spring}
                                className="inline-block">
                                <Link
                                    href={buttonHref}
                                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-neutral-950 text-white font-bold text-sm transition-all hover:bg-neutral-800 shadow-md group/btn">
                                    <span>{buttonText}</span>
                                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-6 relative">
                        {/* Main Technician Image Container */}
                        <motion.div
                            variants={scaleIn}
                            whileHover={{ y: -4 }}
                            transition={transitions.smooth}
                            className="relative rounded-xl overflow-hidden shadow-md bg-neutral-900 border border-neutral-200/70">
                            <img
                                src={image}
                                alt={imageAlt}
                                className="w-full h-[400px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                        </motion.div>

                        {/* Absolute Positioned Right Statistics Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            whileHover={{ y: -4 }}
                            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-[#f8f9fa]/95 backdrop-blur-md border border-[#84cc16]/30 rounded-xl p-5 sm:p-6 shadow-xl w-[220px] sm:w-[240px] space-y-4">
                            {stats.map((stat: { value: string; label: string }, idx: number) => (
                                <div
                                    key={idx}
                                    className={`space-y-1 ${idx !== stats.length - 1 ? "pb-3.5 border-b border-neutral-200/80" : ""}`}>
                                    <h3 className="text-2xl sm:text-3xl font-black text-[#84cc16] tracking-tight font-mono">
                                        {stat.value}
                                    </h3>
                                    <p className="text-xs sm:text-sm font-bold text-[#0a1930] leading-snug">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}