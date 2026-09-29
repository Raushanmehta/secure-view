"use client";

import { motion } from "framer-motion";
import TeamCard from "@/components/cards/TeamCard";
import { fadeInUp, staggerContainer, containerVariants, } from "@/utils/animations";
import { site, SecureViewTeamData, SectionProps } from "@/data";

export interface TeamSectionProps extends SectionProps<SecureViewTeamData> { }

export default function TeamSection({ data, className }: TeamSectionProps = {}) {
    const teamData = data || site.team;
    const {
        badge,
        titlePart1,
        titleHighlight,
        description,
        teamMembers = [],
    } = teamData || {};

    return (
        <section className={`relative w-full py-8 lg:py-14 bg-black text-white overflow-hidden ${className || ""}`}>
            <div className="max-w-[1400px] mx-auto px-4">

                {/* Section Header with Staggered Entrance */}
                <motion.div
                    variants={staggerContainer(0.12, 0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center max-w-2xl mx-auto space-y-4 mb-4 lg:mb-8">
                    {/* Badge with animated expanding accent lines */}
                    {badge && (
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-3">
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: 36 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="h-[2px] bg-[#84cc16]"
                            />
                            <span className="text-xs lg:text-lg uppercase tracking-[0.25em] font-bold text-[#84cc16]">
                                {badge}
                            </span>
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: 36 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="h-[2px] bg-[#84cc16]"
                            />
                        </motion.div>
                    )}

                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide">
                        {titlePart1} {titleHighlight && <span className="text-[#84cc16]">{titleHighlight}</span>}
                    </motion.h2>

                    {description && (
                        <motion.p
                            variants={fadeInUp}
                            className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                            {description}
                        </motion.p>
                    )}
                </motion.div>

                {/* Team Grid with Staggered Container */}
                {teamMembers && teamMembers.length > 0 && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.05 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {teamMembers.map((member, index) => (
                            <TeamCard
                                key={member.name + index}
                                member={member}
                                index={index}
                            />
                        ))}
                    </motion.div>
                )}

            </div>
        </section>
    );
}