"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { ShoppingCart, Moon, Sun, MapPin, Search, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/store/cart";
import { CartDrawer } from "@/components/cart-drawer";

export function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { items } = useCart();

    useEffect(() => setMounted(true), []);

    return (
        <header className="fixed top-0 left-0 right-0 glass-nav shadow-sm z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-1 group">
                    <span className="text-2xl font-black text-primary tracking-tight">Bites</span>
                    <span className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors">PK</span>
                </Link>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    {/* Theme Toggle */}
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2.5 rounded-full hover:bg-muted transition-colors border border-transparent hover:border-border"
                        aria-label="Toggle Dark Mode"
                    >
                        {mounted ? (
                            theme === "dark" ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-slate-700" />
                        ) : (
                            <div className="w-5 h-5" />
                        )}
                    </button>

                    {/* Cart */}
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative p-2.5 rounded-full hover:bg-muted transition-colors border border-transparent hover:border-border"
                    >
                        <ShoppingCart className="w-5 h-5 text-foreground" />
                        {mounted && items.length > 0 && (
                            <span className="absolute 0 right-0 bg-primary text-primary-foreground text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center translate-x-1 -translate-y-1 shadow-sm border-2 border-background">
                                {items.reduce((acc, item) => acc + item.quantity, 0)}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </header>
    );
}
