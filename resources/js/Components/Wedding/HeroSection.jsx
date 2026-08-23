import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Calendar, MapPin } from 'lucide-react';
import { BotanicalFlourish, DutchStampSeal } from '../UI/BotanicalOrnament';

export default function HeroSection({ invitation }) {
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
                vid.play().catch(() => {});
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
    const groomName = groom?.nickname || 'Fikrul';
    const brideName = bride?.nickname || 'Puspita';

    const formattedDate = new Date(invitation.wedding_date).toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-between items-center pt-16 pb-12 px-4 sm:px-6 text-center overflow-hidden bg-paper-luxury">
            {/* Optional Background Ambient Video with Fallback */}
            {invitation.background_video_url && (
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster={invitation.hero_image || "/images/wedding/hero.jpg"}
                    className="absolute inset-0 w-full h-full object-cover opacity-25 filter contrast-110 pointer-events-none"
                    src={invitation.background_video_url}
                />
            )}

            {/* Top Tagline */}
            <div className="flex flex-col items-center gap-2 mt-4">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#5C5248] font-semibold font-sans">
                    The Wedding Celebration of
                </span>
                <BotanicalFlourish className="w-28 sm:w-36 h-6 text-[#C5A059]" />
            </div>

            {/* Main Editorial Names */}
            <div className="my-6 max-w-3xl">
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0E0D0B] font-light leading-[1.05] tracking-tight">
                    <span>{groomName}</span>
                    <span className="font-signature text-4xl sm:text-5xl md:text-6xl text-[#C5A059] mx-3 inline-block -rotate-6">
                        &
                    </span>
                    <span>{brideName}</span>
                </h1>
                <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#5C5248] mt-3">
                    Two Souls, One Sacred Promise
                </p>
            </div>

            {/* Central Hero Portrait with Heritage Arch Frame */}
            <div className="relative my-4 max-w-xs sm:max-w-sm md:max-w-md w-full mx-auto">
                <div className="arch-frame-double p-2 bg-[#FCFAF5] shadow-2xl border border-[#C5A059]/40">
                    <div className="arch-frame overflow-hidden aspect-[3/4] relative bg-[#EBE2D0]">
                        <img
                            src={invitation.hero_image || "/images/wedding/hero.jpg"}
                            alt={`${groomName} & ${brideName}`}
                            className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02] transition-transform duration-1000 hover:scale-105"
                            loading="eager"
                        />
                        {/* Film Warmth Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0B]/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                </div>

                {/* Rotating Vintage Stamp Seal floating on side */}
                <div className="absolute -bottom-6 -right-4 sm:-right-8 hidden xs:block">
                    <DutchStampSeal text="ROYAL UNION • SUMENEP" year="2026" className="w-20 sm:w-24 h-20 sm:h-24 bg-[#FCFAF5]/95 rounded-full shadow-xl border border-[#C5A059]/50 p-1 text-[#0E0D0B]" />
                </div>
            </div>

            {/* Date & Location Bar */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-[#5C5248] font-sans">
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#C5A059]" />
                    <span className="tracking-wide font-medium text-[#0E0D0B]">{formattedDate}</span>
                </div>
                <span className="hidden sm:inline text-[#C5A059]">✦</span>
                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C5A059]" />
                    <span className="tracking-wide font-medium text-[#0E0D0B]">Sumenep, Madura</span>
                </div>
            </div>

            {/* Scroll Indicator */}
            <a
                href="#quote"
                className="mt-8 inline-flex flex-col items-center gap-1 text-[#5C5248] hover:text-[#0E0D0B] transition-colors group cursor-pointer"
            >
                <span className="text-[9px] uppercase tracking-[0.25em] font-sans">Scroll Down</span>
                <ChevronDown className="w-4 h-4 text-[#C5A059] animate-bounce" />
            </a>
        </section>
    );
}
