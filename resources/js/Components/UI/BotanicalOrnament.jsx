import React from 'react';

/**
 * BotanicalFlourish — Centered vintage European botanical flourish.
 */
export const BotanicalFlourish = ({ className = "w-32 h-6 text-[#C5A059]", ...props }) => (
    <svg viewBox="0 0 200 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
        {/* Center Diamond & Flourish */}
        <path d="M100 6 L104 18 L100 30 L96 18 Z" fill="currentColor" opacity="0.9" />
        <circle cx="100" cy="18" r="2" fill="#FAF5EC" />
        
        {/* Left Botanical Vine */}
        <path d="M92 18 C75 18 64 12 50 14 C38 15.5 25 22 5 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M78 17 C74 11 67 9 63 13 C66 16 73 17 78 17 Z" fill="currentColor" opacity="0.75" />
        <path d="M56 14 C53 8 45 7 42 12 C46 15 52 15 56 14 Z" fill="currentColor" opacity="0.6" />
        <path d="M36 17 C31 22 24 21 23 16 C28 15 33 16 36 17 Z" fill="currentColor" opacity="0.6" />
        <circle cx="68" cy="10" r="1.5" fill="currentColor" opacity="0.85" />
        <circle cx="47" cy="8" r="1.5" fill="currentColor" opacity="0.85" />
        <circle cx="27" cy="21" r="1.5" fill="currentColor" opacity="0.85" />

        {/* Right Botanical Vine (Mirrored) */}
        <path d="M108 18 C125 18 136 12 150 14 C162 15.5 175 22 195 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M122 17 C126 11 133 9 137 13 C134 16 127 17 122 17 Z" fill="currentColor" opacity="0.75" />
        <path d="M144 14 C147 8 155 7 158 12 C154 15 148 15 144 14 Z" fill="currentColor" opacity="0.6" />
        <path d="M164 17 C169 22 176 21 177 16 C172 15 167 16 164 17 Z" fill="currentColor" opacity="0.6" />
        <circle cx="132" cy="10" r="1.5" fill="currentColor" opacity="0.85" />
        <circle cx="153" cy="8" r="1.5" fill="currentColor" opacity="0.85" />
        <circle cx="173" cy="21" r="1.5" fill="currentColor" opacity="0.85" />
    </svg>
);

/**
 * FiligreeCrest — Symmetrical Baroque Gold Lace Crest (as seen in the reference screenshot).
 */
export const FiligreeCrest = ({ className = "w-24 h-8 text-[#C5A059]", ...props }) => (
    <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
        {/* Central Diamond & Finial */}
        <path d="M70 4 L74 16 L70 28 L66 16 Z" fill="currentColor" opacity="0.95" />
        <circle cx="70" cy="16" r="2.5" fill="#FAF5EC" />
        <circle cx="70" cy="3" r="1.5" fill="currentColor" />
        <circle cx="70" cy="29" r="1.5" fill="currentColor" />

        {/* Top & Bottom Crown Spikes */}
        <path d="M70 6 C64 12 56 12 50 16 C58 18 64 16 70 16 C76 16 82 18 90 16 C84 12 76 12 70 6 Z" fill="currentColor" opacity="0.8" />

        {/* Left Baroque Wing */}
        <path d="M66 16 C55 16 46 10 35 12 C24 14 14 22 2 18 C10 16 18 10 30 12 C42 14 52 22 64 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M52 14 C46 8 38 7 34 11 C40 14 47 15 52 14 Z" fill="currentColor" opacity="0.75" />
        <path d="M30 13 C24 9 17 11 15 15 C19 17 26 17 30 13 Z" fill="currentColor" opacity="0.65" />
        <path d="M44 19 C38 24 30 23 27 18 C33 17 39 18 44 19 Z" fill="currentColor" opacity="0.6" />
        <circle cx="2" cy="18" r="1.5" fill="currentColor" />
        <circle cx="22" cy="10" r="1.2" fill="currentColor" />
        <circle cx="42" cy="8" r="1.2" fill="currentColor" />

        {/* Right Baroque Wing (Mirrored) */}
        <path d="M74 16 C85 16 94 10 105 12 C116 14 126 22 138 18 C130 16 122 10 110 12 C98 14 88 22 76 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M88 14 C94 8 102 7 106 11 C100 14 93 15 88 14 Z" fill="currentColor" opacity="0.75" />
        <path d="M110 13 C116 9 123 11 125 15 C121 17 114 17 110 13 Z" fill="currentColor" opacity="0.65" />
        <path d="M96 19 C102 24 110 23 113 18 C107 17 101 18 96 19 Z" fill="currentColor" opacity="0.6" />
        <circle cx="138" cy="18" r="1.5" fill="currentColor" />
        <circle cx="118" cy="10" r="1.2" fill="currentColor" />
        <circle cx="98" cy="8" r="1.2" fill="currentColor" />
    </svg>
);

