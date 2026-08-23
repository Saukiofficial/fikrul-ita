import React, { useState, useEffect, useRef } from 'react';
import { Head } from '@inertiajs/react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Wedding Components
import InvitationCover from '@/Components/Wedding/InvitationCover';
import HeroSection from '@/Components/Wedding/HeroSection';
import WelcomeQuote from '@/Components/Wedding/WelcomeQuote';
import CoupleSection from '@/Components/Wedding/CoupleSection';
import LoveStorySection from '@/Components/Wedding/LoveStorySection';
import CountdownSection from '@/Components/Wedding/CountdownSection';
import EventSection from '@/Components/Wedding/EventSection';
import GallerySection from '@/Components/Wedding/GallerySection';
import GiftSection from '@/Components/Wedding/GiftSection';
import RsvpSection from '@/Components/Wedding/RsvpSection';
import WishesSection from '@/Components/Wedding/WishesSection';
import ClosingSection from '@/Components/Wedding/ClosingSection';
import BottomNavigation from '@/Components/Wedding/BottomNavigation';
import MusicPlayer from '@/Components/Wedding/MusicPlayer';
import WhatsAppShareModal from '@/Components/Wedding/WhatsAppShareModal';

gsap.registerPlugin(ScrollTrigger);

export default function Show({ invitation, guestName, wishes = [], meta }) {
    const storageKey = `invitation_opened_${invitation?.slug || 'fikrul-ita'}`;
    const [isCoverOpen, setIsCoverOpen] = useState(() => {
        if (typeof window !== 'undefined') {
            return sessionStorage.getItem(storageKey) === 'true';
        }
        return false;
    });
    const [isPlayingMusic, setIsPlayingMusic] = useState(false);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const audioRef = useRef(null);

    // Initialize Lenis Smooth Scroll
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 0.9,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    // GSAP ScrollTrigger Section Transitions
    useEffect(() => {
        if (!isCoverOpen) return;

        const ctx = gsap.context(() => {
            gsap.utils.toArray('section').forEach((section) => {
                gsap.from(section, {
                    opacity: 0,
                    y: 40,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                });
            });
        });

        return () => ctx.revert();
    }, [isCoverOpen]);

    // Handle Open Invitation Experience
    const handleOpenInvitation = () => {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem(storageKey, 'true');
        }
        setIsCoverOpen(true);
        
        // Start background audio if available
        if (audioRef.current && invitation.music_url) {
            audioRef.current.play().then(() => {
                setIsPlayingMusic(true);
            }).catch((err) => {
                console.log('Audio autoplay prevented by browser policy:', err);
                setIsPlayingMusic(false);
            });
        }
    };

    // Toggle Music Playback
    const handleToggleMusic = () => {
        if (!audioRef.current) return;

        if (isPlayingMusic) {
            audioRef.current.pause();
            setIsPlayingMusic(false);
        } else {
            audioRef.current.play().then(() => {
                setIsPlayingMusic(true);
            }).catch((err) => {
                console.log('Audio play error:', err);
            });
        }
    };

    const couples = invitation.couples || [];
    const groom = couples.find((c) => c.role === 'groom');
    const bride = couples.find((c) => c.role === 'bride');
    const pageTitle = `${groom?.nickname || 'Fikrul'} & ${bride?.nickname || 'Puspita'}`;

    return (
        <div className="relative min-h-screen bg-[#F7F3E9] text-[#0E0D0B] selection:bg-[#C5A059]/25 selection:text-[#0E0D0B] overflow-x-hidden font-sans">
            {/* Dynamic Head & OpenGraph Metadata */}
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={meta?.description || `The Wedding of ${pageTitle}`} />
                <meta property="og:title" content={`${invitation.title} — Undangan Pernikahan`} />
                <meta property="og:description" content={guestName ? `Undangan Spesial untuk ${guestName}` : (meta?.description || 'Kami mengundang Anda untuk merayakan hari bahagia pernikahan kami.')} />
                <meta property="og:image" content={meta?.ogImage || invitation.cover_image} />
                <meta property="og:url" content={meta?.url || window.location.href} />
                <meta property="og:type" content="website" />
            </Head>

            {/* Hidden Background Audio Element with continuous loop */}
            {invitation.music_url && (
                <audio
                    ref={audioRef}
                    src={invitation.music_url}
                    loop={true}
                    preload="auto"
                    onEnded={() => {
                        if (audioRef.current) {
                            audioRef.current.currentTime = 0;
                            audioRef.current.play().catch((e) => {
                                console.log('Audio loop replay error:', e);
                            });
                        }
                    }}
                />
            )}

            {/* 01. Opening Invitation Cover (Envelope state) */}
            <InvitationCover
                invitation={invitation}
                guestName={guestName}
                isOpen={isCoverOpen}
                onOpen={handleOpenInvitation}
            />

            {/* Main Invitation Layout */}
            <main className={`transition-opacity duration-1000 ${isCoverOpen ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
                {/* 02. Hero Section */}
                <HeroSection invitation={invitation} />

                {/* 03. Sacred Verse Quote */}
                <WelcomeQuote invitation={invitation} />

                {/* 04. Groom & Bride Profiles */}
                <CoupleSection invitation={invitation} />

                {/* 05. Love Story Timeline */}
                <LoveStorySection loveStories={invitation.love_stories} />

                {/* 06. Countdown Timer */}
                <CountdownSection targetDate={invitation.wedding_date} />

                {/* 07. Event Ceremonies (Akad & Resepsi) */}
                <EventSection events={invitation.events} />

                {/* 08. Editorial Photo Gallery */}
                <GallerySection galleries={invitation.galleries} />

                {/* 09. Digital Gift & Angpao */}
                <GiftSection giftAccounts={invitation.gift_accounts} />

                {/* 10. RSVP Form */}
                <RsvpSection invitation={invitation} guestName={guestName} />

                {/* 11. Guest Wishes & Book */}
                <WishesSection
                    invitation={invitation}
                    wishes={wishes.length > 0 ? wishes : invitation.wishes}
                    guestName={guestName}
                />

                {/* 12. Closing Farewell */}
                <ClosingSection
                    invitation={invitation}
                    onOpenShare={() => setIsShareModalOpen(true)}
                />
            </main>

            {/* Floating Controls (Visible after opening cover) */}
            {isCoverOpen && (
                <>
                    {/* Background Music Controller */}
                    <MusicPlayer
                        musicUrl={invitation.music_url}
                        musicTitle={invitation.music_title}
                        musicArtist={invitation.music_artist}
                        isPlaying={isPlayingMusic}
                        onToggle={handleToggleMusic}
                    />

                    {/* Floating Bottom Navigation */}
                    <BottomNavigation />
                </>
            )}

            {/* WhatsApp Personalized Share Generator Modal */}
            <WhatsAppShareModal
                isOpen={isShareModalOpen}
                onClose={() => setIsShareModalOpen(false)}
                invitation={invitation}
            />
        </div>
    );
}
