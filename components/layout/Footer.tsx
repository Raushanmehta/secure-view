"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import {
    containerVariants,
    columnVariants,
    linkContainerVariants,
    linkItemVariants,
} from "@/utils/animations";
import { site, SecureViewFooterData, SectionProps } from "@/data";
import { renderIcon } from "@/utils/icons";

export interface FooterProps extends SectionProps<SecureViewFooterData> {}

export default function Footer({ data, className }: FooterProps = {}) {
    const footer = data || site.footer;
    const {
        ctaBanner,
        brand,
        quickLinks,
        servicesLinks,
        otherPagesLinks,
        bottomBar,
    } = footer || {};

    return (
        <footer className={`w-full bg-black text-neutral-400 pt-10 lg:pt-16 pb-8 border-t border-neutral-900 relative overflow-hidden ${className || ""}`}>
            <div className="max-w-[1400px] mx-auto px-4">

                {/* Top Call-To-Action Banner with Fade-in Animation */}
                {ctaBanner && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative bg-black border border-neutral-800 rounded-xl px-6 lg:px-10 py-6 lg:py-8 mb-8 lg:mb-10 overflow-hidden shadow-2xl"
                    >
                        {/* Background Image on Right with Left Black Gradient */}
                        {ctaBanner.image && (
                            <div className="absolute inset-0 pointer-events-none">
                                <Image
                                    src={ctaBanner.image.src}
                                    alt={ctaBanner.image.alt || "CTA Banner"}
                                    fill
                                    className="object-contain"
                                    style={{ objectPosition: "right -50%" }}
                                    sizes="(max-width: 1400px) 100vw, 1400px"
                                />
                                <div className="absolute inset-0 bg-black/70 sm:bg-black/50 lg:bg-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 sm:via-black/85 lg:via-black/85 to-black/80 lg:to-transparent" />
                            </div>
                        )}

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
                            <div className="space-y-3 text-center lg:text-left">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-white">
                                    {ctaBanner.title}{" "}
                                    {ctaBanner.highlightTitle && (
                                        <span className="text-[#84cc16]">{ctaBanner.highlightTitle}</span>
                                    )}
                                    {ctaBanner.titleSuffix}
                                </h2>
                                {ctaBanner.description && (
                                    <p className="text-neutral-300 text-sm sm:text-base max-w-xl">
                                        {ctaBanner.description}
                                    </p>
                                )}
                            </div>

                            {ctaBanner.button && (
                                <div className="lg:mr-36 xl:mr-56 2xl:mr-80 shrink-0">
                                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                                        <Link
                                            href={ctaBanner.button.href}
                                            className="inline-flex items-center justify-center gap-2 px-6 py-3 lg:px-8 rounded-full bg-[#84cc16] text-black font-semibold text-sm transition-all duration-300 hover:bg-[#71b60d] shadow-lg shadow-[#84cc16]/20 whitespace-nowrap"
                                        >
                                            {ctaBanner.button.text}
                                            {renderIcon(ctaBanner.button.icon, ArrowRight, "w-4 h-4")}
                                        </Link>
                                    </motion.div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}

                {/* Main Footer Links & Info Grid with Staggered Container Animation */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-12 pb-4 lg:pb-10 border-b border-neutral-900"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                >

                    {/* Brand Info & Socials (Spans 2 columns on lg) */}
                    {brand && (
                        <motion.div variants={columnVariants} className="lg:col-span-2 space-y-4">
                            {brand.logo && (
                                <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.3 }} className="inline-block w-fit">
                                    <Link href={brand.logo.href || "/"} className="flex items-center gap-3 group">
                                        <Image
                                            src={brand.logo.src}
                                            alt={brand.logo.alt || "Logo"}
                                            width={150}
                                            height={150}
                                            priority
                                            className="w-auto h-16 lg:h-20 object-contain"
                                        />
                                    </Link>
                                </motion.div>
                            )}

                            {brand.description && (
                                <p className="text-sm mt-4 lg:mt-3 text-neutral-400 max-w-sm leading-relaxed">
                                    {brand.description}
                                </p>
                            )}

                            {/* Social Icons */}
                            {brand.socials && brand.socials.length > 0 && (
                                <div className="flex items-center gap-3 pt-2">
                                    {brand.socials.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            aria-label={social.name}
                                            whileHover={{ scale: 1.15, y: -3 }}
                                            whileTap={{ scale: 0.92 }}
                                            transition={{ type: "spring", stiffness: 350 }}
                                            className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900/50 flex items-center justify-center text-neutral-300 hover:text-[#84cc16] hover:border-[#84cc16]/50 transition-colors"
                                        >
                                            {renderIcon(social.icon, ArrowRight, "w-4 h-4")}
                                        </motion.a>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    )}

                    {/* Quick Links */}
                    {quickLinks && (
                        <motion.div variants={columnVariants} className="space-y-4">
                            <h3 className="text-white font-semibold text-base relative inline-block">
                                {quickLinks.title}
                                <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-[#84cc16]" />
                            </h3>
                            <motion.ul variants={linkContainerVariants} className="space-y-3 text-sm mt-4 lg:mt-3">
                                {quickLinks.links.map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        variants={linkItemVariants}
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="hover:text-[#84cc16] transition-colors inline-block"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    )}

                    {/* Our Services */}
                    {servicesLinks && (
                        <motion.div variants={columnVariants} className="space-y-4">
                            <h3 className="text-white font-semibold text-base relative inline-block">
                                {servicesLinks.title}
                                <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-[#84cc16]" />
                            </h3>
                            <motion.ul variants={linkContainerVariants} className="space-y-3 text-sm mt-4 lg:mt-3">
                                {servicesLinks.links.map((service, idx) => (
                                    <motion.li
                                        key={idx}
                                        variants={linkItemVariants}
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link href={service.href} className="hover:text-[#84cc16] transition-colors inline-block">
                                            {service.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    )}

                    {/* Other Pages */}
                    {otherPagesLinks && (
                        <motion.div variants={columnVariants} className="space-y-4">
                            <h3 className="text-white font-semibold text-base relative inline-block">
                                {otherPagesLinks.title}
                                <span className="absolute bottom-[-8px] left-0 w-8 h-[2px] bg-[#84cc16]" />
                            </h3>
                            <motion.ul variants={linkContainerVariants} className="space-y-3 text-sm mt-4 lg:mt-3">
                                {otherPagesLinks.links.map((page, idx) => (
                                    <motion.li
                                        key={idx}
                                        variants={linkItemVariants}
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link href={page.href} className="hover:text-[#84cc16] transition-colors inline-block">
                                            {page.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    )}

                </motion.div>

                {/* Bottom Bar Copyright & Legal Links */}
                {bottomBar && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="pt-4 lg:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500"
                    >
                        <p>{bottomBar.copyright}</p>
                        {bottomBar.links && bottomBar.links.length > 0 && (
                            <div className="flex items-center gap-4">
                                {bottomBar.links.map((link, idx) => (
                                    <React.Fragment key={link.href + idx}>
                                        <Link href={link.href} className="hover:text-neutral-300 transition-colors">
                                            {link.name}
                                        </Link>
                                        {idx < bottomBar.links.length - 1 && <span>/</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        )}
                    </motion.div>
                )}

            </div>
        </footer>
    );
}