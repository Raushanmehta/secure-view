"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ArrowRight, ChevronDown } from "lucide-react";
import { fadeInLeft, fadeInRight, scaleIn, transitions } from "@/utils/animations";
import { site, SectionProps, SecureViewAmcEnquiryData } from "@/data";

export type EnquirySectionProps = SectionProps<SecureViewAmcEnquiryData>;

export default function EnquirySection({ data, className = "" }: EnquirySectionProps = {}) {
    const amcEnquiryData = data || site.amcEnquiryData || {};
    const titlePart1 = amcEnquiryData.titlePart1 || "Request";
    const titleHighlight = amcEnquiryData.titleHighlight || "AMC Enquiry";
    const description = amcEnquiryData.description || "Fill in your details and our team will get in touch with you promptly.";
    const planOptions = amcEnquiryData.planOptions || [
        { value: "basic", label: "Basic AMC Plan" },
        { value: "standard", label: "Standard AMC Plan" },
        { value: "premium", label: "Premium AMC Plan" },
        { value: "custom", label: "Customized Solution" },
    ];
    const submitButtonText = amcEnquiryData.submitButtonText || "Submit Enquiry";
    const assistance = amcEnquiryData.assistanceCard || {
        title: "Need Assistance?",
        description: "Our support team is available 24/7 to help you with AMC plans and maintenance.",
        phone: "+1 000000000",
        phoneHref: "tel:+1000000000",
        footerText: "Talk to our certified security experts for the best AMC solution.",
        image: "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=1000&auto=format&fit=crop",
        imageAlt: "CCTV Security Camera",
    };

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        plan: "",
        message: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitting Enquiry:", formData);
        alert("Thank you for your enquiry. Our team will contact you shortly.");
        setFormData({ fullName: "", email: "", phone: "", company: "", plan: "", message: "" });
    };

    return (
        <section className={`w-full py-8 lg:py-14 bg-white overflow-hidden ${className}`}>
            <div className="max-w-[1400px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-8 bg-[#0a1930] p-6 rounded-xl shadow-xl text-white border border-neutral-800">
                        <div className="space-y-3 mb-4">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-wide">
                                {titlePart1} <span className="text-[#84cc16]">{titleHighlight}</span>
                            </h2>
                            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                                {description}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {/* Full Name */}
                                <div className="space-y-1.5">
                                    <label className="block text-xs sm:text-sm font-medium text-neutral-300">
                                        Full Name <span className="text-[#84cc16]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        required
                                        placeholder="Enter your full name"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2.5 rounded-lg bg-[#172a45] border border-neutral-700 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-[#84cc16] focus:border-transparent transition-all outline-none text-sm sm:text-base"
                                    />
                                </div>

                                {/* Email Address */}
                                <div className="space-y-1.5">
                                    <label className="block text-xs sm:text-sm font-medium text-neutral-300">
                                        Email Address <span className="text-[#84cc16]">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Enter your email address"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2.5 rounded-lg bg-[#172a45] border border-neutral-700 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-[#84cc16] focus:border-transparent transition-all outline-none text-sm sm:text-base"
                                    />
                                </div>

                                {/* Phone Number */}
                                <div className="space-y-1.5">
                                    <label className="block text-xs sm:text-sm font-medium text-neutral-300">
                                        Phone Number <span className="text-[#84cc16]">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder="Enter your phone number"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2.5 rounded-lg bg-[#172a45] border border-neutral-700 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-[#84cc16] focus:border-transparent transition-all outline-none text-sm sm:text-base"
                                    />
                                </div>

                                {/* Company Name */}
                                <div className="space-y-1.5">
                                    <label className="block text-xs sm:text-sm font-medium text-neutral-300">
                                        Company / Property Name
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Enter company or property name"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2.5 rounded-lg bg-[#172a45] border border-neutral-700 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-[#84cc16] focus:border-transparent transition-all outline-none text-sm sm:text-base"
                                    />
                                </div>

                                {/* Select AMC Plan */}
                                <div className="space-y-1.5 md:col-span-2">
                                    <label className="block text-xs sm:text-sm font-medium text-neutral-300">
                                        Select AMC Plan
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="plan"
                                            value={formData.plan}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2.5 rounded-lg bg-[#172a45] border border-neutral-700 text-neutral-200 focus:ring-2 focus:ring-[#84cc16] focus:border-transparent transition-all appearance-none cursor-pointer outline-none text-sm sm:text-base">
                                            <option value="">-- Select Plan --</option>
                                            {planOptions.map((opt: { value: string; label: string }) => (
                                                <option key={opt.value} value={opt.value}>
                                                    {opt.label}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Message (Optional) */}
                                <div className="space-y-1.5 md:col-span-2">
                                    <label className="block text-xs sm:text-sm font-medium text-neutral-300">
                                        Message (Optional)
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        placeholder="Your message here..."
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2.5 rounded-lg bg-[#172a45] border border-neutral-700 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-[#84cc16] focus:border-transparent transition-all resize-none outline-none text-sm sm:text-base"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                transition={transitions.spring}
                                type="submit"
                                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#84cc16] text-black font-bold text-sm hover:bg-[#71b60d] transition-all shadow-md shadow-[#84cc16]/20 cursor-pointer group/btn">
                                <span>{submitButtonText}</span>
                                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                            </motion.button>
                        </form>
                    </motion.div>

                    <motion.aside
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-4 space-y-6">
                        {/* Camera Image Card */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-neutral-100">
                            <motion.div
                                variants={scaleIn}
                                whileHover={{ scale: 1.03 }}
                                transition={transitions.smooth}
                                className="relative overflow-hidden h-48 sm:h-56 bg-neutral-100">
                                <Image
                                    src={assistance.image}
                                    alt={assistance.imageAlt}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    className="object-cover"
                                />
                            </motion.div>
                            <div className="p-6 sm:p-7 space-y-4">
                                <h3 className="text-xl sm:text-2xl font-bold text-[#0a1930] flex items-center gap-2">
                                    {assistance.title}
                                </h3>
                                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                                    {assistance.description}
                                </p>
                                <motion.a
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={transitions.spring}
                                    href={assistance.phoneHref}
                                    className="inline-flex items-center gap-3.5 w-full py-2 px-4 lg:px-4 lg:py-3 rounded-xl bg-neutral-950 text-white font-bold hover:bg-neutral-800 transition-all shadow-md group/tel">
                                    <div className="p-2.5 rounded-full bg-[#84cc16] text-black">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <span className="text-lg sm:text-xl tracking-tight font-black group-hover/tel:text-[#84cc16] transition-colors">
                                        {assistance.phone}
                                    </span>
                                </motion.a>
                                <p className="text-neutral-500 text-xs leading-relaxed">
                                    {assistance.footerText}
                                </p>
                            </div>
                        </div>
                    </motion.aside>

                </div>
            </div>
        </section>
    );
}