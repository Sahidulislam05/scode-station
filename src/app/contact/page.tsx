"use client";

import { FadeIn, StaggerContainer } from "@/components/ui/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        toast.success("Message sent successfully! We'll get back to you soon.");
        setIsSubmitting(false);
        (e.target as HTMLFormElement).reset();
    };

    return (
        <div className="min-h-screen bg-background relative overflow-hidden py-24">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] opacity-40" />
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] opacity-40" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <FadeIn>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Get in Touch</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Have a project in mind or want to join our academy? We'd love to hear from you.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <StaggerContainer className="space-y-8">
                        <FadeIn>
                            <Card className="bg-background/50 backdrop-blur-sm border-border/50">
                                <CardHeader>
                                    <CardTitle>Contact Information</CardTitle>
                                    <CardDescription>Reach out to us directly through these channels.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Email</h3>
                                            <p className="text-muted-foreground">hello@scodestation.com</p>
                                            <p className="text-muted-foreground">support@scodestation.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Phone</h3>
                                            <p className="text-muted-foreground">+1 (555) 123-4567</p>
                                            <p className="text-muted-foreground">Mon-Fri 9am-6pm EST</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Office</h3>
                                            <p className="text-muted-foreground">
                                                123 Tech Boulevard,<br />
                                                Innovation City, TC 90210
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </FadeIn>

                        {/* Map or Decoration Placeholder */}
                        <FadeIn delay={0.2}>
                            <div className="aspect-[16/9] rounded-2xl bg-muted/30 border border-border/50 flex items-center justify-center text-muted-foreground">
                                <span className="flex items-center">
                                    <MapPin className="mr-2 h-5 w-5" />
                                    Map Integration Placeholder
                                </span>
                            </div>
                        </FadeIn>
                    </StaggerContainer>

                    {/* Contact Form */}
                    <FadeIn delay={0.2} direction="left">
                        <Card className="shadow-xl shadow-primary/5 border-border/50">
                            <CardHeader>
                                <CardTitle>Send us a Message</CardTitle>
                                <CardDescription>
                                    Fill out the form below and our team will get back to you within 24 hours.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input id="name" placeholder="John Doe" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="john@example.com" required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input id="subject" placeholder="Project Inquiry" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us about your project or questions..."
                                            className="min-h-[150px]"
                                            required
                                        />
                                    </div>
                                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <>Processing...</>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="ml-2 h-4 w-4" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}
