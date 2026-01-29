"use client";

import { FadeIn, StaggerContainer } from "@/components/ui/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Globe, Rocket, Terminal } from "lucide-react";
import Link from "next/link";

export default function AgencyPage() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-40 animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] opacity-40 animate-pulse delay-1000" />
            </div>

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-[80vh]">
                <StaggerContainer className="space-y-8 max-w-4xl">
                    <FadeIn direction="up">
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                            Top-tier Digital Solutions
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                            Transforming Ideas into <br />
                            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                                Digital Reality
                            </span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            We are a full-service creative agency specializing in custom software development, digital branding, and strategic innovation.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact">
                            <Button size="lg" className="h-12 px-8 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
                                Start a Project
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/projects">
                            <Button variant="outline" size="lg" className="h-12 px-8 text-lg rounded-full hover:bg-muted/50 transition-colors">
                                View Portfolio
                            </Button>
                        </Link>
                    </FadeIn>
                </StaggerContainer>
            </section>

            {/* Services Section */}
            <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 border-t border-border/40">
                <div className="text-center mb-16">
                    <FadeIn>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Services</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Comprehensive solutions tailored to your business needs, scalable and secure.
                        </p>
                    </FadeIn>
                </div>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Web Development",
                            description: "High-performance websites and web applications built with modern technologies.",
                            icon: Globe,
                        },
                        {
                            title: "Mobile Apps",
                            description: "Native and cross-platform mobile applications for iOS and Android.",
                            icon: Terminal,
                        },
                        {
                            title: "Digital Strategy",
                            description: "Data-driven strategies to grow your digital presence and market share.",
                            icon: Rocket,
                        },
                        {
                            title: "Custom Software",
                            description: "Tailored software solutions to stream business processes and efficiency.",
                            icon: Code,
                        },
                        {
                            title: "UI/UX Design",
                            description: "User-centric design that creates engaging and intuitive digital experiences.",
                            icon: Code,
                        },
                        {
                            title: "Cloud Solutions",
                            description: "Scalable cloud infrastructure setup, management, and optimization.",
                            icon: Globe,
                        },
                    ].map((service, index) => (
                        <FadeIn key={index} className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background/50 p-8 hover:border-primary/50 transition-colors duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                                <p className="text-muted-foreground">{service.description}</p>
                            </div>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </section>
        </div>
    );
}
