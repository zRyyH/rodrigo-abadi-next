"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function FormActions({
    onSubmit,
    onCancel,
    loading = false,
    isEditMode = false,
    submitLabel,
    cancelLabel = "Cancelar",
    className,
}) {
    const defaultSubmitLabel = loading
        ? "Salvando..."
        : isEditMode
            ? "Salvar"
            : "Criar";

    return (
        <div className={cn("flex gap-2", className)}>
            <Button
                type="submit"
                disabled={loading}
                className="cursor-pointer"
                onClick={onSubmit}
            >
                {submitLabel || defaultSubmitLabel}
            </Button>
            {onCancel && (
                <Button
                    type="button"
                    variant="outline"
                    onClick={onCancel}
                    disabled={loading}
                    className="cursor-pointer"
                >
                    {cancelLabel}
                </Button>
            )}
        </div>
    );
}