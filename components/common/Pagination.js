"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export function Pagination({
    currentPage,
    pageNumbers,
    startItem,
    endItem,
    totalItems,
    canGoNext,
    canGoPrevious,
    onPageChange,
    goToNextPage,
    goToPreviousPage,
}) {
    if (totalItems === 0) {
        return null;
    }

    return (
        <div className="flex items-center justify-between mt-4 px-2">
            <div className="text-sm text-muted-foreground">
                Mostrando {startItem} até {endItem} de {totalItems} resultados
            </div>

            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    size="icon-sm"
                    onClick={goToPreviousPage}
                    disabled={!canGoPrevious}
                >
                    <ChevronLeftIcon />
                </Button>

                <div className="flex items-center gap-1">
                    {pageNumbers.map((page, index) => (
                        page === "..." ? (
                            <span key={`ellipsis-${index}`} className="px-2 text-muted-foreground">
                                ...
                            </span>
                        ) : (
                            <Button
                                key={page}
                                variant={currentPage === page ? "default" : "outline"}
                                size="icon-sm"
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </Button>
                        )
                    ))}
                </div>

                <Button
                    variant="outline"
                    size="icon-sm"
                    onClick={goToNextPage}
                    disabled={!canGoNext}
                >
                    <ChevronRightIcon />
                </Button>
            </div>
        </div>
    );
}