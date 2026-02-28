"use client";

import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WhatsappWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasPrompted, setHasPrompted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen && !hasPrompted) {
                setIsOpen(true);
                setHasPrompted(true);
            }
        }, 5000);
        return () => clearTimeout(timer);
    }, [isOpen, hasPrompted]);

    const handleWhatsAppClick = () => {
        const phoneNumber = "923001234567";
        const message = "Hi! I need some help with BitesPK, could you give me a food recommendation or assist with my order?";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="bg-card border border-border rounded-2xl p-4 shadow-2xl mb-4 w-72 relative"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute -top-2 -right-2 bg-muted hover:bg-muted-foreground/20 text-foreground w-6 h-6 rounded-full flex items-center justify-center transition-colors shadow-sm"
                        >
                            <X className="w-3 h-3" />
                        </button>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center text-white shrink-0">
                                        <MessageCircle className="w-6 h-6" />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-card rounded-full" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">BitesPK AI Agent</h4>
                                    <p className="text-xs text-muted-foreground">Replies instantly</p>
                                </div>
                            </div>
                            <div className="bg-muted p-3 rounded-xl rounded-tl-sm text-sm text-foreground">
                                Hey there! 👋 Hungry? I can help you find legendary food or track your order.
                            </div>
                            <button
                                onClick={handleWhatsAppClick}
                                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 text-sm mt-1"
                            >
                                <MessageCircle className="w-4 h-4 fill-current" />
                                Chat on WhatsApp
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-transform active:scale-95 group relative"
                aria-label="WhatsApp Support"
            >
                <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
                {/* Notification Dot */}
                {!isOpen && !hasPrompted && (
                    <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-background rounded-full animate-pulse" />
                )}
            </button>
        </div>
    );
}
