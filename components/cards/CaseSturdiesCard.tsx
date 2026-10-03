"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";
import { columnVariants } from "@/utils/animations";
import { renderIcon } from "@/utils/icons";

export interface CaseStudyItem {
    title: string;
    description: string;
    icon: any;
    image: string;
    slug?: string;
}

interface CaseSturdiesCardProps {
    study: CaseStudyItem;
    index?: number;
    IconComponent?: any;
}

export default function CaseSturdiesCard({ study, index = 0, IconComponent }: CaseSturdiesCardProps) {
    const rawIcon = IconComponent || study.icon || Users;

    return (
        <motion.div
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover={{ y: -8 }}
            className="group relative bg-white p-2 rounded-sm border border-neutral-200 shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:border-[#84cc16]/50"
        >
            {/* Top Image Container with floating unclipped icon */}
            <div className="relative">
                <div className="relative h-60 w-full overflow-hidden rounded-sm">
                    <div className="absolute inset-0 bg-neutral-900/10 z-10 rounded-sm transition-opacity duration-300 group-hover:bg-neutral-900/5" />
                    {study.slug ? (
                        <Link href={`/case-studies/${study.slug}`}>
                            <motion.img
                                src={study.image}
                                alt={study.title}
                                whileHover={{ scale: 1.06 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="w-full h-full object-cover rounded-sm cursor-pointer"
                            />
                        </Link>
                    ) : (
                        <motion.img
                            src={study.image}
                            alt={study.title}
                            whileHover={{ scale: 1.06 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="w-full h-full object-cover rounded-sm"
                        />
                    )}
                </div>

                {/* Floating CCTV Icon Badge & Indicator Line */}
                <div className="absolute -bottom-5 left-5 z-20 flex flex-col gap-1">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 6 }}
                        transition={{ type: "spring", stiffness: 350, damping: 20 }}
                        className="w-14 h-14 rounded-sm bg-[#84cc16] text-white flex items-center justify-center shadow-lg cursor-pointer"
                    >
                        {renderIcon(rawIcon, Users, "w-7 h-7 stroke-[2.2]")}
                    </motion.div>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className="h-1 bg-[#84cc16] rounded-full mt-1"
                    />
                </div>
            </div>

            {/* Card Text Content with top padding so floating icon does not overlap text */}
            <div className="pt-8 p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-neutral-900 transition-colors duration-300 group-hover:text-[#84cc16]">
                        {study.slug ? (
                            <Link href={`/case-studies/${study.slug}`}>
                                {study.title}
                            </Link>
                        ) : (
                            study.title
                        )}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                        {study.description}
                    </p>
                </div>

                {study.slug && (
                    <div className="pt-2">
                        <Link
                            href={`/case-studies/${study.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#65a30d] hover:text-[#4d7c0f] group/link transition-colors"
                        >
                            <span>Read Case Study</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                        </Link>
                    </div>
                )}
            </div>
        </motion.div>
    );
}