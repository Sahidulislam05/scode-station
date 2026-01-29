"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, RotateCcw } from "lucide-react";
import { FadeIn, StaggerContainer } from "@/components/ui/animations";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <StaggerContainer className="space-y-6 max-w-md">
                <FadeIn className="flex justify-center">
                    <div className="h-20 w-20 rounded-full bg-destructive/10 flex items-center justify-center text-destructive mb-4">
                        <AlertCircle className="h-10 w-10" />
                    </div>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <h2 className="text-3xl font-bold tracking-tight">Something went wrong!</h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className="text-muted-foreground">
                        We apologize for the inconvenience. An unexpected error has occurred.
                    </p>
                    {process.env.NODE_ENV === "development" && (
                        <div className="mt-4 p-4 bg-muted rounded-md text-left text-xs font-mono overflow-auto max-h-40">
                            {error.message}
                        </div>
                    )}
                </FadeIn>
                <FadeIn delay={0.3}>
                    <Button onClick={() => reset()} size="lg" className="rounded-full">
                        <RotateCcw className="mr-2 h-4 w-4" />
                        Try again
                    </Button>
                </FadeIn>
            </StaggerContainer>
        </div>
    );
}
