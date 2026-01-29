"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
    { href: "/agency", label: "Agency" },
    { href: "/academy", label: "Academy" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="relative">
                            <Code2 className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                            <div className="absolute inset-0 blur-xl bg-primary/20 group-hover:bg-primary/30 transition-all -z-10" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                            Scode Station
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}>
                                <Button
                                    variant="ghost"
                                    className="text-foreground/70 hover:text-foreground hover:bg-accent/10 transition-colors"
                                >
                                    {link.label}
                                </Button>
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-2">
                        <ThemeToggle />
                        <Link href="/login" className="hidden md:inline-flex">
                            <Button variant="default" className="shadow-lg shadow-primary/20">
                                Login / Dashboard
                            </Button>
                        </Link>

                        {/* Mobile Menu */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild className="md:hidden">
                                <Button variant="ghost" size="icon">
                                    {isOpen ? (
                                        <X className="h-5 w-5" />
                                    ) : (
                                        <Menu className="h-5 w-5" />
                                    )}
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px]">
                                <SheetHeader>
                                    <SheetTitle className="text-left">Menu</SheetTitle>
                                </SheetHeader>
                                <div className="mt-8 flex flex-col space-y-3">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <Button
                                                variant="ghost"
                                                className="w-full justify-start text-foreground/70 hover:text-foreground"
                                            >
                                                {link.label}
                                            </Button>
                                        </Link>
                                    ))}
                                    <Link href="/login" onClick={() => setIsOpen(false)}>
                                        <Button className="w-full mt-4">Login / Dashboard</Button>
                                    </Link>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </header>
    );
}
