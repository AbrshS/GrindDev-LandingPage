'use client'

import Button from "@/components/Button";
import Image from "next/image";
 import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LogoTicker from "@/sections/LogoTicker";

// Tech stack icons for the background
const techIcons = [
    <svg key="react" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1" className="text-neutral-800/30"><path d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/><path d="M12 22.5c-5.187 0-9.375-2.25-9.375-5.25S6.813 12 12 12s9.375 2.25 9.375 5.25S17.187 22.5 12 22.5Z"/><path d="M12 22.5c5.187 0 9.375-4.5 9.375-10.5S17.187 1.5 12 1.5 2.625 6 2.625 12 6.813 22.5 12 22.5Z"/></svg>,
    <svg key="node" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1" className="text-neutral-800/30"><path d="M12 1.5c-.5 0-1 .125-1.45.375L3.3 5.65c-.9.5-1.45 1.45-1.45 2.475v7.75c0 1.025.55 1.975 1.45 2.475l7.25 3.775c.45.25.95.375 1.45.375s1-.125 1.45-.375l7.25-3.775c.9-.5 1.45-1.45 1.45-2.475v-7.75c0-1.025-.55-1.975-1.45-2.475L13.45 1.875C13 1.625 12.5 1.5 12 1.5Z"/></svg>,
    <svg key="js" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1" className="text-neutral-800/30"><path d="M3 3h18v18H3V3Zm16.525 13.4c-.1-1.05-.675-1.925-2.225-2.75-.55-.275-1.175-.45-1.35-.875-.075-.275-.075-.425-.05-.575.075-.55.525-.7.85-.55.225.1.45.35.575.75.6-.4.6-.4 1.025-.675-.15-.25-.225-.35-.325-.45-.35-.4-.825-.6-1.575-.6l-.4.05c-.375.1-.75.3-1 .575-1.05 1.175-.75 3.225.525 4.075.625.425 1.5.65 1.626 1.175.1.7-.525.925-1.175.85-.5-.075-.775-.35-1.075-.8l-1.125.65c.125.3.275.425.5.675 1.075 1.075 3.75.975 4.225-.625.025-.075.175-.575.05-1.35l.1.1Zm-5.2-4.2h-1.375c0 1.2-.006 2.4-.006 3.6 0 .75.037 1.45-.085 1.65-.2.4-.725.35-1 .275-.25-.125-.375-.3-.525-.55-.04-.075-.075-.15-.085-.15l-1.125.7c.185.425.45.8.8 1.025.5.325 1.175.425 1.875.275.45-.15.85-.45 1.05-.9.3-.6.25-1.35.25-2.15.006-1.3.006-2.6.006-3.9l.225.025Z"/></svg>,
    <svg key="python" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1" className="text-neutral-800/30"><path d="M11.458 3.5c-2.485 0-4.46.685-5.458 1.902-.999 1.218-1.175 2.525-1.175 4.1v1.865h5.332V12H3.208c-1.56 0-2.855.39-3.68 1.806-.825 1.415-.664 3.3-.664 4.042 0 .742-.144 2.602.68 3.894.825 1.292 2.076 1.758 3.664 1.758h1.458v-2.807c0-1.85 1.58-3.577 3.458-3.577h5.5c1.878 0 3.25-1.112 3.25-2.989V9.502c0-1.878-1.372-3.25-3.25-3.25h-5.5c-1.878 0-3.458-1.486-3.458-3.336V1.5h3.792Zm-1.458 2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/><path d="M12.542 20.5c2.485 0 4.46-.685 5.458-1.902.999-1.218 1.175-2.525 1.175-4.1v-1.865h-5.332V12H20.792c1.56 0 2.855-.39 3.68-1.806.825-1.415.664-3.3.664-4.042 0-.742.144-2.602-.68-3.894C23.631.966 22.38.5 20.792.5h-1.458v2.807c0 1.85-1.58 3.577-3.458 3.577h-5.5c-1.878 0-3.25 1.112-3.25 2.989v5.627c0 1.878 1.372 3.25 3.25 3.25h5.5c1.878 0 3.458 1.486 3.458 3.336V22.5h-3.792Zm1.458-2.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/></svg>,
    <svg key="aws" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1" className="text-neutral-800/30"><path d="M7.5 15.75h.75v.75H7.5v-.75Zm.75-3.75H7.5v.75h.75V12Zm-3.75 3.75h.75v.75H4.5v-.75Zm.75-3.75H4.5v.75h.75V12Zm9 3.75h.75v.75h-.75v-.75Zm.75-3.75h-.75v.75h.75V12Zm-3.75 3.75h.75v.75h-.75v-.75Zm.75-3.75h-.75v.75h.75V12Zm9 3.75h.75v.75h-.75v-.75Zm.75-3.75h-.75v.75h.75V12Zm-3.75 3.75h.75v.75h-.75v-.75Zm.75-3.75h-.75v.75h.75V12ZM1.5 8.25h21v7.5h-21v-7.5Z"/></svg>,
    <svg key="docker" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1" className="text-neutral-800/30"><path d="M13.983 6.03h2.02v-2.03h-2.02v2.03Zm-3.048 0h2.02v-2.03h-2.02v2.03Zm-3.047 0h2.02v-2.03h-2.02v2.03Zm-3.048 0h2.02v-2.03h-2.02v2.03Zm3.048-3.046h2.02V.953h-2.02v2.03Zm3.047 0h2.02V.953h-2.02v2.03Zm3.048 0h2.02V.953h-2.02v2.03ZM4.84 9.076h2.02v-2.03H4.84v2.03Zm3.047 0h2.02v-2.03h-2.02v2.03Zm3.048 0h2.02v-2.03h-2.02v2.03Zm3.047 0h2.02v-2.03h-2.02v2.03Zm3.048 0h2.02v-2.03h-2.02v2.03Zm3.047 0h2.02v-2.03h-2.02v2.03Z"/><path d="M21.047 10.092c0-.507-.406-.914-.914-.914s-.914.407-.914.914.407.914.914.914.914-.407.914-.914Z"/><path d="M22.54 12.122c-.102-.304-.406-.507-.71-.507-.102 0-.203 0-.305.102-.203-.914-.71-1.624-1.523-2.234l-.305-.203-.203.305c-.406.61-.508 1.624-.406 2.335.05.305.203.71.406 1.015-.305.203-.914.508-1.726.508H.584l-.102.305c-.203.914-.203 1.828.102 2.742.305.914.914 1.624 1.624 2.132 1.422.914 2.844.914 4.266.508.762-.203 1.523-.71 2.234-1.32.406.407 1.015.61 1.624.61h.305v-2.03h-.305c-.305 0-.61-.102-.812-.305v2.335h-1.32v-2.335h-1.32v2.335h-1.32v-2.335c-.711.61-1.523 1.015-2.335 1.218-1.117.305-2.234.305-3.25-.203-.813-.406-1.32-.914-1.624-1.726-.305-.71-.305-1.421-.203-2.03h.508c.914 0 1.726-.203 2.437-.61.203-.102.406-.203.508-.305h1.32c.508 0 1.015-.102 1.422-.305h.102c.304.203.71.305 1.116.305h1.32c.508 0 1.015-.102 1.422-.305h.102c.305.203.71.305 1.117.305h1.32c.508 0 1.015-.102 1.422-.305h.102c.305.203.71.305 1.117.305h.812c.305.508.813.914 1.32 1.117.305.102.71.203 1.016.203.406 0 .812-.102 1.218-.305.508-.203.914-.508 1.32-.914l.101-.102c.102-.102.102-.203.102-.305 0-.203-.102-.305-.203-.406Z"/></svg>,
    <svg key="typescript" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1" className="text-neutral-800/30"><path d="M3 3h18v18H3V3Zm12 10.875h1.5V12H12v1.875h1.5v5.25H15v-5.25Zm-4.5 5.25c.375 0 .75-.075 1.125-.15.375-.15.675-.3.975-.525l-.75-1.2c-.15.15-.375.225-.6.3-.225.075-.45.15-.675.15-.3 0-.525-.075-.75-.3-.225-.15-.3-.45-.3-.9V12h3V9.75H7.5V7.5H6v2.25H4.5V12H6v3.75c0 .525.075 1.05.3 1.425.15.375.45.675.75.9.375.225.75.3 1.2.375.075 0 .15 0 .225 0l.025-.075Z"/></svg>,
    <svg key="graphql" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1" className="text-neutral-800/30"><path d="m4.136 11.146 7.43-4.29m8.3 4.29-7.43-4.29m0 12.87V7.5M5.5 18.01l7.5 2.25 7.5-2.25M5.5 5.99l7.5-2.25 7.5 2.25M3.5 15.844v-7.69m17 7.69v-7.69m-15.365 9.5 13.73-11.31M5.135 5.656l13.73 11.31"/><path d="M12 22.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM12 6a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM3.5 15.844a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM20.5 15.844a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM5.135 5.656a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM18.865 5.656a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM5.135 22.844a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM18.865 22.844a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"/></svg>,
    <svg key="nextjs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1" className="text-neutral-800/30"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 0-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-.78-1.963-1.698l-1.928-1.678-2.404-2.102c-1.32-1.157-2.408-2.106-2.408-2.108 0-.002 1.099-.868 2.443-1.923 2.653-2.09 3.409-2.684 3.89-3.055.138-.106.073-.138-.399-.193a13.49 13.49 0 0 1-.125-.016 1.8 1.8 0 0 0-.546.026c-.491.108-.908.425-1.505 1.14a41.383 41.383 0 0 0-1.333 1.735v.001c0 .002-.846-1.048-1.88-2.333l-1.88-2.335-1.876-2.333c-1.042-1.294-1.891-2.342-1.898-2.332-.007.01-.013 5.26-.013 11.667l-.001 11.648 1.037.088a16.702 16.702 0 0 0 1.9.085 16.61 16.61 0 0 0 1.814-.079l.961-.09.048-7.697.048-7.697.937 1.427c.516.785 1.246 1.897 1.622 2.473 1.035 1.586 1.706 2.606 3.211 4.907 1.974 3.018 2.564 3.911 2.694 4.073.106.134.239.259.339.315.235.135.492.177.813.137.21-.027.535-.145.697-.254.109-.072.581-.513 1.796-1.664 1.372-1.303 2.49-2.378 3.766-3.631l2.233-2.19.068-11.75.068-11.75-.933-.078a17.105 17.105 0 0 0-1.9-.085 16.78 16.78 0 0 0-1.822.086l-.971.087-.046 7.703-.047 7.703-.497-.758c-.273-.417-.994-1.516-1.602-2.441-1.092-1.662-1.693-2.578-2.931-4.469-1.254-1.915-2.484-3.772-2.607-3.94a2.229 2.229 0 0 0-.356-.433c-.376-.341-.866-.522-1.39-.513Z"/></svg>
];

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
    
    // Generate tech stack icons for the background
    const [floatingIcons, setFloatingIcons] = useState([]);
    
    useEffect(() => {
        // Generate random positions for tech stack icons
        const generateIcons = () => {
            const newIcons = [];
            const iconCount = window.innerWidth < 768 ? 10 : 20;
            
            for (let i = 0; i < iconCount; i++) {
                const icon = techIcons[Math.floor(Math.random() * techIcons.length)];
                const size = Math.random() * 20 + 20; // 20-40px
                const left = Math.random() * 100;
                const delay = Math.random() * 20;
                const duration = Math.random() * 30 + 50; // 50-80s
                const opacity = Math.random() * 0.15 + 0.05; // 0.05-0.2
                
                newIcons.push({
                    icon,
                    style: {
                        position: 'absolute',
                        left: `${left}%`,
                        top: '-50px',
                        width: `${size}px`,
                        height: `${size}px`,
                        opacity: opacity,
                        animationDelay: `${delay}s`,
                        animationDuration: `${duration}s`
                    }
                });
            }
            
            setFloatingIcons(newIcons);
        };
        
        generateIcons();
        
        // Regenerate on window resize
        const handleResize = () => {
            generateIcons();
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <section ref={sectionRef} className="py-24 -mt-14 overflow-hidden relative min-h-screen flex flex-col justify-center">
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
                
                {/* Floating tech stack icons */}
                <div className="absolute inset-0 overflow-hidden">
                    {floatingIcons.map((item, index) => (
                        <motion.div
                            key={index}
                            className="absolute"
                            style={item.style}
                            initial={{ y: -50 }}
                            animate={{ y: '120vh' }}
                            transition={{
                                duration: parseInt(item.style.animationDuration),
                                delay: parseInt(item.style.animationDelay),
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            {item.icon}
                        </motion.div>
                    ))}
                </div>
                
                {/* Subtle glow effects */}
                <motion.div 
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-yellow-500/5 blur-[100px] -z-10"
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
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-[100px] -z-10"
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
                {/* Avatar circles with software-related icons */}
                <motion.div 
                    className="absolute left-10 top-10 w-16 h-16 hidden lg:block"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="w-full h-full bg-neutral-800 rounded-full border border-neutral-700 flex items-center justify-center group hover:border-yellow-400/50 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-yellow-600 rounded-full animate-pulse"></div>
                    </div>
                </motion.div>

                <motion.div 
                    className="absolute right-10 top-10 w-16 h-16 hidden lg:block"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="w-full h-full bg-neutral-800 rounded-full border border-neutral-700 flex items-center justify-center group hover:border-yellow-400/50 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                            <path d="M18 10h-4V4h-4v6H6l6 6 6-6z"></path>
                            <path d="M12 16v4"></path>
                            <path d="M8 20h8"></path>
                        </svg>
                    </div>
                    <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-yellow-600 rounded-full animate-pulse"></div>
                    </div>
                </motion.div>

                <motion.div 
                    className="absolute left-10 bottom-10 w-16 h-16 hidden lg:block"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="w-full h-full bg-neutral-800 rounded-full border border-neutral-700 flex items-center justify-center group hover:border-yellow-400/50 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                    </div>
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-yellow-600 rounded-full animate-pulse"></div>
                    </div>
                </motion.div>

                <motion.div 
                    className="absolute right-10 bottom-10 w-16 h-16 hidden lg:block"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="w-full h-full bg-neutral-800 rounded-full border border-neutral-700 flex items-center justify-center group hover:border-yellow-400/50 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                            <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
                        </svg>
                    </div>
                    <div className="absolute -top-3 -left-3 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-yellow-600 rounded-full animate-pulse"></div>
                    </div>
                </motion.div>

                {/* Enhanced badge with subtle animation - updated for software */}
                <div className="flex justify-center mb-8">
                    <motion.div 
                        className="inline-flex items-center py-1.5 px-3 bg-neutral-900 border border-neutral-800 text-white rounded-full"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 0 15px rgba(234, 179, 8, 0.3)"
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
                            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                            <line x1="16" y1="8" x2="2" y2="22"></line>
                            <line x1="17.5" y1="15" x2="9" y2="15"></line>
                        </motion.svg>
                        <span className="text-sm font-medium">BUILT FOR DEVELOPERS</span>
                    </motion.div>
                </div>
              
                {/* Main headline with zoom effect on scroll - updated for software company */}
                <motion.h1 
                    className="text-5xl sm:text-6xl md:text-7xl font-medium text-center mt-6 max-w-4xl mx-auto leading-tight"
                    style={{ scale: titleScale, y: titleY }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Powerful tools to <span className="relative inline-block">
                        accelerate
                        <motion.span 
                            className="absolute bottom-2 left-0 w-full h-2 bg-yellow-400/50"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        ></motion.span>
                    </span> your development workflow
                </motion.h1>

                {/* Subheadline with staggered reveal - updated for software company */}
                <motion.p 
                    className="text-center text-lg text-neutral-400 mt-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    DevFlow helps engineering teams ship better code faster with AI-powered tools, 
                    automated workflows, and deep integrations across your development stack.
                </motion.p>

                {/* CTA buttons with enhanced hover effects - updated colors */}
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
                            className="w-full sm:w-auto px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-md relative overflow-hidden group"
                        >
                            <span className="relative z-10">Request Demo</span>
                            <motion.span 
                                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 -z-10"
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
                            className="w-full sm:w-auto px-6 py-3 bg-transparent border border-neutral-700 hover:border-yellow-500/50 text-white font-medium rounded-md relative overflow-hidden group"
                        >
                            <span className="relative z-10">View Solutions</span>
                            <motion.span 
                                className="absolute inset-0 bg-neutral-800 -z-10"
                                initial={{ y: "100%" }}
                                whileHover={{ y: 0 }}
                                transition={{ duration: 0.4 }}
                            />
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Company logos ticker with enhanced header - now properly integrated */}
                <motion.div 
                    className="mt-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <motion.div 
                        className="flex items-center mb-4 px-4"
                        whileInView={{ 
                            opacity: [0, 1],
                            x: [-20, 0]
                        }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm text-neutral-500 font-medium whitespace-nowrap">
                            Trusted by 100+ enterprise companies
                        </p>
                        <div className="h-px bg-gradient-to-r from-neutral-800 via-yellow-900/20 to-neutral-800 flex-grow ml-4"></div>
                    </motion.div>
                    
                    {/* LogoTicker component integration */}
                    <div className="-mx-4 relative z-10">
                        <LogoTicker />
                        
                        {/* Gradient overlays for smooth edge transitions */}
                        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10"></div>
                        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10"></div>
                    </div>
                </motion.div>
                
                {/* Enterprise features highlight */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <motion.div 
                        className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6"
                        whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(234, 179, 8, 0.15)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
                                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium mb-2">AI-Powered Development</h3>
                        <p className="text-neutral-400">Leverage advanced AI to automate repetitive tasks and accelerate your development cycles.</p>
                    </motion.div>
                    
                    <motion.div 
                        className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6"
                        whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(234, 179, 8, 0.15)" }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium mb-2">Real-time Collaboration</h3>
                        <p className="text-neutral-400">Enable seamless teamwork with real-time code sharing, reviews, and integrated communication.</p>
                    </motion.div>
                    
                    <motion.div 
                        className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6"
                        whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(234, 179, 8, 0.15)" }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
                                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
                                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
                                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium mb-2">Enterprise Security</h3>
                        <p className="text-neutral-400">Bank-grade security with advanced encryption, compliance controls, and audit capabilities.</p>
                    </motion.div>
                </motion.div>
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
