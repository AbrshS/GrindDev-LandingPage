'use client'

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const logos = [
    { name: "HubSpot", width: 100 },
    { name: "Dropbox", width: 120 },
    { name: "Square", width: 100 },
    { name: "Intercom", width: 120 },
    { name: "Grammarly", width: 130 },
    { name: "Slack", width: 90 },
    { name: "Notion", width: 110 },
    { name: "Figma", width: 90 }
];

export default function LogoTicker() {
    const [width, setWidth] = useState(0);
    const tickerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (tickerRef.current) {
            setWidth(tickerRef.current.scrollWidth - tickerRef.current.offsetWidth);
        }

        const handleResize = () => {
            if (tickerRef.current) {
                setWidth(tickerRef.current.scrollWidth - tickerRef.current.offsetWidth);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="overflow-hidden">
            <motion.div 
                ref={tickerRef}
                className="flex gap-12 items-center"
                animate={{
                    x: [-width, 0],
                }}
                transition={{
                    x: {
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                    },
                }}
            >
                {logos.concat(logos).map((logo, index) => (
                    <div 
                        key={index} 
                        className="flex-shrink-0 text-neutral-500 font-medium text-xl relative group"
                        style={{ width: logo.width }}
                    >
                        {logo.name}
                        <div className="absolute -bottom-2 left-0 w-full h-px bg-yellow-400/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}