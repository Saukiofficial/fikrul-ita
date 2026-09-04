import React, { useState, useEffect } from 'react';
import { Home, Heart, BookOpen, Calendar, Image as ImageIcon, MessageSquareHeart } from 'lucide-react';

export default function BottomNavigation() {
    const [activeSection, setActiveSection] = useState('hero');

    const navItems = [
        { id: 'hero', label: 'Cover', icon: Home },
        { id: 'couple', label: 'Mempelai', icon: Heart },
        { id: 'story', label: 'Kisah', icon: BookOpen },
        { id: 'event', label: 'Acara', icon: Calendar },
        { id: 'gallery', label: 'Galeri', icon: ImageIcon },
        { id: 'rsvp', label: 'RSVP', icon: MessageSquareHeart },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom))] left-3 right-3 z-40 mx-auto max-w-md glass-black rounded-2xl px-2 py-2 shadow-2xl transition-all border border-[#C5A059]/50">
            <div className="grid grid-cols-6 items-center gap-0.5">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className={`min-w-0 min-h-11 w-full flex flex-col items-center justify-center rounded-xl transition-colors cursor-pointer ${
                                isActive
                                    ? "text-[#E4C87F] font-semibold bg-[#2A2621] shadow-md border border-[#C5A059]/40"
                                    : "text-[#EBE2D0]/70 hover:text-[#FCFAF5] hover:opacity-100"
                            }`}
                        >
                            <Icon className={`w-4 h-4 transition-transform ${isActive ? "text-[#E4C87F]" : ""}`} />
                            <span className="max-[370px]:text-[7px] text-[8px] sm:text-[9px] uppercase tracking-normal sm:tracking-wider mt-0.5 font-sans whitespace-nowrap">
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}
