import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import SectionHeader from '../UI/SectionHeader';
import { Send, CheckCircle2, UserCheck, Users, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BotanicalCorner, BotanicalFlourish } from '../UI/BotanicalOrnament';
import AnimatedSuccessModal from '../UI/AnimatedSuccessModal';

export default function RsvpSection({ invitation, guestName }) {
    const [submitted, setSubmitted] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        guest_name: guestName || '',
        attendance_status: 'attending',
        guest_count: 1,
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/${invitation.slug}/rsvp`, {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setSubmitted(true);
                setShowSuccessModal(true);
                confetti({
                    particleCount: 100,
                    spread: 80,
                    origin: { y: 0.6 },
                    colors: ['#C5A059', '#221F18', '#FAF5EC', '#E4C87F'],
                });
                reset('message');
            },
        });
    };

    const statusLabel = data.attendance_status === 'attending' 
        ? 'Akan Hadir' 
        : (data.attendance_status === 'declined' ? 'Berhalangan Hadir' : 'Masih Ragu');

    return (
        <section id="rsvp" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F3E9] relative">
            <div className="max-w-2xl mx-auto">
                <SectionHeader
                    tag="R.S.V.P"
                    title="Konfirmasi Kehadiran"
                    subtitle="Répondez S'il Vous Plaît"
                    description="Mohon kesediaan Bapak/Ibu/Saudara/i untuk mengonfirmasi kehadiran demi kenyamanan persiapan acara kami."
                />

                <div className="relative bg-[#FCFAF5] border-2 border-[#C5A059]/40 rounded-sm p-6 sm:p-10 shadow-xl mt-8">
                    <BotanicalCorner position="top-left" className="absolute top-2 left-2 w-10 h-10 text-[#C5A059]/70" />
                    <BotanicalCorner position="top-right" className="absolute top-2 right-2 w-10 h-10 text-[#C5A059]/70" />
                    <BotanicalCorner position="bottom-left" className="absolute bottom-2 left-2 w-10 h-10 text-[#C5A059]/70" />
                    <BotanicalCorner position="bottom-right" className="absolute bottom-2 right-2 w-10 h-10 text-[#C5A059]/70" />

                    {submitted ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 rounded-full bg-[#EBE2D0] border-2 border-[#C5A059] flex items-center justify-center mx-auto mb-4 text-[#C5A059] shadow-md">
                                <CheckCircle2 className="w-8 h-8 text-[#C5A059]" />
                            </div>
                            <h3 className="font-serif text-2xl sm:text-3xl text-[#0E0D0B] font-medium mb-2">
                                Konfirmasi Berhasil Dikirimkan
                            </h3>
                            <p className="text-xs sm:text-sm text-[#5C5248] font-light max-w-md mx-auto mb-6">
                                Konfirmasi ({statusLabel}) dan doa restu Anda telah kami catat dengan penuh rasa bahagia. Sampai jumpa di hari bahagia pernikahan kami!
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#C5A059]/60 text-xs uppercase tracking-wider text-[#5C5248] hover:text-[#0E0D0B] hover:border-[#C5A059] bg-[#EBE2D0]/40 transition-colors cursor-pointer font-semibold shadow-xs"
                            >
                                Ubah / Perbarui Konfirmasi
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Guest Name */}
                            <div>
                                <label className="block text-xs uppercase tracking-[0.18em] font-sans font-semibold text-[#5C5248] mb-2">
                                    Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={data.guest_name}
                                    onChange={(e) => setData('guest_name', e.target.value)}
                                    placeholder="Contoh: Bapak Ir. Hendra Wijaya"
                                    className="w-full px-4 py-3 rounded-sm bg-[#F7F3E9] border border-[#C5A059]/40 focus:border-[#C5A059] focus:outline-none text-sm text-[#0E0D0B] placeholder-[#5C5248]/50 transition-colors font-sans"
                                />
                                {errors.guest_name && (
                                    <span className="text-[11px] text-red-700 mt-1 block">{errors.guest_name}</span>
                                )}
                            </div>

                            {/* Attendance Status */}
                            <div>
                                <label className="block text-xs uppercase tracking-[0.18em] font-sans font-semibold text-[#5C5248] mb-2">
                                    Konfirmasi Kehadiran
                                </label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {[
                                        { value: 'attending', label: '✓ Hadir' },
                                        { value: 'declined', label: '✕ Berhalangan' },
                                        { value: 'tentative', label: '? Masih Ragu' },
                                    ].map((opt) => (
                                        <button
                                            type="button"
                                            key={opt.value}
                                            onClick={() => setData('attendance_status', opt.value)}
                                            className={`px-4 py-3 rounded-sm border text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                                                data.attendance_status === opt.value
                                                    ? "bg-[#0E0D0B] text-[#FCFAF5] border-[#C5A059] shadow-md"
                                                    : "bg-[#F7F3E9] text-[#5C5248] border-[#C5A059]/40 hover:border-[#C5A059]"
                                            }`}
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Guest Count (only if attending) */}
                            {data.attendance_status === 'attending' && (
                                <div>
                                    <label className="block text-xs uppercase tracking-[0.18em] font-sans font-semibold text-[#5C5248] mb-2">
                                        Jumlah Tamu yang Hadir
                                    </label>
                                    <select
                                        value={data.guest_count}
                                        onChange={(e) => setData('guest_count', e.target.value)}
                                        className="w-full px-4 py-3 rounded-sm bg-[#F7F3E9] border border-[#C5A059]/40 focus:border-[#C5A059] focus:outline-none text-sm text-[#0E0D0B] transition-colors font-sans font-medium"
                                    >
                                        <option value={1}>1 Orang</option>
                                        <option value={2}>2 Orang</option>
                                        <option value={3}>3 Orang</option>
                                        <option value={4}>4 Orang</option>
                                        <option value={5}>5 Orang</option>
                                    </select>
                                </div>
                            )}

                            {/* Message / Prayer */}
                            <div>
                                <label className="block text-xs uppercase tracking-[0.18em] font-sans font-semibold text-[#5C5248] mb-2">
                                    Ucapan & Doa Restu (Opsional)
                                </label>
                                <textarea
                                    rows={4}
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    placeholder="Tuliskan untaian doa dan harapan terbaik Anda untuk kedua mempelai..."
                                    className="w-full px-4 py-3 rounded-sm bg-[#F7F3E9] border border-[#C5A059]/40 focus:border-[#C5A059] focus:outline-none text-sm text-[#0E0D0B] placeholder-[#5C5248]/50 transition-colors font-sans"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#0E0D0B] hover:bg-[#201D19] text-[#FCFAF5] border border-[#C5A059] shadow-xl text-xs uppercase tracking-[0.2em] font-sans font-semibold transition-all disabled:opacity-50 cursor-pointer"
                            >
                                <Send className="w-4 h-4 text-[#E4C87F]" />
                                <span>{processing ? 'Mengirim...' : 'Kirim Konfirmasi & Doa'}</span>
                            </button>
                        </form>
                    )}
                </div>
            </div>

            {/* Animated Success Modal Notification */}
            <AnimatedSuccessModal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                title="Konfirmasi & Doa Terkirim!"
                subtitle="Terima Kasih Atas Konfirmasi Kehadiran Anda"
                message="Konfirmasi kehadiran serta doa restu yang Anda sampaikan telah berhasil kami terima dengan penuh rasa syukur."
                senderName={data.guest_name}
            />
        </section>
    );
}
