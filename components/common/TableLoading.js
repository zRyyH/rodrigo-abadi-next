"use client";

import { Loader2 } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

export function TableLoading({
    columns = ["Origem", "Ações"],
    message = "Carregando dados..."
}) {
    return (
        <Card className="w-full p-3 animate-fadeSlideIn">
            <Table>
                <TableHeader>
                    <TableRow>
                        {columns.map((column, index) => (
                            <TableHead
                                key={index}
                                className={index === columns.length - 1 ? "w-[100px] text-right" : ""}
                            >
                                {column}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className="hover:bg-transparent">
                        <TableCell
                            colSpan={columns.length}
                            className="h-64 text-center"
                        >
                            <div className="flex flex-col items-center justify-center gap-4 py-8">
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                                    <div className="relative rounded-full bg-primary/10 p-4">
                                        <Loader2 className="size-8 text-primary animate-spin" />
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm font-medium animate-pulse">
                                    {message}
                                </p>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Card>
    );
}