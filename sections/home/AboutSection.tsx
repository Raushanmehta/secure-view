"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { fadeInUp, fadeInLeft, staggerContainer, staggerItem, buttonHoverTap, } from "@/utils/animations";
import { site, SecureViewAboutData, SectionProps } from "@/data";
import { renderIcon } from "@/utils/icons";

export type AboutSectionProps = SectionProps<SecureViewAboutData>;

export default function AboutSection({ data, className }: AboutSectionProps = {}) {
    const about = data || site.about;
    const {
        badge,
        titlePart1,
        titleHighlight,
        description,
        features = [],
        bulletPoints = [],
        button,
        images,
    } = about || {};

    return (
        <section className={`relative w-full py-8 pb-14 lg:py-14 lg:pb-20 bg-white text-neutral-900 overflow-hidden ${className || ""}`}>
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

                    {/* Left Column: Text Content, Features, and CTA with Staggered Entrance */}
                    <motion.div
                        variants={staggerContainer(0.1, 0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="lg:col-span-7 space-y-4">

                        {/* Top Subtitle Badge */}
                        {badge && (
                            <motion.div variants={fadeInLeft} className="inline-flex items-center gap-3">
                                <span className="text-xs lg:text-sm uppercase tracking-[0.25em] font-bold text-[#84cc16]">
                                    {badge}
                                </span>
                            </motion.div>
                        )}

                        {/* Main Headline */}
                        <motion.h2
                            variants={fadeInUp}
                            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]">
                            {titlePart1} <br />
                            {titleHighlight && (
                                <span className="text-[#84cc16]">{titleHighlight}</span>
                            )}
                        </motion.h2>

                        {/* Description Paragraph */}
                        {description && (
                            <motion.p
                                variants={fadeInUp}
                                className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                                {description}
                            </motion.p>
                        )}

                        {/* Feature Cards Grid */}
                        {features && features.length > 0 && (
                            <motion.div
                                variants={fadeInUp}
                                className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 pt-2">
                                {/* Vertical Center Divider Line */}
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                                    className="hidden sm:block absolute left-1/2 top-2 bottom-2 w-[1.5px] -translate-x-1/2 bg-neutral-200 origin-top"
                                />

                                {features.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -3 }}
                                        transition={{ duration: 0.2 }}
                                        className={`flex items-start gap-4 ${idx === 0 ? "sm:pr-2" : "sm:pl-2"}`}>
                                        <motion.div
                                            whileHover={{ scale: 1.12, rotate: idx % 2 === 0 ? 5 : -5 }}
                                            transition={{ type: "spring", stiffness: 350, damping: 20 }}
                                            className="flex items-center justify-center text-[#84cc16] shrink-0">
                                            {typeof feature.icon === "string" && feature.icon.startsWith("/") ? (
                                                <Image
                                                    src={feature.icon}
                                                    alt={feature.title}
                                                    width={100}
                                                    height={100}
                                                    className="w-10 lg:w-14 h-10 lg:h-14 object-contain"
                                                />
                                            ) : (
                                                renderIcon(feature.icon, CheckCircle2, "w-10 lg:w-14 h-10 lg:h-14")
                                            )}
                                        </motion.div>
                                        <div>
                                            <h3 className="font-bold text-neutral-900 text-base uppercase">{feature.title}</h3>
                                            <p className="text-sm text-neutral-500 mt-1">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {/* Bullet List Points with Micro Slide-Hover */}
                        {bulletPoints && bulletPoints.length > 0 && (
                            <motion.div variants={staggerContainer(0.08, 0.25)} className="space-y-3 pt-2">
                                {bulletPoints.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={staggerItem}
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex items-center gap-3 cursor-default">
                                        {renderIcon(item.icon, CheckCircle2, "w-7 h-7 text-[#84cc16] shrink-0")}
                                        <span className="text-sm sm:text-base font-medium text-neutral-700">
                                            {item.text}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {/* Read More Button with Spring Micro-Interactions */}
                        {button && (
                            <motion.div variants={fadeInUp} className="pt-4">
                                <motion.div {...buttonHoverTap} className="inline-block">
                                    <Link
                                        href={button.href}
                                        className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#84cc16] text-black font-bold text-sm transition-all duration-300 hover:bg-[#71b60d] shadow-lg shadow-[#84cc16]/20">
                                        {button.text}
                                        {renderIcon(button.icon, ArrowRight, "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1")}
                                    </Link>
                                </motion.div>
                            </motion.div>
                        )}

                    </motion.div>

                    {/* Right Column: Overlapping Images Layout with Coordinated Entrance */}
                    {images && (
                        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-3xl">

                                {/* Main Background Image */}
                                {images.primary && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                        className="relative overflow-hidden shadow-xl">
                                        <div className="absolute inset-0 bg-neutral-900/10 z-10" />
                                        <motion.img
                                            whileHover={{ scale: 1.03 }}
                                            transition={{ duration: 0.4 }}
                                            src={images.primary.src}
                                            alt={images.primary.alt || "About Image"}
                                            className="w-full h-[500px] sm:h-[540px] lg:h-[580px] object-cover"
                                        />
                                    </motion.div>
                                )}

                                {/* Overlapping Bottom-Right Secondary Image */}
                                {images.secondary && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 30, scale: 0.92 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                                        whileHover={{ y: -6, scale: 1.02 }}
                                        className="absolute -bottom-8 sm:-bottom-10 -right-0 md:-right-2 w-64 md:w-64 overflow-hidden shadow-2xl border-4 border-white bg-white z-20 cursor-pointer">
                                        <div className="relative w-full h-44 sm:h-52">
                                            <Image
                                                src={images.secondary.src}
                                                alt={images.secondary.alt || "Secondary Image"}
                                                fill
                                                sizes="(max-width: 640px) 16rem, 16rem"
                                                className="object-cover"
                                            />
                                        </div>
                                    </motion.div>
                                )}

                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}