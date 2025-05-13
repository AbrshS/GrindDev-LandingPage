'use client'

import Tag from "@/components/Tag";
import { twMerge } from "tailwind-merge";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "How is Layers different from other design tools?",
        answer: "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
    },
    {
        question: "Is there a learning curve?",
        answer: "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
    },
    {
        question: "How do you handle version control?",
        answer: "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
    },
    {
        question: "Can I work offline?",
        answer: "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
    },
    {
        question: "How does Layers handle collaboration?",
        answer: "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleAccordion = (index: number) => {
        setSelectedIndex(selectedIndex === index ? null : index);
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10">
                <motion.div 
                    className="absolute top-20 right-20 w-64 h-64 rounded-full bg-yellow-300/5 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.2, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div 
                    className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>
            
            <div className="container">
                <motion.div 
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Tag>FAQs</Tag>
                </motion.div>
                
                <motion.h2 
                    className="text-5xl md:text-6xl font-medium mt-6 text-center max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    Questions? We've got <motion.span 
                        className="text-yellow-300 relative inline-block"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    >
                        answers
                        <motion.span 
                            className="absolute -bottom-2 left-0 w-full h-0.5 bg-yellow-300/50"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1, delay: 0.8 }}
                            viewport={{ once: true }}
                        />
                    </motion.span>
                </motion.h2>
                
                <motion.div 
                    className="mt-12 flex flex-col gap-6 max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {faqs.map((faq, faqIndex) => (
                        <motion.div
                            key={faq.question}
                            ref={el => accordionRefs.current[faqIndex] = el}
                            className={twMerge(
                                "bg-neutral-900/80 backdrop-blur-sm rounded-2xl border border-white/10 p-6 relative overflow-hidden",
                                hoveredIndex === faqIndex && "border-white/20"
                            )}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * faqIndex }}
                            viewport={{ once: true }}
                            onClick={() => toggleAccordion(faqIndex)}
                            onMouseEnter={() => setHoveredIndex(faqIndex)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                        >
                            {/* Subtle gradient spotlight effect */}
                            {hoveredIndex === faqIndex && (
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-r from-yellow-300/5 via-transparent to-transparent"
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 300 }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            )}
                            
                            <div className="flex justify-between items-center relative z-10">
                                <h3 className="font-medium">{faq.question}</h3>
                                <motion.div
                                    animate={{ rotate: selectedIndex === faqIndex ? 45 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-plus text-yellow-400 flex-shrink-0"
                                    >
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </motion.div>
                            </div>
                            
                            <AnimatePresence>
                                {selectedIndex === faqIndex && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <motion.p 
                                            className="text-white/50 mt-6"
                                            initial={{ y: -10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                        >
                                            {faq.answer}
                                        </motion.p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
