"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Clock, Info, ShoppingBag } from "lucide-react";
import { use } from "react";
import { useCart } from "@/store/cart";
import { AdSlot } from "@/components/ad-slot";
import { AffiliateWidget } from "@/components/affiliate-widget";
import { ReviewsSection } from "@/components/reviews-section";

const MENU_ITEMS = [
    { id: 'm1', name: 'Special Beef Nihari', description: 'Slow cooked beef shank with bone marrow in spicy gravy.', price: 950, history: "Originating in the late 18th century, Nihari was eaten by Nawabs in the Mughal Empire after Fajr prayers." },
    { id: 'm2', name: 'Nalli Nihari', description: 'Extra bone marrow added for a rich, buttery taste.', price: 1200, history: "A premium variation that became popular in Lahore's inner city." },
    { id: 'm3', name: 'Maghaz Nihari', description: 'Nihari topped with spicy brain masala.', price: 1400, history: "A delicacy for true food lovers, often eaten on Sunday mornings." },
];

export default function RestaurantPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);

    return (
        <div className="min-h-screen pb-24">
            {/* Hero Header */}
            <div className="h-[45vh] relative shadow-sm">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2670&auto=format&fit=crop')` }}
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-background via-background/80 to-transparent pt-32 pb-8">
                    <div className="container mx-auto px-4 flex flex-col items-start mt-8">
                        <div className="bg-primary/90 text-primary-foreground backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold mb-4 flex items-center shadow-lg">
                            <Star className="w-4 h-4 mr-1.5 fill-current" />
                            4.9 (1,240 Reviews)
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-foreground md:text-white mb-4 drop-shadow-xl tracking-tighter">Waris Nihari</h1>
                        <div className="flex flex-wrap items-center text-muted-foreground md:text-white/90 font-medium text-lg gap-4">
                            <div className="flex items-center">
                                <MapPin className="w-5 h-5 mr-2 text-primary md:text-current" />
                                Anarkali Bazaar, Lahore
                            </div>
                            <span className="hidden md:inline">•</span>
                            <div className="flex items-center">
                                <Clock className="w-5 h-5 mr-2 text-primary md:text-current" />
                                Open until 2:00 AM
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                    {/* History Blog Section */}
                    <section className="mb-12 bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm">
                        <h2 className="text-2xl font-bold mb-4 flex items-center">
                            <Info className="text-primary mr-3 w-6 h-6" />
                            The Legacy
                        </h2>
                        <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                            Waris Nihari is arguably the most famous Nihari spot in Lahore, deeply embedded in the culinary culture of the city. Operating for decades in the bustling streets of Anarkali, it is known for its intensely flavorful, spicy thick gravy and tender, melt-in-the-mouth beef shanks.
                        </p>
                    </section>

                    <AffiliateWidget title="Recommended Cooking Gear" />

                    {/* Menu */}
                    <section>
                        <h2 className="text-4xl font-extrabold mb-8 tracking-tight">Authentic Menu</h2>
                        <div className="space-y-6">
                            {MENU_ITEMS.map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row justify-between gap-6 group"
                                >
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3>
                                        <p className="text-muted-foreground mb-5 font-medium text-lg">{item.description}</p>
                                        {item.history && (
                                            <div className="bg-muted p-5 rounded-2xl border border-border/50">
                                                <p className="text-sm md:text-base text-foreground/80 italic border-l-4 border-primary pl-4 font-medium">
                                                    "{item.history}"
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col items-end justify-between shrink-0">
                                        <span className="text-3xl font-black text-primary mb-6 md:mb-0">Rs. {item.price}</span>
                                        <button className="bg-foreground hover:bg-foreground/90 text-background px-8 py-4 rounded-xl font-bold transition-all w-full md:w-auto shadow-md flex items-center justify-center text-lg hover:-translate-y-1">
                                            <ShoppingBag className="w-5 h-5 mr-3" /> Add
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Customer Reviews */}
                    <ReviewsSection restaurantId={resolvedParams.id} />
                </div>

                {/* Sidebar cart info or map could go here */}
                <div className="hidden lg:block space-y-6">
                    <div className="bg-muted/50 p-8 rounded-3xl border border-border sticky top-24">
                        <h3 className="font-extrabold text-2xl mb-6 tracking-tight">Location & Hours</h3>
                        <div className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-2xl mb-6 flex items-center justify-center border border-border overflow-hidden relative shadow-inner">
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500 scale-100 hover:scale-110 cursor-pointer"
                                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')` }}
                            />
                            <span className="relative z-10 font-bold text-foreground bg-background/90 px-6 py-3 rounded-full shadow-lg backdrop-blur-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">View Map</span>
                        </div>
                        <ul className="space-y-4 text-base font-semibold">
                            <li className="flex justify-between items-center bg-background p-4 rounded-xl shadow-sm border border-border">
                                <span className="text-muted-foreground">Mon - Sun</span>
                                <span className="text-primary font-bold">6:00 AM - 2:00 AM</span>
                            </li>
                        </ul>
                    </div>

                    <AdSlot layout="vertical" adSlotId="sidebar-ad-1" />
                </div>
            </div>
        </div>
    );
}
