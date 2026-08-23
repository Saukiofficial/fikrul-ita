import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Sparkles, Heart, X } from 'lucide-react';
import { BotanicalCorner, BotanicalFlourish, MiniFiligreeCrest } from './BotanicalOrnament';

export default function AnimatedSuccessModal({
    isOpen,
    onClose,
    title = "Pesan Berhasil Terkirim!",
    subtitle = "Terima Kasih Atas Doa & Konfirmasinya",
    message = "Doa restu dan kehadiran Anda merupakan kebahagiaan terbesar bagi kami kedua mempelai.",
    senderName = "",
}) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none">
                    {/* Backdrop with Frosted Blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-[#0E0D0B]/75 backdrop-blur-sm"
                    />

                    {/* Modal Content Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 30 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-md bg-[#FCFAF5] border-2 border-[#C5A059] rounded-sm p-6 sm:p-8 shadow-2xl z-10 text-center overflow-hidden"
                        style={{
                            boxShadow: '0 25px 50px -12px rgba(14, 13, 11, 0.5), 0 0 30px rgba(197, 160, 89, 0.3)'
                        }}
                    >
                        {/* Botanical Corner Ornaments */}
                        <BotanicalCorner position="top-left" className="absolute top-2 left-2 w-10 h-10 text-[#C5A059]" />
                        <BotanicalCorner position="top-right" className="absolute top-2 right-2 w-10 h-10 text-[#C5A059]" />
                        <BotanicalCorner position="bottom-left" className="absolute bottom-2 left-2 w-10 h-10 text-[#C5A059]" />
                        <BotanicalCorner position="bottom-right" className="absolute bottom-2 right-2 w-10 h-10 text-[#C5A059]" />

                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 p-1 rounded-full text-[#5C5248] hover:text-[#0E0D0B] hover:bg-[#EBE2D0] transition-colors cursor-pointer z-20"
                            aria-label="Tutup Notifikasi"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        {/* Top Mini Crest */}
                        <MiniFiligreeCrest className="w-16 h-5 text-[#C5A059] mx-auto mb-2 opacity-90" />

                        {/* Animated Glowing Checkmark Icon */}
                        <div className="relative my-4 flex items-center justify-center">
                            {/* Radiating pulse ring */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0.8 }}
                                animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                className="absolute w-20 h-20 rounded-full bg-[#C5A059]/25 pointer-events-none"
                            />
                            
                            {/* Main Checkmark Badge */}
                            <motion.div
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 }}
                                className="relative w-16 h-16 rounded-full bg-[#221F18] border-2 border-[#C5A059] flex items-center justify-center shadow-xl text-[#E4C87F]"
                            >
                                <Check className="w-8 h-8 stroke-[2.5]" />
                            </motion.div>
                        </div>

                        {/* Title & Subtitle */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EBE2D0] border border-[#C5A059]/40 text-[9px] uppercase tracking-[0.22em] font-sans font-bold text-[#5C5248] mb-2">
                                <Sparkles className="w-2.5 h-2.5 text-[#C5A059]" />
                                Notifikasi Berhasil
                            </span>

                            <h3 className="font-serif text-2xl sm:text-3xl text-[#0E0D0B] font-medium leading-snug">
                                {title}
                            </h3>

                            {senderName && (
                                <p className="font-serif italic text-base text-[#8E7345] mt-1 font-semibold">
                                    Kepada {senderName}
                                </p>
                            )}

                            <BotanicalFlourish className="w-24 h-5 text-[#C5A059] mx-auto my-3" />

                            <p className="text-xs sm:text-sm text-[#5C5248] font-light leading-relaxed px-2 max-w-sm mx-auto">
                                {message}
                            </p>
                        </motion.div>

                        {/* Action Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-6"
                        >
                            <button
                                onClick={onClose}
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#0E0D0B] hover:bg-[#201D19] text-[#FCFAF5] border border-[#C5A059] shadow-xl text-xs uppercase tracking-[0.2em] font-sans font-semibold transition-all cursor-pointer transform hover:scale-[1.03] active:scale-[0.98]"
                            >
                                <Heart className="w-3.5 h-3.5 text-[#E4C87F] fill-[#E4C87F]" />
                                <span>Tutup & Lanjutkan</span>
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
