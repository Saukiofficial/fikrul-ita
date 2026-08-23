import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Copy, Check, MessageCircle, Sparkles } from 'lucide-react';
import Toast from '../UI/Toast';
import { BotanicalCorner } from '../UI/BotanicalOrnament';

export default function WhatsAppShareModal({ isOpen, onClose, invitation }) {
    const [recipientName, setRecipientName] = useState('');
    const [copied, setCopied] = useState(false);
    const [showToast, setShowToast] = useState(false);

    if (!isOpen) return null;

    const groom = invitation.groom || invitation.couples?.find(c => c.role === 'groom');
    const bride = invitation.bride || invitation.couples?.find(c => c.role === 'bride');
    const groomName = groom?.nickname || 'Fikrul';
    const brideName = bride?.nickname || 'Puspita';

    const baseUrl = window.location.origin + '/' + invitation.slug;
    const personalizedUrl = recipientName.trim()
        ? `${baseUrl}?to=${encodeURIComponent(recipientName.trim())}`
        : baseUrl;

    const shareText = `Kepada Yth. ${recipientName.trim() || 'Bapak/Ibu/Saudara/i'},

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Anda untuk menghadiri acara pernikahan kami:

*${groomName} & ${brideName}*

Berikut tautan undangan digital Anda:
${personalizedUrl}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.

Terima kasih.
Wassalamu'alaikum Wr. Wb.`;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(personalizedUrl);
        setCopied(true);
        setShowToast(true);
        setTimeout(() => setCopied(false), 2000);
        setTimeout(() => setShowToast(false), 3000);
    };

    const handleWhatsAppSend = () => {
        const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
        window.open(waUrl, '_blank');
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#221A15]/80 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative w-full max-w-md bg-[#FCFAF5] border-2 border-[#C5A059]/50 rounded-sm shadow-2xl p-6 sm:p-8"
                >
                    <BotanicalCorner position="top-left" className="absolute top-2 left-2 w-8 h-8 text-[#C5A059]/70" />
                    <BotanicalCorner position="top-right" className="absolute top-2 right-2 w-8 h-8 text-[#C5A059]/70" />

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#EBE2D0] text-[#5C5248] transition-colors cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="text-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-[#EBE2D0] border border-[#C5A059] flex items-center justify-center mx-auto mb-3 text-[#C5A059]">
                            <MessageCircle className="w-6 h-6" />
                        </div>
                        <h3 className="font-serif text-2xl text-[#0E0D0B] font-normal">
                            Bagikan Undangan WhatsApp
                        </h3>
                        <p className="text-xs text-[#5C5248] font-light mt-1">
                            Buat tautan personalisasi dengan nama tamu yang ingin diundang.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-[11px] uppercase tracking-wider font-sans font-semibold text-[#5C5248] mb-1.5">
                                Nama Tamu Penerima
                            </label>
                            <input
                                type="text"
                                value={recipientName}
                                onChange={(e) => setRecipientName(e.target.value)}
                                placeholder="Contoh: Bapak Andi & Keluarga"
                                className="w-full px-3.5 py-2.5 rounded-sm bg-[#F7F3E9] border border-[#C5A059]/40 focus:border-[#C5A059] focus:outline-none text-xs sm:text-sm text-[#0E0D0B] font-sans"
                            />
                        </div>

                        {/* Generated Preview */}
                        <div className="p-3 rounded-sm bg-[#F7F3E9] border border-[#C5A059]/30 text-[11px] text-[#5C5248] space-y-1 font-mono break-all">
                            <span className="text-[10px] text-[#C5A059] uppercase tracking-widest font-sans font-bold block">
                                Preview Link:
                            </span>
                            {personalizedUrl}
                        </div>

                        {/* Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <button
                                onClick={handleCopyLink}
                                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-[#C5A059] text-[#0E0D0B] hover:bg-[#EBE2D0] text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
                            >
                                {copied ? <Check className="w-4 h-4 text-[#C5A059]" /> : <Copy className="w-4 h-4 text-[#C5A059]" />}
                                <span>{copied ? 'Tersalin!' : 'Salin Link'}</span>
                            </button>

                            <button
                                onClick={handleWhatsAppSend}
                                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-semibold transition-colors shadow-md cursor-pointer"
                            >
                                <Send className="w-4 h-4" />
                                <span>Kirim via WA</span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Toast show={showToast} message="Link undangan berhasil disalin ke clipboard!" onClose={() => setShowToast(false)} />
        </AnimatePresence>
    );
}
