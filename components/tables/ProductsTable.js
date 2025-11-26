"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PencilIcon, Trash2Icon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { EmptyTable } from "./Empty";
import { TableLoading } from "@/components/common/TableLoading";
import { useRouter } from "next/navigation";
import Avatar from "@/components/common/Avatar";

export function ProductsTable({
    rows,
    onDelete,
    loading
}) {
    const router = useRouter();

    if (loading) {
        return <TableLoading columns={[]} message="Carregando..." />;
    }

    if (rows.length < 1) return <EmptyTable />

    return (
        <Card className="w-full p-3 animate-fadeSlideIn" >
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[60px]">Foto</TableHead>
                        <TableHead>SKU</TableHead>
                        <TableHead>Nome</TableHead>
                        <TableHead className="text-center">Quantidade</TableHead>
                        <TableHead>Embalagem</TableHead>
                        <TableHead>Fornecedor</TableHead>
                        <TableHead>Custo</TableHead>
                        <TableHead>NCM</TableHead>
                        <TableHead>CEST</TableHead>
                        <TableHead className="text-right w-[120px]">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.map((item) => (
                        <TableRow
                            key={item.id} >
                            <TableCell>
                                <Avatar imagePath={item.images[0]} />
                            </TableCell>
                            <TableCell className="font-mono text-sm">{item.sku}</TableCell>
                            <TableCell className="font-medium">{item.name}</TableCell>
                            <TableCell className="text-center font-medium">{item.quantity}</TableCell>
                            <TableCell className="text-muted-foreground">{item.type_of_packaging}</TableCell>
                            <TableCell className="text-muted-foreground">{item.supplier_name}</TableCell>
                            <TableCell className="font-medium">{item.purchase_cost}</TableCell>
                            <TableCell className="font-mono text-sm text-muted-foreground">{item.ncm}</TableCell>
                            <TableCell className="font-mono text-sm text-muted-foreground">{item.cest}</TableCell>
                            <TableCell className="text-right">
                                <div className="flex items-center justify-end gap-2">
                                    <Button
                                        variant="ghost"
                                        size="icon-sm"
                                        className="size-8 cursor-pointer"
                                        onClick={() => router.push(`/products/edit/${item.id}`)}
                                    >
                                        <PencilIcon className="size-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon-sm"
                                        className="size-8 text-destructive hover:text-destructive cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            onDelete?.(item)
                                        }}
                                    >
                                        <Trash2Icon className="size-4" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
}