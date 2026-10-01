import Image from "next/image";
import { BrandItem } from "@/data";

export interface BrandsCardProps {
    brand?: BrandItem;
    image?: string;
    name?: string;
}

export default function BrandsCard({
    brand,
    image,
    name,
}: BrandsCardProps) {
    const logoSrc = brand?.image || image || "/images/brands/adjhua-technology.jpg";
    const logoAlt = brand?.alt || brand?.name || name || "Brand Logo";

    return (
        <div className="border border-neutral-200/90 rounded-lg bg-white p-6 h-32 sm:h-40 flex items-center justify-center hover:border-[#84cc16] hover:shadow-lg transition-all duration-300 group">
            <Image
                src={logoSrc}
                alt={logoAlt}
                width={200}
                height={100}
                className="w-auto h-auto max-h-16 sm:max-h-24 max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
            />
        </div>
    );
}