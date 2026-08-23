import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Disc, Music } from 'lucide-react';

export default function MusicPlayer({ musicUrl, musicTitle, musicArtist, isPlaying, onToggle }) {
    const [audioError, setAudioError] = useState(false);

    if (!musicUrl) return null;

    return (
        <div className="fixed top-5 right-5 z-40 flex items-center gap-2">
            {/* Music Info Bubble on Desktop */}
            <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E0D0B]/85 border border-[#C5A059]/40 shadow-xl text-[11px] font-sans text-[#EBE2D0] backdrop-blur-md">
                <Music className={`w-3.5 h-3.5 text-[#E4C87F] ${isPlaying ? 'animate-bounce' : ''}`} />
                <span className="font-medium text-[#FCFAF5] max-w-[140px] truncate">
                    {musicTitle || "Backsound Pernikahan"}
                </span>
            </div>

            {/* Floating Music Disc Button */}
            <button
                onClick={onToggle}
                aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
                className={`relative p-2.5 sm:p-3 rounded-full bg-[#0E0D0B] text-[#E4C87F] border-2 border-[#C5A059] shadow-2xl hover:scale-105 transition-transform cursor-pointer group ${
                    isPlaying ? "animate-spin-slow" : ""
                }`}
            >
                {isPlaying ? (
                    <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#E4C87F]" />
                ) : (
                    <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-[#EBE2D0]/60" />
                )}

                {/* Animated Sound Wave Bars when Playing */}
                {isPlaying && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C5A059]"></span>
                    </span>
                )}
            </button>
        </div>
    );
}
