"use client";

import React from "react";
import { motion } from "framer-motion";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { site, SecureViewTestimonialData, SectionProps } from "@/data";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi, } from "@/components/ui/carousel";

export type TestimonialSectionProps = SectionProps<SecureViewTestimonialData>;

export default function TestimonialSection({
    data,
    className = "",
}: TestimonialSectionProps = {}) {
    const testimonialData = data || site.testimonial;

    const {
        titlePart1 = "What Our",
        titleHighlight = "Clients Say",
        description = "Real feedback from businesses who trust us for their security needs.",
        testimonials = [],
    } = testimonialData || {};

    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;

        const updateCarouselState = () => {
            setCount(api.scrollSnapList().length);
            setCurrent(api.selectedScrollSnap());
        };

        updateCarouselState();
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
        api.on("reInit", updateCarouselState);
    }, [api]);

    return (
        <section className={`relative w-full py-8 lg:py-14 bg-neutral-50 text-neutral-900 overflow-hidden ${className}`}>
            {/* Ambient soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#84cc16]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center max-w-2xl mx-auto space-y-3 lg:space-y-4  lg:mb-6"
                >
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 64 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-1 bg-[#84cc16] rounded-full mx-auto"
                    />

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide">
                        {titlePart1}{" "}
                        {titleHighlight && (
                            <span className="text-[#84cc16]">{titleHighlight}</span>
                        )}
                    </h2>

                    {description && (
                        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                            {description}
                        </p>
                    )}
                </motion.div>

                {/* Shadcn UI Carousel */}
                {testimonials && testimonials.length > 0 && (
                    <div className="relative ">
                        <Carousel
                            setApi={setApi}
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-4 sm:-ml-6 pt-7 lg:pt-12 pb-6">
                                {testimonials.map((item, index) => (
                                    <CarouselItem
                                        key={item.name || index}
                                        className="pl-4 sm:pl-6 basis-full md:basis-1/2 flex"
                                    >
                                        <div className="w-full flex">
                                            <TestimonialCard item={item} index={index} />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            {/* Navigation Arrows (visible from sm upwards) */}
                            <CarouselPrevious className="hidden sm:flex -left-2 sm:-left-4 lg:-left-6 w-11 h-11 bg-white border border-neutral-200 text-neutral-800 shadow-md hover:bg-[#84cc16] hover:text-black hover:border-[#84cc16] transition-all duration-300" />
                            <CarouselNext className="hidden sm:flex -right-2 sm:-right-4 lg:-right-6 w-11 h-11 bg-white border border-neutral-200 text-neutral-800 shadow-md hover:bg-[#84cc16] hover:text-black hover:border-[#84cc16] transition-all duration-300" />
                        </Carousel>

                        {/* Pagination Indicator Dots */}
                        {count > 1 && (
                            <div className="flex justify-center items-center gap-2 mt-4">
                                {Array.from({ length: count }).map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => api?.scrollTo(i)}
                                        aria-label={`Go to slide ${i + 1}`}
                                        className={`transition-all duration-300 rounded-full ${current === i
                                            ? "w-8 h-2.5 bg-[#84cc16]"
                                            : "w-2.5 h-2.5 bg-neutral-300 hover:bg-neutral-400"
                                            }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}

            </div>
        </section>
    );
}