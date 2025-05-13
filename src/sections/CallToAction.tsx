'use client'

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function CallToAction() {
    const scrollRef = useRef<HTMLDivElement>(null);
    
    // Services to display in the scrolling banner
    const services = [
        "Web Development",
        "App Development",
        "Artificial Intelligence",
        "Machine Learning",
        "Payment Integration",
        "E-commerce"
    ];
    
    // Duplicate the services array to create a seamless loop
    const extendedServices = [...services, ...services];
    
    useEffect(() => {
        // Optional: Add any additional initialization logic here
    }, []);
    
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-blue-500/10 opacity-20"></div>
            
            {/* First row - scrolling left */}
            <div className="overflow-hidden mb-8">
                <motion.div 
                    className="flex gap-16 text-6xl md:text-7xl font-medium whitespace-nowrap"
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{ 
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {extendedServices.map((service, index) => (
                        <div key={`service-1-${index}`} className="flex items-center gap-8">
                            <motion.span 
                                className="text-yellow-400 text-5xl md:text-6xl"
                                animate={{ 
                                    rotate: [0, 360],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ 
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.5
                                }}
                            >
                                &#10038;
                            </motion.span>
                            <span>{service}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
            
            {/* Second row - scrolling right (opposite direction) */}
            <div className="overflow-hidden">
                <motion.div 
                    className="flex gap-16 text-6xl md:text-7xl font-medium whitespace-nowrap"
                    initial={{ x: "50%" }}
                    animate={{ x: "0%" }}
                    transition={{ 
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {extendedServices.map((service, index) => (
                        <div key={`service-2-${index}`} className="flex items-center gap-8">
                            <motion.span 
                                className="text-blue-400 text-5xl md:text-6xl"
                                animate={{ 
                                    rotate: [0, -360],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ 
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.5
                                }}
                            >
                                &#10038;
                            </motion.span>
                            <span>{service}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
            
            {/* CTA Button */}
            <div className="mt-16 text-center">
                <motion.button
                    className="bg-white text-black px-8 py-4 rounded-full text-xl font-medium hover:bg-white/90 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Get Started Today
                </motion.button>
            </div>
        </section>
    );
}