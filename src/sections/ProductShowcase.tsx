'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import Tag from "@/components/Tag";
import ProjectModal from "@/components/ProjectModal";
import Image from "next/image";
import thumbnailImage from "@/assets/images/R.jpeg";

const projects = [
    {
        title: "AI-Powered Analytics Dashboard",
        description: "Real-time data visualization platform with machine learning insights, helping businesses make data-driven decisions faster and more accurately.",
        image: thumbnailImage,
        tech: ["React", "TensorFlow.js", "D3.js", "Node.js"],
        thumbnail: thumbnailImage
    },
    {
        title: "Cloud Infrastructure Manager",
        description: "Enterprise-grade cloud management solution that simplifies infrastructure deployment and monitoring across multiple cloud providers.",
        image: "/project2.jpg",
        tech: ["AWS", "Docker", "Kubernetes", "Go"],
        thumbnail: "/thumbnail2.jpg"
    },
    // Add 3 more projects
];

export default function ProductShowcase() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                className="cursor-pointer"
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                onClick={() => setSelectedProject(project)}
                            >
                                <h3 className="text-4xl font-medium transition-colors duration-300 hover:text-yellow-400">
                                    {project.title}
                                </h3>
                                <p className="text-white/50 mt-2 max-w-xl">
                                    {project.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative h-[600px] hidden lg:block">
                        <motion.div
                            className="absolute inset-0"
                            animate={{
                                opacity: hoveredIndex !== null ? 1 : 0,
                                y: hoveredIndex !== null ? 0 : 20,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {hoveredIndex !== null && (
                                <div className="relative h-full w-full rounded-3xl overflow-hidden">
                                    <Image
                                        src={projects[hoveredIndex].thumbnail}
                                        alt={projects[hoveredIndex].title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}