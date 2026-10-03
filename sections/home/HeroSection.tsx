"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { fadeInUp, fadeInLeft, staggerContainer, staggerItem, buttonHoverTap } from "@/utils/animations";
import { site, SecureViewHeroData, SectionProps } from "@/data";
import { renderIcon } from "@/utils/icons";

export type HeroSectionProps = SectionProps<SecureViewHeroData>;

export default function HeroSection({ data, className }: HeroSectionProps = {}) {
    const hero = data || site.hero;
    const {
        badge,
        titlePart1,
        titleHighlight,
        titlePart2,
        titlePart3,
        description,
        image,
        buttons,
        badges = [],
    } = hero || {};

    return (
        <section className={`relative w-full min-h-[90vh] md:min-h-[70vh] lg:min-h-[100vh] bg-black text-white overflow-hidden flex items-center ${className || ""}`}>

            {/* Background Image Layer with Cinematic Fade & Zoom */}
            {image && (
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute inset-0 z-0">
                    <Image
                        src={image.src}
                        alt={image.alt || "Hero Banner"}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-right"
                    />
                    {/* Gradient Overlays for optimal readability on left and clear visibility of camera on right */}
                    <div className="absolute inset-0 bg-black/60 lg:bg-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 lg:via-black/70 to-black/20 lg:to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black to-transparent" />
                </motion.div>
            )}

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

                    {/* Left Column: Headings, Subtext, CTAs, and Trust Badges with Staggered Entrance */}
                    <motion.div
                        variants={staggerContainer(0.12, 0.1)}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-6 space-y-6 -mt-6 sm:-mt-8 lg:-mt-20">
                        {/* Top Subtitle Badge */}
                        {badge && (
                            <motion.div variants={fadeInLeft} className="inline-flex items-center gap-3">
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: 48 }}
                                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                    className="h-[1.5px] bg-[#84cc16] inline-block"
                                />
                                <span className="text-xs lg:text-sm uppercase tracking-[0.25em] font-semibold text-[#84cc16]">
                                    {badge}
                                </span>
                            </motion.div>
                        )}

                        {/* Main Headline */}
                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide leading-[1.1]">
                            {titlePart1}{" "}
                            {titleHighlight && <span className="text-[#84cc16]">{titleHighlight}</span>}
                            {titlePart1 || titleHighlight ? <br /> : null}
                            {titlePart2 ? <>{titlePart2} <br /></> : null}
                            {titlePart3}
                        </motion.h1>

                        {/* Subtitle Description */}
                        {description && (
                            <motion.p
                                variants={fadeInUp}
                                className="text-neutral-300 text-base sm:text-lg max-w-xl leading-relaxed"
                            >
                                {description}
                            </motion.p>
                        )}

                        {/* CTA Buttons */}
                        {buttons && (
                            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-2">
                                {buttons.primary && (
                                    <motion.div {...buttonHoverTap}>
                                        <Link
                                            href={buttons.primary.href}
                                            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#84cc16] text-black font-semibold text-sm transition-all duration-300 hover:bg-[#71b60d] shadow-lg shadow-[#84cc16]/20">
                                            {buttons.primary.text}
                                            {renderIcon(
                                                buttons.primary.icon,
                                                ArrowRight,
                                                "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                            )}
                                        </Link>
                                    </motion.div>
                                )}

                                {buttons.secondary && (
                                    <motion.div {...buttonHoverTap}>
                                        <Link
                                            href={buttons.secondary.href}
                                            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-neutral-900 border border-neutral-800 text-white font-semibold text-sm transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-700"
                                        >
                                            {buttons.secondary.text}
                                        </Link>
                                    </motion.div>
                                )}
                            </motion.div>
                        )}

                        {/* Bottom Trust Features / Badges with Staggered Items */}
                        {badges && badges.length > 0 && (
                            <motion.div
                                variants={staggerContainer(0.08, 0.35)}
                                className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-6 pt-2">
                                {badges.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={staggerItem}
                                        whileHover={{ y: -3 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex items-center gap-3 cursor-default">
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 6 }}
                                            transition={{ type: "spring", stiffness: 350, damping: 20 }}
                                            className="w-14 h-14 rounded-full bg-[#2D3E07] border border-neutral-800 flex items-center justify-center text-[#84cc16] shrink-0">
                                            {renderIcon(item.icon, ShieldCheck, "w-7 h-7")}
                                        </motion.div>
                                        <div>
                                            <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                                            <p className="text-xs text-neutral-400">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                    </motion.div>
                </div>
            </div>
        </section>
    );
}