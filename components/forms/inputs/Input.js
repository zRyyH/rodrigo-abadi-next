"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function LabeledInput({
    id,
    label,
    placeholder,
    value,
    onChange,
    disabled = false,
    required = false,
    className,
    type = "text",
    ...props
}) {
    return (
        <div className={cn("space-y-2", className)}>
            <Label htmlFor={id}>
                {label}
                {required && <span className="text-destructive"> *</span>}
            </Label>
            <Input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
                required={required}
                {...props}
            />
        </div>
    );
}