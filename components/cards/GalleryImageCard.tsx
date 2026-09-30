"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Eye } from "lucide-react";

export interface GalleryImageCardProps {
    image: string;
    alt?: string;
    title?: string;
    category?: string;
    isOverlay?: boolean;
    index?: number;
    onClick?: () => void;
    className?: string;
}

/**
 * GreenCornerAccent:
 * Reusable SVG accent rendering the exact leaf-curve wedge with white inner contour.
 * By default positioned at top-left. Rotate 180 for bottom-right.
 */
function GreenCornerAccent({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={`pointer-events-none z-20 ${className}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="greenCornerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#489d17" />
                    <stop offset="50%" stopColor="#52a61f" />
                    <stop offset="100%" stopColor="#64bd27" />
                </linearGradient>
            </defs>

            {/* Corner green wedge */}
            <path
                d="M 0 0 L 85 0 A 85 85 0 0 1 0 85 Z"
                fill="url(#greenCornerGrad)"
            />

            {/* Crisp separating white arc contour */}
            <path
                d="M 85 0 A 85 85 0 0 1 0 85"
                stroke="#ffffff"
                strokeWidth="4"
                strokeLinecap="round"
            />
        </svg>
    );
}

export default function GalleryImageCard({
    image,
    alt = "CCTV Work Gallery",
    title,
    category,
    isOverlay = false,
    index = 0,
    onClick,
    className = "",
}: GalleryImageCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            onClick={onClick}
            className={`group relative h-72 sm:h-80 w-full rounded-[26px] sm:rounded-[30px] overflow-hidden bg-neutral-900 border-[3.5px] border-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.12),0_8px_10px_-6px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_35px_-8px_rgba(0,0,0,0.22)] transition-all duration-300 ${className}`}
        >
            {/* 1. TOP-LEFT GREEN CURVE ACCENT */}
            <GreenCornerAccent className="absolute top-0 left-0 w-24 h-24 sm:w-28 sm:h-28" />

            {/* 2. BOTTOM-RIGHT GREEN CURVE ACCENT (180deg symmetric) */}
            <GreenCornerAccent className="absolute bottom-0 right-0 w-24 h-24 sm:w-28 sm:h-28 rotate-180" />

            {/* 3. Main Background Image */}
            <img
                src={image}
                alt={title || alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />

            {/* 4. Subtle hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

            {/* 5. Optional Active / Static Overlay Card (Like Center Card in reference) */}
            {isOverlay && (
                <div className="absolute inset-0 bg-neutral-950/85 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between text-white border-2 border-[#84cc16] rounded-[26px] sm:rounded-[30px] z-20">
                    <div className="w-10 h-10 rounded-xl bg-[#84cc16]/20 text-[#84cc16] flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div className="space-y-1.5">
                        {title && <h3 className="text-lg sm:text-xl font-bold">{title}</h3>}
                        {category && <p className="text-xs text-neutral-300 leading-relaxed">{category}</p>}
                    </div>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#84cc16] text-black font-bold text-xs w-fit shadow-md hover:bg-[#71b60d] transition-colors"
                    >
                        <span>View Project</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            )}

            {/* 6. Hover Title Tag for non-overlay cards */}
            {!isOverlay && title && (
                <div className="absolute bottom-4 left-4 right-4 z-20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-black/70 backdrop-blur-md rounded-xl px-4 py-2.5 text-white border border-white/10 flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold">{title}</p>
                            {category && <p className="text-[10px] text-neutral-300">{category}</p>}
                        </div>
                        <div className="w-7 h-7 rounded-lg bg-[#84cc16] text-black flex items-center justify-center shrink-0">
                            <Eye className="w-3.5 h-3.5" />
                        </div>
                    </div>
                </div>
            )}
        </motion.div>
    );
}
