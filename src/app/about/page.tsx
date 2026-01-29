"use client";

import { FadeIn, StaggerContainer } from "@/components/ui/animations";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users2, Zap, Trophy } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[10%] left-[50%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] opacity-50 translate-x-[-50%]" />
            </div>

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
                <StaggerContainer className="space-y-6 max-w-4xl mx-auto">
                    <FadeIn>
                        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
                            We Are <span className="text-primary">Scode Station</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Bridging the gap between ambitious businesses and top-tier tech talent. We build the future, one line of code at a time.
                        </p>
                    </FadeIn>
                </StaggerContainer>
            </section>

            {/* Mission Section */}
            <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <FadeIn direction="right">
                        {/* Placeholder for an image */}
                        <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted/50 border border-border/50 shadow-2xl">
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                                <span className="text-lg font-medium">[Team/Office Image Placeholder]</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
                        </div>
                    </FadeIn>

                    <StaggerContainer className="space-y-6">
                        <FadeIn>
                            <h2 className="text-3xl font-bold">Our Mission</h2>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                At Scode Station, our mission is to empower the next generation of developers while providing businesses with the digital tools they need to succeed in an ever-evolving landscape.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.2} className="space-y-4">
                            {[
                                "Innovation at the core of everything we do.",
                                "Commitment to excellence and quality code.",
                                "Foster a community of continuous learning.",
                                "Transparent and collaborative partnerships.",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    <span className="text-foreground">{item}</span>
                                </div>
                            ))}
                        </FadeIn>
                    </StaggerContainer>
                </div>
            </section>

            {/* Values/Stats Grid */}
            <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Users2,
                            title: "Community Focused",
                            description: "Building a strong network of developers, mentors, and industry leaders.",
                        },
                        {
                            icon: Zap,
                            title: "Fast Execution",
                            description: "Delivering high-quality solutions with speed and efficiency.",
                        },
                        {
                            icon: Trophy,
                            title: "Award Winning",
                            description: "Recognized for our innovative approach to education and development.",
                        },
                    ].map((item, index) => (
                        <FadeIn key={index} className="p-6 rounded-2xl bg-accent/5 border border-accent/10 hover:bg-accent/10 transition-colors">
                            <div className="h-12 w-12 rounded-lg bg-accent/20 text-accent flex items-center justify-center mb-4">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </section>
        </div>
    );
}
