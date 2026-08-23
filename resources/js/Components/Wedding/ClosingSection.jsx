import React from 'react';
import { Share2, Heart, Sparkles } from 'lucide-react';
import { BotanicalCorner, BotanicalFlourish, DutchStampSeal } from '../UI/BotanicalOrnament';

export default function ClosingSection({ invitation, onOpenShare }) {
    const groom = invitation.groom || invitation.couples?.find(c => c.role === 'groom');
    const bride = invitation.bride || invitation.couples?.find(c => c.role === 'bride');
    const groomName = groom?.nickname || 'Fikrul';
    const brideName = bride?.nickname || 'Puspita';

    return (
        <section className="py-24 md:py-32 px-4 sm:px-6 bg-[#0E0D0B] text-[#FCFAF5] text-center relative overflow-hidden">
            {/* Ambient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E0D0B]/80 via-transparent to-[#0E0D0B]/90 pointer-events-none" />

            <div className="max-w-2xl mx-auto relative z-10">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#E4C87F] font-semibold font-sans block mb-3">
                    Ungkapan Terima Kasih
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FCFAF5] font-light mb-4">
                    Sampai Bertemu di Hari Bahagia
                </h2>

                <BotanicalFlourish className="w-32 h-6 text-[#C5A059] mx-auto mb-8" />

                <p className="font-serif italic text-sm sm:text-base md:text-lg text-[#EBE2D0]/90 leading-relaxed font-light mb-10 px-2">
                    {invitation.closing_text || 
                        "Merupakan suatu kehormatan dan kebahagiaan yang tak terhingga bagi kami sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir dan melimpahkan doa restu bagi lembaran baru kehidupan kami."
                    }
                </p>

                {/* Couple Calligraphy Signature */}
                <div className="my-8">
                    <p className="text-xs uppercase tracking-[0.25em] font-sans text-[#E4C87F]/80 mb-2 font-medium">
                        Kami yang Berbahagia,
                    </p>
                    <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#E4C87F] font-light leading-snug drop-shadow-sm">
                        {groomName} & {brideName}
                    </h3>
                    <p className="text-xs text-[#EBE2D0]/60 mt-2 font-sans tracking-wide">
                        Beserta Keluarga Besar Kedua Mempelai
                    </p>
                </div>

                {/* Share Invitation button */}
                <div className="mt-10">
                    <button
                        onClick={onOpenShare}
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#C5A059] hover:bg-[#E4C87F] text-[#0E0D0B] text-xs uppercase tracking-widest font-semibold transition-all shadow-2xl cursor-pointer"
                    >
                        <Share2 className="w-4 h-4" />
                        <span>Bagikan Undangan ke Kerabat</span>
                    </button>
                </div>

                {/* Footer Credits */}
                <div className="mt-16 pt-8 border-t border-[#C5A059]/30 text-[11px] text-[#EBE2D0]/60 font-sans tracking-wider space-y-3 pb-14 sm:pb-8 flex flex-col items-center">
                    <p>© 2026 {invitation.title || 'The Wedding of Fikrul & Puspita'}. All Rights Reserved.</p>
                    
                    <div className="pt-2 flex items-center justify-center gap-2">
                        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#C5A059]/90 font-medium font-sans">
                            Created by
                        </span>
                        <div 
                            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1A1612]/90 border border-[#C5A059]/80 transition-all duration-300 transform hover:scale-105"
                            style={{
                                boxShadow: '0 4px 18px -2px rgba(197, 160, 89, 0.45), inset 0 1px 2px rgba(255, 255, 255, 0.15)',
                            }}
                        >
                            <Sparkles className="w-3 h-3 text-[#E4C87F] animate-pulse" />
                            <span 
                                className="font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.26em] text-transparent bg-clip-text bg-gradient-to-r from-[#E4C87F] via-[#FCFAF5] to-[#C5A059]"
                                style={{
                                    filter: 'drop-shadow(0 2px 8px rgba(228, 200, 127, 0.75)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.9))'
                                }}
                            >
                                kyysolutions
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
