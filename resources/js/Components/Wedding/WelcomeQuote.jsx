import React from 'react';
import { BotanicalCorner, BotanicalFlourish } from '../UI/BotanicalOrnament';

export default function WelcomeQuote({ invitation }) {
    return (
        <section id="quote" className="py-16 md:py-24 px-4 sm:px-6 bg-[#EBE2D0]/40 relative overflow-hidden">
            <div className="max-w-3xl mx-auto relative bg-[#FCFAF5] border border-[#C5A059]/40 p-6 sm:p-12 md:p-14 shadow-xl text-center rounded-sm">
                {/* Botanical Corners */}
                <BotanicalCorner position="top-left" className="absolute top-2 left-2 w-10 h-10 sm:w-12 sm:h-12 text-[#C5A059]/80" />
                <BotanicalCorner position="top-right" className="absolute top-2 right-2 w-10 h-10 sm:w-12 sm:h-12 text-[#C5A059]/80" />
                <BotanicalCorner position="bottom-left" className="absolute bottom-2 left-2 w-10 h-10 sm:w-12 sm:h-12 text-[#C5A059]/80" />
                <BotanicalCorner position="bottom-right" className="absolute bottom-2 right-2 w-10 h-10 sm:w-12 sm:h-12 text-[#C5A059]/80" />

                {/* Subtitle tag */}
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-sans font-semibold text-[#5C5248] block mb-4">
                    Kutipan Suci
                </span>

                <BotanicalFlourish className="w-28 sm:w-32 h-6 text-[#C5A059] mx-auto mb-6" />

                {/* Arabic Quote */}
                {invitation.quote_arabic && (
                    <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#0E0D0B] leading-loose sm:leading-loose mb-6 font-normal" dir="rtl">
                        {invitation.quote_arabic}
                    </p>
                )}

                {/* Translation */}
                <p className="font-serif italic text-sm sm:text-base md:text-lg text-[#5C5248] leading-relaxed max-w-2xl mx-auto mb-4 font-light">
                    "{invitation.quote_translation}"
                </p>

                {/* Quote Source */}
                <span className="inline-block font-sans text-xs sm:text-sm font-semibold tracking-widest text-[#C5A059] uppercase">
                    — {invitation.quote_source} —
                </span>
            </div>
        </section>
    );
}
