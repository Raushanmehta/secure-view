"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export interface TestimonialItem {
    name: string;
    role: string;
    company: string;
    content: string;
    image: string;
}

const defaultItem: TestimonialItem = {
    name: "Client Feedback",
    role: "Verified Client",
    company: "Commercial Partner",
    content: "Excellent service and high-quality surveillance installation. Highly recommended!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
};

export interface TestimonialCardProps {
    item?: TestimonialItem;
    index?: number;
}

export default function TestimonialCard({ item = defaultItem }: TestimonialCardProps = {}) {

    return (
        <motion.div
            className="w-full group relative bg-white border border-[#bbf7d0] hover:border-[#84cc16] rounded-2xl px-6 sm:px-8 py-6 shadow-lg shadow-[#84cc16]/5 hover:shadow-2xl hover:shadow-[#84cc16]/15 transition-all duration-300 flex flex-col justify-between"
        >
            {/* Top Floating Avatar & Large Quote Icon */}
            <div className="flex items-start justify-between mb-4 -mt-14 sm:-mt-16">
                {/* Avatar with Lime-Green Ring & subtle spring hover */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 border-2 border-[#84cc16] bg-white overflow-hidden shadow-md transition-all duration-500 group-hover:ring-4 group-hover:ring-[#84cc16]/25 group-hover:scale-105">
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="112px"
                        className="object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Light Green Downward Quote Icon with interactive rotate on hover */}
                <div className="text-[#bbf7d0] group-hover:text-[#84cc16] transition-colors duration-300 mt-14 sm:mt-16">
                    <Quote className="w-10 h-10 sm:w-14 sm:h-14 fill-current transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                </div>
            </div>

            {/* Feedback Content */}
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-3 lg:mb-6">
                &ldquo;{item.content}&rdquo;
            </p>

            {/* Client Name & Role / Company Details */}
            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-bold text-neutral-900 transition-colors duration-300 group-hover:text-[#84cc16]">
                    {item.name}
                </h3>
                <p className="text-xs font-semibold tracking-wider text-[#84cc16]">
                    {item.role}, {item.company}
                </p>
            </div>
        </motion.div>
    );
}