"use client";

import { AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface AdSlotProps {
    className?: string;
    adSlotId?: string; // e.g., '1234567890' for AdSense
    layout?: "horizontal" | "vertical" | "rectangle";
}

export function AdSlot({ className = "", adSlotId, layout = "horizontal" }: AdSlotProps) {
    const [isDev, setIsDev] = useState(true);

    useEffect(() => {
        // In production, you would check window.location.hostname
        setIsDev(process.env.NODE_ENV === 'development');

        // AdSense Initialization Logic (only in prod)
        if (!isDev && typeof window !== 'undefined') {
            try {
                // @ts-ignore
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (err) {
                console.error("AdSense Error:", err);
            }
        }
    }, [isDev]);

    const heightClass = layout === 'horizontal' ? 'h-24' : layout === 'rectangle' ? 'h-64' : 'h-96 w-64';

    return (
        <div className={`w-full overflow-hidden flex items-center justify-center my-8 ${className}`}>
            {isDev ? (
                // Development Placeholder
                <div className={`w-full bg-muted/60 border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center text-muted-foreground ${heightClass}`}>
                    <AlertCircle className="w-6 h-6 mb-2 opacity-50" />
                    <span className="text-sm font-bold uppercase tracking-widest opacity-50">Google AdSense Space</span>
                    <span className="text-xs opacity-40 mt-1">({layout} Layout)</span>
                </div>
            ) : (
                // Production AdSense Tag
                <ins
                    className={`adsbygoogle ${className}`}
                    style={{ display: "block", minHeight: layout === "horizontal" ? "90px" : "250px" }}
                    data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Replace with actual Client ID
                    data-ad-slot={adSlotId || "1234567890"}
                    data-ad-format={layout === "rectangle" ? "fluid" : "auto"}
                    data-full-width-responsive="true"
                />
            )}
        </div>
    );
}
