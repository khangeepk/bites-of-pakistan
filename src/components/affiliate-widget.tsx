"use client";

import { ExternalLink, Star, ShoppingBag } from "lucide-react";

interface AffiliateProduct {
    id: string;
    name: string;
    description: string;
    price: string;
    rating: number;
    image: string;
    link: string; // Amazon, Daraz, etc.
}

const MOCK_PRODUCTS: AffiliateProduct[] = [
    {
        id: "p1",
        name: "Shan Biryani Masala (Pack of 6)",
        description: "Authentic spice mix for the perfect homemade Biryani. Essential for every Pakistani kitchen.",
        price: "Rs. 950",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1596649281358-154942c759dd?q=80&w=2670&auto=format&fit=crop", // placeholder
        link: "https://www.daraz.pk/" // Replace with actual affiliate link
    },
    {
        id: "p2",
        name: "Premium Cast Iron Karahi",
        description: "Heavy-duty cast iron wok ideal for making authentic restaurant-style Karahi and Handi.",
        price: "Rs. 4,500",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1584984180436-ec2de9a7f3df?q=80&w=2670&auto=format&fit=crop",
        link: "https://www.amazon.com/"
    }
];

export function AffiliateWidget({ title = "Chef's Recommended Gear" }: { title?: string }) {
    return (
        <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm my-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1.5 rounded-bl-2xl font-bold text-xs uppercase tracking-wider shadow-sm z-10">
                Promoted
            </div>

            <h3 className="text-2xl font-extrabold mb-6 flex items-center tracking-tight">
                <ShoppingBag className="w-6 h-6 mr-3 text-primary" /> {title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {MOCK_PRODUCTS.map((item) => (
                    <a
                        key={item.id}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col sm:flex-row gap-4 group border border-border/50 bg-background/50 hover:bg-background rounded-2xl p-4 transition-all hover:border-primary/50 hover:shadow-md"
                    >
                        <div
                            className="w-full sm:w-28 h-28 rounded-xl bg-cover bg-center shrink-0 border border-border/50 group-hover:scale-[1.02] transition-transform"
                            style={{ backgroundImage: `url(${item.image})` }}
                        />
                        <div className="flex flex-col flex-1 justify-between">
                            <div>
                                <h4 className="font-bold text-foreground group-hover:text-primary transition-colors flex items-start gap-2 leading-tight mb-1">
                                    {item.name}
                                </h4>
                                <div className="flex items-center text-primary/80 mb-2">
                                    <Star className="w-3.5 h-3.5 fill-current mr-1" />
                                    <span className="text-xs font-bold">{item.rating}</span>
                                </div>
                                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{item.description}</p>
                            </div>

                            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/50">
                                <span className="font-black text-sm text-foreground">{item.price}</span>
                                <span className="text-xs font-bold text-primary flex items-center">
                                    Shop Now <ExternalLink className="w-3.5 h-3.5 ml-1" />
                                </span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
