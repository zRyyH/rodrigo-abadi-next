"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { AlertCircleIcon } from "lucide-react";

export default function SelectSmart({
    label,
    placeholder = "Select an option...",
    queryKey,
    service,
    value,
    onValueChange,
    valueKey = "id",
    labelKey = "name",
    disabled = false,
    required = false,
    id,
    className
}) {
    const { data = [], isLoading, isError } = useQuery({
        queryKey: [queryKey],
        queryFn: service,
    });

    const dataArray = data?.data || [];
    const isDisabled = disabled || isLoading;
    const showError = isError;
    const showEmpty = !isError && !isLoading && dataArray.length === 0;
    const showOptions = !isError && dataArray.length > 0;

    const selectedValue = value?.[valueKey]?.toString() || value?.toString() || "";

    return (
        <div className="space-y-2">
            {label && (
                <Label htmlFor={id}>
                    {label}
                    {required && <span className="text-destructive ml-1">*</span>}
                </Label>
            )}

            <Select
                value={selectedValue}
                onValueChange={onValueChange}
                disabled={isDisabled}
                required={required}
            >
                <SelectTrigger id={id} className={className}>
                    {isLoading ? (
                        <div className="flex items-center gap-2">
                            <Spinner className="size-4" />
                            <span className="text-muted-foreground">Carregando...</span>
                        </div>
                    ) : (
                        <SelectValue placeholder={placeholder} />
                    )}
                </SelectTrigger>

                <SelectContent>
                    {showError && (
                        <div className="flex items-center gap-2 p-2 text-sm text-destructive">
                            <AlertCircleIcon className="size-4" />
                            <span>Falha ao carregar</span>
                        </div>
                    )}

                    {showEmpty && (
                        <div className="p-2 text-center text-sm text-muted-foreground">
                            Sem opções
                        </div>
                    )}

                    {showOptions && dataArray.map((item) => (
                        <SelectItem
                            key={item[valueKey]}
                            value={item[valueKey].toString()}
                        >
                            {item[labelKey]}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}