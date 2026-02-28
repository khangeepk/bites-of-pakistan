"use client";

import { motion } from "framer-motion";
import { Star, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const FAST_FOOD_BRANDS = [
    { id: '1', name: 'Cheezious', type: 'Pizza & Fast Food', rating: 4.8, time: '30-45 min', color: 'from-orange-400 to-orange-600', sponsored: true },
    { id: '2', name: 'McDonald\'s', type: 'Burgers & Fries', rating: 4.5, time: '20-35 min', color: 'from-red-600 to-red-800' },
    { id: '3', name: 'KFC', type: 'Fried Chicken', rating: 4.6, time: '25-40 min', color: 'from-red-500 to-red-700' },
    { id: '4', name: 'Savour Foods', type: 'Pulao Kabab', rating: 4.9, time: '15-30 min', color: 'from-blue-600 to-blue-800' },
    { id: '5', name: 'Baoo Jee', type: 'Desi Cuisine', rating: 4.7, time: '35-50 min', color: 'from-green-600 to-green-800' },
];

export function FastFoodCarousel() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-4xl font-extrabold tracking-tight mb-3">Popular Brands</h2>
                        <p className="text-muted-foreground text-lg">Your favorite fast food chains, delivered fast.</p>
                    </div>
                    <Link href="/brands" className="hidden md:flex text-primary font-bold items-center hover:underline text-lg">
                        View all brands <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>

                <div className="flex overflow-x-auto pb-10 -mx-4 px-4 gap-6 snap-x hide-scrollbar">
                    {FAST_FOOD_BRANDS.map((brand, i) => (
                        <motion.div
                            key={brand.id}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="snap-start min-w-[300px] md:min-w-[350px] bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:-translate-y-2"
                        >
                            <div className={`h-40 bg-gradient-to-br ${brand.color} relative flex items-center justify-center p-6`}>
                                {(brand as any).sponsored && (
                                    <span className="absolute top-4 left-4 bg-background/90 text-foreground text-[10px] uppercase font-black px-2 py-1 rounded-sm shadow-sm z-20">
                                        Sponsored
                                    </span>
                                )}
                                <h3 className="text-white text-4xl font-black italic tracking-tighter drop-shadow-lg z-10">{brand.name}</h3>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h4 className="font-bold text-xl text-foreground">{brand.name}</h4>
                                    <div className="flex items-center bg-primary/10 text-primary px-2.5 py-1 rounded-md text-sm font-bold">
                                        <Star className="w-3.5 h-3.5 fill-primary mr-1" />
                                        {brand.rating}
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-base mb-5">{brand.type}</p>
                                <div className="flex items-center justify-between pt-5 border-t border-border/60">
                                    <div className="flex items-center text-sm font-semibold text-muted-foreground">
                                        <Clock className="w-4 h-4 mr-2" />
                                        {brand.time}
                                    </div>
                                    <Link href={`/restaurant/${brand.id}`} className="text-base font-bold text-primary group-hover:underline">
                                        View Menu
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
