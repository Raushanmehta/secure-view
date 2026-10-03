"use client";

import { motion } from "framer-motion";
import PageTopSection from "@/components/common/PageTopSection";
import { site } from "@/data";
import { staggerContainer, fadeInUp, containerVariants } from "@/utils/animations";
import BlogCard from "@/components/cards/BlogCard";

export default function BlogPage() {
    const { titlePart1, titleHighlight, badge, description, blogPosts = [] } = site.blog || {};

    return (
        <main>
            <PageTopSection title="Blogs" breadcrumbPath="Blogs" />
            <section className="relative w-full py-8 lg:py-14 bg-white text-neutral-900 overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4">

                    {/* Section Header with Staggered Entrance */}
                    <motion.div
                        variants={staggerContainer(0.12, 0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-center max-w-2xl mx-auto space-y-4 mb-4 lg:mb-8"
                    >
                        {badge && (
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2">
                                <span className="text-xs lg:text-4xl font-normal text-[#84cc16]">[</span>
                                <span className="text-xs lg:text-lg uppercase tracking-[0.25em] font-bold flex items-center justify-center text-[#84cc16]">
                                    {badge}
                                </span>
                                <span className="text-xs lg:text-4xl font-normal text-[#84cc16]">]</span>
                            </motion.div>
                        )}

                        <motion.h2
                            variants={fadeInUp}
                            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide"
                        >
                            {titlePart1} {titleHighlight && <span className="text-[#84cc16]">{titleHighlight}</span>}
                        </motion.h2>

                        {description && (
                            <motion.p
                                variants={fadeInUp}
                                className="text-neutral-600 text-sm sm:text-base leading-relaxed"
                            >
                                {description}
                            </motion.p>
                        )}
                    </motion.div>

                    {/* Blog Cards Grid with Staggered Container */}
                    {blogPosts && blogPosts.length > 0 && (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.05 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {blogPosts.map((post: any, index: number) => (
                                <BlogCard
                                    key={post.title + index}
                                    post={post}
                                    index={index}
                                />
                            ))}
                        </motion.div>
                    )}
                </div>
            </section>
        </main>
    );
}