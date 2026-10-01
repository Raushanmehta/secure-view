"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { renderIcon } from "@/utils/icons";

export interface GalleryImageCardProps {
    image: string;
    alt?: string;
    title?: string;
    category?: string;
    description?: string;
    icon?: string;
    buttonText?: string;
    buttonHref?: string;
    isOverlay?: boolean;
    index?: number;
    onClick?: () => void;
    className?: string;
}

/**
 * GreenStraightAccent:
 * Top-left green corner with a straight diagonal edge and white border (sidhha / non-curved).
 */
export function GreenStraightAccent({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={`pointer-events-none z-20 ${className}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="greenStraightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#489d17" />
                    <stop offset="50%" stopColor="#52a61f" />
                    <stop offset="100%" stopColor="#64bd27" />
                </linearGradient>
            </defs>

            {/* Corner green straight wedge */}
            <path
                d="M 0 0 L 85 0 L 0 85 Z"
                fill="url(#greenStraightGrad)"
            />

            {/* Crisp separating white straight line */}
            <path
                d="M 85 0 L 0 85"
                stroke="#ffffff"
                strokeWidth="4"
                strokeLinecap="round"
            />
        </svg>
    );
}

/**
 * GreenInnerCurveAccent:
 * Bottom-right green corner with an inner-side concave curve (andar ki taraf scooped curve).
 */
export function GreenInnerCurveAccent({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={`pointer-events-none z-20 ${className}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="greenInnerCurveGrad" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#489d17" />
                    <stop offset="50%" stopColor="#52a61f" />
                    <stop offset="100%" stopColor="#64bd27" />
                </linearGradient>
            </defs>

            {/* Corner green wedge with inner concave curve */}
            <path
                d="M 100 100 L 100 15 A 85 85 0 0 1 15 100 Z"
                fill="url(#greenInnerCurveGrad)"
            />

            {/* Crisp separating white inner arc contour */}
            <path
                d="M 100 15 A 85 85 0 0 1 15 100"
                stroke="#ffffff"
                strokeWidth="4"
                strokeLinecap="round"
            />
        </svg>
    );
}

// Backwards-compatibility alias
export const GreenCornerAccent = GreenStraightAccent;

export default function GalleryImageCard({
    image,
    alt = "CCTV Work Gallery",
    title,
    category,
    description,
    icon,
    buttonText,
    buttonHref,
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
            {/* 1. TOP-LEFT GREEN STRAIGHT ACCENT */}
            <GreenStraightAccent className="absolute top-0 left-0 w-24 h-24 sm:w-20 sm:h-20 z-30" />

            {/* 2. BOTTOM-RIGHT GREEN INNER-CURVE ACCENT */}
            <GreenInnerCurveAccent className="absolute bottom-0 right-0 w-24 h-24 sm:w-28 sm:h-28 z-30" />

            {/* 3. Main Background Image */}
            <img
                src={image}
                alt={title || alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            />

            {/* 4. Subtle hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

            {/* 5. Center-aligned Hover Overlay with Background Blur */}
            <div
                className={`absolute inset-0 bg-neutral-950/80 backdrop-blur-md p-6 sm:p-8 flex flex-col items-center justify-center text-center text-white z-20 transition-all duration-300 ${isOverlay
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
                    }`}
            >
                {/* Center Icon Badge */}
                <div className="text-[#84cc16] flex items-center justify-center mb-3 -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {renderIcon(icon, ShieldCheck, "w-16 h-16")}
                </div>

                {/* Title */}
                {title && (
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1.5 transform -translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                        {title}
                    </h3>
                )}

                {/* Description / Category */}
                {(description || category) && (
                    <p className="text-xs sm:text-sm text-neutral-300 max-w-[85%] leading-relaxed mb-4 line-clamp-2 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                        {description || category}
                    </p>
                )}

                {/* View Project Button */}
                <Link
                    href={buttonHref || "/contact"}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#84cc16] hover:bg-[#71b60d] text-black font-bold text-xs shadow-md transition-all duration-300 transform hover:scale-105 group/btn"
                >
                    <span>{buttonText || "View Project"}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
}
