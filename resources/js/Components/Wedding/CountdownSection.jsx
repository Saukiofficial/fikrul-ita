import React, { useState, useEffect } from 'react';
import { Calendar, Bell } from 'lucide-react';
import { BotanicalFlourish } from '../UI/BotanicalOrnament';

export default function CountdownSection({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();
            
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const formatNumber = (num) => String(num).padStart(2, '0');

    return (
        <section className="py-14 md:py-18 px-4 bg-[#0E0D0B] text-[#FCFAF5] relative overflow-hidden text-center">
            {/* Background Texture & Glow */}
            <div className="absolute inset-0 bg-radial from-[#C5A059]/15 to-transparent pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#E4C87F] font-semibold font-sans block mb-2">
                    Menghitung Hari Bahagia
                </span>
                
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#FCFAF5] font-normal mb-3">
                    Waktu Menuju Hari Sakral
                </h3>

                <BotanicalFlourish className="w-28 h-5 text-[#C5A059] mx-auto mb-8" />

                {/* Countdown Grid */}
                <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto">
                    {[
                        { label: 'HARI', value: timeLeft.days },
                        { label: 'JAM', value: timeLeft.hours },
                        { label: 'MENIT', value: timeLeft.minutes },
                        { label: 'DETIK', value: timeLeft.seconds },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-sm bg-[#181613] border border-[#C5A059]/45 shadow-2xl"
                        >
                            <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#E4C87F] tracking-tight">
                                {formatNumber(item.value)}
                            </span>
                            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#EBE2D0]/80 font-sans font-semibold mt-1">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
