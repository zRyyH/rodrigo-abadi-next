"use client";

import { Trash2 } from "lucide-react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card";
import { EmptyTable } from "./Empty";
import { TableLoading } from "@/components/common/TableLoading";

export function OriginsTable({ rows, onDelete, loading }) {
    if (loading) {
        return <TableLoading columns={[]} message="CARREGANDO..." />;
    }

    if (rows.length < 1) return <EmptyTable />

    return (
        <Card className="w-full p-3 animate-fadeSlideIn" >
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ORIGEM</TableHead>
                        <TableHead className="w-[100px] text-right">AÇÕES</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.map((origin) => (
                        <TableRow
                            key={origin.id}
                        >
                            <TableCell className="font-medium">{origin.origin}</TableCell>
                            <TableCell className="text-right">
                                <Button
                                    variant="ghost"
                                    size="icon-sm"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        onDelete(origin)
                                    }}
                                    aria-label="REMOVER ORIGEM"
                                    className="size-8 text-destructive hover:text-destructive cursor-pointer"
                                >
                                    <Trash2 className="size-4" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
}