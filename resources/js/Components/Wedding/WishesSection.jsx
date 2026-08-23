import React, { useState, useEffect } from 'react';
import { useForm, router } from '@inertiajs/react';
import SectionHeader from '../UI/SectionHeader';
import { MessageSquareHeart, Send, HeartHandshake, User, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import AnimatedSuccessModal from '../UI/AnimatedSuccessModal';

export default function WishesSection({ invitation, wishes = [], guestName }) {
    const [liveWishes, setLiveWishes] = useState(wishes);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [submittedSender, setSubmittedSender] = useState('');

    // Sync liveWishes whenever parent prop updates
    useEffect(() => {
        setLiveWishes(wishes);
    }, [wishes]);

    // Realtime Polling: Check for new wishes every 12 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            router.reload({
                only: ['invitation', 'stats'],
                preserveScroll: true,
                preserveState: true,
            });
        }, 12000);

        return () => clearInterval(interval);
    }, []);

    const { data, setData, post, processing, reset, errors } = useForm({
        sender_name: guestName || '',
        relationship: '',
        message: '',
    });

    const handleWishSubmit = (e) => {
        e.preventDefault();
        
        const newWishOptimistic = {
            id: Date.now(),
            sender_name: data.sender_name,
            relationship: data.relationship,
            message: data.message,
            created_at: new Date().toISOString(),
        };

        const currentSender = data.sender_name;

        post(`/${invitation.slug}/wishes`, {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setSubmittedSender(currentSender);
                setShowSuccessModal(true);
                setLiveWishes((prev) => [newWishOptimistic, ...prev.filter(w => w.id !== newWishOptimistic.id)]);
                confetti({
                    particleCount: 90,
                    spread: 75,
                    origin: { y: 0.65 },
                    colors: ['#C5A059', '#221F18', '#FAF5EC', '#E4C87F'],
                });
                reset('message', 'relationship');
            },
        });
    };

    return (
        <section id="wishes" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-paper-luxury relative">
            <div className="max-w-4xl mx-auto">
                <SectionHeader
                    tag="LIVE GUESTBOOK & BLESSINGS"
                    title="Untaian Doa & Harapan"
                    subtitle="Buku Tamu Realtime"
                    description="Setiap kata dan doa yang Anda panjatkan merupakan lentera kebaikan bagi perjalanan hidup kami."
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-12 items-start">
                    {/* Form Column (5 cols) */}
                    <div className="lg:col-span-5 bg-[#FCFAF5] border border-[#C5A059]/40 rounded-sm p-6 sm:p-7 shadow-xl">
                        <div className="flex items-center gap-2 mb-4">
                            <MessageSquareHeart className="w-5 h-5 text-[#C5A059]" />
                            <h3 className="font-serif text-xl text-[#0E0D0B] font-medium">
                                Kirim Ucapan & Doa
                            </h3>
                        </div>

                        <form onSubmit={handleWishSubmit} className="space-y-4">
                            <div>
                                <label className="block text-[11px] uppercase tracking-wider font-sans font-semibold text-[#5C5248] mb-1.5">
                                    Nama Anda
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={data.sender_name}
                                    onChange={(e) => setData('sender_name', e.target.value)}
                                    placeholder="Nama Lengkap"
                                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#F7F3E9] border border-[#C5A059]/40 focus:border-[#C5A059] focus:outline-none text-xs sm:text-sm text-[#0E0D0B] font-sans"
                                />
                                {errors.sender_name && (
                                    <span className="text-[10px] text-red-700 mt-0.5 block">{errors.sender_name}</span>
                                )}
                            </div>

                            <div>
                                <label className="block text-[11px] uppercase tracking-wider font-sans font-semibold text-[#5C5248] mb-1.5">
                                    Hubungan / Kerabat (Opsional)
                                </label>
                                <input
                                    type="text"
                                    value={data.relationship}
                                    onChange={(e) => setData('relationship', e.target.value)}
                                    placeholder="Contoh: Teman, Rekan Kerja, Saudara"
                                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#F7F3E9] border border-[#C5A059]/40 focus:border-[#C5A059] focus:outline-none text-xs sm:text-sm text-[#0E0D0B] font-sans"
                                />
                            </div>

                            <div>
                                <label className="block text-[11px] uppercase tracking-wider font-sans font-semibold text-[#5C5248] mb-1.5">
                                    Pesan Doa
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    placeholder="Tuliskan ucapan selamat dan doa tulus untuk Fikrul & Puspita..."
                                    className="w-full px-3.5 py-2.5 rounded-sm bg-[#F7F3E9] border border-[#C5A059]/40 focus:border-[#C5A059] focus:outline-none text-xs sm:text-sm text-[#0E0D0B] font-sans"
                                />
                                {errors.message && (
                                    <span className="text-[10px] text-red-700 mt-0.5 block">{errors.message}</span>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#0E0D0B] hover:bg-[#201D19] text-[#FCFAF5] border border-[#C5A059] text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer disabled:opacity-50 shadow-xl"
                            >
                                <Send className="w-3.5 h-3.5 text-[#E4C87F]" />
                                <span>{processing ? 'Mengirim...' : 'Kirim Doa Restu'}</span>
                            </button>
                        </form>
                    </div>

                    {/* Wishes Feed Column (7 cols) */}
                    <div className="lg:col-span-7 bg-[#FCFAF5] border border-[#C5A059]/40 rounded-sm p-6 sm:p-7 shadow-xl">
                        <div className="flex items-center justify-between gap-3 mb-6 pb-3 border-b border-[#C5A059]/30">
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-[#5C5248]">
                                    Buku Tamu Realtime
                                </span>
                            </div>
                            <span className="text-xs font-serif italic text-[#C5A059] font-medium">
                                {liveWishes.length} Doa Terhimpun
                            </span>
                        </div>

                        {liveWishes.length === 0 ? (
                            <div className="text-center py-12 px-4">
                                <div className="w-12 h-12 rounded-full bg-[#EBE2D0]/60 border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] mx-auto mb-3">
                                    <HeartHandshake className="w-6 h-6 text-[#C5A059]" />
                                </div>
                                <h4 className="font-serif text-lg text-[#0E0D0B] font-medium mb-1">
                                    Belum Ada Untaian Doa
                                </h4>
                                <p className="font-serif italic text-xs sm:text-sm text-[#5C5248] max-w-sm mx-auto leading-relaxed">
                                    Jadilah orang pertama yang mengirimkan ucapan selamat dan doa restu untuk kedua mempelai melalui formulir di samping.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-4 max-h-[460px] overflow-y-auto pr-2">
                                {liveWishes.map((item, idx) => (
                                    <div
                                        key={item.id || idx}
                                        className="p-4 rounded-sm bg-[#F7F3E9] border border-[#C5A059]/30 shadow-xs transition-all hover:border-[#C5A059]/60"
                                    >
                                        <div className="flex items-center justify-between gap-2 mb-1.5">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 rounded-full bg-[#EBE2D0] border border-[#C5A059]/60 flex items-center justify-center text-[#0E0D0B]">
                                                    <User className="w-3.5 h-3.5 text-[#5C5248]" />
                                                </div>
                                                <span className="font-serif text-sm sm:text-base font-semibold text-[#0E0D0B]">
                                                    {item.sender_name}
                                                </span>
                                            </div>
                                            {item.relationship && (
                                                <span className="px-2 py-0.5 rounded-full bg-[#EBE2D0] text-[9px] uppercase tracking-wider text-[#5C5248] font-sans font-semibold border border-[#C5A059]/20">
                                                    {item.relationship}
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-xs sm:text-sm text-[#5C5248] font-light leading-relaxed pl-8">
                                            "{item.message}"
                                        </p>

                                        <span className="text-[10px] text-[#5C5248]/60 block text-right mt-1.5 font-light">
                                            {new Date(item.created_at || Date.now()).toLocaleDateString('id-ID', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Animated Success Modal Notification */}
            <AnimatedSuccessModal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                title="Untaian Doa Terkirim!"
                subtitle="Terima Kasih Atas Doa & Harapan Tulus Anda"
                message="Setiap kata dan doa yang Anda panjatkan telah tercatat di buku tamu digital dan menjadi berkah berharga bagi Fikrul & Puspita."
                senderName={submittedSender}
            />
        </section>
    );
}
