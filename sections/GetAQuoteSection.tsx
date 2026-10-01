"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, CheckCircle } from "lucide-react";
import {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    staggerContainer,
    staggerItem,
    scaleUp,
    buttonHoverTap,
    defaultViewport
} from "@/utils/animations";

import { site, SecureViewGetAQuoteData } from "@/data";

export interface GetAQuoteFeatureItem {
    title: string;
    description: string;
}

export interface GetAQuoteSectionProps {
    data?: SecureViewGetAQuoteData;
    className?: string;
}

export default function GetAQuoteSection({ data = site.getAQuote, className = "" }: GetAQuoteSectionProps) {
    const quoteData = data || site.getAQuote;
    const {
        badge = "GET A QUOTE",
        titlePart1 = "Reliable Security",
        titleHighlight = "Starts Here",
        description = "Tell us about your property and security requirements. Our team will get back to you with a customized quote that fits your needs.",
        backgroundImage = "/images/get-a-quote/get-a-quote-bg.png",
        features = [
            { title: "Quick Response", description: "We'll get back to you soon" },
            { title: "Customized Solutions", description: "As per your requirement" },
            { title: "No Obligation", description: "Free and transparent quote" },
        ],
    } = quoteData || {};

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        propertyType: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className={`relative w-full py-8 lg:py-14 bg-white text-neutral-900 overflow-hidden ${className}`}>
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-stretch">

                    {/* Left Column: Background Image with Overlay, Headline, Description & Feature Points (6 Cols) */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        className="relative isolate lg:col-span-6 rounded-lg overflow-hidden flex flex-col justify-center gap-8 min-h-[560px] lg:min-h-[620px] text-neutral-900">
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0 pointer-events-none">
                            <Image
                                src={backgroundImage}
                                alt="CCTV Surveillance Monitoring"
                                fill
                                priority
                                unoptimized
                                className="object-cover object-right-bottom"
                            />
                        </div>

                        {/* Top Subtitle Badge & Headline */}
                        <div className="relative z-10 space-y-4 max-w-md">
                            <div className="inline-flex items-center gap-2">
                                <span className="text-xs lg:text-3xl font-normal text-[#84cc16]">[</span>
                                <span className="text-xs lg:text-sm uppercase tracking-[0.25em] font-bold text-[#84cc16]">
                                    {badge}
                                </span>
                                <span className="text-xs lg:text-3xl font-normal text-[#84cc16]">]</span>
                            </div>

                            {/* Main Headline */}
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide leading-[1.15] text-black">
                                {titlePart1} <br />
                                <span className="text-[#84cc16]">{titleHighlight}</span>
                            </h2>

                            {/* Description */}
                            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-lg">
                                {description}
                            </p>
                        </div>

                        {/* Feature Checkpoints */}
                        <motion.div
                            variants={staggerContainer(0.12, 0.1)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={defaultViewport}
                            className="relative z-10 space-y-3 max-w-md"
                        >
                            {features.map((item: GetAQuoteFeatureItem, idx: number) => (
                                <motion.div
                                    key={idx}
                                    variants={staggerItem}
                                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                                    className="flex items-start gap-4 rounded-lg transition-transform"
                                >
                                    <div className="w-1.5 h-14 bg-[#84cc16] rounded-full shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-black text-base">{item.title}</h3>
                                        <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                    </motion.div>

                    {/* Right Column: Request a Quote Form Card (6 Cols) */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={defaultViewport}
                        className="lg:col-span-6 bg-gray-50 border border-neutral-200 rounded-lg p-6 relative flex flex-col justify-center"
                    >
                        {submitted ? (
                            <motion.div
                                variants={scaleUp}
                                initial="hidden"
                                animate="visible"
                                className="text-center py-16 space-y-6"
                            >
                                <div className="w-16 h-16 rounded-full bg-lime-100 text-[#84cc16] flex items-center justify-center mx-auto">
                                    <CheckCircle className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-neutral-900">Quote Request Received!</h3>
                                <p className="text-neutral-600 text-sm max-w-sm mx-auto">
                                    Thank you for reaching out. Our team will review your requirements and get back to you shortly with a customized quote.
                                </p>
                                <motion.button
                                    {...buttonHoverTap}
                                    onClick={() => setSubmitted(false)}
                                    className="px-6 py-3 rounded-xl bg-[#84cc16] text-white font-bold text-sm hover:bg-[#65a30d] transition-colors cursor-pointer"
                                >
                                    Send Another Request
                                </motion.button>
                            </motion.div>
                        ) : (
                            <>
                                <div className="space-y-1 mb-8">
                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                                        Request a <span className="text-[#84cc16]">Quote</span>
                                    </h3>
                                    <p className="text-xs sm:text-sm text-neutral-500">
                                        Fill in your details and our team will get in touch with you shortly.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">

                                    {/* Row 1: Your Name & Email Address */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                                                Your Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Enter your full name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 rounded-md border border-neutral-200 bg-white text-neutral-900 text-sm focus:outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] transition-colors"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="Enter your email address"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-md border border-neutral-200 bg-white text-neutral-900 text-sm focus:outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] transition-colors"
                                            />
                                        </div>
                                    </div>

                                    {/* Row 2: Phone Number & Select Service */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                                                Phone Number <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="Enter your phone number"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-3 rounded-md border border-neutral-200 bg-white text-neutral-900 text-sm focus:outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] transition-colors"
                                            />
                                        </div>

                                        <div className="space-y-1.5 relative">
                                            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                                                Select Service <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                required
                                                value={formData.service}
                                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                className="w-full px-4 py-3 rounded-md border border-neutral-200 bg-white text-neutral-900 text-sm focus:outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] transition-colors appearance-none cursor-pointer"
                                            >
                                                <option value="">-- Select Service --</option>
                                                <option value="cctv">CCTV Installation</option>
                                                <option value="monitoring">24/7 Monitoring</option>
                                                <option value="access">Access Control Systems</option>
                                                <option value="maintenance">Maintenance & Support</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 top-[38px] w-4 h-4 text-neutral-500 pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* Row 3: Property Type */}
                                    <div className="space-y-1.5 relative">
                                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                                            Property Type
                                        </label>
                                        <select
                                            value={formData.propertyType}
                                            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                                            className="w-full px-4 py-2 rounded-md border border-neutral-200 bg-white text-neutral-900 text-sm focus:outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] transition-colors appearance-none cursor-pointer"
                                        >
                                            <option value="">-- Select Property Type --</option>
                                            <option value="residential">Residential (Home / Apartment)</option>
                                            <option value="commercial">Commercial (Office / Retail)</option>
                                            <option value="industrial">Industrial (Warehouse / Factory)</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-[38px] w-4 h-4 text-neutral-500 pointer-events-none" />
                                    </div>

                                    {/* Row 4: Your Message */}
                                    <div className="space-y-1.5">
                                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                                            Your Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            rows={3}
                                            required
                                            placeholder="Tell us about your requirements..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-md border border-neutral-200 bg-white text-neutral-900 text-sm focus:outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] transition-colors resize-none"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        {...buttonHoverTap}
                                        type="submit"
                                        className="w-full py-3 rounded-md bg-[#84cc16] text-white font-bold text-sm transition-all duration-300 hover:bg-[#65a30d] shadow-lg shadow-lime-500/25 flex items-center justify-center gap-2 cursor-pointer group"
                                    >
                                        <span>Get a Quote</span>
                                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                                    </motion.button>

                                </form>
                            </>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}