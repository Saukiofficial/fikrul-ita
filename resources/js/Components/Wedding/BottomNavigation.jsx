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
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-sm sm:max-w-md w-[92%] glass-black rounded-full px-3 py-2 shadow-2xl transition-all border border-[#C5A059]/50">
            <div className="flex items-center justify-between gap-1">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-full transition-all cursor-pointer ${
                                isActive
                                    ? "text-[#E4C87F] font-semibold bg-[#2A2621] shadow-md scale-105 border border-[#C5A059]/40"
                                    : "text-[#EBE2D0]/70 hover:text-[#FCFAF5] hover:opacity-100"
                            }`}
                        >
                            <Icon className={`w-4 h-4 transition-transform ${isActive ? "text-[#E4C87F]" : ""}`} />
                            <span className="text-[9px] uppercase tracking-wider mt-0.5 font-sans">
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}
