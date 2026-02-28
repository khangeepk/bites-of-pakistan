import Link from 'next/link';
import { Facebook, Twitter, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import { AdSlot } from '@/components/ad-slot';

export function Footer() {
    return (
        <footer className="bg-muted py-12 border-t border-border mt-auto">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-2xl font-bold tracking-tight mb-4 group cursor-pointer inline-flex items-center gap-1">
                        <span className="text-primary">Bites</span><span>PK</span>
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        Discover the rich culinary heritage of Pakistan, from legendary Dhabas to your favorite Fast Food joints. Real prices, authentic reviews.
                    </p>
                    <div className="flex space-x-4">
                        <div className="bg-background p-2 rounded-full shadow-sm hover:text-primary transition-colors cursor-pointer border border-border">
                            <Facebook className="w-4 h-4" />
                        </div>
                        <div className="bg-background p-2 rounded-full shadow-sm hover:text-primary transition-colors cursor-pointer border border-border">
                            <Twitter className="w-4 h-4" />
                        </div>
                        <div className="bg-background p-2 rounded-full shadow-sm hover:text-primary transition-colors cursor-pointer border border-border">
                            <Instagram className="w-4 h-4" />
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-4">Top Cities</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li><Link href="/lahore" className="hover:text-primary transition-colors">Lahore (Food Capital)</Link></li>
                        <li><Link href="/karachi" className="hover:text-primary transition-colors">Karachi (City of Lights)</Link></li>
                        <li><Link href="/rawalpindi" className="hover:text-primary transition-colors">Rawalpindi & Islamabad</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-4">Legal & Company</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
                    <ul className="space-y-4 text-sm text-muted-foreground">
                        <li className="flex items-center gap-3">
                            <div className="bg-primary/10 p-2 rounded-full text-primary">
                                <MapPin className="w-4 h-4" />
                            </div>
                            <span>Gulberg III, Lahore</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="bg-primary/10 p-2 rounded-full text-primary">
                                <Phone className="w-4 h-4" />
                            </div>
                            <span>+92 300 1234567</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="bg-primary/10 p-2 rounded-full text-primary">
                                <Mail className="w-4 h-4" />
                            </div>
                            <span>support@bitespk.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12">
                <AdSlot layout="horizontal" adSlotId="footer-ad-1" className="mb-8" />
            </div>

            <div className="container mx-auto px-4 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Bites of Pakistan. All rights reserved. Built with ❤️ for foodies.
            </div>
        </footer>
    );
}
