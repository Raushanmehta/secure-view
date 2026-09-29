"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa6";
import {
    columnVariants,
    iconHoverTap,
    transitions,
} from "@/utils/animations";

export interface TeamMember {
    name: string;
    role: string;
    image: string;
    isHighlighted?: boolean;
}

interface TeamCardProps {
    member: TeamMember;
    index?: number;
}

export default function TeamCard({ member, index = 0 }: TeamCardProps) {
    const isHighlighted = member.isHighlighted;

    return (
        <motion.div
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55, delay: index * 0.12 }}
            whileHover={{ y: -8 }}
            className={`group relative rounded-sm p-6 flex flex-col items-center text-center transition-all duration-300 shadow-xl border ${isHighlighted
                ? "bg-gradient-to-b from-neutral-900 to-[#142304] border-[#84cc16] shadow-[0_0_30px_rgba(132,204,22,0.15)]"
                : "bg-black border-neutral-800 hover:border-[#84cc16]/60 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                }`}
        >
            {/* Profile Image with Ring Border & Hover Zoom */}
            <div className="relative w-48 h-48 mb-6 rounded-full p-1.5 border-2 border-[#84cc16] overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(132,204,22,0.35)]">
                <motion.img
                    src={member.image}
                    alt={member.name}
                    whileHover={{ scale: 1.08 }}
                    transition={transitions.smooth}
                    className="w-full h-full object-cover rounded-full"
                />
                {/* Subtle green backdrop tint matching design */}
                <div className="absolute inset-0 bg-[#84cc16]/10 rounded-full pointer-events-none transition-opacity duration-300 group-hover:bg-[#84cc16]/5" />
            </div>

            {/* Name & Role */}
            <div className="space-y-1 mb-6">
                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#84cc16]">
                    {member.name}
                </h3>
                <p className="text-sm text-neutral-400">{member.role}</p>
            </div>

            {/* Social Icons with Interactive Spring Physics */}
            <div className="flex items-center gap-3">
                {[
                    { icon: FaFacebookF, href: "#" },
                    { icon: FaLinkedinIn, href: "#" },
                    { icon: FaTwitter, href: "#" },
                    { icon: FaYoutube, href: "#" },
                ].map((social, sIdx) => {
                    const IconComponent = social.icon;
                    return (
                        <motion.a
                            key={sIdx}
                            href={social.href}
                            {...iconHoverTap}
                            className={`w-10 h-10 rounded-full flex items-center border border-[#84cc16] justify-center transition-colors duration-200 ${isHighlighted
                                ? "bg-[#84cc16] text-black hover:bg-transparent hover:text-white"
                                : "text-[#84cc16] hover:bg-[#84cc16] hover:text-black"
                                }`}
                        >
                            <IconComponent className="w-4 h-4" />
                        </motion.a>
                    );
                })}
            </div>
        </motion.div>
    );
}