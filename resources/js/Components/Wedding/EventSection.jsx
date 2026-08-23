import React, { useState } from 'react';
import SectionHeader from '../UI/SectionHeader';
import { Calendar, Clock, MapPin, Navigation, CalendarPlus, Layers, Copy, Check, Compass, Sparkles } from 'lucide-react';
import { BotanicalCorner, BotanicalFlourish } from '../UI/BotanicalOrnament';
import Toast from '../UI/Toast';

export default function EventSection({ events = [] }) {
    const [is3DMode, setIs3DMode] = useState(true);
    const [copiedCoords, setCopiedCoords] = useState(false);
    const [showToast, setShowToast] = useState(false);

    if (!events || events.length === 0) return null;

    const mapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3960.0120578335527!2d113.76126027499727!3d-7.007862492993532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDAnMjguMyJTIDExM8KwNDUnNDkuOCJF!5e0!3m2!1sid!2sid!4v1787412260231!5m2!1sid!2sid";
    const directMapUrl = "https://www.google.com/maps?q=-7.0078625,113.7612603";
    const directionUrl = "https://www.google.com/maps/dir/?api=1&destination=-7.0078625,113.7612603";
    const coordinateText = "7°00'28.3\"S 113°45'49.8\"E (-7.0078625, 113.7612603)";

    const handleCopyCoords = () => {
        navigator.clipboard.writeText(coordinateText);
        setCopiedCoords(true);
        setShowToast(true);
        setTimeout(() => setCopiedCoords(false), 2500);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <section id="event" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-paper-luxury relative overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <SectionHeader
                    tag="THE CEREMONY & LOCATION"
                    title="Rangkaian Acara"
                    subtitle="Waktu & Tempat Pelaksanaan"
                    description="Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu secara langsung."
                />

                {/* Event Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12 mb-16">
                    {events.map((event, index) => {
                        const eventDate = new Date(event.date).toLocaleDateString('id-ID', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                        });

                        return (
                            <div
                                key={event.id || index}
                                className="relative bg-[#FCFAF5] border-2 border-[#C5A059]/40 rounded-sm p-6 sm:p-10 shadow-xl flex flex-col justify-between text-center overflow-hidden group hover:border-[#C5A059] transition-all"
                            >
                                {/* Botanical Corner Ornaments */}
                                <BotanicalCorner position="top-left" className="absolute top-2 left-2 w-10 h-10 text-[#C5A059]/70" />
                                <BotanicalCorner position="top-right" className="absolute top-2 right-2 w-10 h-10 text-[#C5A059]/70" />
                                <BotanicalCorner position="bottom-left" className="absolute bottom-2 left-2 w-10 h-10 text-[#C5A059]/70" />
                                <BotanicalCorner position="bottom-right" className="absolute bottom-2 right-2 w-10 h-10 text-[#C5A059]/70" />

                                <div>
                                    {/* Event Title */}
                                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold block mb-1">
                                        Acara {index + 1}
                                    </span>
                                    <h3 className="font-serif text-3xl sm:text-4xl text-[#0E0D0B] font-normal mb-3">
                                        {event.title}
                                    </h3>

                                    <BotanicalFlourish className="w-24 h-5 text-[#C5A059] mx-auto mb-6" />

                                    {/* Date & Time details */}
                                    <div className="space-y-3 mb-6 font-sans text-xs sm:text-sm text-[#5C5248]">
                                        <div className="flex items-center justify-center gap-2">
                                            <Calendar className="w-4 h-4 text-[#C5A059] shrink-0" />
                                            <span className="font-semibold text-[#0E0D0B]">{eventDate}</span>
                                        </div>
                                        <div className="flex items-center justify-center gap-2">
                                            <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                                            <span className="font-medium text-[#0E0D0B]">
                                                Pukul {event.start_time} {event.end_time ? `– ${event.end_time}` : '– Selesai'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Venue & Address */}
                                    <div className="p-4 rounded bg-[#EBE2D0]/50 border border-[#C5A059]/35 mb-8">
                                        <h4 className="font-serif text-lg sm:text-xl text-[#0E0D0B] font-medium mb-1">
                                            {event.venue_name}
                                        </h4>
                                        {event.venue_subname && (
                                            <p className="text-xs text-[#C5A059] font-serif italic mb-2 font-medium">
                                                {event.venue_subname}
                                            </p>
                                        )}
                                        <p className="text-xs sm:text-sm text-[#5C5248] font-light leading-relaxed">
                                            {event.address}
                                        </p>
                                    </div>
                                </div>

                                {/* Action Buttons (Maps & Calendar) */}
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                                    <a
                                        href={event.maps_url || directMapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#0E0D0B] text-[#FCFAF5] hover:bg-[#201D19] border border-[#C5A059] text-xs font-semibold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                                    >
                                        <Navigation className="w-3.5 h-3.5 text-[#C5A059]" />
                                        <span>Buka Google Maps</span>
                                    </a>

                                    {event.calendar_google_url && (
                                        <a
                                            href={event.calendar_google_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#EBE2D0]/40 hover:bg-[#EBE2D0] text-[#0E0D0B] border border-[#C5A059]/60 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                                        >
                                            <CalendarPlus className="w-3.5 h-3.5 text-[#C5A059]" />
                                            <span>Simpan Kalender</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* 3D Interactive Map Preview Section */}
                <div className="mt-8 pt-8 border-t border-[#C5A059]/30">
                    <div className="text-center mb-8">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0E0D0B] text-[#E4C87F] border border-[#C5A059] text-[10px] uppercase tracking-[0.25em] font-sans font-bold shadow-md">
                            <Sparkles className="w-3 h-3 text-[#E4C87F]" />
                            Peta Lokasi Digital 3D
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl text-[#0E0D0B] font-light mt-3">
                            Petunjuk Lokasi & Denah Acara
                        </h3>
                        <p className="text-xs sm:text-sm text-[#5C5248] max-w-lg mx-auto mt-1 font-light">
                            Kombung Barat, Ellak Daya, Kec. Lenteng, Kab. Sumenep
                        </p>
                    </div>

                    {/* 3D Map Viewport Frame */}
                    <div className="relative max-w-4xl mx-auto py-4">
                        
                        {/* 3D Perspective Box Container */}
                        <div 
                            className={`relative rounded-lg p-2 sm:p-4 bg-[#FCFAF5] border-2 border-[#C5A059] shadow-2xl transition-all duration-700 ${
                                is3DMode 
                                    ? "transform md:[transform:perspective(1200px)_rotateX(10deg)_rotateY(-3deg)] md:hover:[transform:perspective(1200px)_rotateX(0deg)_rotateY(0deg)]"
                                    : ""
                            }`}
                            style={{
                                boxShadow: is3DMode 
                                    ? '0 30px 60px -15px rgba(14, 13, 11, 0.45), 0 0 30px 2px rgba(197, 160, 89, 0.25)' 
                                    : '0 15px 35px -5px rgba(14, 13, 11, 0.2)'
                            }}
                        >
                            {/* Botanical Corner Ornaments on 3D Frame */}
                            <BotanicalCorner position="top-left" className="absolute top-2 left-2 w-10 h-10 text-[#C5A059] z-20" />
                            <BotanicalCorner position="top-right" className="absolute top-2 right-2 w-10 h-10 text-[#C5A059] z-20" />
                            <BotanicalCorner position="bottom-left" className="absolute bottom-2 left-2 w-10 h-10 text-[#C5A059] z-20" />
                            <BotanicalCorner position="bottom-right" className="absolute bottom-2 right-2 w-10 h-10 text-[#C5A059] z-20" />

                            {/* Top 3D Badge Header Bar */}
                            <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 bg-[#0E0D0B] text-[#FCFAF5] rounded-t-sm border-b border-[#C5A059]/50 z-20">
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E4C87F]"></span>
                                    </span>
                                    <span className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#E4C87F]">
                                        GPS Coordinate: 7°00'28.3"S 113°45'49.8"E
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setIs3DMode(!is3DMode)}
                                        className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#201D19] hover:bg-[#2A2621] text-[#E4C87F] border border-[#C5A059]/60 text-[10px] uppercase tracking-wider font-semibold transition-all cursor-pointer"
                                    >
                                        <Layers className="w-3 h-3 text-[#C5A059]" />
                                        <span>{is3DMode ? 'Mode Flat' : 'Mode 3D'}</span>
                                    </button>
                                </div>
                            </div>

                            {/* Embedded Google Map Iframe */}
                            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#EBE2D0] border border-[#C5A059]/40 rounded-b-sm">
                                <iframe
                                    src={mapsEmbedUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    title="Peta Lokasi Pernikahan Fikrul & Puspita di Kombung Barat, Sumenep"
                                    className="w-full h-full filter contrast-[1.03] brightness-[0.98]"
                                />

                                {/* 3D Floating Location Pin Overlay Label */}
                                <div className="absolute top-4 left-4 z-20 hidden xs:flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0E0D0B]/90 backdrop-blur-md border border-[#C5A059] text-xs text-[#FCFAF5] shadow-xl">
                                    <MapPin className="w-4 h-4 text-[#E4C87F] animate-bounce" />
                                    <div>
                                        <p className="font-serif text-xs font-semibold text-[#E4C87F] leading-tight">
                                            Lokasi Pernikahan Fikrul & Puspita
                                        </p>
                                        <p className="text-[9px] text-[#EBE2D0]/80 font-sans leading-tight">
                                            Kombung Barat, Lenteng, Sumenep
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Action Quick Buttons */}
                        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6">
                            <a
                                href={directionUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#0E0D0B] hover:bg-[#201D19] text-[#FCFAF5] border border-[#C5A059] text-xs font-semibold uppercase tracking-wider transition-all shadow-xl cursor-pointer"
                            >
                                <Compass className="w-4 h-4 text-[#E4C87F]" />
                                <span>Petunjuk Arah (Navigasi)</span>
                            </a>

                            <a
                                href={directMapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#FCFAF5] hover:bg-[#EBE2D0] text-[#0E0D0B] border border-[#C5A059] text-xs font-semibold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                            >
                                <Navigation className="w-3.5 h-3.5 text-[#C5A059]" />
                                <span>Buka Full di Google Maps</span>
                            </a>

                            <button
                                onClick={handleCopyCoords}
                                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#EBE2D0]/50 hover:bg-[#EBE2D0] text-[#0E0D0B] border border-[#C5A059]/70 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                            >
                                {copiedCoords ? <Check className="w-3.5 h-3.5 text-[#C5A059]" /> : <Copy className="w-3.5 h-3.5 text-[#C5A059]" />}
                                <span>{copiedCoords ? 'Koordinat Tersalin!' : 'Salin Koordinat'}</span>
                            </button>
                        </div>

                    </div>
                </div>

            </div>

            <Toast show={showToast} message="Titik koordinat lokasi berhasil disalin ke clipboard!" onClose={() => setShowToast(false)} />
        </section>
    );
}
