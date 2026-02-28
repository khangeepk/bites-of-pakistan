"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen py-24 bg-muted/20">
            <div className="container mx-auto px-4 max-w-5xl">
                <h1 className="text-5xl font-black mb-4 tracking-tight">Contact Us</h1>
                <p className="text-xl text-muted-foreground mb-12">Have a question or want to list your restaurant? We'd love to hear from you.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-bold mb-2">Name</label>
                                <input type="text" className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:bg-background transition-colors" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Email</label>
                                <input type="email" className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:bg-background transition-colors" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Message</label>
                                <textarea className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:bg-background transition-colors min-h-[150px]" placeholder="How can we help?" />
                            </div>
                            <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-xl shadow-lg mt-4 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Details */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                            <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Our Office</h4>
                                    <p className="text-muted-foreground mt-1">Gulberg III, Main Boulevard<br />Lahore, Pakistan</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Phone Number</h4>
                                    <p className="text-muted-foreground mt-1">+92 300 1234567<br />(WhatsApp Available)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Email Support</h4>
                                    <p className="text-muted-foreground mt-1">support@bitespk.com<br />partnerships@bitespk.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
