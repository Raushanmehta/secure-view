
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ArrowRight, ShieldCheck } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import GalleryImageCard, { GalleryImageCardProps } from "@/components/cards/GalleryImageCard";

interface GalleryImage {
    title?: string;
    category?: string;
    image: string;
    isOverlay?: boolean;
}

const galleryImages: GalleryImage[] = [
    {
        title: "Commercial Outdoor CCTV Setup",
        category: "Corporate Office",
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=600&auto=format&fit=crop",
    },
    {
        title: "Residential Security",
        category: "Professional CCTV installation for a safer home.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop",
        isOverlay: true,
    },
    {
        title: "Server & Storage Surveillance",
        category: "Data Center Security",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop",
    },
    {
        title: "Commercial Perimeter Monitoring",
        category: "Warehouse Logistics",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop",
    },
    {
        title: "Smart Commercial Complex Setup",
        category: "Modern Apartments",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    },
    {
        title: "Precision Camera Maintenance",
        category: "Preventative AMC",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&auto=format&fit=crop",
    },
];

const videoThumbnails = [
    {
        title: "Residential CCTV Installation",
        description: "See how we secure homes with reliable CCTV solutions.",
        duration: "1:36",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=500&auto=format&fit=crop",
    },
    {
        title: "Office Security Setup",
        description: "A complete CCTV installation for a corporate office.",
        duration: "2:05",
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=500&auto=format&fit=crop",
    },
    {
        title: "Maintenance & Support",
        description: "Quick service and maintenance for uninterrupted security.",
        duration: "1:48",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=500&auto=format&fit=crop",
    },
    {
        title: "Remote Monitoring",
        description: "Monitor your property from anywhere, anytime.",
        duration: "2:12",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=500&auto=format&fit=crop",
    },
];

export default function GallerySection() {
    return (
        <section className="relative w-full py-8 lg:py-14 bg-white text-neutral-900 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 ">

                {/* ================= PART 1: OUR GALLERY ================= */}
                <div className="space-y-16">

                    {/* Section Header */}
                    <motion.div
                        variants={staggerContainer(0.1, 0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-center max-w-2xl mx-auto space-y-2 mb-4 lg:mb-8">

                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2">
                            <span className="text-xs lg:text-4xl font-normal text-[#84cc16]">[</span>
                            <span className="text-xs lg:text-lg uppercase tracking-[0.25em] font-bold flex items-center justify-center text-[#84cc16]">
                                OUR GALLERY
                            </span>
                            <span className="text-xs lg:text-4xl font-normal text-[#84cc16]">]</span>
                        </motion.div>

                        <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide">
                            A Glimpse of <span className="text-[#84cc16]">Our Work</span>
                        </motion.h2>


                        <motion.p variants={fadeInUp} className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                            {`Explore some of our recent CCTV installation projects across homes, offices and commercial spaces.`}
                        </motion.p>

                    </motion.div>

                    {/* 3x2 Gallery Grid with Custom Rounded / Green Corner Accents */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-4">
                        {galleryImages.map((item, index) => (
                            <GalleryImageCard
                                key={item.title || index}
                                index={index}
                                image={item.image}
                                title={item.title}
                                category={item.category}
                                isOverlay={item.isOverlay}
                            />
                        ))}
                    </div>

                </div>


                {/* ================= PART 2: OUR VIDEOS / WATCH IN ACTION ================= */}
                <div className="space-y-16 pt-12 border-t border-neutral-200">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Left Header & Info (5 Cols) */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="inline-flex items-center gap-3">
                                <span className="h-[2px] w-8 bg-[#84cc16]" />
                                <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#84cc16]">
                                    OUR VIDEOS
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                                Watch Our Work <br />
                                <span className="text-[#84cc16]">in Action</span>
                            </h2>

                            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                                Take a look at our CCTV installation, maintenance and security projects through real videos. See how we help homes, offices and businesses stay safe and secure.[cite: 15]
                            </p>
                        </div>

                        {/* Right Featured Video Player Box (7 Cols) */}
                        <div className="lg:col-span-7">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-neutral-100 bg-neutral-900 group">
                                <div className="absolute inset-0 bg-neutral-950/40 z-10" />
                                <img
                                    src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop"
                                    alt="Featured CCTV Installation Video"
                                    className="w-full h-[380px] sm:h-[420px] object-cover"
                                />

                                {/* Central Play Button Overlay */}
                                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center space-y-3">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-20 h-20 rounded-full bg-white text-[#84cc16] flex items-center justify-center shadow-2xl pl-1 cursor-pointer"
                                    >
                                        <Play className="w-8 h-8 fill-[#84cc16]" />
                                    </motion.div>
                                    <div className="text-center">
                                        <h3 className="text-white font-bold text-lg drop-shadow-md">Complete CCTV Installation Process</h3>
                                        <p className="text-xs text-neutral-300 drop-shadow">From planning to final setup</p>
                                    </div>
                                </div>

                                {/* Video Player Control Bar Bottom */}
                                <div className="absolute bottom-0 left-0 right-0 z-30 bg-black/70 backdrop-blur-md px-6 py-3 flex items-center justify-between text-white text-xs font-mono">
                                    <div className="flex items-center gap-3">
                                        <Play className="w-4 h-4 fill-white" />
                                        <span>0:00 / 2:12</span>
                                    </div>
                                    {/* Seek Bar */}
                                    <div className="hidden sm:block flex-1 mx-6 h-1.5 bg-neutral-700 rounded-full overflow-hidden">
                                        <div className="w-1/3 h-full bg-[#84cc16]" />
                                    </div>
                                    <span>HD 1080p</span>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/* ================= PART 3: MORE VIDEOS GRID ================= */}
                    <div className="space-y-8 pt-8">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-bold text-neutral-900">More Videos</h3>
                            <Link
                                href="/videos"
                                className="inline-flex items-center gap-1 font-bold text-sm text-[#84cc16] hover:underline"
                            >
                                <span>View All Videos</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Video Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {videoThumbnails.map((vid, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -4 }}
                                    className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                                >
                                    <div className="relative h-44 w-full bg-neutral-900 overflow-hidden">
                                        <img
                                            src={vid.image}
                                            alt={vid.title}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/30" />

                                        {/* Play Badge */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-10 h-10 rounded-full bg-white/90 text-[#84cc16] flex items-center justify-center shadow-lg pl-0.5">
                                                <Play className="w-4 h-4 fill-[#84cc16]" />
                                            </div>
                                        </div>

                                        {/* Duration Badge */}
                                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                                            {vid.duration}
                                        </div>
                                    </div>

                                    <div className="p-4 space-y-1.5">
                                        <h4 className="font-bold text-neutral-900 text-sm line-clamp-1">{vid.title}</h4>
                                        <p className="text-xs text-neutral-500 line-clamp-2">{vid.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}