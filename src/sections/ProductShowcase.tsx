'use client'

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Tag from "@/components/Tag";
import ProjectModal from "@/components/ProjectModal";
import Image from "next/image";
import thumbnailImage from "@/assets/images/R.jpeg";

// Add icons import
import { FaReact, FaAws, FaDocker } from "react-icons/fa";
import { SiTensorflow, SiD3Dotjs, SiNodedotjs, SiKubernetes, SiGo } from "react-icons/si";

// Add color extraction utility
const extractDominantColor = async (imageSrc: string): Promise<string> => {
    // For local images, return a default gradient
    if (imageSrc === thumbnailImage) {
        return 'linear-gradient(to top, rgba(30,41,59,0.95), rgba(30,41,59,0.5), transparent)';
    }
    
    // For remote images, use a default dark gradient
    return 'linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.5), transparent)';
};

const projects = [
    {
        title: "AI-Powered Analytics Dashboard",
        description: "Real-time data visualization platform with machine learning insights, helping businesses make data-driven decisions faster and more accurately.",
        image: thumbnailImage,
        tech: ["React", "TensorFlow.js", "D3.js", "Node.js"],
        client: "DataViz Inc.",
        thumbnail: thumbnailImage
    },
    {
        title: "Cloud Infrastructure Manager",
        description: "Enterprise-grade cloud management solution that simplifies infrastructure deployment and monitoring across multiple cloud providers.",
        image: "/project2.jpg",
        tech: ["AWS", "Docker", "Kubernetes", "Go"],
        client: "CloudTech Solutions",
        thumbnail: "/thumbnail2.jpg"
    },
    {
        title: "E-Commerce Personalization Engine",
        description: "AI-driven recommendation system that analyzes customer behavior to deliver personalized shopping experiences, increasing conversion rates by 35%.",
        image: thumbnailImage,
        tech: ["React", "TensorFlow.js", "Node.js", "AWS"],
        client: "ShopSmart Technologies",
        thumbnail: thumbnailImage
    },
    {
        title: "Healthcare Data Platform",
        description: "Secure, HIPAA-compliant data management system that enables healthcare providers to access and analyze patient information while maintaining strict privacy controls.",
        image: thumbnailImage,
        tech: ["React", "Node.js", "Docker", "Kubernetes"],
        client: "MedTech Solutions",
        thumbnail: thumbnailImage
    },
    {
        title: "Financial Trading Algorithm",
        description: "High-frequency trading system with advanced risk management capabilities, processing market data in real-time to identify profitable opportunities.",
        image: thumbnailImage,
        tech: ["Go", "React", "D3.js", "AWS"],
        client: "FinTech Innovations",
        thumbnail: thumbnailImage
    }
];

// Helper function to get icon for technology
const getTechIcon = (tech: string) => {
    switch (tech) {
        case "React": return <FaReact className="text-blue-400" />;
        case "TensorFlow.js": return <SiTensorflow className="text-orange-400" />;
        case "D3.js": return <SiD3Dotjs className="text-green-400" />;
        case "Node.js": return <SiNodedotjs className="text-green-600" />;
        case "AWS": return <FaAws className="text-yellow-500" />;
        case "Docker": return <FaDocker className="text-blue-500" />;
        case "Kubernetes": return <SiKubernetes className="text-blue-600" />;
        case "Go": return <SiGo className="text-cyan-400" />;
        default: return null;
    }
};

