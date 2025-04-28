'use client'

import { motion } from "framer-motion";
import Tag from "@/components/Tag";

// Add these imports at the top
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const geezNumbers = [
    '፩', '፪', '፫', '፬', '፭', '፮', '፯', '፰', '፱', '፲',
    '፲፩', '፲፪', '፲፫', '፲፬', '፲፭', '፲፮', '፲፯', '፲፰', '፲፱', '፳'
];

const numberPositions = geezNumbers.map(() => ({
    x: Math.random() * 120 - 10, // Spread from -10% to 110% horizontally
    y: Math.random() * 120 - 10, // Spread from -10% to 110% vertically
    rotate: Math.random() * 360
}));

export default function ImpactNumbers() {
    return (
        <section className="py-24 relative overflow-hidden min-h-[900px]">
            <div className="absolute inset-0 p-20">
                {geezNumbers.map((num, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            left: `${numberPositions[index].x}%`,
                            top: `${numberPositions[index].y}%`,
                            transform: `translate(-50%, -50%) rotate(${numberPositions[index].rotate}deg)`,
                            opacity: index === 11 ? 0.6 : 0.15
                        }}
                        className={`
                            ${index === 11 
                                ? 'text-yellow-400 text-[180px] md:text-[250px] font-bold z-10' 
                                : 'text-white text-6xl md:text-7xl'
                            }`}
                    >
                        {num}
                    </div>
                ))}
            </div>

            {/* Rest of your content remains the same */}
            <div className="container relative z-20">
                <div className="flex justify-center">
                    <Tag>Impact</Tag>
                </div>
                <div className="max-w-4xl mx-auto text-center mt-8">
                    <h2 className="text-6xl md:text-7xl font-medium">
                        Driving <span className="text-yellow-400">innovation</span> through numbers
                    </h2>
                    <p className="text-white/50 mt-6 text-xl">
                        Our solutions have transformed businesses across industries, delivering measurable results and exceptional value.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <StatItem endValue={12} label="Active Users" delay={0} isYellow={true} />
                    <StatItem endValue={98} label="Client Satisfaction" delay={0.1} />
                    <StatItem endValue={50} label="Countries Served" delay={0.2} />
                    <StatItem endValue={24} label="Support Available" delay={0.3} />
                </div>
            </div>
        </section>
    );
}

// Add this helper function after your existing geezNumbers array
const toGeez = (num: number) => {
    const geezDigits = ['፩', '፪', '፫', '፬', '፭', '፮', '፯', '፰', '፱'];
    const geezTens = ['፲', '፳', '፴', '፵', '፶', '፷', '፸', '፹', '፺'];
    
    if (num <= 9) return geezDigits[num - 1] || '';
    if (num % 10 === 0 && num <= 90) return geezTens[Math.floor(num / 10) - 1] || '';
    
    const tens = Math.floor(num / 10);
    const ones = num % 10;
    return `${geezTens[tens - 1] || ''}${ones > 0 ? geezDigits[ones - 1] : ''}`;
};

// Replace your Stats Grid section with this:
const StatItem = ({ endValue, label, delay = 0, isYellow = false }) => {
    const [count, setCount] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref);
    
    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const steps = 60;
            const increment = endValue / steps;
            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= endValue) {
                    setCount(endValue);
                    setIsComplete(true);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);
            return () => clearInterval(timer);
        }
    }, [isInView, endValue]);

    return (
        <motion.div
            ref={ref}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay }}
            className="text-center"
        >
            <div className="relative h-[80px] flex items-center justify-center">
                <span className={`text-5xl md:text-6xl font-bold ${isYellow ? 'text-yellow-400' : 'text-white'}`}>
                    {isComplete 
                        ? `${endValue}${endValue === 12 ? 'M+' : endValue === 98 ? '%' : '+'}` 
                        : toGeez(Math.floor(count))}
                </span>
            </div>
            <p className="text-white/50 mt-2">{label}</p>
        </motion.div>
    );
};