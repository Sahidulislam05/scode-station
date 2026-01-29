"use client";

import { FadeIn, StaggerContainer } from "@/components/ui/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Clock, Code2, GraduationCap, Users, Video } from "lucide-react";
import Link from "next/link";

export default function AcademyPage() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-30 animate-pulse" />
                <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] opacity-30 animate-pulse delay-700" />
            </div>

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center min-h-[70vh] flex flex-col justify-center">
                <StaggerContainer className="space-y-8 max-w-4xl mx-auto">
                    <FadeIn direction="up">
                        <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent backdrop-blur-sm">
                            <GraduationCap className="mr-2 h-4 w-4" />
                            Learn from Industry Experts
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                            Master the Art of <br />
                            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                                Modern Coding
                            </span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Join our interactive courses, bootcamps, and workshops designed to take you from beginner to professional developer.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/courses">
                            <Button size="lg" className="h-12 px-8 text-lg rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all bg-accent hover:bg-accent/90 text-accent-foreground">
                                Browse Courses
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/mentorship">
                            <Button variant="outline" size="lg" className="h-12 px-8 text-lg rounded-full hover:bg-muted/50 transition-colors">
                                Find a Mentor
                            </Button>
                        </Link>
                    </FadeIn>
                </StaggerContainer>
            </section>

            {/* Stats Section */}
            <section className="container mx-auto px-4 py-12 border-y border-border/40 bg-background/50 backdrop-blur-sm">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { label: "Students", value: "5,000+" },
                        { label: "Courses", value: "40+" },
                        { label: "Instructors", value: "15+" },
                        { label: "Success Rate", value: "98%" },
                    ].map((stat, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Features/Tracks Section */}
            <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <FadeIn>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Learning Tracks</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Structured paths to help you master specific technologies and career goals.
                        </p>
                    </FadeIn>
                </div>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Full Stack Development",
                            description: "Master both frontend and backend technologies with MERN stack.",
                            icon: Code2,
                            lessons: "120 Lessons",
                            level: "Beginner to Adv",
                        },
                        {
                            title: "Cloud & DevOps",
                            description: "Learn to deploy, scale, and manage applications in the cloud.",
                            icon: Users, // Using Users as a placeholder for Cloud/Infrastructure related icon availability
                            lessons: "85 Lessons",
                            level: "Intermediate",
                        },
                        {
                            title: "Data Science",
                            description: "Unlock the power of data with Python, Machine Learning, and AI.",
                            icon: Video, // Placeholder
                            lessons: "95 Lessons",
                            level: "Advanced",
                        },
                    ].map((track, index) => (
                        <FadeIn key={index} className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background/50 p-6 hover:border-accent/50 transition-colors duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
                                    <track.icon className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">{track.title}</h3>
                                <p className="text-muted-foreground mb-6 flex-grow">{track.description}</p>

                                <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border/40 pt-4">
                                    <div className="flex items-center">
                                        <BookOpen className="mr-2 h-4 w-4" />
                                        {track.lessons}
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="mr-2 h-4 w-4" />
                                        {track.level}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </section>
        </div>
    );
}
