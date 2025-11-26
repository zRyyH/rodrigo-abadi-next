"use client";

import { X, Upload, ImageOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRef, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { DIRECTUS_BASE_URL } from "@/config/directus";

export default function ImageCarouselUpload({ images = [], onChange }) {
    const fileInputRef = useRef(null);
    const [uploading, setUploading] = useState(false);
    const [imageErrors, setImageErrors] = useState({});

    const handleRemove = (index) => {
        const newImages = images.filter((_, i) => i !== index);
        onChange(newImages);
    };

    const handleUpload = async (e) => {
        const files = Array.from(e.target.files || []);
        if (!files.length) return;

        setUploading(true);
        try {
            const { photosService } = await import("@/services/photos");

            const uploadPromises = files.map(file => photosService.upload(file));
            const results = await Promise.all(uploadPromises);

            const newImages = [...images, ...results];
            onChange(newImages);
        } catch (error) {
            console.error("Erro ao fazer upload:", error);
        } finally {
            setUploading(false);
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }
    };

    return (
        <Card className="p-6">
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Imagens</h3>
                    <p className="text-sm text-muted-foreground">
                        {images.length} {images.length === 1 ? "imagem" : "imagens"}
                    </p>
                </div>

                {images.length > 0 ? (
                    <Carousel className="w-full max-w-md mx-auto">
                        <CarouselContent>
                            {images.map((image, index) => {
                                const imageId = typeof image === 'string' ? image : image?.directus_files_id?.id;
                                const imageUrl = `${DIRECTUS_BASE_URL}/assets/${imageId}`;

                                return (
                                    <CarouselItem key={index}>
                                        <div className="p-1">
                                            <Card className="overflow-hidden relative">
                                                <div className="aspect-square relative bg-muted flex items-center justify-center">
                                                    {!imageErrors[index] ? (
                                                        <img
                                                            src={imageUrl}
                                                            alt={`Imagem ${index + 1}`}
                                                            className="object-cover w-full h-full"
                                                            onError={() => setImageErrors(prev => ({ ...prev, [index]: true }))}
                                                        />
                                                    ) : (
                                                        <div className="flex flex-col items-center gap-2 text-muted-foreground">
                                                            <ImageOff className="h-12 w-12" />
                                                            <span className="text-sm">Imagem indisponível</span>
                                                        </div>
                                                    )}
                                                    <Button
                                                        type="button"
                                                        variant="destructive"
                                                        size="icon"
                                                        className="absolute top-2 right-2 h-8 w-8"
                                                        onClick={() => handleRemove(index)}
                                                        disabled={uploading}
                                                    >
                                                        <X className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                ) : null}

                <div>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleUpload}
                        className="hidden"
                    />
                    <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploading}
                    >
                        <Upload className="mr-2 h-4 w-4" />
                        {uploading ? "Enviando..." : "Adicionar Imagens"}
                    </Button>
                </div>
            </div>
        </Card>
    );
}