"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { pageTopContainerVariants, pageTopItemVariants, pageTopBarVariants, ambientGlowPulse, radarPingPulse, horizontalNudge, buttonHoverTap, } from "@/utils/animations";

interface PageTopSectionProps {
    title?: string;
    breadcrumbPath?: string;
}

export default function PageTopSection({
    title = "About Us",
    breadcrumbPath = "About Us",
}: PageTopSectionProps) {
    return (
        <section className="relative w-full py-20 lg:py-24 bg-black text-white flex flex-col items-center justify-center border-b border-neutral-900 overflow-hidden">
            {/* Ambient Radial Background Glow */}
            <motion.div
                className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-gradient-to-b from-[#84cc16]/20 via-[#84cc16]/5 to-transparent rounded-full blur-3xl pointer-events-none"
                animate={ambientGlowPulse.animate}
                transition={ambientGlowPulse.transition}
            />

            {/* Subtle Tech Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none opacity-60" />

            {/* Pulsing Concentric Radar Ring */}
            <motion.div
                className="absolute w-96 h-96 rounded-full border border-[#84cc16]/15 pointer-events-none"
                animate={radarPingPulse.animate}
                transition={radarPingPulse.transition}
            />

            <motion.div
                variants={pageTopContainerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex flex-col items-center text-center space-y-4 px-4 sm:px-6">
                {/* Animated Top Lime-Green Accent Bar */}
                <motion.div
                    variants={pageTopBarVariants}
                    className="h-1 bg-gradient-to-r from-transparent via-[#84cc16] to-transparent rounded-full shadow-[0_0_14px_rgba(132,204,22,0.7)]"
                />

                {/* Animated Page Title */}
                <motion.h1
                    variants={pageTopItemVariants}
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm"
                >
                    {title}
                </motion.h1>

                {/* Animated Breadcrumb Navigation Pill */}
                <motion.nav
                    variants={pageTopItemVariants}
                    aria-label="Breadcrumb"
                    className="flex items-center gap-2.5 text-sm sm:text-base font-medium ">
                    <motion.div
                        whileHover={buttonHoverTap.whileHover}
                        whileTap={buttonHoverTap.whileTap}
                        transition={buttonHoverTap.transition}>
                        <Link
                            href="/"
                            className="text-neutral-400 hover:text-white transition-colors duration-200">
                            Home
                        </Link>
                    </motion.div>

                    <motion.span
                        animate={horizontalNudge.animate}
                        transition={horizontalNudge.transition}>
                        <ChevronRight className="w-4 h-4 text-neutral-500" />
                    </motion.span>

                    <span className="text-[#84cc16] font-semibold tracking-wide">
                        {breadcrumbPath}
                    </span>
                </motion.nav>
            </motion.div>
        </section>
    );
}