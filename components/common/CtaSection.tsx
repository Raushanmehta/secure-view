"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site, SecureViewCtaData, SectionProps } from "@/data";

export interface CtaSectionProps extends SectionProps<SecureViewCtaData> {
    title?: string;
    href?: string;
    buttonText?: string;
}

export default function CtaSection({
    data,
    title,
    href,
    className = "",
}: CtaSectionProps = {}) {
    const ctaData = data || site.cta;
    const resolvedTitle = title || ctaData?.title || ctaData?.buttonText || "Let's Work Together";
    const resolvedHref = href || ctaData?.href || "/contact";

    return (
        <section className={`relative w-full py-10 lg:py-24 bg-white text-[#84cc16] flex items-center justify-center overflow-hidden ${className}`}>
            {/* Subtle decorative background aura pulse */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.25, 1],
                        opacity: [0.12, 0.25, 0.12],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 5,
                        ease: "easeInOut",
                    }}
                    className="w-96 h-96 rounded-full bg-[#84cc16]/30 blur-3xl"
                />
            </div>

            {/* Container */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.92 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                >
                    <Link
                        href={resolvedHref}
                        className="group relative overflow-hidden inline-flex items-center gap-6 px-10 sm:px-14 py-5 sm:py-6 rounded-full bg-[#84cc16] text-[#2D3E07] font-bold text-lg sm:text-2xl shadow-[0_15px_40px_rgba(132,204,22,0.35)] transition-all duration-300 hover:shadow-[0_20px_55px_rgba(132,204,22,0.55)] hover:text-black"
                    >
                        {/* Shimmer Light Sweep on Hover */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform ease-out pointer-events-none" />

                        <span className="relative z-10 tracking-tight">{resolvedTitle}</span>

                        {/* Circular Arrow Icon Badge with bounce & rotation */}
                        <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#2D3E07] flex items-center justify-center text-white transition-all duration-300 group-hover:bg-black group-hover:translate-x-1.5 shadow-md">
                            <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" />
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}