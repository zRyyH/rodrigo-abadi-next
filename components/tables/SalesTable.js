"use client";

import { TableLoading } from "@/components/common/TableLoading";
import { useRouter } from 'next/navigation';
import { Card } from "@/components/ui/card";
import { EmptyTable } from "./Empty";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export function SalesTable({ rows, loading }) {
    const router = useRouter();

    if (loading) {
        return <TableLoading columns={[]} message="CARREGANDO..." />;
    }

    if (rows.length < 1) return <EmptyTable />

    return (
        <Card className="w-full p-3 animate-fadeSlideIn">
            <Table className="table-fixed">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[14.28%]">NÚMERO DA VENDA</TableHead>
                        <TableHead className="w-[14.28%]">SKU</TableHead>
                        <TableHead className="w-[14.28%]">NOME DO PRODUTO</TableHead>
                        <TableHead className="w-[14.28%]">NOME DO COMPRADOR</TableHead>
                        <TableHead className="w-[14.28%]">ANÚNCIO</TableHead>
                        <TableHead className="w-[14.28%]">DATA</TableHead>
                        <TableHead className="w-[14.28%]">TIPO DE ENVIO</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.map((sale) => (
                        <TableRow
                            key={sale.id}
                            onClick={() => router.push(`/sales/${sale.id}`)}
                            className="cursor-pointer"
                        >
                            <TableCell className="truncate">{sale.sale_id}</TableCell>
                            <TableCell className="truncate">{sale.sku}</TableCell>
                            <TableCell className="truncate">{sale.listing_title}</TableCell>
                            <TableCell className="truncate">{sale.buyer_name}</TableCell>
                            <TableCell className="truncate">{sale.listing_id}</TableCell>
                            <TableCell className="truncate">{sale.formatted_date}</TableCell>
                            <TableCell className="truncate">{sale.delivery_method}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
}