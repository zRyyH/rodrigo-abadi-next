"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from 'next/navigation';
import { ArrowRight } from "lucide-react";

export default function PageCard({
    buttonText = "Acessar página",
    redirect = "/products",
    showButton = true,
    title,
}) {
    const router = useRouter();

    return (
        <Card className="w-full">
            <div className="flex items-center justify-between gap-4 px-6 py-3">
                <h2 className="text-lg font-medium">{title}</h2>
                {showButton && (
                    <Button
                        onClick={() => router.push(redirect)}
                        size="sm"
                        variant="ghost"
                        className="group shrink-0 h-8"
                    >
                        {buttonText}
                        <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Button>
                )}
            </div>
        </Card>
    );
}