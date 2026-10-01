"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { PricingPlanItem } from "@/data";

export interface PricingCardProps {
    plan: PricingPlanItem;
    index?: number;
}

export default function PricingCard({ plan, index = 0 }: PricingCardProps) {
    const isPopular = Boolean(plan.isPopular);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -8 }}
            className={`group relative flex flex-col justify-between rounded-3xl bg-white border-2 transition-all duration-300 hover:shadow-2xl overflow-visible ${isPopular
                ? "border-[#84cc16] shadow-2xl lg:-translate-y-2.5"
                : "border-neutral-200/90 shadow-sm hover:border-[#84cc16]"
                }`}
        >
            {/* Floating "Most Popular" Pill Badge with subtle floating animation */}
            {isPopular && (
                <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                    }}
                    className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 bg-[#84cc16] text-black px-8 py-2 rounded-full text-sm font-extrabold tracking-wide shadow-lg shadow-[#84cc16]/30 whitespace-nowrap"
                >
                    {plan.popularBadge || "Most Popular"}
                </motion.div>
            )}

            {/* Top Card Header (Smoothly shifts to #84cc16 on card hover) */}
            <div
                className={`p-6 sm:p-8 rounded-t-[22px] transition-all duration-400 relative overflow-hidden ${isPopular
                    ? "bg-[#84cc16] text-neutral-950"
                    : "bg-white text-neutral-900 group-hover:bg-[#84cc16] group-hover:text-neutral-950"
                    }`}
            >
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        <h3
                            className={`text-2xl sm:text-3xl font-extrabold tracking-tight transition-colors duration-300 ${isPopular
                                ? "text-neutral-950"
                                : "text-neutral-900 group-hover:text-neutral-950"
                                }`}
                        >
                            {plan.name}
                        </h3>

                        <p
                            className={`text-xs sm:text-sm font-semibold mt-1 transition-colors duration-300 ${isPopular
                                ? "text-neutral-900/80"
                                : "text-neutral-500 group-hover:text-neutral-900/80"
                                }`}
                        >
                            {plan.target}
                        </p>

                        {/* Accent Indicator Line */}
                        <div
                            className={`w-10 h-1.5 rounded-full my-3.5 transition-all duration-300 ${isPopular
                                ? "bg-neutral-950/80 group-hover:w-14"
                                : "bg-[#84cc16] group-hover:bg-neutral-950/80 group-hover:w-14"
                                }`}
                        />

                        {/* Price Display */}
                        <div
                            className={`text-3xl sm:text-4xl font-black tracking-tight transition-colors duration-300 ${isPopular
                                ? "text-neutral-950"
                                : "text-neutral-900 group-hover:text-neutral-950"
                                }`}
                        >
                            {plan.price}
                        </div>

                        <p
                            className={`text-xs mt-1 font-medium transition-colors duration-300 ${isPopular
                                ? "text-neutral-900/80"
                                : "text-neutral-500 group-hover:text-neutral-900/80"
                                }`}
                        >
                            {plan.priceNote}
                        </p>
                    </div>

                    {/* Camera Image with smooth zoom and perspective shift on hover */}
                    {plan.image && (
                        <div className="w-24 h-24 sm:w-36 sm:h-36 relative shrink-0">
                            <Image
                                src={plan.image}
                                alt={plan.alt || plan.name}
                                fill
                                unoptimized
                                className="object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-1 drop-shadow-md"
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Card Content with Feature List & Interactive CTA */}
            <div className="p-6 sm:p-8 pt-6 flex-1 flex flex-col justify-between rounded-b-[22px] bg-white">
                {/* Features List Box */}
                <div className="bg-[#f8faf7] rounded-2xl p-5 sm:p-6 mb-6 flex-1 flex flex-col gap-3.5 border border-neutral-100 group-hover:border-lime-200/70 transition-colors duration-300">
                    {plan.features?.map((feat: string, fIdx: number) => (
                        <div key={fIdx} className="flex items-center gap-3 group/item">
                            <span className="w-6 h-6 rounded-full bg-[#84cc16] text-white flex items-center justify-center shrink-0 shadow-sm font-bold transition-transform duration-200 group-hover/item:scale-110">
                                <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-neutral-800 transition-colors duration-200 group-hover/item:text-neutral-950">
                                {feat}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Animated Action Button: Outline -> Solid #84cc16 on card hover */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                        href={plan.buttonHref || "/contact"}
                        className={`w-full rounded-xl py-3.5 px-6 font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-sm ${isPopular
                            ? "bg-[#84cc16] hover:bg-[#71b60d] text-black shadow-lg shadow-[#84cc16]/25 group-hover:shadow-xl group-hover:shadow-[#84cc16]/40"
                            : "border-2 border-[#84cc16] text-neutral-900 group-hover:bg-[#84cc16] group-hover:text-black hover:bg-[#71b60d] group-hover:shadow-lg group-hover:shadow-[#84cc16]/25"
                            }`}
                    >
                        <span>{plan.buttonText || "Get Started"}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300 ease-out" />
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
}