export default function ProductShowcase() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [visibleProjects, setVisibleProjects] = useState(3);
    const [projectGradients, setProjectGradients] = useState<string[]>([]);
    
    // Load gradients based on thumbnails
    useEffect(() => {
        const loadGradients = async () => {
            const gradients = await Promise.all(
                projects.map(project => extractDominantColor(project.thumbnail.toString()))
            );
            setProjectGradients(gradients);
        };
        
        loadGradients();
    }, []);

    const loadMoreProjects = () => {
        setVisibleProjects(prev => Math.min(prev + 2, projects.length));
    };

    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Our Work</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6">
                    Transforming ideas into{" "}
                    <span className="text-yellow-400">digital reality</span>
                </h2>

                {/* Full-width stacked projects */}
                <div className="mt-20 space-y-40">
                    {projects.slice(0, visibleProjects).map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="relative"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            {/* Project number indicator with enhanced styling */}
                            <div className="absolute -left-4 -top-16 text-[12rem] font-bold text-white/5 select-none hidden md:block">
                                {(index + 1).toString().padStart(2, '0')}
                            </div>
                            
                            {/* Project content - full width image first, then content below */}
                            <div className="flex flex-col gap-16">
                                {/* Full-width image with enhanced container */}
                                <div className="w-full">
                                    <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_80px_-10px_rgba(0,0,0,0.5)] group">
                                        {/* Image Container with enhanced hover effect */}
                                        <div className="relative w-full pt-[45%] transition-transform duration-1000 group-hover:scale-105">
                                            <Image
                                                src={project.thumbnail}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-all duration-1000 filter group-hover:brightness-110"
                                                priority={index === 0}
                                            />
                                            {/* Dynamic gradient overlay based on image */}
                                            <div 
                                                className="absolute inset-0 opacity-95"
                                                style={{ 
                                                    background: projectGradients[index] || 'linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.5), transparent)'
                                                }}
                                            ></div>
                                        </div>
                                        
                                        {/* Enhanced client badge */}
                                        <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-md px-5 py-2 rounded-full border border-white/10">
                                            <span className="text-sm font-medium tracking-wide">{project.client}</span>
                                        </div>
                                        
                                        {/* Enhanced project title overlay with improved text visibility */}
                                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                                            <h3 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                                {project.title}
                                            </h3>
                                            <div className="w-24 h-1 bg-yellow-400 rounded-full mb-6"></div>
                                            <p className="text-white/90 text-lg max-w-2xl font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                                {project.description}
                                            </p>
                                        </div>
                                        
                                        {/* Project stats with enhanced styling */}
                                        <div className="absolute top-6 left-6 flex items-center gap-4">
                                            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-sm">8 weeks</span>
                                            </div>
                                            <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium">
                                                {project.tech.length} Technologies
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Content below image with enhanced styling */}
                                <div className="max-w-5xl mx-auto w-full">
                                    {/* Tech Stack with enhanced styling */}
                                    <div className="mb-12">
                                        <h4 className="text-sm uppercase tracking-widest text-white/50 mb-6 text-center font-medium">Technology Stack</h4>
                                        <div className="flex flex-wrap gap-4 justify-center">
                                            {project.tech.map(tech => (
                                                <div key={tech} className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-xl border border-white/5 hover:border-white/20 transition-all duration-300 hover:bg-white/10">
                                                    <span className="text-2xl">{getTechIcon(tech)}</span>
                                                    <span className="font-medium">{tech}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* Enhanced project details section */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 bg-white/5 p-8 rounded-2xl border border-white/10">
                                        <div>
                                            <h5 className="text-sm uppercase tracking-wider text-white/50 mb-2">Project Scope</h5>
                                            <p className="text-white/80">Full-stack development with custom UI/UX design and implementation</p>
                                        </div>
                                        <div>
                                            <h5 className="text-sm uppercase tracking-wider text-white/50 mb-2">Industry</h5>
                                            <p className="text-white/80">Enterprise Software / Data Analytics</p>
                                        </div>
                                        <div>
                                            <h5 className="text-sm uppercase tracking-wider text-white/50 mb-2">Deployment</h5>
                                            <p className="text-white/80">Cloud-native with CI/CD pipeline</p>
                                        </div>
                                    </div>
                                    
                                    {/* Enhanced call to action */}
                                    <div className="flex justify-center">
                                        <button 
                                            className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-xl font-medium hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-400/20 flex items-center gap-2 group"
                                            onClick={() => setSelectedProject(project)}
                                        >
                                            View Case Study
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Project divider */}
                            {index < visibleProjects - 1 && (
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-20"></div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Enhanced Load More Button */}
                {visibleProjects < projects.length && (
                    <div className="flex justify-center mt-32">
                        <button 
                            onClick={loadMoreProjects}
                            className="px-10 py-4 border border-white/20 rounded-xl hover:bg-white/5 transition-all duration-300 flex items-center gap-3 group"
                        >
                            <span>View More Projects</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-y-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}