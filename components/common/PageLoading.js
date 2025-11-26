"use client";

import { Loader2Icon } from "lucide-react";
import { cn } from "@/lib/utils";

export function LoadingScreen({
    className,
    message = "Loading...",
    showMessage = true,
    variant = "default",
    ...props
}) {
    return (
        <div
            className={cn(
                "fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-4 bg-background/80 backdrop-blur-sm",
                className
            )}
            {...props}
        >
            {variant === "default" && (
                <div className="relative">
                    <div className="absolute inset-0 animate-ping">
                        <div className="size-16 rounded-full bg-primary/20" />
                    </div>
                    <Loader2Icon className="relative size-16 animate-spin text-primary" />
                </div>
            )}

            {variant === "dots" && (
                <div className="flex gap-2">
                    {[0, 1, 2].map((index) => (
                        <div
                            key={index}
                            className="size-4 animate-bounce rounded-full bg-primary"
                            style={{
                                animationDelay: `${index * 0.15}s`,
                                animationDuration: "0.6s",
                            }}
                        />
                    ))}
                </div>
            )}

            {variant === "pulse" && (
                <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((index) => (
                        <div
                            key={index}
                            className="h-12 w-2 animate-pulse rounded-full bg-primary"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                animationDuration: "0.8s",
                            }}
                        />
                    ))}
                </div>
            )}

            {variant === "circle" && (
                <div className="relative size-16">
                    <div className="absolute inset-0 animate-spin rounded-full border-4 border-muted" />
                    <div className="absolute inset-0 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                </div>
            )}

            {showMessage && (
                <p className="animate-pulse text-sm text-muted-foreground">
                    {message}
                </p>
            )}
        </div>
    );
}