"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { site, SecureViewNavbarData, SectionProps } from "@/data";
import { renderIcon } from "@/utils/icons";

export interface NavbarProps extends SectionProps<SecureViewNavbarData> { }

export default function Navbar({ data, className }: NavbarProps = {}) {
    const navbar = data || site.navbar;
    const { logo, navItems = [], actionButton } = navbar || {};

    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState("Home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
    }, [pathname]);

    const isItemActive = (item: (typeof navItems)[number]) => {
        if (pathname) {
            if (item.href === "/") return pathname === "/";
            return pathname === item.href || pathname.startsWith(item.href + "/");
        }
        return activeTab === item.name;
    };

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`sticky top-0 z-50 w-full bg-black backdrop-blur-md border-b border-neutral-900 text-white ${className || ""}`}
        >
            <div className="max-w-[1400px] mx-auto px-4 h-16 sm:h-20 lg:h-20 flex items-center justify-between">

                {/* Logo Section */}
                {logo && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        whileHover={{ scale: 1.04 }}
                        className="shrink-0"
                    >
                        <Link href={logo.href || "/"} className="flex items-center gap-3 group">
                            <Image
                                src={logo.src}
                                alt={logo.alt || "Logo"}
                                width={150}
                                height={150}
                                priority
                                className="w-auto h-16 lg:h-20 object-contain"
                            />
                        </Link>
                    </motion.div>
                )}

                {/* Desktop Navigation Links */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((item, index) => {
                        const isActive = isItemActive(item);

                        return (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 + 0.1 }}
                                className="relative py-2"
                                onMouseEnter={() => item.hasDropdown && setServicesDropdownOpen(true)}
                                onMouseLeave={() => item.hasDropdown && setServicesDropdownOpen(false)}
                            >
                                <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setActiveTab(item.name)}
                                        className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#84cc16] ${isActive ? "text-[#84cc16]" : "text-neutral-300"
                                            }`}
                                    >
                                        {item.name}
                                        {item.hasDropdown && (
                                            <motion.span
                                                animate={{ rotate: servicesDropdownOpen ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="inline-flex"
                                            >
                                                <ChevronDown className="w-4 h-4" />
                                            </motion.span>
                                        )}
                                    </Link>
                                </motion.div>

                                {/* Active Indicator Line */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#84cc16]"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}

                                {/* Services Dropdown Menu */}
                                {item.hasDropdown && item.dropdownItems && (
                                    <AnimatePresence>
                                        {servicesDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 6, scale: 0.97 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 6, scale: 0.97 }}
                                                transition={{ duration: 0.18, ease: "easeOut" }}
                                                className={`absolute top-full left-0 pt-2 z-50 mt-3 ${item.dropdownItems.length > 6 ? "min-w-[520px]" : "min-w-[240px]"}`}
                                            >
                                                <div className={`bg-black backdrop-blur-xl p-2 shadow-2xl shadow-black/80 ${item.dropdownItems.length > 6 ? "grid grid-cols-2 gap-1" : ""}`}>
                                                    {item.dropdownItems.map((service) => (
                                                        <motion.div
                                                            key={service.href}
                                                            whileHover={{ x: 3 }}
                                                            transition={{ duration: 0.12 }}
                                                        >
                                                            <Link
                                                                href={service.href}
                                                                onClick={() => {
                                                                    setServicesDropdownOpen(false);
                                                                    setActiveTab(item.name);
                                                                }}
                                                                className="block px-3.5 py-2.5 rounded-lg text-sm text-neutral-300 hover:text-[#84cc16] hover:bg-neutral-900 transition-colors whitespace-nowrap"
                                                            >
                                                                {service.name}
                                                            </Link>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </motion.div>
                        );
                    })}
                </nav>

                {/* Action Button */}
                {actionButton && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="hidden lg:flex items-center"
                    >
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                            <Link
                                href={actionButton.href}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#84cc16] text-black font-semibold text-sm transition-all duration-300 hover:bg-[#71b60d] shadow-lg shadow-[#84cc16]/20"
                            >
                                {actionButton.text}
                                {renderIcon(actionButton.icon, ArrowRight, "w-4 h-4")}
                            </Link>
                        </motion.div>
                    </motion.div>
                )}

                {/* Mobile Menu Button with Animated Icon */}
                <div className="flex lg:hidden">
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle navigation menu"
                        className="rounded-lg text-neutral-300 hover:text-white focus:outline-none"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {mobileMenuOpen ? (
                                <motion.span
                                    key="close"
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.2 }}
                                    className="inline-block"
                                >
                                    <X className="w-7 h-7" />
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="menu"
                                    initial={{ opacity: 0, rotate: 90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: -90 }}
                                    transition={{ duration: 0.2 }}
                                    className="inline-block"
                                >
                                    <Menu className="w-7 h-7" />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Drawer Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:hidden border-b border-neutral-900 bg-black px-4 sm:px-6 pt-2 pb-6 max-h-[calc(100vh-5rem)] overflow-y-auto"
                    >
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                    },
                                },
                            }}
                            className="space-y-2"
                        >
                            {navItems.map((item) => {
                                const isActive = isItemActive(item);

                                if (item.hasDropdown) {
                                    return (
                                        <motion.div
                                            key={item.name}
                                            variants={{
                                                hidden: { opacity: 0, x: -16 },
                                                visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: "easeOut" } },
                                            }}
                                            className="space-y-1"
                                        >
                                            <div
                                                className={`flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium transition-colors ${isActive
                                                    ? "bg-neutral-900 text-[#84cc16]"
                                                    : "text-neutral-300 hover:bg-neutral-900/50 hover:text-white"
                                                    }`}
                                            >
                                                <Link
                                                    href={item.href}
                                                    onClick={() => {
                                                        setActiveTab(item.name);
                                                        setMobileMenuOpen(false);
                                                    }}
                                                    className="flex-1"
                                                >
                                                    {item.name}
                                                </Link>
                                                <button
                                                    type="button"
                                                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                                    className="p-1 text-neutral-400 hover:text-white"
                                                    aria-label="Toggle services submenu"
                                                >
                                                    <motion.span
                                                        animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="inline-block"
                                                    >
                                                        <ChevronDown
                                                            className={`w-4 h-4 transition-colors ${mobileServicesOpen ? "text-[#84cc16]" : ""}`}
                                                        />
                                                    </motion.span>
                                                </button>
                                            </div>

                                            {/* Mobile Services Submenu */}
                                            {item.dropdownItems && (
                                                <AnimatePresence>
                                                    {mobileServicesOpen && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                                            className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-neutral-800 ml-3 overflow-hidden"
                                                        >
                                                            {item.dropdownItems.map((subItem) => (
                                                                <Link
                                                                    key={subItem.href}
                                                                    href={subItem.href}
                                                                    onClick={() => {
                                                                        setActiveTab("Services");
                                                                        setMobileMenuOpen(false);
                                                                    }}
                                                                    className="block px-3 py-2 rounded-lg text-sm text-neutral-400 hover:text-[#84cc16] hover:bg-neutral-900/50 transition-colors"
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            )}
                                        </motion.div>
                                    );
                                }

                                return (
                                    <motion.div
                                        key={item.name}
                                        variants={{
                                            hidden: { opacity: 0, x: -16 },
                                            visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: "easeOut" } },
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => {
                                                setActiveTab(item.name);
                                                setMobileMenuOpen(false);
                                            }}
                                            className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${isActive
                                                ? "bg-neutral-900 text-[#84cc16]"
                                                : "text-neutral-300 hover:bg-neutral-900/50 hover:text-white"
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            {actionButton && (
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 15 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                                    }}
                                    className="pt-3"
                                >
                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                                        <Link
                                            href={actionButton.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#84cc16] text-black font-semibold text-sm shadow-lg hover:bg-[#71b60d] transition-colors"
                                        >
                                            {actionButton.text}
                                            {renderIcon(actionButton.icon, ArrowRight, "w-4 h-4")}
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}