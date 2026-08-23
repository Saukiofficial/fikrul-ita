import React from 'react';
import { BotanicalFlourish } from './BotanicalOrnament';

export default function SectionHeader({
    tag = "CHAPTER",
    title,
    subtitle,
    description,
    align = "center",
    className = "mb-10 md:mb-14",
}) {
    const alignmentClasses = {
        center: "text-center items-center",
        left: "text-left items-start",
        right: "text-right items-end",
    }[align] || "text-center items-center";

    return (
        <div className={`flex flex-col ${alignmentClasses} ${className}`}>
            {/* Editorial Tag */}
            {tag && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-3 rounded-full bg-[#EBE2D0]/80 border border-[#C5A059]/40 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-sans font-semibold text-[#5C5248]">
                        {tag}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                </div>
            )}

            {/* Main Editorial Title */}
            {title && (
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#0E0D0B] font-normal leading-[1.15] tracking-tight">
                    {title}
                </h2>
            )}

            {/* Subtitle / Script Accent */}
            {subtitle && (
                <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#C5A059] mt-1.5 font-medium">
                    {subtitle}
                </p>
            )}

            {/* Botanical Divider */}
            <div className="my-3">
                <BotanicalFlourish className="w-28 sm:w-36 h-6 text-[#C5A059]" />
            </div>

            {/* Description Paragraph */}
            {description && (
                <p className="max-w-xl text-sm sm:text-base text-[#5C5248] font-light leading-relaxed px-2">
                    {description}
                </p>
            )}
        </div>
    );
}
