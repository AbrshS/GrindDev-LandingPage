'use client'

import Button from "@/components/Button";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import LogoTicker from "@/sections/LogoTicker";

export default function Hero() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });
    
    // Advanced scroll-based animations
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
    const titleScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
    const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -20]);
    
    return (
        <section ref={sectionRef} className="py-24 overflow-hidden relative min-h-screen flex flex-col justify-center">
            {/* Enhanced grid background with subtle animation */}
            <div className="absolute inset-0 -z-10">
                <motion.div 
                    className="h-full w-full" 
                    animate={{ 
                        backgroundPosition: ['0px 0px', '20px 20px', '0px 0px'] 
                    }}
                    transition={{ 
                        duration: 20, 
                        ease: "linear", 
                        repeat: Infinity 
                    }}
                    style={{
                        backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                        backgroundSize: '80px 80px',
                    }}
                />
                
                {/* Subtle glow effects */}
                <motion.div 
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-yellow-400/5 blur-[100px] -z-10"
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                
                <motion.div 
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-green-400/5 blur-[100px] -z-10"
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 4
                    }}
                />
            </div>

            <motion.div style={{ y, opacity, scale }} className="container relative mx-auto px-4">
                {/* Avatar circles with icons instead of people - with subtle hover effects */}
                <motion.div 
                    className="absolute left-10 top-10 w-16 h-16 hidden lg:block"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="w-full h-full bg-neutral-800 rounded-full border border-neutral-700 flex items-center justify-center group hover:border-yellow-400/50 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                            <path d="M2 17l10 5 10-5"></path>
                            <path d="M2 12l10 5 10-5"></path>
                        </svg>
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-green-600 rounded-full animate-pulse"></div>
                    </div>
                </motion.div>

                <motion.div 
                    className="absolute right-10 top-10 w-16 h-16 hidden lg:block"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="w-full h-full bg-neutral-800 rounded-full border border-neutral-700 flex items-center justify-center group hover:border-yellow-400/50 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                    </div>
                    <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-green-600 rounded-full animate-pulse"></div>
                    </div>
                </motion.div>

                <motion.div 
                    className="absolute left-10 bottom-10 w-16 h-16 hidden lg:block"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="w-full h-full bg-neutral-800 rounded-full border border-neutral-700 flex items-center justify-center group hover:border-yellow-400/50 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-green-600 rounded-full animate-pulse"></div>
                    </div>
                </motion.div>

                <motion.div 
                    className="absolute right-10 bottom-10 w-16 h-16 hidden lg:block"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="w-full h-full bg-neutral-800 rounded-full border border-neutral-700 flex items-center justify-center group hover:border-yellow-400/50 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                        </svg>
                    </div>
                    <div className="absolute -top-3 -left-3 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-green-600 rounded-full animate-pulse"></div>
                    </div>
                </motion.div>

                {/* Enhanced badge with subtle animation */}
                <div className="flex justify-center mb-8">
                    <motion.div 
                        className="inline-flex items-center py-1.5 px-3 bg-neutral-900 border border-neutral-800 text-white rounded-full"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 0 15px rgba(234, 179, 8, 0.2)"
                        }}
                    >
                        <motion.svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="text-yellow-400 mr-2"
                            animate={{ rotate: [0, 10, 0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                        >
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                        </motion.svg>
                        <span className="text-sm font-medium">CREATE FOR FAST</span>
                    </motion.div>
                </div>
              
                {/* Main headline with zoom effect on scroll */}
                <motion.h1 
                    className="text-5xl sm:text-6xl md:text-7xl font-medium text-center mt-6 max-w-4xl mx-auto leading-tight"
                    style={{ scale: titleScale, y: titleY }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    One tool to <span className="relative inline-block">
                        manage
                        <motion.span 
                            className="absolute bottom-2 left-0 w-full h-2 bg-yellow-400/50"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        ></motion.span>
                    </span> contracts and your team
                </motion.h1>

                {/* Subheadline with staggered reveal */}
                <motion.p 
                    className="text-center text-lg text-neutral-400 mt-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Clause helps legal teams work faster, smarter and more efficiently, delivering the visibility 
                    and data-driven insights to mitigate risk and ensure compliance.
                </motion.p>

                {/* CTA buttons with enhanced hover effects */}
                <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Button
                            variant="primary"
                            className="px-6 py-3 bg-green-800 hover:bg-green-700 text-white font-medium rounded-md relative overflow-hidden group"
                        >
                            <span className="relative z-10">Start for Free</span>
                            <motion.span 
                                className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-600 -z-10"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.4 }}
                            />
                        </Button>
                    </motion.div>
                    
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Button
                            variant="secondary"
                            className="px-6 py-3 bg-transparent border border-neutral-700 hover:bg-neutral-800 text-white font-medium rounded-md relative overflow-hidden group"
                        >
                            <span className="relative z-10">Get a Demo</span>
                            <motion.span 
                                className="absolute inset-0 bg-neutral-800 -z-10"
                                initial={{ y: "100%" }}
                                whileHover={{ y: 0 }}
                                transition={{ duration: 0.4 }}
                            />
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Company logos ticker with enhanced header */}
                
            </motion.div>
            
            {/* Scroll indicator */}
            <motion.div 
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
            >
                <p className="text-xs text-neutral-500 mb-2">Scroll to explore</p>
                <motion.div 
                    className="w-5 h-9 border border-neutral-700 rounded-full flex justify-center pt-1"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <motion.div 
                        className="w-1 h-2 bg-yellow-400 rounded-full"
                        animate={{ 
                            y: [0, 15, 0],
                            opacity: [1, 0.5, 1]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
