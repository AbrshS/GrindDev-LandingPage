'use client'

import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

const logos = [
    { name: "Quantum", image: quantumLogo },
    { name: "Acme Corp", image: acmeLogo },
    { name: "Echo Valley", image: echoValleyLogo },
    { name: "Pulse", image: pulseLogo },
    { name: "Outside", image: outsideLogo },
    { name: "Apex", image: apexLogo },
    { name: "Celestial", image: celestialLogo },
    { name: "Twice", image: twiceLogo },
];

// Duplicate logos for seamless scrolling
const extendedLogos = [...logos, ...logos];

export default function LogoTicker() {
    const scrollRef = useRef<HTMLDivElement>(null);
    
    return (
        <section className="-mt-52 md:py-24 overflow-hidden ">
            <div className="container">
                
                
                <div className=" relative">
                    {/* Gradient overlays for smooth fade effect */}
                    <div className="absolute left-0 top-0 z-10 h-full w-[100px] bg-gradient-to-r from-black to-transparent"></div>
                    <div className="absolute right-0 top-0 z-10 h-full w-[100px] bg-gradient-to-l from-black to-transparent"></div>
                
                    {/* First row - scrolling left */}
                    <div className="mb-12 overflow-hidden" ref={scrollRef}>
                        <motion.div 
                            className="flex items-center gap-20 md:gap-28"
                            initial={{ x: 0 }}
                            animate={{ x: "-50%" }}
                            transition={{ 
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            {extendedLogos.map((logo, index) => (
                                <Image 
                                    key={`${logo.name}-${index}`}
                                    src={logo.image} 
                                    alt={logo.name} 
                                    className="w-auto h-10 opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                                />
                            ))}
                        </motion.div>
                    </div>
                    
                   
                </div>
            </div>
        </section>
    );
}
