"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    staggerContainer,
    staggerItem,
    scaleIn,
    transitions,
} from "@/utils/animations";

export interface CaseStudyDetailData {
    badge?: string;
    titlePart1?: string;
    titleHighlight?: string;
    leadDescription?: string;
    sections?: {
        title: string;
        description: string;
    }[];
    image?: string;
    imageAlt?: string;
    projectDetails?: {
        title?: string;
        items: { label: string; value: string }[];
    };
    ourServices?: {
        title?: string;
        items: { name: string; desc: string }[];
    };
}

export interface CaseSturdiesDetailSectionProps {
    data?: CaseStudyDetailData;
}

const defaultCaseStudyData: CaseStudyDetailData = {
    badge: "CASE STUDY",
    titlePart1: "Office Security Upgrade",
    titleHighlight: "for a Growing Business",
    leadDescription:
        "See how we helped a fast-growing company enhance its workplace security with a smart CCTV solution, ensuring a safer environment for employees and complete peace of mind for the management.",
    sections: [
        {
            title: "Overview",
            description:
                "A mid-sized corporate office approached us to upgrade their outdated security system. They needed a modern CCTV solution to monitor multiple floors, improve employee safety, and secure critical areas like entry points, workstations, and server rooms. Our goal was to design a reliable, easy-to-manage system that provided complete coverage and remote access.",
        },
        {
            title: "The Challenge",
            description:
                "The existing system had low-resolution cameras, limited coverage, and no remote access. As the company expanded, it became difficult to monitor activities effectively, leading to security concerns. They also needed a system that could be easily managed across multiple floors without complex maintenance.",
        },
        {
            title: "Our Solution",
            description:
                "We designed and installed a customized CCTV system with high-resolution cameras, complete coverage, and remote monitoring. The solution was tailored to the client's office layout, with strategic camera placement at entry points, common areas, workstations, and server rooms. We also provided a user-friendly monitoring setup for real-time access from any location.",
        },
        {
            title: "The Results",
            description:
                "The new system significantly improved surveillance, reduced security risks, and provided real-time monitoring from anywhere. The client now has a safer workplace, better control over their premises, and increased peace of mind for their employees and management.",
        },
    ],
    image: "/images/case-studies/case-study-hero.png",
    imageAlt: "Technician installing security CCTV camera for office upgrade",
    projectDetails: {
        title: "Project Details",
        items: [
            { label: "Client", value: "TechVision Pvt. Ltd." },
            { label: "Category", value: "CCTV, Security" },
            { label: "Date", value: "March 15, 2024" },
            { label: "Project Value", value: "$25,000" },
            { label: "Location", value: "Noida, India" },
        ],
    },
    ourServices: {
        title: "Our Services",
        items: [
            {
                name: "CCTV Installation",
                desc: "High-quality camera setup for complete coverage",
            },
            {
                name: "System Configuration",
                desc: "Customized setup as per your needs",
            },
            {
                name: "Remote Monitoring",
                desc: "Access your cameras from anywhere",
            },
            {
                name: "Maintenance & Support",
                desc: "Ongoing support for uninterrupted security",
            },
        ],
    },
};

