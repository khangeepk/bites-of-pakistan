"use client";

import { motion } from "framer-motion";
import { Star, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const TRENDING_DHABAS = [
    { id: '1', name: 'Waris Nihari', city: 'Lahore', rating: 4.9, reviews: 1240, type: 'Nihari', image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2670&auto=format&fit=crop', sponsored: true },
    { id: '2', name: 'Zahid Nihari', city: 'Karachi', rating: 4.8, reviews: 980, type: 'Nihari', image: 'https://images.unsplash.com/photo-1626804475297-41609ea004eb?q=80&w=2670&auto=format&fit=crop' },
    { id: '3', name: 'Monal Restaurant', city: 'Islamabad', rating: 4.7, reviews: 2100, type: 'Fine Dining Desi', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2670&auto=format&fit=crop' },
    { id: '4', name: 'Janghir Tikka', city: 'Peshawar', rating: 4.9, reviews: 850, type: 'BBQ', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2574&auto=format&fit=crop' },
    { id: '5', name: 'Phajjey Siri Paye', city: 'Lahore', rating: 4.6, reviews: 1540, type: 'Breakfast', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2671&auto=format&fit=crop' },
];

export function TrendingCarousel() {
    return (
        <section className="py-24 bg-muted/10 border-t border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-4xl font-extrabold tracking-tight mb-3">Trending Nearby</h2>
                        <p className="text-muted-foreground text-lg">Top rated local gems and famous Dhabas around you.</p>
                    </div>
                    <Link href="/trending" className="hidden md:flex text-primary font-bold items-center hover:underline text-lg">
                        See all trending <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>

                <div className="flex overflow-x-auto pb-10 -mx-4 px-4 gap-6 snap-x hide-scrollbar">
                    {TRENDING_DHABAS.map((place, i) => (
                        <motion.div
                            key={place.id}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="snap-start min-w-[320px] md:min-w-[400px] bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:-translate-y-2"
                        >
                            <div className="h-56 relative overflow-hidden">
                                {(place as any).sponsored && (
                                    <span className="absolute top-4 left-4 bg-background/90 text-foreground text-[10px] uppercase font-black px-2 py-1 rounded-sm shadow-sm z-30">
                                        Sponsored
                                    </span>
                                )}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                                <div
                                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                                    style={{ backgroundImage: `url(${place.image})` }}
                                />
                                <div className="absolute top-4 right-4 z-20 bg-background/90 backdrop-blur-sm text-foreground px-3 py-1.5 rounded-full text-sm font-bold flex items-center shadow-lg border border-border/50">
                                    <Star className="w-4 h-4 fill-primary text-primary mr-1.5" />
                                    {place.rating}
                                    <span className="text-muted-foreground font-normal ml-1.5">({place.reviews})</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-2xl text-foreground group-hover:text-primary transition-colors">{place.name}</h4>
                                </div>
                                <div className="flex items-center text-muted-foreground mb-5">
                                    <MapPin className="w-4 h-4 mr-1.5 text-primary/70" />
                                    <span className="font-medium">{place.city}</span>
                                    <span className="mx-3 text-border font-light">|</span>
                                    <span className="bg-primary/5 text-primary px-2.5 py-1 rounded-md text-xs font-bold">{place.type}</span>
                                </div>

                                <div className="pt-5 border-t border-border/60">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-muted-foreground">Legendary Taste</span>
                                        <Link href={`/restaurant/${place.id}`} className="text-base font-bold text-primary group-hover:underline flex items-center">
                                            Explore Menu
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
