'use client'

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tag from "@/components/Tag";

export default function Introduction() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const [isInView, setIsInView] = useState(false);
    
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    
    const fontWeight = useTransform(scrollYProgress, [0, 0.5, 1], [300, 600, 900]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);
    const letterSpacing = useTransform(scrollYProgress, [0, 0.5, 1], ["-0.02em", "0em", "0.02em"]);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );
        
        if (textRef.current) {
            observer.observe(textRef.current);
        }
        
        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);
    
    return (
        <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center items-center py-20 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24 flex justify-center"
                >
                  
                    <Tag>
                    INTRODUCING LAYERS
                    </Tag>
                </motion.div>
                
                <div ref={textRef} className="relative">
                    {/* Words that animate to bold on scroll */}
                    <motion.p 
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight md:leading-tight tracking-tight"
                        style={{ 
                            fontWeight,
                            scale,
                            letterSpacing
                        }}
                    >
                        <motion.span 
                            className="inline-block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            We believe
                        </motion.span>{" "}
                        <motion.span 
                            className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            creative tools
                        </motion.span>{" "}
                        <motion.span 
                            className="inline-block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            should empower, not
                        </motion.span>{" "}
                        <motion.span 
                            className="inline-block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            constrain.
                        </motion.span>{" "}
                        <motion.span 
                            className="inline-block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                        >
                            Your
                        </motion.span>{" "}
                        <motion.span 
                            className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                        >
                            creative process
                        </motion.span>{" "}
                        <motion.span 
                            className="inline-block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 1.3 }}
                        >
                            deserves better than
                        </motion.span>{" "}
                        <motion.span 
                            className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                        >
                            complexity
                        </motion.span>{" "}
                        <motion.span 
                            className="inline-block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 1.7 }}
                        >
                            and
                        </motion.span>{" "}
                        <motion.span 
                            className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 1.9 }}
                        >
                            frustration.
                        </motion.span>
                    </motion.p>
                </div>
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                    transition={{ duration: 0.8, delay: 2.1 }}
                    className="mt-12 md:mt-16"
                >
                    <p className="text-xl md:text-2xl text-white/60 max-w-3xl">
                        That's why we built Layers — a design tool that adapts to your workflow, not the other way around.
                    </p>
                </motion.div>
            </div>
            
            {/* Subtle background gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
        </section>
    );
}
