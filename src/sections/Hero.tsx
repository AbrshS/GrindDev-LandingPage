'use client'

import Button from "@/components/Button";
import Image from "next/image"; 
import Pointer from "@/components/pointer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    
    return (
        <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>
                
                {/* Subtle grid */}
                <div className="absolute inset-0 opacity-10" 
                    style={{
                        backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />
                
                {/* Ambient particles */}
                {Array.from({ length: 40 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: Math.random() * 3 + 1,
                            height: Math.random() * 3 + 1,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            backgroundColor: i % 5 === 0 ? '#a855f7' : i % 7 === 0 ? '#ec4899' : '#ffffff',
                        }}
                        animate={{
                            opacity: [0.1, 0.6, 0.1],
                            scale: [1, i % 8 === 0 ? 1.5 : 1, 1],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>
            
            <motion.div 
                style={{ y, opacity }} 
                className="container mx-auto px-4 py-16 text-center flex flex-col items-center"
            >
                {/* Centered content */}
                <motion.div 
                    className="inline-flex items-center gap-2 py-1 px-3 bg-white/10 backdrop-blur-sm rounded-full mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                    </span>
                    <span className="text-sm font-medium text-white/80">Introducing Layers</span>
                </motion.div>
                
                <motion.h1 
                    className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Design without
                    <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                        limitations
                    </span>
                </motion.h1>
                
                <motion.p 
                    className="text-xl text-white/70 mb-8 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Layers empowers creators with intuitive tools that adapt to your workflow, 
                    not the other way around. Break free from complexity and focus on what matters.
                </motion.p>
                
                <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Button 
                        variant="primary" 
                        className="px-8 py-3"
                    >
                        Get Started
                    </Button>
                    <Button 
                        variant="secondary" 
                        className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10"
                    >
                        Watch Demo
                    </Button>
                </motion.div>
                
                {/* UI mockup centered below */}
                <motion.div
                    className="relative z-10 mt-16 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-2xl border border-white/10 p-1 shadow-xl">
                        <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-black/50"></div>
                            
                            {/* UI mockup */}
                            <div className="absolute inset-0 flex flex-col p-4">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="h-6 w-6 rounded-full bg-white/10"></div>
                                        <div className="h-6 w-6 rounded-full bg-purple-500/30"></div>
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div className="flex-1 grid grid-cols-3 gap-3">
                                    <div className="col-span-2 bg-white/5 rounded-lg p-3">
                                        <div className="h-4 w-24 bg-white/20 rounded mb-3"></div>
                                        <div className="h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded"></div>
                                        <div className="h-3 w-full bg-white/10 rounded mt-3"></div>
                                        <div className="h-3 w-2/3 bg-white/10 rounded mt-2"></div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex-1 bg-white/5 rounded-lg p-3">
                                            <div className="h-4 w-12 bg-white/20 rounded mb-3"></div>
                                            <div className="h-3 w-full bg-white/10 rounded"></div>
                                            <div className="h-3 w-4/5 bg-white/10 rounded mt-2"></div>
                                        </div>
                                        <div className="flex-1 bg-white/5 rounded-lg p-3">
                                            <div className="h-4 w-16 bg-white/20 rounded mb-3"></div>
                                            <div className="h-3 w-full bg-white/10 rounded"></div>
                                            <div className="h-3 w-3/4 bg-white/10 rounded mt-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <motion.div 
                        className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.div 
                        className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    />
                </motion.div>
                
                {/* Pointer elements */}
                <div className="relative w-full max-w-4xl mx-auto">
                    <motion.div 
                        className="absolute -left-10 top-1/2 hidden lg:block"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        <Pointer name="ፈጣን"/>
                    </motion.div>
                    <motion.div 
                        className="absolute -right-10 top-1/2 hidden lg:block"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                    >
                        <Pointer name="መገለጫ" color="red"/>
                    </motion.div>
                </div>
                
                {/* Social proof */}
                <motion.div 
                    className="mt-16 pt-8 border-t border-white/10 max-w-3xl mx-auto w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <p className="text-sm text-white/40 mb-4">TRUSTED BY LEADING TEAMS</p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 items-center">
                        {['Airbnb', 'Spotify', 'Slack', 'Notion'].map((company, i) => (
                            <motion.div 
                                key={company}
                                className="text-white/30 font-medium text-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                            >
                                {company}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
