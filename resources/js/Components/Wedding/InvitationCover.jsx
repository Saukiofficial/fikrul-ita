import React from 'react';
import { motion } from 'motion/react';
import { MailOpen } from 'lucide-react';
import {
    FiligreeCrest,
    MiniFiligreeCrest,
    FloralRoseCluster
} from '../UI/BotanicalOrnament';

export default function InvitationCover({
    invitation,
    guestName,
    onOpen,
    isOpen,
}) {
    const videoRef = React.useRef(null);

    React.useEffect(() => {
        const vid = videoRef.current;
        if (!vid) return;

        vid.muted = true;
        vid.defaultMuted = true;
        vid.setAttribute('muted', '');
        vid.setAttribute('playsinline', '');
        vid.setAttribute('webkit-playsinline', 'true');

        const triggerPlay = () => {
            if (vid) {
                vid.play().catch(() => { });
            }
        };

        triggerPlay();
        vid.addEventListener('canplay', triggerPlay, { once: true });
        vid.addEventListener('loadeddata', triggerPlay, { once: true });

        const onTouch = () => {
            triggerPlay();
            window.removeEventListener('touchstart', onTouch);
            window.removeEventListener('click', onTouch);
        };
        window.addEventListener('touchstart', onTouch, { once: true, passive: true });
        window.addEventListener('click', onTouch, { once: true });

        return () => {
            window.removeEventListener('touchstart', onTouch);
            window.removeEventListener('click', onTouch);
        };
    }, []);

    const groom = invitation.groom || invitation.couples?.find(c => c.role === 'groom');
    const bride = invitation.bride || invitation.couples?.find(c => c.role === 'bride');
    const groomName = (groom?.nickname || 'Fikrul').toUpperCase();
    const brideName = (bride?.nickname || 'Puspita').toUpperCase();

    const weddingDateObj = new Date(invitation.wedding_date || '2026-09-16T08:00:00');
    const dayName = weddingDateObj.toLocaleDateString('id-ID', { weekday: 'long' }).toUpperCase(); // e.g. RABU

    const bgImage = "/images/wedding/cover.jpeg";

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{
                opacity: isOpen ? 0 : 1,
                y: isOpen ? '-100%' : '0%',
                pointerEvents: isOpen ? 'none' : 'auto'
            }}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E1A16] overflow-y-auto overflow-x-hidden select-none"
        >
            {/* Desktop Ambient Background */}
            <div
                className="absolute inset-0 hidden md:block bg-cover bg-center filter blur-2xl opacity-40 scale-105"
                style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#14110E]/80 via-[#1E1A16]/50 to-[#14110E]/90 pointer-events-none hidden md:block" />

            {/* Mobile-First Invitation Canvas (Max 430px wide, 100dvh on mobile) */}
            <div className="relative w-full max-w-[430px] h-[100dvh] max-h-[920px] bg-[#F3ECE0] overflow-hidden flex flex-col justify-between p-4 sm:p-6 shadow-2xl border-0 sm:border sm:border-[#C5A059]/40 sm:rounded-sm">

                {/* 1. Full Bleed Background with Warm Sepia/Champagne Lighting */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    {invitation.background_video_url ? (
                        <video
                            ref={videoRef}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            poster={bgImage}
                            className="w-full h-full object-cover filter brightness-[0.96] contrast-[1.04]"
                            src={invitation.background_video_url}
                        />
                    ) : (
                        <div
                            className="w-full h-full bg-cover bg-center filter brightness-[0.96] contrast-[1.04]"
                            style={{ backgroundImage: `url(${bgImage})` }}
                        />
                    )}

                    {/* Warm Beige & Champagne Ambient Film Tints */}
                    <div className="absolute inset-0 bg-[#F4EDE2]/55 mix-blend-multiply pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FAF5EC]/75 via-[#FAF5EC]/40 to-[#FAF5EC]/90 pointer-events-none" />
                    <div className="absolute inset-0 bg-paper-luxury opacity-50 pointer-events-none" />
                </div>

                {/* 2. Top-Left Realistic Cream Rose Cluster (Overlapping Arch) */}
                <FloralRoseCluster
                    position="top-left"
                    className="absolute -top-3 -left-3 w-36 h-36 sm:w-44 sm:h-44 z-30 drop-shadow-xl"
                />

                {/* 3. Bottom-Left & Bottom-Right Realistic Cream Rose Clusters (Framing Card & Button) */}
                <FloralRoseCluster
                    position="bottom-left"
                    className="absolute -bottom-4 -left-4 w-36 h-36 sm:w-44 sm:h-44 z-30 drop-shadow-lg"
                />
                <FloralRoseCluster
                    position="bottom-right"
                    className="absolute -bottom-4 -right-4 w-36 h-36 sm:w-44 sm:h-44 z-30 drop-shadow-lg"
                />

                {/* 4. Top Stepped Baroque Arch Plaque */}
                <div className="relative z-10 w-full max-w-[340px] sm:max-w-[360px] mx-auto pt-6 pb-6 px-4 text-center my-auto">

                    {/* SVG Stepped Arch Border & Frosted Parchment Glow */}
                    <div className="absolute inset-0 pointer-events-none">
                        <svg viewBox="0 0 320 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                            <defs>
                                <linearGradient id="archParchment" x1="160" y1="0" x2="160" y2="380" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#FCFAF5" stopOpacity="0.92" />
                                    <stop offset="50%" stopColor="#F7F2E8" stopOpacity="0.75" />
                                    <stop offset="100%" stopColor="#F2E9DA" stopOpacity="0.45" />
                                </linearGradient>
                            </defs>

                            {/* Main Arch Shape with Stepped Baroque Header */}
                            <path
                                d="M 160 8
                                   C 145 18, 128 20, 114 26
                                   C 106 30, 98 34, 94 42
                                   C 88 52, 78 58, 66 64
                                   C 46 74, 28 92, 22 114
                                   C 18 126, 16 142, 16 160
                                   L 16 376
                                   L 304 376
                                   L 304 160
                                   C 304 142, 302 126, 298 114
                                   C 292 92, 274 74, 254 64
                                   C 242 58, 232 52, 226 42
                                   C 222 34, 214 30, 206 26
                                   C 192 20, 175 18, 160 8 Z"
                                fill="url(#archParchment)"
                                stroke="#C5A059"
                                strokeWidth="1.6"
                            />

                            {/* Inner Fine Gold Line */}
                            <path
                                d="M 160 14
                                   C 147 22, 131 24, 118 30
                                   C 111 34, 103 38, 99 46
                                   C 94 55, 84 61, 73 67
                                   C 54 77, 36 94, 30 115
                                   C 26 127, 24 142, 24 160
                                   L 24 370
                                   L 296 370
                                   L 296 160
                                   C 296 142, 294 127, 290 115
                                   C 284 94, 266 77, 247 67
                                   C 236 61, 226 55, 221 46
                                   C 217 38, 209 34, 202 30
                                   C 189 24, 173 22, 160 14 Z"
                                stroke="#C5A059"
                                strokeWidth="0.8"
                                strokeOpacity="0.75"
                            />
                        </svg>
                    </div>

                    {/* Top Filigree Crest */}
                    <div className="relative pt-4 mb-2">
                        <FiligreeCrest className="w-24 sm:w-28 h-7 sm:h-8 text-[#C5A059] mx-auto drop-shadow-xs" />
                    </div>

                    {/* "THE WEDDING OF" */}
                    <p className="relative font-cinzel text-[10px] sm:text-[11px] uppercase tracking-[0.34em] text-[#4A3B2C] font-semibold mb-2">
                        The Wedding Of
                    </p>

                    {/* Couple Names */}
                    <div className="relative my-2 sm:my-3">
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.12em] text-[#2A2018] font-normal leading-tight">
                            {groomName}
                        </h1>

                        <div className="font-pinyon text-3xl sm:text-4xl text-[#8E7345] my-1 select-none -rotate-3 leading-none">
                            &
                        </div>

                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.12em] text-[#2A2018] font-normal leading-tight">
                            {brideName}
                        </h1>
                    </div>

                    {/* Middle Filigree Divider */}
                    <div className="relative my-3">
                        <FiligreeCrest className="w-20 sm:w-24 h-5 sm:h-6 text-[#C5A059] mx-auto opacity-90" />
                    </div>

                    {/* Wedding Date & Day */}
                    <div className="relative pb-2">
                        <p className="font-serif text-sm sm:text-base tracking-[0.26em] text-[#3D3228] font-semibold">
                            16.09.2026
                        </p>
                        <p className="font-cinzel text-[9px] sm:text-[10px] tracking-[0.32em] text-[#5E4E3F] font-bold mt-1">
                            {dayName}
                        </p>
                    </div>
                </div>

                {/* 5. Bottom Card Section: Guest Panel + Button Overlap */}
                <div className="relative z-20 w-full max-w-[340px] sm:max-w-[360px] mx-auto mb-2 sm:mb-4">

                    {/* Guest Box with Notched Baroque Corners */}
                    <div className="relative bg-[#FAF4E8]/95 backdrop-blur-xs border border-[#C5A059] rounded-xs shadow-lg pt-4 pb-8 px-4 text-center">

                        {/* Inner Double Gold Border */}
                        <div className="absolute inset-1 border border-[#C5A059]/40 pointer-events-none" />

                        {/* Mini Top Crest on Card */}
                        <MiniFiligreeCrest className="w-14 h-4 text-[#C5A059] mx-auto mb-1.5 opacity-90" />

                        {/* Recipient Label without KEPADA */}
                        <p className="font-cinzel text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.32em] text-[#5A4938] font-bold leading-tight mb-0.5">
                            Yth.
                        </p>
                        <p className="font-cinzel text-[8px] sm:text-[8.5px] uppercase tracking-[0.18em] text-[#73604C] mb-1 font-medium">
                            Bapak/Ibu/Saudara/i
                        </p>

                        {/* Guest Name in Classic Script */}
                        <div className="my-1.5">
                            <p className="font-pinyon text-3xl sm:text-4xl text-[#2C221A] font-normal leading-tight drop-shadow-xs capitalize">
                                {guestName || 'Tamu Undangan'}
                            </p>
                            <p className="font-pinyon text-lg sm:text-xl text-[#2C221A] font-normal leading-snug">
                                Yang Berbahagia
                            </p>
                        </div>

                        {/* Disclaimer */}
                        <p className="text-[7.5px] sm:text-[8px] uppercase tracking-[0.12em] font-sans text-[#73604C] mt-2 font-medium leading-tight">
                            Mohon maaf apabila ada kesalahan<br />penulisan nama/gelar
                        </p>
                    </div>

                    {/* 6. Button "BUKA UNDANGAN" Overlapping the Bottom of Guest Card */}
                    <div className="relative -mt-5 flex justify-center z-30">
                        <button
                            onClick={onOpen}
                            className="group relative inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-3 rounded-xs bg-[#221F18] hover:bg-[#2D2921] text-[#FAF5EC] border-2 border-[#C5A059] shadow-2xl transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                            style={{
                                boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.4), 0 0 12px 0 rgba(197, 160, 89, 0.25)'
                            }}
                        >
                            {/* Inner Golden Stroke Accent */}
                            <div className="absolute inset-0.5 border border-[#C5A059]/40 pointer-events-none" />

                            <MailOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E4C87F] transition-transform group-hover:-translate-y-0.5 duration-200" />

                            <span className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.24em] font-semibold text-[#FAF5EC] drop-shadow-xs">
                                Buka Undangan
                            </span>
                        </button>
                    </div>

                </div>

            </div>
        </motion.div>
    );
}
