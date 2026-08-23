import React from 'react';
import SectionHeader from '../UI/SectionHeader';
import { Sparkles, Heart } from 'lucide-react';

export default function LoveStorySection({ loveStories = [] }) {
    if (!loveStories || loveStories.length === 0) return null;

    return (
        <section id="story" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F3E9] relative">
            <div className="max-w-4xl mx-auto">
                <SectionHeader
                    tag="OUR JOURNEY"
                    title="Kisah Cinta Kami"
                    subtitle="Setiap Detik yang Menuntun Menuju Hari Ini"
                    description="Perjalanan cinta yang kami rajut dengan kesabaran, rasa saling percaya, dan doa yang tak pernah putus."
                />

                {/* Vertical Timeline */}
                <div className="relative mt-16 before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-[#C5A059]/60 before:to-transparent">
                    {loveStories.map((story, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={story.id || index}
                                className={`relative flex flex-col md:flex-row items-center gap-8 mb-14 md:mb-20 ${
                                    isEven ? "md:flex-row-reverse" : ""
                                }`}
                            >
                                {/* Timeline Center Node / Botanical Badge */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FCFAF5] border-2 border-[#C5A059] flex items-center justify-center shadow-lg z-10">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059]" />
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 ${isEven ? "md:text-left md:pl-10" : "md:text-right md:pr-10"}`}>
                                    <div className="bg-[#FCFAF5] border border-[#C5A059]/40 p-6 sm:p-7 rounded-sm shadow-md hover:shadow-lg transition-shadow">
                                        <span className="inline-block px-3 py-1 mb-2.5 rounded-full bg-[#EBE2D0] border border-[#C5A059]/40 text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-[#5C5248]">
                                            {story.year_or_date}
                                        </span>

                                        <h3 className="font-serif text-xl sm:text-2xl text-[#0E0D0B] font-medium mb-2.5">
                                            {story.title}
                                        </h3>

                                        <p className="text-xs sm:text-sm text-[#5C5248] font-light leading-relaxed">
                                            {story.story}
                                        </p>
                                    </div>
                                </div>

                                {/* Image Side (if available) */}
                                <div className={`w-full md:w-1/2 ${isEven ? "md:pr-10" : "md:pl-10"}`}>
                                    {story.image_url ? (
                                        <div className="overflow-hidden rounded-sm border border-[#C5A059]/40 aspect-[4/3] bg-[#EBE2D0] shadow-md">
                                            <img
                                                src={story.image_url}
                                                alt={story.title}
                                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                                loading="lazy"
                                            />
                                        </div>
                                    ) : (
                                        <div className="hidden md:block" />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
