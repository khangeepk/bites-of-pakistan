"use client";

import { motion } from "framer-motion";
import { Search, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { TrendingCarousel } from "@/components/trending-carousel";
import { FastFoodCarousel } from "@/components/fast-food-carousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradient / Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-background to-orange-900/20 dark:from-orange-500/10 dark:via-background dark:to-orange-900/10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=2850&auto=format&fit=crop')] bg-cover bg-center opacity-10 dark:opacity-20 mix-blend-overlay" />

        <div className="container relative z-10 px-4 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-6 inline-block border border-primary/20 shadow-sm shadow-primary/10">
              #1 Food Discovery Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 max-w-5xl"
          >
            Discover Pakistan's <br className="hidden md:block" />
            <span className="text-primary">Legendary Tastes</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl font-medium"
          >
            From the bustling streets of Lahore to the coastal breeze of Karachi, find the best Dhabas and premium Fast Food joints near you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-4xl bg-background dark:bg-card p-2 rounded-full shadow-2xl border border-border flex flex-col md:flex-row items-center gap-2"
          >
            <div className="flex-1 flex items-center px-4 w-full border-b md:border-b-0 md:border-r border-border py-4 md:py-0">
              <MapPin className="text-primary w-6 h-6 mr-3 shrink-0" />
              <select defaultValue="" className="bg-transparent border-none outline-none w-full text-foreground cursor-pointer appearance-none font-medium text-lg">
                <option value="" disabled>Select your city...</option>
                <option value="lahore">Lahore</option>
                <option value="karachi">Karachi</option>
                <option value="islamabad">Islamabad</option>
                <option value="rawalpindi">Rawalpindi</option>
                <option value="peshawar">Peshawar</option>
              </select>
            </div>

            <div className="flex-[2] flex items-center px-4 w-full py-4 md:py-0">
              <Search className="text-muted-foreground w-6 h-6 mr-3 shrink-0" />
              <input
                type="text"
                placeholder="Craving Nihari, Biryani, or Pizza?..."
                className="bg-transparent border-none outline-none w-full text-foreground placeholder:text-muted-foreground font-medium text-lg"
              />
            </div>

            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-5 rounded-full font-bold transition-all w-full md:w-auto mt-2 md:mt-0 shadow-lg shadow-primary/30 shrink-0 text-lg">
              Find Food
            </button>
          </motion.div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight">Explore Categories</h2>
            <Link href="/categories" className="text-primary font-bold flex items-center hover:underline text-lg">
              View all <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Legendary Dhabas', 'International Fast Food', 'Traditional Sweets', 'Late Night Cravings'].map((category, i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer relative"
              >
                <div className="relative h-64 rounded-3xl overflow-hidden mb-4 shadow-sm border border-border group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20" />
                  <div className="absolute inset-0 bg-card/10 flex items-center justify-center text-muted">
                    <span className="text-xs opacity-50 block w-full h-full bg-[url('https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"></span>
                  </div>
                  <h3 className="absolute bottom-6 left-6 z-30 text-white font-bold text-2xl max-w-[80%] leading-tight">{category}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TrendingCarousel />
      <FastFoodCarousel />
    </div>
  );
}
