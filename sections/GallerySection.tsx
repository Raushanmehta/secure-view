"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { fadeInUp, fadeInRight, staggerContainer } from "@/utils/animations";
import { renderIcon } from "@/utils/icons";
import { site, SecureViewGalleryData, SectionProps } from "@/data";
import GalleryImageCard from "@/components/cards/GalleryImageCard";
import GalleryVideoCard from "@/components/cards/GalleryVideoCard";

export interface GallerySectionProps extends SectionProps<SecureViewGalleryData> {
    data?: SecureViewGalleryData;
}

export default function GallerySection({ data }: GallerySectionProps = {}) {
    const galleryData = (data || site.gallery) as any;

    const galleryHeader = galleryData?.galleryHeader;
    const galleryImages: any[] = galleryData?.galleryImages || [];
    const videoSection = galleryData?.videoSection;
    const featuredVideo = videoSection?.featuredVideo;
    const moreVideosSection = videoSection?.moreVideos;
    const videoThumbnails: any[] = moreVideosSection?.videoThumbnails || [];

    return (
        <section className="relative w-full py-8 lg:py-14 bg-white text-neutral-900 overflow-hidden">
            {/* Ambient Background Glow Elements */}
            <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.12, 0.05] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -top-20 -right-20 w-96 h-96 bg-[#84cc16]/15 rounded-full blur-3xl -z-10"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.09, 0.04] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="pointer-events-none absolute bottom-10 -left-20 w-96 h-96 bg-[#84cc16]/10 rounded-full blur-3xl -z-10"
            />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">

                {/* ================= PART 1: OUR GALLERY ================= */}
                <div className="space-y-2">

                    {/* Section Header */}
                    <motion.div
                        variants={staggerContainer(0.1, 0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-center max-w-2xl mx-auto space-y-2 mb-4 lg:mb-8"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2">
                            <span className="text-xs lg:text-4xl font-normal text-[#84cc16]">
                                {galleryHeader?.badgeBracketLeft || "["}
                            </span>
                            <span className="text-xs lg:text-lg uppercase tracking-[0.25em] font-bold flex items-center justify-center text-[#84cc16]">
                                {galleryHeader?.badge || "OUR GALLERY"}
                            </span>
                            <span className="text-xs lg:text-4xl font-normal text-[#84cc16]">
                                {galleryHeader?.badgeBracketRight || "]"}
                            </span>
                        </motion.div>

                        <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide">
                            {galleryHeader?.titlePart1 || "A Glimpse of"}{" "}
                            <span className="text-[#84cc16]">
                                {galleryHeader?.titleHighlight || "Our Work"}
                            </span>
                        </motion.h2>

                        {galleryHeader?.description && (
                            <motion.p variants={fadeInUp} className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                                {galleryHeader.description}
                            </motion.p>
                        )}
                    </motion.div>

                    {/* 3x2 Gallery Grid with Custom Rounded / Green Corner Accents */}
                    <motion.div
                        variants={staggerContainer(0.08, 0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                        {galleryImages.map((item: any, index: number) => (
                            <GalleryImageCard
                                key={item.id || item.title || index}
                                index={index}
                                image={item.image}
                                alt={item.alt || item.title}
                                title={item.title}
                                category={item.category}
                                description={item.description}
                                icon={item.icon}
                                buttonText={item.buttonText}
                                buttonHref={item.buttonHref}
                                isOverlay={item.isOverlay}
                            />
                        ))}
                    </motion.div>

                </div>


                {/* ================= PART 2: OUR VIDEOS / WATCH IN ACTION ================= */}
                <div className="space-y-2 pt-4 lg:pt-12">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-center">

                        {/* Left Header & Info (5 Cols) */}
                        <motion.div
                            variants={staggerContainer(0.12, 0.1)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="lg:col-span-5 space-y-4"
                        >
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2">
                                <motion.span
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 54 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="h-[2px] bg-[#84cc16]"
                                />
                                <span className="text-xs lg:text-lg uppercase tracking-[0.25em] font-bold flex items-center justify-center text-[#84cc16]">
                                    {videoSection?.badge || "OUR VIDEOS"}
                                </span>
                            </motion.div>

                            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-wide">
                                {videoSection?.titlePart1 || "Watch Our Work"} <br />
                                <span className="text-[#84cc16]">
                                    {videoSection?.titleHighlight || "in Action"}
                                </span>
                            </motion.h2>

                            {videoSection?.description && (
                                <motion.p variants={fadeInUp} className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                                    {videoSection.description}
                                </motion.p>
                            )}
                        </motion.div>

                        {/* Right Featured Video Player Box (7 Cols) */}
                        <motion.div
                            variants={fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="lg:col-span-7"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-neutral-100 bg-neutral-900 group">
                                <div className="absolute inset-0 bg-neutral-950/40 z-10" />
                                <img
                                    src={featuredVideo?.image || "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop"}
                                    alt={featuredVideo?.alt || featuredVideo?.title || "Featured CCTV Installation Video"}
                                    className="w-full h-[380px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Central Play Button Overlay with Pulsing Ring */}
                                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center space-y-3">
                                    <div className="relative flex items-center justify-center">
                                        <motion.div
                                            animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
                                            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                                            className="absolute inset-0 rounded-full bg-[#84cc16]/40 -z-10"
                                        />
                                        <motion.div
                                            whileHover={{ scale: 1.12 }}
                                            whileTap={{ scale: 0.94 }}
                                            className="w-20 h-20 rounded-full bg-white text-[#84cc16] flex items-center justify-center shadow-2xl pl-1 cursor-pointer transition-shadow hover:shadow-[0_0_25px_rgba(132,204,22,0.6)]"
                                        >
                                            {renderIcon(featuredVideo?.playIcon, Play, "w-8 h-8 fill-[#84cc16]")}
                                        </motion.div>
                                    </div>
                                    <div className="text-center px-4">
                                        <h3 className="text-white font-bold text-lg drop-shadow-md">
                                            {featuredVideo?.title || "Complete CCTV Installation Process"}
                                        </h3>
                                        <p className="text-xs text-neutral-300 drop-shadow">
                                            {featuredVideo?.subtitle || "From planning to final setup"}
                                        </p>
                                    </div>
                                </div>

                                {/* Video Player Control Bar Bottom */}
                                <div className="absolute bottom-0 left-0 right-0 z-30 bg-black/70 backdrop-blur-md px-6 py-3 flex items-center justify-between text-white text-xs font-mono">
                                    <div className="flex items-center gap-3">
                                        {renderIcon(featuredVideo?.playIcon, Play, "w-4 h-4 fill-white")}
                                        <span>{featuredVideo?.duration || "0:00 / 2:12"}</span>
                                    </div>
                                    {/* Seek Bar */}
                                    <div className="hidden sm:block flex-1 mx-6 h-1.5 bg-neutral-700 rounded-full overflow-hidden">
                                        <div className="w-1/3 h-full bg-[#84cc16]" />
                                    </div>
                                    <span>{featuredVideo?.quality || "HD 1080p"}</span>
                                </div>
                            </div>
                        </motion.div>

                    </div>


                    {/* ================= PART 3: MORE VIDEOS GRID ================= */}
                    <div className="space-y-6 pt-6">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex items-center justify-between"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-neutral-900">
                                    {moreVideosSection?.title || "More Videos"}
                                </h3>
                                <motion.span
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 54 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="h-[2px] bg-[#84cc16] block mt-1.5"
                                />
                            </div>
                            <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                                <Link
                                    href={moreVideosSection?.viewAllHref || "/videos"}
                                    className="inline-flex items-center gap-1 font-bold text-sm text-[#84cc16] hover:underline group"
                                >
                                    <span>{moreVideosSection?.viewAllText || "View All Videos"}</span>
                                    {renderIcon(moreVideosSection?.viewAllIcon, ArrowRight, "w-4 h-4 transform group-hover:translate-x-1 transition-transform")}
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Video Cards Grid */}
                        <motion.div
                            variants={staggerContainer(0.08, 0.1)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                        >
                            {videoThumbnails.map((vid: any, idx: number) => (
                                <motion.div key={vid.id || vid.title || idx} variants={fadeInUp}>
                                    <GalleryVideoCard vid={vid} idx={idx} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                </div>

            </div>
        </section>
    );
}