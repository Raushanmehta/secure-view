"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Video, ArrowRight } from "lucide-react";
import { columnVariants } from "@/utils/animations";
import { renderIcon } from "@/utils/icons";

export interface ServiceCardProps {
    service?: {
        title: string;
        description: string;
        image: string;
        slug?: string;
        isHighlighted?: boolean;
        icon?: any;
    };
    title?: string;
    description?: string;
    image?: string;
    href?: string;
    index?: number;
    isHighlighted?: boolean;
    IconComponent?: any;
}

export default function ServiceCard({
    service,
    title,
    description,
    image,
    href,
    index = 0,
    isHighlighted,
    IconComponent,
}: ServiceCardProps) {
    const cardTitle = title || service?.title || "";
    const cardDesc = description || service?.description || "";
    const cardImage = image || service?.image || "";
    const cardHref = href || (service?.slug ? `/services/${service.slug}` : "#");
    const highlighted = isHighlighted ?? service?.isHighlighted ?? false;
    const rawIcon = IconComponent || service?.icon || Video;

    return (
        <motion.div
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className={`group relative w-full rounded-sm bg-black border overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-300 ${highlighted
                ? "border-[#84cc16] shadow-[#84cc16]/10"
                : "border-neutral-800 hover:border-[#84cc16]/50"
                }`}
        >
            {/* Top Image Container with floating unclipped icon */}
            <div className="relative p-2">
                <div className="relative h-56 w-full overflow-hidden rounded-sm">
                    <div className="absolute inset-0 bg-black/30 z-10 transition-opacity duration-300 group-hover:bg-black/15" />
                    <motion.img
                        src={cardImage}
                        alt={cardTitle}
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full h-full object-cover rounded-sm"
                    />
                </div>

                {/* Floating CCTV Icon Badge & Indicator Line (outside overflow-hidden) */}
                <div className="absolute -bottom-5 left-5 z-20 flex flex-col gap-1">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 6 }}
                        transition={{ type: "spring", stiffness: 350, damping: 20 }}
                        className="w-14 h-14 rounded-sm bg-[#84cc16] text-white flex items-center justify-center shadow-lg cursor-pointer"
                    >
                        {renderIcon(rawIcon, Video, "w-7 h-7 stroke-[2.2]")}
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

            {/* Card Content */}
            <div className="pt-6 p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#84cc16]">
                        {cardTitle}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                        {cardDesc}
                    </p>
                </div>

                {/* Custom Slanted / Parallelogram "Read More" Button matching reference */}
                <div className="pt-2">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                        <Link
                            href={cardHref}
                            className="relative inline-flex items-center gap-3 px-6 py-3 bg-[#84cc16] text-black font-bold text-sm tracking-wide transition-all duration-300 hover:bg-[#71b60d] shadow-lg shadow-[#84cc16]/20 group/btn rounded-none"
                            style={{
                                clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                            }}
                        >
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}