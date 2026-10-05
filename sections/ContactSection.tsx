"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, ChevronDown, Clock, CheckCircle2 } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { site, SecureViewContactData } from "@/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Phone,
    Mail,
    MapPin,
    Clock,
};

export interface ContactDetailItem {
    icon: string;
    title: string;
    value: string;
    subtitle?: string;
}

export interface ContactSectionProps {
    data?: SecureViewContactData;
    className?: string;
}

export default function ContactSection({ data = site.contact, className = "" }: ContactSectionProps) {
    const contactData = data || site.contact;
    const {
        badge = "CONTACT US",
        titlePart1 = "Get in Touch",
        titleHighlight = "with Us",
        contactDetails = [],
        formTitlePart1 = "Send Us a",
        formTitleHighlight = "Message",
        formDescription = "Complete this quick inquiry form and our certified surveillance engineers will get back to you promptly.",
        formButtonText = "Send Message",
        services = [
            "CCTV Installation & Setup",
            "24/7 Remote Monitoring",
            "Access Control & Enterprise Security",
            "Maintenance & AMC Support",
            "Smart AI & Cloud Surveillance",
            "Other Security Inquiry"
        ],
        mapIframeSrc = "https://maps.google.com/maps?q=3170+Rosewood+Lane+Unit+200,+Beverly+Hills,+CA+90210&t=&z=15&ie=UTF8&iwloc=&output=embed",
    } = contactData || {};

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: "",
                email: "",
                phone: "",
                service: "",
                message: "",
            });
        }, 5000);
    };

    return (
        <section className={`relative w-full py-8 lg:py-14 bg-white text-neutral-900 overflow-hidden ${className}`}>
            <div className="max-w-[1400px] mx-auto px-4">

                {/* Top Grid: Contact Info & Message Form */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">

                    {/* Left Column: Get in Touch Info (5 Cols) */}
                    <motion.div
                        variants={staggerContainer(0.1, 0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="lg:col-span-5 space-y-4"
                    >
                        {/* Header */}
                        <motion.div variants={fadeInUp} className="space-y-3">
                            {badge && (
                                <div className="inline-flex items-center gap-2">
                                    <span className="text-xs lg:text-3xl font-normal text-[#84cc16]">[</span>
                                    <span className="text-xs lg:text-sm uppercase tracking-[0.25em] font-bold text-[#84cc16]">
                                        {badge}
                                    </span>
                                    <span className="text-xs lg:text-3xl font-normal text-[#84cc16]">]</span>
                                </div>
                            )}
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-neutral-900">
                                {titlePart1} <br />
                                {titleHighlight && <span className="text-[#84cc16]">{titleHighlight}</span>}
                            </h2>
                        </motion.div>

                        {/* Contact Details List */}
                        <div className="space-y-3">
                            {contactDetails.map((detail: ContactDetailItem, idx: number) => {
                                const IconComponent = iconMap[detail.icon] || MapPin;
                                const isPhone = detail.icon === "Phone";
                                const isMail = detail.icon === "Mail";
                                const href = isPhone
                                    ? `tel:${detail.value.replace(/[^0-9+]/g, "")}`
                                    : isMail
                                        ? `mailto:${detail.value}`
                                        : null;

                                return (
                                    <motion.div
                                        key={idx}
                                        variants={fadeInUp}
                                        className="flex items-center gap-4 transition-all group"
                                    >
                                        <div className="w-14 h-14 bg-[#D1E9B4] rounded-full border border-lime-200 text-[#84cc16] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110">
                                            <IconComponent className="w-7 h-7" />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="font-bold text-neutral-900 text-base">{detail.title}</h3>
                                            {href ? (
                                                <a
                                                    href={href}
                                                    className="block text-neutral-800 font-bold text-sm sm:text-base hover:text-[#84cc16] transition-colors"
                                                >
                                                    {detail.value}
                                                </a>
                                            ) : (
                                                <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed">
                                                    {detail.value}
                                                </p>
                                            )}
                                            {detail.subtitle && (
                                                <div className="flex items-center gap-1.5 text-neutral-500 text-xs">
                                                    {isPhone && <Clock className="w-3.5 h-3.5 text-[#84cc16]" />}
                                                    <span>{detail.subtitle}</span>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                    </motion.div>

                    {/* Right Column: Send Us a Message Form Card (7 Cols) */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="lg:col-span-7 bg-gray-50 border border-neutral-200 rounded-lg p-6"
                    >
                        <div className="mb-6 space-y-1.5">
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                                {formTitlePart1} {formTitleHighlight && <span className="text-[#84cc16]">{formTitleHighlight}</span>}
                            </h3>
                            {formDescription && (
                                <p className="text-neutral-500 text-xs sm:text-sm">
                                    {formDescription}
                                </p>
                            )}
                        </div>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="py-12 px-6 rounded-2xl bg-lime-50 border border-lime-200 text-center space-y-4"
                            >
                                <div className="w-16 h-16 mx-auto rounded-full bg-lime-100 flex items-center justify-center text-[#84cc16]">
                                    <CheckCircle2 className="w-10 h-10" />
                                </div>
                                <h4 className="text-xl sm:text-2xl font-bold text-neutral-900">
                                    Inquiry Received Successfully!
                                </h4>
                                <p className="text-neutral-600 text-sm max-w-md mx-auto">
                                    Thank you for connecting with SecureView. A certified security specialist will review your requirements and reach out within 2 hours.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-3">

                                {/* Row 1: Name & Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                                            className="w-full px-4 py-2 rounded-md border border-neutral-200 bg-white text-neutral-900 text-sm focus:outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] transition-colors"
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
                                            className="w-full px-4 py-2 rounded-md border border-neutral-200 bg-white text-neutral-900 text-sm focus:outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] transition-colors"
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
                                            className="w-full px-4 py-2 rounded-md border border-neutral-200 bg-white text-neutral-900 text-sm focus:outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] transition-colors"
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
                                            className="w-full px-4 py-2 rounded-md border border-neutral-200 bg-white text-neutral-800 text-sm focus:outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] transition-colors appearance-none cursor-pointer"
                                        >
                                            <option value="">-- Select Service --</option>
                                            {services.map((serviceName: string) => (
                                                <option key={serviceName} value={serviceName}>
                                                    {serviceName}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-4 top-[38px] w-4 h-4 text-neutral-400 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Row 3: Your Message */}
                                <div className="space-y-1.5">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                                        Your Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        rows={4}
                                        required
                                        maxLength={500}
                                        placeholder="Tell us about your property type, number of cameras, or specific surveillance needs..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-2 rounded-md border border-neutral-200 bg-white text-neutral-900 text-sm focus:outline-none focus:border-[#84cc16] focus:ring-1 focus:ring-[#84cc16] transition-colors resize-none"
                                    />
                                    <div className="text-right text-xs text-neutral-400">
                                        {formData.message.length}/500
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full py-2.5 rounded-md bg-[#84cc16] text-white font-bold text-sm sm:text-base transition-all duration-300 hover:bg-[#65a30d] shadow-lg shadow-lime-500/25 flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <span>{formButtonText}</span>
                                    <ArrowRight className="w-4 h-4" />
                                </motion.button>

                            </form>
                        )}
                    </motion.div>

                </div>

                {/* Bottom Section: Interactive Google Map / US Location Embed */}
                {mapIframeSrc && (
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="rounded-lg overflow-hidden border border-neutral-200 shadow-xl relative h-[380px] sm:h-[400px] w-full bg-neutral-100 mt-4 lg:mt-6"
                    >
                        <iframe
                            title="SecureView Office Location & US Coverage Map"
                            src={mapIframeSrc}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        />
                    </motion.div>
                )}

            </div>
        </section>
    );
}