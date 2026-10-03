import { motion } from "framer-motion";
import { Phone, Headphones } from "lucide-react";


export interface HelpCtaData {
    title?: string;
    description?: string;
    phoneNumber?: string;
}

export default function NeedHelpCard({ helpCta }: { helpCta?: HelpCtaData }) {
    const data = {
        title: helpCta?.title || "Need Help With Your Installation?",
        description: helpCta?.description || "Our experts are here to guide you at every step, from planning to installation and beyond.",
        phoneNumber: helpCta?.phoneNumber || "+91 98765 43210"
    };

    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="bg-black text-white rounded-3xl p-7 shadow-xl relative overflow-hidden flex flex-col items-center text-center space-y-6 border border-neutral-800">
            <motion.div
                whileHover={{ scale: 1.1, rotate: [0, -6, 6, 0] }}
                transition={{ duration: 0.4 }}
                className="w-16 h-16 rounded-full bg-[#84cc16] text-white flex items-center justify-center shadow-lg shadow-[#84cc16]/25"
            >
                <Headphones className="w-8 h-8 stroke-[2.2]" />
            </motion.div>

            <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">
                    {data.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-xs mx-auto">
                    {data.description}
                </p>
            </div>

            <motion.a
                href={`tel:${data.phoneNumber.replace(/\s+/g, '')}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 w-full py-3.5 px-6 rounded-2xl bg-white text-[#0B132A] font-bold text-sm sm:text-base shadow-lg hover:bg-neutral-100 transition-colors"
            >
                <div className="w-8 h-8 rounded-full bg-[#84cc16] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 fill-white" />
                </div>
                <span>{data.phoneNumber}</span>
            </motion.a>
        </motion.div>
    );
}