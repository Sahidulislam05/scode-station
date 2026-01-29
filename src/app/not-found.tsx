import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion, Home } from "lucide-react";
// Can't use client-side animations directly in server component not-found, 
// so we'll make a client wrapper or just use standard classes for simplicity/performance in 404.
// Or we can simple export a client component default.

/* eslint-disable react/no-unescaped-entities */

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center space-y-8">
            <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-50" />
                <FileQuestion className="h-32 w-32 text-muted-foreground/50 relative z-10" />
            </div>

            <div className="space-y-2 max-w-lg z-10">
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                    Page Not Found
                </h2>
                <p className="text-xl text-muted-foreground">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>
            </div>

            <Link href="/" className="z-10">
                <Button size="lg" className="rounded-full px-8">
                    <Home className="mr-2 h-4 w-4" />
                    Back to Home
                </Button>
            </Link>
        </div>
    );
}
