import React, { useState } from 'react';
import SectionHeader from '../UI/SectionHeader';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export default function GallerySection({ galleries = [] }) {
    const [selectedIdx, setSelectedIdx] = useState(null);

    // Default gallery photos mapped to the 10-slot bento collage
    const defaultPhotos = [
        { id: 1, image_url: "/images/wedding/wedding-08.jpg", caption: "Keanggunan Busana Vintage Abadi" },
        { id: 2, image_url: "/images/wedding/wedding-01.jpg", caption: "Sorot Mata Penuh Keyakinan" },
        { id: 3, image_url: "/images/wedding/wedding-05.jpg", caption: "Kuntum Mawar & Senyuman Hangat" },
        { id: 4, image_url: "/images/wedding/wedding-09.jpg", caption: "Langkah Tenang Menuju Bahagia" },
        { id: 5, image_url: "/images/wedding/wedding-04.jpg", caption: "Cahaya Lentera Saksi Ikrar" },
        { id: 6, image_url: "/images/wedding/wedding-03.jpg", caption: "Pesona Anggun Sang Mempelai Wanita" },
        { id: 7, image_url: "/images/wedding/Hero-Section.jpeg", caption: "Karisma & Ketulusan Mempelai Pria" },
        { id: 8, image_url: "/images/wedding/wedding-07.jpg", caption: "Dua Hati Saling Bersandar" },
        { id: 9, image_url: "/images/wedding/wedding-02.jpg", caption: "Harmoni Langkah Masa Depan" },
        { id: 10, image_url: "/images/wedding/wedding-06.jpeg", caption: "Kebersamaan Penuh Kehangatan" },
        { id: 11, image_url: "/images/wedding/wedding-04.jpg", caption: "Kenangan Abadi Fikrul & Puspita" },
    ];

    // Combine prop galleries with default fallback to ensure full 10-slot collage
    const photos = (galleries && galleries.length >= 7) ? galleries : defaultPhotos;

    const handleOpenLightbox = (index) => {
        setSelectedIdx(index);
    };

    const handleCloseLightbox = () => {
        setSelectedIdx(null);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setSelectedIdx((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setSelectedIdx((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    };

    return (
        <section id="gallery" className="py-20 md:py-28 px-3.5 sm:px-6 lg:px-8 bg-[#F7F3E9] relative">
            <div className="max-w-xl sm:max-w-2xl mx-auto">
                <SectionHeader
                    tag="OUR GALLERY"
                    title="Galeri Foto"
                    subtitle="Potret Kasih & Keanggunan Abadi"
                    description="Rangkaian memori yang merekam setiap senyum, keheningan doa, dan keindahan cinta dalam nuansa klasik nan hangat."
                />

                {/* Asymmetric Luxury Bento Collage Grid (Maintains exact mobile layout) */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 mt-10 sm:mt-12">

                    {/* 1. TOP HERO CARD (Full-Width Landscape with Asymmetric Arched Corners) */}
                    <div
                        onClick={() => handleOpenLightbox(0)}
                        className="col-span-2 relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[#EBE2D0] border-2 border-[#C5A059] shadow-xl rounded-tl-[36px] sm:rounded-tl-[48px] rounded-br-[36px] sm:rounded-br-[48px] rounded-tr-md rounded-bl-md cursor-pointer group"
                    >
                        <img
                            src={photos[0]?.image_url}
                            alt={photos[0]?.caption || "Wedding Hero"}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.98] contrast-[1.02]"
                            loading="lazy"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#0E0D0B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E0D0B]/80 text-[#E4C87F] border border-[#C5A059] text-[10px] uppercase tracking-wider font-semibold">
                                <Eye className="w-3.5 h-3.5 text-[#E4C87F]" />
                                Perbesar
                            </span>
                        </div>
                    </div>

                    {/* 2. MIDDLE SECTION */}
                    {/* 2.1 Left 2x2 Mini Collage Grid */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-2.5 aspect-[4/5] w-full">
                        {/* Photo 1 (Top-Left of 2x2) */}
                        <div
                            onClick={() => handleOpenLightbox(1)}
                            className="relative w-full h-full overflow-hidden bg-[#EBE2D0] border-2 border-[#C5A059] rounded-tl-xl sm:rounded-tl-2xl rounded-tr-sm rounded-br-sm rounded-bl-sm shadow-md cursor-pointer group"
                        >
                            <img
                                src={photos[1]?.image_url || photos[0]?.image_url}
                                alt={photos[1]?.caption || "Gallery 2"}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>

                        {/* Photo 2 (Top-Right of 2x2) */}
                        <div
                            onClick={() => handleOpenLightbox(2)}
                            className="relative w-full h-full overflow-hidden bg-[#EBE2D0] border-2 border-[#C5A059] rounded-tr-xl sm:rounded-tr-2xl rounded-tl-sm rounded-br-sm rounded-bl-sm shadow-md cursor-pointer group"
                        >
                            <img
                                src={photos[2]?.image_url || photos[0]?.image_url}
                                alt={photos[2]?.caption || "Gallery 3"}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>

                        {/* Photo 3 (Bottom-Left of 2x2) */}
                        <div
                            onClick={() => handleOpenLightbox(3)}
                            className="relative w-full h-full overflow-hidden bg-[#EBE2D0] border-2 border-[#C5A059] rounded-bl-xl sm:rounded-bl-2xl rounded-tl-sm rounded-tr-sm rounded-br-sm shadow-md cursor-pointer group"
                        >
                            <img
                                src={photos[3]?.image_url || photos[0]?.image_url}
                                alt={photos[3]?.caption || "Gallery 4"}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>

                        {/* Photo 4 (Bottom-Right of 2x2) */}
                        <div
                            onClick={() => handleOpenLightbox(4)}
                            className="relative w-full h-full overflow-hidden bg-[#EBE2D0] border-2 border-[#C5A059] rounded-br-xl sm:rounded-br-2xl rounded-tl-sm rounded-tr-sm rounded-bl-sm shadow-md cursor-pointer group"
                        >
                            <img
                                src={photos[4]?.image_url || photos[0]?.image_url}
                                alt={photos[4]?.caption || "Gallery 5"}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* 2.2 Right Tall Portrait (Bride with Asymmetric Arched Corners) */}
                    <div
                        onClick={() => handleOpenLightbox(5)}
                        className="relative aspect-[4/5] w-full overflow-hidden bg-[#EBE2D0] border-2 border-[#C5A059] rounded-tl-[36px] sm:rounded-tl-[48px] rounded-br-[36px] sm:rounded-br-[48px] rounded-tr-md rounded-bl-md shadow-xl cursor-pointer group"
                    >
                        <img
                            src={photos[5]?.image_url || photos[0]?.image_url}
                            alt={photos[5]?.caption || "Bride Portrait"}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.98] contrast-[1.02]"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#0E0D0B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E0D0B]/80 text-[#E4C87F] border border-[#C5A059] text-[10px] uppercase tracking-wider font-semibold">
                                <Eye className="w-3.5 h-3.5 text-[#E4C87F]" />
                                Perbesar
                            </span>
                        </div>
                    </div>

                    {/* 3. BOTTOM SECTION */}
                    {/* 3.1 Left Tall Portrait (Groom with Asymmetric Arched Corners) */}
                    <div
                        onClick={() => handleOpenLightbox(6)}
                        className="relative aspect-[4/5] w-full overflow-hidden bg-[#EBE2D0] border-2 border-[#C5A059] rounded-tl-[36px] sm:rounded-tl-[48px] rounded-br-[36px] sm:rounded-br-[48px] rounded-tr-md rounded-bl-md shadow-xl cursor-pointer group"
                    >
                        <img
                            src={photos[6]?.image_url || photos[0]?.image_url}
                            alt={photos[6]?.caption || "Groom Portrait"}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.98] contrast-[1.02]"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#0E0D0B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E0D0B]/80 text-[#E4C87F] border border-[#C5A059] text-[10px] uppercase tracking-wider font-semibold">
                                <Eye className="w-3.5 h-3.5 text-[#E4C87F]" />
                                Perbesar
                            </span>
                        </div>
                    </div>

                    {/* 3.2 Right 2x2 Mini Collage Grid */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-2.5 aspect-[4/5] w-full">
                        {/* Photo 5 (Top-Left of 2x2) */}
                        <div
                            onClick={() => handleOpenLightbox(7 % photos.length)}
                            className="relative w-full h-full overflow-hidden bg-[#EBE2D0] border-2 border-[#C5A059] rounded-tl-xl sm:rounded-tl-2xl rounded-tr-sm rounded-br-sm rounded-bl-sm shadow-md cursor-pointer group"
                        >
                            <img
                                src={photos[7 % photos.length]?.image_url}
                                alt={photos[7 % photos.length]?.caption || "Gallery 7"}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>

                        {/* Photo 6 (Top-Right of 2x2) */}
                        <div
                            onClick={() => handleOpenLightbox(8 % photos.length)}
                            className="relative w-full h-full overflow-hidden bg-[#EBE2D0] border-2 border-[#C5A059] rounded-tr-xl sm:rounded-tr-2xl rounded-tl-sm rounded-br-sm rounded-bl-sm shadow-md cursor-pointer group"
                        >
                            <img
                                src={photos[8 % photos.length]?.image_url}
                                alt={photos[8 % photos.length]?.caption || "Gallery 8"}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>

                        {/* Photo 7 (Bottom-Left of 2x2) */}
                        <div
                            onClick={() => handleOpenLightbox(9 % photos.length)}
                            className="relative w-full h-full overflow-hidden bg-[#EBE2D0] border-2 border-[#C5A059] rounded-bl-xl sm:rounded-bl-2xl rounded-tl-sm rounded-tr-sm rounded-br-sm shadow-md cursor-pointer group"
                        >
                            <img
                                src={photos[9 % photos.length]?.image_url}
                                alt={photos[9 % photos.length]?.caption || "Gallery 9"}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>

                        {/* Photo 8 (Bottom-Right of 2x2) */}
                        <div
                            onClick={() => handleOpenLightbox(10 % photos.length)}
                            className="relative w-full h-full overflow-hidden bg-[#EBE2D0] border-2 border-[#C5A059] rounded-br-xl sm:rounded-br-2xl rounded-tl-sm rounded-tr-sm rounded-bl-sm shadow-md cursor-pointer group"
                        >
                            <img
                                src={photos[10 % photos.length]?.image_url}
                                alt={photos[10 % photos.length]?.caption || "Gallery 10"}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedIdx !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleCloseLightbox}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-[#0E0D0B]/95 p-4 sm:p-8 backdrop-blur-md"
                    >
                        {/* Close button */}
                        <button
                            onClick={handleCloseLightbox}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-[#181613] text-[#FCFAF5] hover:bg-[#C5A059] hover:text-[#0E0D0B] transition-all border border-[#C5A059]/50 z-50 cursor-pointer shadow-xl"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Prev button */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#181613]/90 text-[#FCFAF5] hover:bg-[#C5A059] hover:text-[#0E0D0B] transition-all border border-[#C5A059]/50 z-50 cursor-pointer shadow-xl"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Next button */}
                        <button
                            onClick={handleNext}
                            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#181613]/90 text-[#FCFAF5] hover:bg-[#C5A059] hover:text-[#0E0D0B] transition-all border border-[#C5A059]/50 z-50 cursor-pointer shadow-xl"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Main Image Container */}
                        <motion.div
                            key={selectedIdx}
                            initial={{ scale: 0.92, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.92, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
                        >
                            <img
                                src={photos[selectedIdx]?.image_url}
                                alt={photos[selectedIdx]?.caption || "Gallery view"}
                                className="max-w-full max-h-[75vh] object-contain rounded-sm shadow-2xl border border-[#C5A059]/50"
                            />
                            {photos[selectedIdx]?.caption && (
                                <p className="font-serif italic text-sm sm:text-base text-[#E4C87F] mt-4 text-center">
                                    "{photos[selectedIdx]?.caption}"
                                </p>
                            )}
                            <span className="text-[11px] font-sans tracking-widest text-[#EBE2D0]/60 mt-1">
                                {selectedIdx + 1} / {photos.length}
                            </span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
