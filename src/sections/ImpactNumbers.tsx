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
            {/* Subtle background grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" 
                    style={{
                        backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                        backgroundSize: '80px 80px'
                    }}
                />
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
                        Driving <span className="text-yellow-400">innovation</span> through numbers
                    </h2>
                    <p className="text-white/50 mt-6 text-xl">
                        Our solutions have transformed businesses across industries, delivering measurable results and exceptional value.
                    </p>
                </motion.div>

                {/* Clean, professional stat cards */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <StatCard 
                        value={12} 
                        suffix="M+" 
                        label="Active Users" 
                        delay={0} 
                        accentColor="yellow"
                    />
                    <StatCard 
                        value={98} 
                        suffix="%" 
                        label="Client Satisfaction" 
                        delay={0.1} 
                        accentColor="blue"
                    />
                    <StatCard 
                        value={50} 
                        suffix="+" 
                        label="Countries Served" 
                        delay={0.2} 
                        accentColor="purple"
                    />
                    <StatCard 
                        value={24} 
                        suffix="/7" 
                        label="Support Available" 
                        delay={0.3} 
                        accentColor="emerald"
                    />
                </div>
            </div>
        </section>
    );
}

// Clean, professional stat card with subtle animation
const StatCard = ({ 
    value, 
    label, 
    suffix = "", 
    delay = 0,
    accentColor = "yellow"
}: { 
    value: number, 
    label: string, 
    suffix?: string, 
    delay?: number,
    accentColor?: string
}) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    // Map accent colors to Tailwind classes
    const accentColors: Record<string, string> = {
        yellow: "border-yellow-400",
        blue: "border-blue-400",
        purple: "border-purple-400",
        emerald: "border-emerald-400"
    };
    
    const textColors: Record<string, string> = {
        yellow: "text-yellow-400",
        blue: "text-blue-400",
        purple: "text-purple-400",
        emerald: "text-emerald-400"
    };
    
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
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -5 }}
            className="relative"
        >
            <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-8 border-t-2 ${accentColors[accentColor]} transition-all duration-300 hover:bg-white/10 h-full flex flex-col items-center justify-center`}>
                <div className="flex items-baseline mb-4">
                    <span className={`text-5xl md:text-6xl font-bold ${textColors[accentColor]}`}>
                        {Math.floor(count)}
                    </span>
                    <span className="text-2xl font-medium text-white/80 ml-1">
                        {suffix}
                    </span>
                </div>
                
                <div className="w-12 h-0.5 bg-white/20 my-4"></div>
                
                <h3 className="text-xl font-medium text-white text-center">
                    {label}
                </h3>
            </div>
        </motion.div>
    );
};