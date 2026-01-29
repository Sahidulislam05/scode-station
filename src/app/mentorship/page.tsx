"use client";

import { FadeIn, StaggerContainer } from "@/components/ui/animations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, MessageCircle, Target, Trophy, UserPlus, Zap } from "lucide-react";
import Image from "next/image";

export default function MentorshipPage() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] opacity-40 animate-pulse" />
                <div className="absolute bottom-[20%] left-[20%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] opacity-40" />
            </div>

            {/* Hero */}
            <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center min-h-[60vh] flex flex-col justify-center items-center">
                <StaggerContainer className="space-y-6 max-w-4xl">
                    <FadeIn>
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                            <UserPlus className="mr-2 h-4 w-4" />
                            Elite Mentorship Program
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
                            Accelerate Your Career with <br />
                            <span className="text-primary">Expert Guidance</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Get personalized 1-on-1 mentorship from senior engineers at top tech companies. Break through plateaus and reach your potential.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3} className="pt-4">
                        <Button size="lg" className="h-12 px-8 text-lg rounded-full shadow-lg shadow-primary/20">
                            Apply for Mentorship
                        </Button>
                    </FadeIn>
                </StaggerContainer>
            </section>

            {/* How it Works */}
            <section className="container mx-auto px-4 py-20 bg-muted/20 border-y border-border/40">
                <div className="text-center mb-16">
                    <FadeIn>
                        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Our mentorship process is designed to be simple, effective, and transformative.
                        </p>
                    </FadeIn>
                </div>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[
                        {
                            step: "01",
                            title: "Match",
                            description: "We analyze your profile and goals to match you with the perfect mentor.",
                            icon: UserPlus,
                        },
                        {
                            step: "02",
                            title: "Plan",
                            description: "Co-create a personalized roadmap with your mentor to hit your targets.",
                            icon: Target,
                        },
                        {
                            step: "03",
                            title: "Achieve",
                            description: "Regular sessions and code reviews to ensure you stay on track and succeed.",
                            icon: Trophy,
                        },
                    ].map((item, index) => (
                        <FadeIn key={index} className="relative p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors">
                            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                                {item.step}
                            </div>
                            <div className="mt-4 flex justify-center mb-6">
                                <div className="p-4 rounded-full bg-primary/10 text-primary">
                                    <item.icon className="h-8 w-8" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-3">{item.title}</h3>
                            <p className="text-center text-muted-foreground">{item.description}</p>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </section>

            {/* Benefits */}
            <section className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold mb-6">Why Choose Our Mentorship?</h2>
                        <div className="space-y-6">
                            {[
                                { title: "1-on-1 Personalized Sessions", text: "Weekly video calls focusing on your specific challenges." },
                                { title: "Code Reviews", text: "Get detailed feedback on your code to improve quality and patterns." },
                                { title: "Career Advice", text: "Resume reviews, mock interviews, and negotiation strategies." },
                                { title: "Network Access", text: "Connect with our exclusive community of high-performers." },
                            ].map((benefit, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="mt-1 flex-shrink-0">
                                        <CheckCircle2 className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{benefit.title}</h3>
                                        <p className="text-muted-foreground">{benefit.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2} direction="left">
                        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-none shadow-2xl">
                            <CardContent className="p-8 space-y-8">
                                <div className="text-center">
                                    <div className="inline-block p-4 rounded-full bg-background shadow-lg mb-4">
                                        <Zap className="h-8 w-8 text-yellow-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Fast-Track Your Growth</h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 backdrop-blur">
                                        <MessageCircle className="h-6 w-6 text-primary" />
                                        <div>
                                            <div className="font-semibold">Unlimited Chat Support</div>
                                            <div className="text-sm text-muted-foreground">Never get stuck for long</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 backdrop-blur">
                                        <Target className="h-6 w-6 text-accent" />
                                        <div>
                                            <div className="font-semibold">Goal Tracking</div>
                                            <div className="text-sm text-muted-foreground">Visualize your progress</div>
                                        </div>
                                    </div>
                                </div>

                                <Button className="w-full text-lg h-12">
                                    View Plans & Pricing
                                </Button>
                            </CardContent>
                        </Card>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
