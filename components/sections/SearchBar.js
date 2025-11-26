"use client";

import { SearchIcon, XIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function SearchbarWithFilters({
    placeholder = "Buscar...",
    filters = [],
    search,
    activeFilters,
    handleSearch,
    handleFilter,
}) {
    return (
        <div className="flex items-center gap-2">
            {filters.map((filter) => (
                <Select
                    key={filter.key}
                    value={activeFilters[filter.key] || ""}
                    onValueChange={(value) => handleFilter(filter.key, value)}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder={filter.label} />
                    </SelectTrigger>
                    <SelectContent>
                        {filter.options.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            ))}

            <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                    placeholder={placeholder}
                    value={search}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="pl-10 pr-10"
                />
                {search && (
                    <Button
                        variant="ghost"
                        size="icon-sm"
                        className="absolute right-2 top-1/2 -translate-y-1/2"
                        onClick={() => handleSearch("")}
                    >
                        <XIcon />
                    </Button>
                )}
            </div>
        </div>
    );
}