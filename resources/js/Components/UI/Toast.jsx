import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Copy } from 'lucide-react';

export default function Toast({ show, message, onClose }) {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-full bg-[#332820] text-[#F7F2E8] shadow-2xl border border-[#B69A63]/40 text-xs sm:text-sm font-medium tracking-wide pointer-events-auto"
                >
                    <CheckCircle2 className="w-4 h-4 text-[#B69A63] shrink-0" />
                    <span>{message}</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
