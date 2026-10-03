"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInLeft, fadeInRight, buttonHoverTap, defaultViewport, } from "@/utils/animations";
import { site } from "@/data";

export default function NotFound() {
    const data = site.notFound || {};
    const badge = data.badge || "SORRY!";
    const errorCode = data.errorCode || "404";
    const titlePart1 = data.titlePart1 || "Page";
    const titleHighlight = data.titleHighlight || "Not Found";
    const description = data.description || "The page you’re looking for doesn’t exist or may have been moved.";
    const buttonText = data.buttonText || "Go to Homepage";
    const buttonHref = data.buttonHref || "/";
    const cameraImage = data.cameraImage || "/images/404-camera.jpg";
    const cameraAlt = data.cameraAlt || "CCTV Security Camera";
    const annotationLine1 = data.annotationLine1 || "Looks like";
    const annotationLine2 = data.annotationLine2 || "you're lost!";

    return (
        <section className="relative w-full min-h-[calc(100vh-120px)] flex items-center justify-center py-12 lg:py-20 bg-white overflow-hidden">
            <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        className="lg:col-span-6 space-y-6 text-left">
                        {/* Top Accent Bar & "SORRY!" Badge */}
                        <div className="space-y-3">
                            <div className="w-14 h-1.5 bg-[#84cc16] rounded-full" />
                            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#84cc16]">
                                {badge}
                            </p>
                        </div>

                        {/* Giant 404 Display & Heading */}
                        <div className="space-y-2">
                            <h1 className="text-7xl sm:text-8xl lg:text-[130px] font-black text-[#0a1930] leading-none tracking-tight">
                                {errorCode}
                            </h1>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1930] tracking-tight">
                                {titlePart1} <span className="text-[#84cc16]">{titleHighlight}</span>
                            </h2>
                        </div>

                        {/* Subtitle / Description */}
                        <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-md">
                            {description}
                        </p>

                        {/* Go to Homepage Button */}
                        <div className="pt-2">
                            <motion.div {...buttonHoverTap} className="inline-block">
                                <Link
                                    href={buttonHref}
                                    className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#84cc16] text-white font-bold text-sm transition-all duration-300 hover:bg-[#65a30d] group"
                                >
                                    <span>{buttonText}</span>
                                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        className="lg:col-span-6 relative flex items-center justify-center select-none">
                        {/* Pale Green Circular Background */}
                        <div className="w-72 h-72 sm:w-84 sm:h-84 lg:w-[440px] lg:h-[440px] rounded-full bg-[#f4fce3]/80 -z-10 absolute" />

                        {/* Green Radiating Spark Rays (Top-Left of Circle) */}
                        <div className="absolute top-6 left-6 sm:top-8 sm:left-12 lg:top-10 lg:left-14 z-20 pointer-events-none">
                            <svg width="65" height="65" viewBox="0 0 65 65" fill="none">
                                <line x1="42" y1="32" x2="42" y2="4" stroke="#84cc16" strokeWidth="3.5" strokeLinecap="round" />
                                <line x1="30" y1="40" x2="12" y2="20" stroke="#84cc16" strokeWidth="3.5" strokeLinecap="round" />
                                <line x1="26" y1="52" x2="2" y2="42" stroke="#84cc16" strokeWidth="3.5" strokeLinecap="round" />
                            </svg>
                        </div>

                        {/* "Looks like you're lost!" Annotation + Dotted Curved Arrow */}
                        <div className="absolute top-2 right-2 sm:top-4 sm:right-6 lg:top-4 lg:right-12 z-20 flex flex-col items-center pointer-events-none">
                            {/* Text + Brush Underline */}
                            <div className="rotate-[-6deg] text-center">
                                <span className="font-bold text-neutral-800 text-sm sm:text-base lg:text-lg tracking-tight inline-block leading-tight">
                                    {annotationLine1} <br /> {annotationLine2}
                                </span>
                                {/* Green Curved Underline */}
                                <svg className="w-20 sm:w-24 h-2.5 mx-auto mt-0.5" viewBox="0 0 100 12" fill="none">
                                    <path
                                        d="M 4 6 Q 50 12 96 4"
                                        stroke="#84cc16"
                                        strokeWidth="3.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>

                            {/* Dotted Arrow Curling Down Towards Camera */}
                            <div className="relative -ml-6 mt-1">
                                <svg width="55" height="90" viewBox="0 0 55 90" fill="none">
                                    {/* Curved Dotted Line */}
                                    <path
                                        d="M 24 2 C 55 22, 54 62, 14 74"
                                        stroke="#1f2937"
                                        strokeWidth="2"
                                        strokeDasharray="4 4"
                                        strokeLinecap="round"
                                    />
                                    {/* Arrowhead Pointing Toward Camera */}
                                    <path
                                        d="M 22 66 L 12 75 L 24 81"
                                        stroke="#1f2937"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Camera Image */}
                        <motion.div
                            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                            className="relative z-10 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[460px] aspect-square flex items-center justify-center">
                            <Image
                                src={cameraImage}
                                alt={cameraAlt}
                                width={500}
                                height={500}
                                priority
                                className="w-full h-auto object-contain mix-blend-multiply "
                            />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}