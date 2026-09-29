"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, Folder } from "lucide-react";
import { columnVariants, transitions } from "@/utils/animations";

export interface BlogPost {
    title: string;
    slug: string;
    date: string;
    category: string;
    image: string;
    commentsCount: number;
}

interface BlogCardProps {
    post: BlogPost;
    index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
    return (
        <motion.div
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover={{ y: -8 }}
            className="group p-2 bg-white rounded-sm border border-neutral-200 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:border-[#84cc16]/50"
        >
            {/* Top Image Container with Date Badge & Category Tag */}
            <div className="relative h-60 w-full overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-neutral-900/10 z-10 rounded-sm transition-opacity duration-300 group-hover:bg-neutral-900/5" />
                <motion.img
                    src={post.image}
                    alt={post.title}
                    whileHover={{ scale: 1.08 }}
                    transition={transitions.smooth}
                    className="w-full h-full object-cover rounded-sm"
                />

                {/* Date Badge (Top Left) */}
                <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    className="absolute top-2 left-2 z-20 bg-[#84cc16] text-white font-bold px-3 py-2 rounded-sm text-center shadow-lg min-w-[50px] cursor-default"
                >
                    <span className="block text-lg leading-none">{post.date.split(" ")[0]}</span>
                    <span className="block text-[10px] uppercase tracking-wider">{post.date.split(" ")[1]}</span>
                </motion.div>

                {/* Category Badge (Bottom Right) */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    className="absolute bottom-2 right-2 z-20 flex items-center gap-1.5 bg-[#84cc16] text-white font-semibold text-xs px-3 py-2.5 rounded-sm shadow-lg cursor-default"
                >
                    <Folder className="w-5 h-5" />
                    <span>{post.category}</span>
                </motion.div>
            </div>

            {/* Card Content */}
            <div className="p-2 space-y-2 flex-1 flex flex-col justify-between">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 leading-snug group-hover:text-[#84cc16] transition-colors duration-300">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                {/* Card Footer: Comments & Read More Link */}
                <div className="pt-2 border-t-2 border-neutral-100 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-neutral-500">
                        <MessageSquare className="w-4 h-4 text-[#84cc16]" />
                        <span>{post.commentsCount}</span>
                    </div>

                    <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 font-bold text-neutral-900 hover:text-[#84cc16] transition-colors duration-200"
                    >
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}