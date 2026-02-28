"use client";

import { useCart } from "@/store/cart";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X, Plus, Minus, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export function CartDrawer({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const { items, updateQuantity, removeItem, getTotal } = useCart();
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-[100dvh] w-full max-w-md bg-background border-l border-border z-[101] flex flex-col shadow-2xl"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-border bg-card">
                            <h2 className="text-2xl font-extrabold flex items-center tracking-tight">
                                <ShoppingBag className="w-6 h-6 mr-3 text-primary" />
                                Your Order
                            </h2>
                            <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors border border-transparent hover:border-border">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-muted-foreground opacity-60">
                                    <ShoppingBag className="w-24 h-24 mb-6 stroke-[1.5]" />
                                    <p className="text-2xl font-bold tracking-tight">Your cart is empty.</p>
                                    <p className="mt-2">Looks like you haven't added any dishes yet.</p>
                                    <button onClick={onClose} className="mt-8 bg-foreground text-background font-bold px-8 py-3 rounded-xl hover:bg-foreground/90 transition-colors">
                                        Browse menu
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex gap-4 bg-card p-5 rounded-3xl border border-border shadow-sm">
                                            <div className="flex-1">
                                                <h4 className="font-bold text-lg mb-0.5 leading-tight">{item.name}</h4>
                                                <p className="text-sm text-primary font-semibold mb-3">{item.restaurantName}</p>
                                                <div className="flex items-center gap-2 bg-muted/50 border border-border w-max rounded-full p-1 shadow-inner">
                                                    <button
                                                        onClick={() => {
                                                            if (item.quantity > 1) updateQuantity(item.id, item.quantity - 1);
                                                            else removeItem(item.id);
                                                        }}
                                                        className="w-8 h-8 rounded-full flex items-center justify-center bg-background border border-border hover:bg-muted text-foreground transition-all shadow-sm"
                                                    >
                                                        <Minus className="w-4 h-4" />
                                                    </button>
                                                    <span className="font-bold w-6 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="w-8 h-8 rounded-full flex items-center justify-center bg-background border border-border hover:bg-muted text-foreground transition-all shadow-sm"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="font-black text-xl flex items-start pt-1">Rs. {item.price * item.quantity}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {items.length > 0 && (
                            <div className="p-6 border-t border-border bg-card shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-muted-foreground font-semibold text-lg">Total Amount</span>
                                    <span className="text-4xl font-black text-primary">Rs. {getTotal()}</span>
                                </div>
                                <button
                                    onClick={() => { onClose(); router.push('/checkout'); }}
                                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-5 rounded-2xl font-extrabold text-xl shadow-xl shadow-primary/30 transition-transform active:scale-[0.98] flex items-center justify-center"
                                >
                                    Confirm Order <ArrowRight className="w-6 h-6 ml-3" />
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
