"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DIRECTUS_BASE_URL } from "@/config/directus";
import { Package } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BaseAvatar({
    imagePath,
    name,
    fallbackIcon: FallbackIcon = Package,
    size = "sm",
    className,
    ...props
}) {
    const sizeClasses = {
        sm: "size-14",
        md: "size-16",
        lg: "size-24",
        xl: "size-32",
    };

    return (
        <Avatar className={cn(sizeClasses[size], "rounded-md", className)} {...props}>
            <AvatarImage src={`${DIRECTUS_BASE_URL}/assets/${imagePath}`} alt={name} />
            <AvatarFallback>
                <FallbackIcon />
            </AvatarFallback>
        </Avatar>
    );
}