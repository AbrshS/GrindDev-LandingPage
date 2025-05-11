'use client'
import Tag from "@/components/Tag";
import Image from "next/image";
import figmaIcon from "@/assets/images/figma-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import relumeIcon from "@/assets/images/relume-logo.svg";
import framerIcon from "@/assets/images/framer-logo.svg";
import githubIcon from "@/assets/images/github-logo.svg";
// Add more technology icons
import reactIcon from "@/assets/images/react-logo.svg";
import angularIcon from "@/assets/images/angular-logo.svg";
import vueIcon from "@/assets/images/vue-logo.svg";
import nextjsIcon from "@/assets/images/nextjs-logo.svg";
import flutterIcon from "@/assets/images/flutter-logo.svg";
import reactNativeIcon from "@/assets/images/react-native-logo.svg";
import goIcon from "@/assets/images/go-logo.svg";
import typescriptIcon from "@/assets/images/typescript-logo.svg";
import pythonIcon from "@/assets/images/python-logo.svg";
import awsIcon from "@/assets/images/aws-logo.svg";
import firebaseIcon from "@/assets/images/firebase-logo.svg";
import dockerIcon from "@/assets/images/docker-logo.svg";

import IntegrationsColumn from "@/components/IntegrationsColumn";
import { useEffect, useRef } from "react";

const integrations = [
    {
        name: "Figma",
        icon: figmaIcon,
        description: "Figma is a collaborative interface design tool.",
    },
    {
        name: "Notion",
        icon: notionIcon,
        description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
        name: "Slack",
        icon: slackIcon,
        description: "Slack is a powerful team communication platform.",
    },
    {
        name: "Relume",
        icon: relumeIcon,
        description: "Relume is a no-code website builder and design system.",
    },
    {
        name: "Framer",
        icon: framerIcon,
        description: "Framer is a professional website prototyping tool.",
    },
    {
        name: "GitHub",
        icon: githubIcon,
        description: "GitHub is the leading platform for code collaboration.",
    },
    {
        name: "React",
        icon: reactIcon,
        description: "React is a JavaScript library for building user interfaces.",
    },
    {
        name: "Angular",
        icon: angularIcon,
        description: "Angular is a platform for building mobile and desktop web applications.",
    },
    {
        name: "Vue",
        icon: vueIcon,
        description: "Vue is a progressive framework for building user interfaces.",
    },
    {
        name: "Next.js",
        icon: nextjsIcon,
        description: "Next.js is a React framework for production-grade applications.",
    },
    {
        name: "Flutter",
        icon: flutterIcon,
        description: "Flutter is Google's UI toolkit for building natively compiled applications.",
    },
    {
        name: "React Native",
        icon: reactNativeIcon,
        description: "React Native lets you build mobile apps using only JavaScript.",
    },
    {
        name: "Go",
        icon: goIcon,
        description: "Go is an open source programming language designed for building simple, fast, reliable software.",
    },
    {
        name: "TypeScript",
        icon: typescriptIcon,
        description: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
    },
    {
        name: "Python",
        icon: pythonIcon,
        description: "Python is a programming language that lets you work quickly and integrate systems effectively.",
    },
    {
        name: "AWS",
        icon: awsIcon,
        description: "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.",
    },
    {
        name: "Firebase",
        icon: firebaseIcon,
        description: "Firebase is Google's platform for mobile and web application development.",
    },
    {
        name: "Docker",
        icon: dockerIcon,
        description: "Docker is a platform for developing, shipping, and running applications in containers.",
    },
];
export type IntegrationsType = typeof integrations;

export default function Integrations() {
    const leftColumnRef = useRef<HTMLDivElement>(null);
    const rightColumnRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animation for left column (upward infinite loop)
        const leftColumn = leftColumnRef.current;
        if (leftColumn) {
            const leftAnimation = leftColumn.animate(
                [
                    { transform: 'translateY(0)' },
                    { transform: 'translateY(-50%)' }
                ],
                {
                    duration: 60000,
                    iterations: Infinity
                }
            );
            
            // Pause animation when not in viewport
            const observerLeft = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        leftAnimation.play();
                    } else {
                        leftAnimation.pause();
                    }
                });
            });
            
            observerLeft.observe(leftColumn);
            
            return () => {
                leftAnimation.cancel();
                observerLeft.disconnect();
            };
        }
    }, []);

    useEffect(() => {
        // Animation for right column (downward infinite loop)
        const rightColumn = rightColumnRef.current;
        if (rightColumn) {
            const rightAnimation = rightColumn.animate(
                [
                    { transform: 'translateY(-50%)' },
                    { transform: 'translateY(0)' }
                ],
                {
                    duration: 70000, // Slightly different speed for visual interest
                    iterations: Infinity
                }
            );
            
            // Pause animation when not in viewport
            const observerRight = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        rightAnimation.play();
                    } else {
                        rightAnimation.pause();
                    }
                });
            });
            
            observerRight.observe(rightColumn);
            
            return () => {
                rightAnimation.cancel();
                observerRight.disconnect();
            };
        }
    }, []);

    // Double the integrations for continuous loop effect
    const doubledIntegrations = [...integrations, ...integrations];

    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-1">
                    <div>
                        <Tag>Integrations</Tag>
                        <h2 className="text-6xl font-medium mt-6 ">
                            Plays well with{" "}
                            <span className="text-yellow-400">others.</span>
                        </h2>
                        <p className="text-white/50 mt-4 text-lg ">
                            Connect with your favorite tools and technologies to streamline your
                            workflow and enhance your productivity.
                        </p>
                    </div>
                    <div>
                        <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            {/* Left column - upward animation */}
                            <div ref={leftColumnRef} className="flex flex-col gap-4">
                                {doubledIntegrations.map((integration, index) => (
                                    <div
                                        key={`left-${integration.name}-${index}`}
                                        className="bg-white/5 p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors"
                                    >
                                        <div className="w-12 h-12 relative flex-shrink-0">
                                            <Image
                                                src={integration.icon}
                                                alt={integration.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">{integration.name}</h3>
                                            <p className="text-white/50 text-sm">
                                                {integration.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Right column - downward animation */}
                            <div ref={rightColumnRef} className="hidden md:flex flex-col gap-4">
                                {doubledIntegrations.slice().reverse().map((integration, index) => (
                                    <div
                                        key={`right-${integration.name}-${index}`}
                                        className="bg-white/5 p-4 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors"
                                    >
                                        <div className="w-12 h-12 relative flex-shrink-0">
                                            <Image
                                                src={integration.icon}
                                                alt={integration.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">{integration.name}</h3>
                                            <p className="text-white/50 text-sm">
                                                {integration.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
