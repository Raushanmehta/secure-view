"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, ChevronRight, HelpCircle, Rss } from "lucide-react";
import { site } from "@/data";
import {
    fadeInUp, fadeInRight, scaleIn, staggerContainer, staggerItem, transitions,
} from "@/utils/animations";

export interface BlogStep {
    num: string;
    title: string;
    description: string;
}

export interface BlogPostDetailData {
    slug?: string;
    title?: string;
    titlePart1?: string;
    titleHighlight?: string;
    titlePart2?: string;
    date?: string;
    category?: string;
    image?: string;
    leadDescription?: string;
    introduction?: string;
    steps?: BlogStep[];
    commentsCount?: number;
}

export interface BlogCategoryItem {
    name: string;
    count: number;
}

export interface BlogSidebarCta {
    title?: string;
    description?: string;
    buttonText?: string;
    buttonHref?: string;
}

export interface BlogDetailSectionProps {
    post?: BlogPostDetailData;
    allPosts?: BlogPostDetailData[];
    categories?: BlogCategoryItem[];
    sidebarCta?: BlogSidebarCta;
    initialSlug?: string;
}

export default function BlogDetailSection({
    post,
    allPosts,
    categories,
    sidebarCta,
    initialSlug,
}: BlogDetailSectionProps = {}) {
    const siteBlog = site.blog;
    const defaultAllPosts: BlogPostDetailData[] = (siteBlog?.blogPosts as BlogPostDetailData[]) || [];
    const defaultCategories: BlogCategoryItem[] = (siteBlog?.categories as BlogCategoryItem[]) || [];
    const defaultSidebarCta: BlogSidebarCta | undefined = siteBlog?.sidebarCta;

    const resolvedPost =
        post ||
        (initialSlug
            ? defaultAllPosts.find(
                (p) => p.slug === initialSlug || p.slug?.toLowerCase() === initialSlug?.toLowerCase()
            )
            : undefined) ||
        defaultAllPosts[0] ||
        {};

    const postsList = allPosts && allPosts.length > 0 ? allPosts : defaultAllPosts;
    const recentPosts = postsList.filter((p) => p.slug !== resolvedPost?.slug).slice(0, 5);
    const resolvedRecent = recentPosts.length > 0 ? recentPosts : postsList.slice(0, 5);

    const categoriesList = categories && categories.length > 0 ? categories : defaultCategories;

    const cta = sidebarCta || defaultSidebarCta || {
        title: "Need Help Choosing the Right CCTV System?",
        description: "Get expert advice and a customized solution for your property.",
        buttonText: "Get a Free Consultation",
        buttonHref: "/contact-us",
    };

    return (
        <section className="relative w-full py-8 lg:py-14 bg-white text-neutral-900 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

                    {/* Main Content Column (8 Cols) with Stagger Animation */}
                    <motion.main
                        variants={staggerContainer(0.12, 0.05)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.05 }}
                        className="lg:col-span-8 space-y-6"
                    >
                        {/* Header & Meta Block */}
                        <motion.div variants={fadeInUp} className="mb-6 max-w-4xl space-y-4">
                            {/* Breadcrumb Navigation */}
                            <div className="flex items-center gap-2 text-sm text-neutral-600">
                                <Link
                                    href="/"
                                    className="hover:text-[#84cc16] transition-colors duration-200"
                                >
                                    Home
                                </Link>
                                <ChevronRight className="w-4 h-4 text-neutral-400 shrink-0" />
                                <Link
                                    href="/blog"
                                    className="hover:text-[#84cc16] transition-colors duration-200"
                                >
                                    Blog
                                </Link>
                                <ChevronRight className="w-4 h-4 text-neutral-400 shrink-0" />
                                <span className="text-neutral-900 font-medium line-clamp-1">
                                    {resolvedPost.title || "Blog Detail"}
                                </span>
                            </div>

                            {/* Category Badge & Date */}
                            <div className="flex items-center gap-5 text-sm pt-1">
                                {resolvedPost.category && (
                                    <motion.span
                                        whileHover={{ scale: 1.05 }}
                                        transition={transitions.fast}
                                        className="inline-block px-4 py-1 rounded-full bg-[#84cc16] text-white font-semibold text-xs uppercase tracking-wide shadow-sm cursor-default"
                                    >
                                        {resolvedPost.category}
                                    </motion.span>
                                )}
                                {resolvedPost.date && (
                                    <div className="flex items-center gap-2 text-neutral-500">
                                        <CalendarDays className="w-4 h-4 text-neutral-400" />
                                        <span>{resolvedPost.date}</span>
                                    </div>
                                )}
                            </div>

                            {/* Main Title */}
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[#0a1930]">
                                {resolvedPost.titlePart1 ? (
                                    <>
                                        {resolvedPost.titlePart1}
                                        {resolvedPost.titleHighlight && (
                                            <>
                                                <br />
                                                <span className="text-[#84cc16]">
                                                    {resolvedPost.titleHighlight}
                                                </span>
                                                {resolvedPost.titlePart2 && ` ${resolvedPost.titlePart2}`}
                                            </>
                                        )}
                                    </>
                                ) : (
                                    resolvedPost.title || "Blog Post"
                                )}
                            </h1>

                            {resolvedPost.leadDescription && (
                                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                                    {resolvedPost.leadDescription}
                                </p>
                            )}
                        </motion.div>

                        {/* Featured Image with Scale Entrance and Hover Zoom */}
                        {resolvedPost.image && (
                            <motion.div
                                variants={scaleIn}
                                whileHover={{ y: -4 }}
                                transition={transitions.smooth}
                                className="rounded-xl overflow-hidden w-full h-[30vh] lg:h-[60vh] bg-neutral-100 shadow-md group border border-neutral-200/70"
                            >
                                <motion.img
                                    src={resolvedPost.image}
                                    alt={resolvedPost.title || "Blog Featured Image"}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        )}

                        {/* Introduction Text */}
                        {resolvedPost.introduction && (
                            <motion.p
                                variants={fadeInUp}
                                className="text-neutral-600 text-base leading-relaxed lg:pt-2"
                            >
                                {resolvedPost.introduction}
                            </motion.p>
                        )}

                        {/* Numbered Steps Section with Stagger Entrance */}
                        {resolvedPost.steps && resolvedPost.steps.length > 0 && (
                            <div className="space-y-4 pt-2">
                                {resolvedPost.steps.map((step, index) => (
                                    <motion.div
                                        key={step.num || index}
                                        variants={staggerItem}
                                        whileHover={{ x: 6 }}
                                        transition={transitions.fast}
                                        className="flex items-start gap-5  rounded-xl transition-all duration-300"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 6 }}
                                            transition={transitions.spring}
                                            className="w-11 h-11 rounded-full bg-[#84cc16] text-white font-black text-lg flex items-center justify-center shrink-0"
                                        >
                                            {step.num}
                                        </motion.div>
                                        <div className="space-y-1.5 pt-0.5">
                                            <h3 className="text-xl sm:text-2xl font-bold text-[#0a1930] tracking-tight">
                                                {step.title}
                                            </h3>
                                            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.main>

                    {/* Sidebar Column (4 Cols) with Stagger Animations */}
                    <motion.aside
                        variants={staggerContainer(0.14, 0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.05 }}
                        className="lg:col-span-4 space-y-6"
                    >
                        {/* Recent Posts Block */}
                        {resolvedRecent.length > 0 && (
                            <motion.div
                                variants={fadeInRight}
                                className="bg-[#f8f9fa] rounded-xl px-6 py-6 border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <h3 className="text-2xl font-bold text-[#0a1930] mb-6 flex items-center gap-2">
                                    Recent Posts
                                    <span className="w-8 h-1 bg-[#84cc16] rounded-full inline-block" />
                                </h3>
                                <ul className="space-y-4">
                                    {resolvedRecent.map((recentItem, index) => (
                                        <motion.li
                                            key={recentItem.slug || index}
                                            whileHover={{ x: 4 }}
                                            transition={transitions.fast}
                                        >
                                            <Link
                                                href={`/blog/${recentItem.slug || ""}`}
                                                className="group flex items-start gap-4"
                                            >
                                                {recentItem.image && (
                                                    <div className="w-20 h-16 rounded-xl overflow-hidden shrink-0 shadow-sm border border-neutral-200/60">
                                                        <motion.img
                                                            src={recentItem.image}
                                                            alt={recentItem.title || "Recent post"}
                                                            whileHover={{ scale: 1.1 }}
                                                            transition={transitions.smooth}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                )}
                                                <div className="space-y-1.5 pt-0.5">
                                                    <h4 className="text-sm font-semibold text-[#0a1930] group-hover:text-[#84cc16] transition-colors duration-200 leading-snug line-clamp-2">
                                                        {recentItem.title}
                                                    </h4>
                                                    {recentItem.date && (
                                                        <p className="text-xs text-neutral-500 flex items-center gap-1.5">
                                                            <CalendarDays className="w-3.5 h-3.5 text-neutral-400" />
                                                            {recentItem.date}
                                                        </p>
                                                    )}
                                                </div>
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                        {/* Categories Block */}
                        {categoriesList.length > 0 && (
                            <motion.div
                                variants={fadeInRight}
                                className="bg-[#f8f9fa] rounded-xl p-6 border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <h3 className="text-2xl font-bold text-[#0a1930] mb-6 flex items-center gap-2">
                                    Categories
                                    <span className="w-8 h-1 bg-[#84cc16] rounded-full inline-block" />
                                </h3>
                                <ul className="space-y-2">
                                    {categoriesList.map((cat, index) => (
                                        <motion.li
                                            key={cat.name || index}
                                            whileHover={{ x: 4 }}
                                            transition={transitions.fast}
                                        >
                                            <Link
                                                href="/blog"
                                                className="group flex items-center justify-between px-4 py-2 rounded-xl bg-white border border-neutral-100 hover:border-[#84cc16]/50 transition-all duration-300 hover:shadow-sm"
                                            >
                                                <span className="text-sm font-medium text-neutral-700 group-hover:text-[#84cc16] transition-colors duration-200 flex items-center gap-3">

                                                    {cat.name}
                                                </span>
                                                <motion.span
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={transitions.spring}
                                                    className="px-2.5 py-2 rounded-full bg-[#84cc16] text-white font-bold text-sm shadow-sm"
                                                >
                                                    {cat.count.toString().padStart(2, "0")}
                                                </motion.span>
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                        {/* Help / CTA Block with Ambient Floating Icon */}
                        <motion.div
                            variants={fadeInRight}
                            whileHover={{ y: -4 }}
                            transition={transitions.smooth}
                            className="bg-[#84cc16] text-neutral-900 rounded-xl p-6 shadow-xl relative overflow-hidden group"
                        >
                            <motion.div
                                animate={{
                                    rotate: [12, 18, 12],
                                    scale: [1, 1.06, 1],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute -top-10 -right-10 text-white/20 pointer-events-none"
                            >
                                <HelpCircle className="w-36 h-36" />
                            </motion.div>
                            <div className="relative z-10 space-y-4">
                                <h3 className="text-xl font-bold max-w-xs leading-snug text-neutral-950">
                                    {cta.title}
                                </h3>
                                <p className="text-sm text-neutral-800 max-w-xs leading-relaxed font-medium">
                                    {cta.description}
                                </p>
                                <motion.div
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={transitions.spring}
                                    className="pt-1 inline-block"
                                >
                                    <Link
                                        href={cta.buttonHref || "/contact-us"}
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-950 text-white font-bold text-sm transition-all hover:bg-neutral-800 shadow-md group/btn"
                                    >
                                        <span>{cta.buttonText || "Get a Free Consultation"}</span>
                                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.aside>
                </div>

            </div>
        </section>
    );
}