export default function CaseSturdiesDetailSection({
    data = defaultCaseStudyData,
}: CaseSturdiesDetailSectionProps) {
    const study = { ...defaultCaseStudyData, ...data };

    return (
        <section className="relative w-full py-8 lg:py-14 bg-white text-neutral-900 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">

                    {/* Left Column (6 cols): Header, Lead, 4 Content Sections with Stagger Entrance */}
                    <motion.div
                        variants={staggerContainer(0.12, 0.05)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="lg:col-span-6 space-y-4"
                    >
                        {/* Bracketed Badge */}
                        {study.badge && (
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2">
                                <span className="text-xs lg:text-4xl font-normal text-[#84cc16]">[</span>
                                <span className="text-xs lg:text-lg uppercase tracking-[0.25em] font-bold flex items-center justify-center text-[#84cc16]">
                                    {study.badge}
                                </span>
                                <span className="text-xs lg:text-4xl font-normal text-[#84cc16]">]</span>
                            </motion.div>
                        )}

                        {/* Main Title */}
                        <motion.div variants={fadeInUp} className="space-y-3">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B132A] tracking-wide leading-[1.18]">
                                {study.titlePart1}
                                <span className="block mt-1">
                                    for a <span className="text-[#84cc16]">{study.titleHighlight}</span>
                                </span>
                            </h1>

                            {/* Lead Paragraph */}
                            {study.leadDescription && (
                                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal pt-1">
                                    {study.leadDescription}
                                </p>
                            )}
                        </motion.div>

                        {/* 4 Content Blocks with Animated Underline & Divider */}
                        <div className="space-y-4 pt-2">
                            {study.sections?.map((sec, idx) => (
                                <motion.div
                                    key={sec.title}
                                    variants={staggerItem}
                                    className="space-y-2.5"
                                >
                                    <div className="space-y-1">
                                        <h3 className="text-xl sm:text-2xl font-bold text-[#0B132A] tracking-tight">
                                            {sec.title}
                                        </h3>
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.45, ease: "easeOut" }}
                                            className="w-12 h-1 bg-[#84cc16] rounded-full origin-left"
                                        />
                                    </div>

                                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                                        {sec.description}
                                    </p>

                                    {idx < (study.sections?.length || 0) - 1 && (
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                            className="border-b border-neutral-200/80 pt-3 origin-left"
                                        />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column (6 cols): Hero Image + Project Details Box + Our Services Box */}
                    <motion.div
                        variants={staggerContainer(0.15, 0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="lg:col-span-6 space-y-5"
                    >
                        {/* Top Hero Image with scaleIn and smooth hover zoom */}
                        {study.image && (
                            <motion.div
                                variants={scaleIn}
                                whileHover={{ y: -4 }}
                                transition={transitions.smooth}
                                className="rounded-xl overflow-hidden shadow-sm aspect-[16/10] bg-neutral-100 border border-neutral-200/80 group cursor-pointer"
                            >
                                <motion.img
                                    src={study.image}
                                    alt={study.imageAlt || "Case Study Hero"}
                                    whileHover={{ scale: 1.04 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        )}

                        {/* Project Details Box */}
                        {study.projectDetails && (
                            <motion.div
                                variants={fadeInUp}
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.3 }}
                                className="bg-[#F4FCF7] border border-neutral-200/80 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-xl font-extrabold text-[#0B132A]">
                                    {study.projectDetails.title || "Project Details"}
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.45 }}
                                        className="w-12 h-1 bg-[#84cc16] rounded-full mt-1.5 origin-left"
                                    />
                                </h3>

                                <div className="divide-y divide-neutral-200/70 pt-2">
                                    {study.projectDetails.items.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="py-2 flex items-center justify-between text-sm sm:text-base gap-4 hover:bg-neutral-100/30 px-1 rounded transition-colors"
                                        >
                                            <span className="text-neutral-500 font-medium">
                                                {item.label}
                                            </span>
                                            <span className="font-bold text-[#0B132A] text-right">
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Our Services Box */}
                        {study.ourServices && (
                            <motion.div
                                variants={fadeInUp}
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.3 }}
                                className="bg-[#F4FCF7] border border-[#DCE9F6] rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-xl font-extrabold text-[#0B132A]">
                                    {study.ourServices.title || "Our Services"}
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.45 }}
                                        className="w-12 h-1 bg-[#84cc16] rounded-full mt-1.5 origin-left"
                                    />
                                </h3>

                                <div className="divide-y divide-[#DCE9F6] pt-2">
                                    {study.ourServices.items.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 text-sm hover:bg-white/40 px-1 rounded transition-colors"
                                        >
                                            <span className="font-bold text-[#0B132A] shrink-0 sm:w-44">
                                                {item.name}
                                            </span>
                                            <span className="text-neutral-600 text-xs sm:text-sm sm:text-right">
                                                {item.desc}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}