/**
 * MiniFiligreeCrest — Small delicate crest for the guest card header.
 */
export const MiniFiligreeCrest = ({ className = "w-16 h-5 text-[#C5A059]", ...props }) => (
    <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
        <path d="M50 3 L53 13 L50 23 L47 13 Z" fill="currentColor" />
        <path d="M47 13 C38 13 30 8 22 10 C14 12 8 18 0 15 C6 13 12 8 20 10 C28 12 36 18 45 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M53 13 C62 13 70 8 78 10 C86 12 92 18 100 15 C94 13 88 8 80 10 C72 12 64 18 55 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="50" cy="13" r="1.5" fill="#FAF5EC" />
    </svg>
);

/**
 * BotanicalCorner — Ornamental frame corner engraving.
 */
export const BotanicalCorner = ({ className = "w-16 h-16 text-[#C5A059]/70", position = "top-left", ...props }) => {
    const rotation = {
        "top-left": "rotate-0",
        "top-right": "rotate-90",
        "bottom-right": "rotate-180",
        "bottom-left": "-rotate-90",
    }[position] || "rotate-0";

    return (
        <svg 
            viewBox="0 0 80 80" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className={`${className} ${rotation} pointer-events-none transition-transform`} 
            {...props}
        >
            <path d="M4 76 L4 14 C4 8.48 8.48 4 14 4 L76 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M10 70 L10 18 C10 13.58 13.58 10 18 10 L70 10" stroke="currentColor" strokeWidth="0.7" strokeDasharray="3 2" />
            
            {/* Fine Engraving Leaves in corner */}
            <path d="M12 12 C18 24 28 26 34 20 C26 18 20 14 12 12 Z" fill="currentColor" opacity="0.75" />
            <path d="M12 12 C24 18 26 28 20 34 C18 26 14 20 12 12 Z" fill="currentColor" opacity="0.75" />
            <circle cx="24" cy="24" r="2" fill="currentColor" opacity="0.85" />
            <circle cx="4" cy="4" r="3" fill="currentColor" />
            <circle cx="14" cy="4" r="1.5" fill="currentColor" />
            <circle cx="4" cy="14" r="1.5" fill="currentColor" />
        </svg>
    );
};

/**
 * FloralRoseCluster — Authentic Vintage Cream Roses & Eucalyptus Botanical Bouquet.
 * Uses /images/icon/bunga.png with corner flips and soft drop-shadow.
 */
export const FloralRoseCluster = ({ className = "w-36 h-36", position = "top-left", src = "/images/icon/bunga.png", ...props }) => {
    const transform = {
        "top-left": "rotate(0deg)",
        "top-right": "scaleX(-1)",
        "bottom-left": "scaleY(-1)",
        "bottom-right": "scale(-1)",
    }[position] || "rotate(0deg)";

    return (
        <div className={`pointer-events-none ${className} select-none`} style={{ transform }} {...props}>
            <img
                src={src}
                alt="Floral Rose Cluster"
                className="w-full h-full object-contain filter drop-shadow-xl contrast-[1.03]"
                loading="eager"
            />
        </div>
    );
};

/**
 * DutchStampSeal — Rotating heritage seal.
 */
export const DutchStampSeal = ({ text = "WEDDING CELEBRATION", year = "2026", className = "w-24 h-24", ...props }) => (
    <div className={`relative flex items-center justify-center select-none ${className}`} {...props}>
        <svg viewBox="0 0 120 120" className="w-full h-full text-[#C5A059] animate-spin-slow">
            <path
                id="textPath-seal"
                d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                fill="none"
            />
            <text className="text-[7.5px] uppercase tracking-[0.28em] fill-current font-serif font-semibold">
                <textPath href="#textPath-seal" startOffset="0%">
                    ✦ {text} ✦ {year} ✦
                </textPath>
            </text>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="font-serif text-xs italic tracking-widest text-[#0E0D0B]">Noni</span>
            <span className="font-serif text-[10px] text-[#C5A059] font-light">Est. {year}</span>
        </div>
    </div>
);

/**
 * VintageDivider — Minimal line divider with gold diamond.
 */
export const VintageDivider = ({ className = "my-6" }) => (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
        <span className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#C5A059]/50 to-[#C5A059]/80" />
        <span className="w-1.5 h-1.5 rotate-45 border border-[#C5A059] bg-[#C5A059]/30" />
        <span className="h-[1px] w-12 bg-gradient-to-l from-transparent via-[#C5A059]/50 to-[#C5A059]/80" />
    </div>
);

