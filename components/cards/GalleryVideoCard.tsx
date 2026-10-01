"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { renderIcon } from "@/utils/icons";

export default function GalleryVideoCard({ vid, idx }: { vid: any, idx: any }) {
    return (
        <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            className=" rounded-2xl overflow-hidden  transition-all flex flex-col justify-between">
            <div className="relative h-44 w-full bg-neutral-900 overflow-hidden">
                <img
                    src={vid.image}
                    alt={vid.alt || vid.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30" />

                {/* Play Badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 text-[#84cc16] flex items-center justify-center shadow-lg pl-0.5">
                        {renderIcon(vid.playIcon, Play, "w-7 h-7 fill-[#84cc16]")}
                    </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                    {vid.duration}
                </div>
            </div>

            <div className="py-2 lg:py-4 space-y-1">
                <h4 className="font-bold text-neutral-900 text-sm line-clamp-1">{vid.title}</h4>
                <p className="text-xs text-neutral-500 line-clamp-2">{vid.description}</p>
            </div>
        </motion.div>
    );
}