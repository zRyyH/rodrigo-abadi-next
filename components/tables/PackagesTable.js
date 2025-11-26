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

export function PackagesTable({ rows, onDelete, loading }) {
    if (loading) {
        return <TableLoading columns={[]} message="Carregando..." />;
    }

    if (rows.length < 1) return <EmptyTable />

    return (
        <Card className="w-full p-3 animate-fadeSlideIn" >
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Embalagem</TableHead>
                        <TableHead className="w-[100px] text-right">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.map((pack) => (
                        <TableRow
                            key={pack.id}
                        >
                            <TableCell className="font-medium">{pack.type_of_packaging}</TableCell>
                            <TableCell className="text-right">
                                <Button
                                    variant="ghost"
                                    size="icon-sm"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        onDelete(pack)
                                    }}
                                    aria-label="Remover fornecedor"
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