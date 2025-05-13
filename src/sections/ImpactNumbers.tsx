'use client'

import { motion } from "framer-motion";
import Tag from "@/components/Tag";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export default function ImpactNumbers() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
    
    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden">
            {/* Statistical luxury background */}
            <div className="absolute inset-0 opacity-5">
                {/* Grid lines */}
                <div className="absolute inset-0" 
                    style={{
                        backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 1px, transparent 1px)',
                        backgroundSize: '80px 80px'
                    }}
                />
                
                {/* Statistical elements */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1">
                        {/* Bar chart */}
                        <motion.path 
                            d="M100,500 L100,400 L140,400 L140,500 Z" 
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 0.1 }}
                        />
                        <motion.path 
                            d="M160,500 L160,350 L200,350 L200,500 Z" 
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 0.2 }}
                        />
                        <motion.path 
                            d="M220,500 L220,300 L260,300 L260,500 Z" 
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 0.3 }}
                        />
                        <motion.path 
                            d="M280,500 L280,250 L320,250 L320,500 Z" 
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 0.4 }}
                        />
                        
                        {/* Line graph */}
                        <motion.path 
                            d="M500,400 L550,380 L600,390 L650,350 L700,320 L750,340 L800,300" 
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                            transition={{ duration: 2, delay: 0.5 }}
                        />
                        
                        {/* Pie chart */}
                        <motion.path 
                            d="M900,350 L900,300 A50,50 0 0,1 943,325 Z" 
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 1, delay: 0.6 }}
                        />
                        <motion.path 
                            d="M900,350 L943,325 A50,50 0 0,1 925,375 Z" 
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 1, delay: 0.7 }}
                        />
                        <motion.path 
                            d="M900,350 L925,375 A50,50 0 0,1 875,375 Z" 
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 1, delay: 0.8 }}
                        />
                        <motion.path 
                            d="M900,350 L875,375 A50,50 0 0,1 857,325 Z" 
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 1, delay: 0.9 }}
                        />
                        <motion.path 
                            d="M900,350 L857,325 A50,50 0 0,1 900,300 Z" 
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 1, delay: 1 }}
                        />
                    </g>
                </svg>
            </div>
            
            {/* Main content */}
            <div className="container relative z-20">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="flex justify-center"
                >
                    <Tag>Impact</Tag>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="max-w-4xl mx-auto text-center mt-8"
                >
                    <h2 className="text-6xl md:text-7xl font-medium">
                        Driving <span className="relative">
                            innovation
                            <motion.span 
                                className="absolute -bottom-2 left-0 w-full h-0.5 bg-white/30"
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "100%" } : {}}
                                transition={{ duration: 1, delay: 0.8 }}
                            />
                        </span> through numbers
                    </h2>
                    <p className="text-white/50 mt-6 text-xl">
                        Our solutions have transformed businesses across industries, delivering measurable results and exceptional value.
                    </p>
                </motion.div>

                {/* Simple, clean stat display */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <SimpleStatDisplay 
                        value={12} 
                        suffix="M+" 
                        label="Active Users" 
                        delay={0} 
                    />
                    <SimpleStatDisplay 
                        value={98} 
                        suffix="%" 
                        label="Client Satisfaction" 
                        delay={0.1} 
                    />
                    <SimpleStatDisplay 
                        value={50} 
                        suffix="+" 
                        label="Countries Served" 
                        delay={0.2} 
                    />
                    <SimpleStatDisplay 
                        value={24} 
                        suffix="/7" 
                        label="Support Available" 
                        delay={0.3} 
                    />
                </div>
            </div>
        </section>
    );
}

// Simple, clean stat display with minimal styling
const SimpleStatDisplay = ({ 
    value, 
    label, 
    suffix = "", 
    delay = 0
}: { 
    value: number, 
    label: string, 
    suffix?: string, 
    delay?: number
}) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const steps = 50;
            const increment = value / steps;
            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);
            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <motion.div
            ref={ref}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay }}
            className="text-center"
        >
            <div className="flex items-baseline justify-center mb-4">
                <motion.span 
                    className="text-6xl md:text-7xl font-light"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: delay + 0.1 }}
                >
                    {Math.floor(count)}
                </motion.span>
                <motion.span 
                    className="text-2xl font-light ml-1"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: delay + 0.2 }}
                >
                    {suffix}
                </motion.span>
            </div>
            
            <motion.div 
                className="w-12 h-px bg-white/20 mx-auto my-3"
                initial={{ width: 0 }}
                animate={isInView ? { width: 48 } : {}}
                transition={{ duration: 0.8, delay: delay + 0.3 }}
            />
            
            <motion.h3 
                className="text-xl font-light text-white/80"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: delay + 0.4 }}
            >
                {label}
            </motion.h3>
        </motion.div>
    );
};