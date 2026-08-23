import React from 'react';
import SectionHeader from '../UI/SectionHeader';
import { Heart } from 'lucide-react';
import { BotanicalFlourish } from '../UI/BotanicalOrnament';

const InstagramIcon = ({ className = "w-3.5 h-3.5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

export default function CoupleSection({ invitation }) {
    const groom = invitation.groom || invitation.couples?.find(c => c.role === 'groom');
    const bride = invitation.bride || invitation.couples?.find(c => c.role === 'bride');

    return (
        <section id="couple" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-paper-grain relative">
            <div className="max-w-5xl mx-auto">
                <SectionHeader
                    tag="THE COUPLE"
                    title="Mempelai Pengantin"
                    subtitle="Dua Insan yang Disatukan dalam Ikatan Suci"
                    description="Dengan memohon ridho dan rahmat Allah Subhanahu Wa Ta'ala, kami menghaturkan rasa syukur atas dipertemukannya kedua mempelai."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
                    {/* Groom Card */}
                    <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-sm bg-[#FCFAF5] border border-[#C5A059]/40 shadow-xl relative group">
                        {/* Dutch Arch Photo Frame */}
                        <div className="w-48 sm:w-56 h-64 sm:h-72 arch-frame-double p-1.5 bg-[#FCFAF5] mb-6 shadow-2xl">
                            <div className="arch-frame overflow-hidden w-full h-full bg-[#EBE2D0]">
                                <img
                                    src={groom?.photo_url || "/images/wedding/groom.jpg"}
                                    alt={groom?.full_name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold mb-1">
                            Mempelai Pria
                        </span>

                        <h3 className="font-serif text-2xl sm:text-3xl text-[#0E0D0B] font-normal leading-snug">
                            {groom?.full_name}
                        </h3>

                        <p className="font-serif italic text-sm text-[#5C5248] mt-1 mb-3 font-medium">
                            "{groom?.nickname}"
                        </p>

                        <BotanicalFlourish className="w-24 h-5 text-[#C5A059] my-1" />

                        {(groom?.father_name || groom?.mother_name || groom?.child_order_text) && (
                            <div className="text-xs sm:text-sm text-[#5C5248] space-y-1 mt-2">
                                {groom?.child_order_text && <p className="font-light">{groom?.child_order_text}</p>}
                                {(groom?.father_name || groom?.mother_name) && (
                                    <p className="font-medium text-[#0E0D0B]">
                                        {groom?.father_name} {groom?.mother_name ? `& ${groom?.mother_name}` : ''}
                                    </p>
                                )}
                            </div>
                        )}

                        {groom?.bio && (
                            <p className="text-xs sm:text-sm text-[#5C5248] font-light mt-4 px-2 italic max-w-xs leading-relaxed">
                                "{groom?.bio}"
                            </p>
                        )}

                        {groom?.instagram && (
                            <a
                                href={`https://instagram.com/${groom.instagram.replace('@', '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 mt-5 px-4 py-1.5 rounded-full border border-[#C5A059]/40 text-xs text-[#5C5248] hover:text-[#0E0D0B] hover:border-[#C5A059] bg-[#EBE2D0]/30 transition-colors font-medium"
                            >
                                <InstagramIcon className="w-3.5 h-3.5 text-[#C5A059]" />
                                <span>@{groom.instagram.replace('@', '')}</span>
                            </a>
                        )}
                    </div>

                    {/* Bride Card */}
                    <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-sm bg-[#FCFAF5] border border-[#C5A059]/40 shadow-xl relative group">
                        {/* Dutch Arch Photo Frame */}
                        <div className="w-48 sm:w-56 h-64 sm:h-72 arch-frame-double p-1.5 bg-[#FCFAF5] mb-6 shadow-2xl">
                            <div className="arch-frame overflow-hidden w-full h-full bg-[#EBE2D0]">
                                <img
                                    src={bride?.photo_url || "/images/wedding/bride.jpg"}
                                    alt={bride?.full_name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold mb-1">
                            Mempelai Wanita
                        </span>

                        <h3 className="font-serif text-2xl sm:text-3xl text-[#0E0D0B] font-normal leading-snug">
                            {bride?.full_name}
                        </h3>

                        <p className="font-serif italic text-sm text-[#5C5248] mt-1 mb-3 font-medium">
                            "{bride?.nickname}"
                        </p>

                        <BotanicalFlourish className="w-24 h-5 text-[#C5A059] my-1" />

                        {(bride?.father_name || bride?.mother_name || bride?.child_order_text) && (
                            <div className="text-xs sm:text-sm text-[#5C5248] space-y-1 mt-2">
                                {bride?.child_order_text && <p className="font-light">{bride?.child_order_text}</p>}
                                {(bride?.father_name || bride?.mother_name) && (
                                    <p className="font-medium text-[#0E0D0B]">
                                        {bride?.father_name} {bride?.mother_name ? `& ${bride?.mother_name}` : ''}
                                    </p>
                                )}
                            </div>
                        )}

                        {bride?.bio && (
                            <p className="text-xs sm:text-sm text-[#5C5248] font-light mt-4 px-2 italic max-w-xs leading-relaxed">
                                "{bride?.bio}"
                            </p>
                        )}

                        {bride?.instagram && (
                            <a
                                href={`https://instagram.com/${bride.instagram.replace('@', '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 mt-5 px-4 py-1.5 rounded-full border border-[#C5A059]/40 text-xs text-[#5C5248] hover:text-[#0E0D0B] hover:border-[#C5A059] bg-[#EBE2D0]/30 transition-colors font-medium"
                            >
                                <InstagramIcon className="w-3.5 h-3.5 text-[#C5A059]" />
                                <span>@{bride.instagram.replace('@', '')}</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
