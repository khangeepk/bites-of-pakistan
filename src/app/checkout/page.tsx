"use client";

import { useCart } from "@/store/cart";
import { Copy, CheckCircle2, ChevronRight, Lock, MapPinned, CreditCard, Banknote, Info } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CheckoutPage() {
    const { items, getTotal, clearCart } = useCart();
    const [paymentMethod, setPaymentMethod] = useState<'cod' | 'bank'>('cod');
    const [isPlaced, setIsPlaced] = useState(false);
    const router = useRouter();

    if (isPlaced) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 bg-background">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-card p-10 rounded-3xl border border-border shadow-2xl max-w-lg w-full text-center flex flex-col items-center"
                >
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
                        <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h1 className="text-4xl font-black tracking-tight mb-4 text-foreground">Order Placed!</h1>
                    <p className="text-lg text-muted-foreground mb-8">
                        Your legendary food is being prepared. Our rider will contact you soon.
                    </p>
                    <button
                        onClick={() => router.push('/')}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-2xl transition-colors shadow-lg shadow-primary/20"
                    >
                        Back to Home
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-12 bg-muted/20">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-8">
                    <span className="cursor-pointer hover:text-primary" onClick={() => router.push('/')}>Home</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground">Checkout</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 space-y-8">
                        <h1 className="text-4xl font-black tracking-tight">Checkout</h1>

                        {/* Delivery Details */}
                        <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
                            <h2 className="text-2xl font-bold mb-6 flex items-center">
                                <MapPinned className="w-6 h-6 mr-3 text-primary" /> Delivery Address
                            </h2>
                            <div className="space-y-4">
                                <input type="text" placeholder="Full Name" className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:bg-background transition-colors font-medium text-foreground" />
                                <input type="tel" placeholder="Phone Number (WhatsApp ideal)" className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:bg-background transition-colors font-medium text-foreground" />
                                <textarea placeholder="Complete Delivery Address (Street, House No, Sector/Phase)" className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:bg-background transition-colors font-medium min-h-[100px] text-foreground" />
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
                            <h2 className="text-2xl font-bold mb-6 flex items-center">
                                <Lock className="w-6 h-6 mr-3 text-primary" /> Payment Method
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <button
                                    onClick={() => setPaymentMethod('cod')}
                                    className={`border-2 rounded-2xl p-6 flex flex-col transition-all ${paymentMethod === 'cod' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50 bg-background'}`}
                                >
                                    <Banknote className={`w-8 h-8 mb-4 ${paymentMethod === 'cod' ? 'text-primary' : 'text-muted-foreground'}`} />
                                    <span className="font-bold text-lg mb-1 text-foreground">Cash on Delivery</span>
                                    <span className="text-sm text-left text-muted-foreground">Pay when you receive your food</span>
                                </button>
                                <button
                                    onClick={() => setPaymentMethod('bank')}
                                    className={`border-2 rounded-2xl p-6 flex flex-col transition-all ${paymentMethod === 'bank' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50 bg-background'}`}
                                >
                                    <CreditCard className={`w-8 h-8 mb-4 ${paymentMethod === 'bank' ? 'text-primary' : 'text-muted-foreground'}`} />
                                    <span className="font-bold text-lg mb-1 text-foreground">Bank / EasyPaisa</span>
                                    <span className="text-sm text-left text-muted-foreground">Direct online transfer</span>
                                </button>
                            </div>

                            {paymentMethod === 'bank' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="bg-muted p-6 rounded-2xl border border-border overflow-hidden"
                                >
                                    <h3 className="font-bold mb-4 text-primary">Transfer Details</h3>
                                    <div className="bg-background p-4 rounded-xl border border-border mb-4 flex justify-between items-center group cursor-pointer hover:border-primary transition-colors">
                                        <div>
                                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">EasyPaisa Account</p>
                                            <p className="font-mono text-lg font-bold text-foreground">0300 1234567</p>
                                        </div>
                                        <Copy className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                    <div className="bg-background p-4 rounded-xl border border-border flex justify-between items-center group cursor-pointer hover:border-primary transition-colors">
                                        <div>
                                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Meezan Bank (IBAN)</p>
                                            <p className="font-mono text-lg font-bold text-foreground">PK12 MEZN 0000 0000 1234</p>
                                        </div>
                                        <Copy className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-4 font-medium flex items-center bg-primary/10 text-primary p-3 rounded-lg">
                                        <Info className="w-4 h-4 mr-2 shrink-0" />
                                        Please send a screenshot of the transfer to our WhatsApp number after placing order.
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-card p-8 rounded-3xl border border-border shadow-sm sticky top-24">
                            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                            {items.length === 0 ? (
                                <p className="text-muted-foreground">Your cart is empty.</p>
                            ) : (
                                <div className="space-y-4 mb-6">
                                    {items.map((item) => (
                                        <div key={item.id} className="flex justify-between items-center border-b border-border/50 pb-3 last:border-0">
                                            <div className="flex-1">
                                                <span className="font-bold mr-2 text-primary">{item.quantity}x</span>
                                                <span className="text-foreground font-medium">{item.name}</span>
                                            </div>
                                            <span className="font-bold text-foreground">Rs. {item.price * item.quantity}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="border-t border-border pt-6 space-y-4 mb-8">
                                <div className="flex justify-between text-muted-foreground font-medium">
                                    <span>Subtotal</span>
                                    <span className="text-foreground">Rs. {getTotal()}</span>
                                </div>
                                <div className="flex justify-between text-muted-foreground font-medium">
                                    <span>Standard Delivery Fee</span>
                                    <span className="text-foreground">Rs. 150</span>
                                </div>
                                <div className="flex justify-between text-xl font-black text-primary pt-4 border-t border-border/50 mt-4">
                                    <span>Total</span>
                                    <span>Rs. {getTotal() + (items.length > 0 ? 150 : 0)}</span>
                                </div>
                            </div>

                            <button
                                disabled={items.length === 0}
                                onClick={() => {
                                    setIsPlaced(true);
                                    clearCart();
                                }}
                                className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground py-5 rounded-2xl font-extrabold text-xl shadow-xl shadow-primary/30 transition-transform active:scale-[0.98] flex items-center justify-center cursor-pointer"
                            >
                                Place Order <ChevronRight className="w-6 h-6 ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
