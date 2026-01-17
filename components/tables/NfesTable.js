"use client";

import { TableLoading } from "@/components/common/TableLoading";
import { FileTextIcon, FileCodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export function NfesTable({ rows = [], onRowClick, onDownloadPdf, onDownloadXml, loading }) {
    if (loading) {
        return <TableLoading columns={[]} message="CARREGANDO..." />;
    }

    if (rows.length < 1) return <EmptyTable />

    const isValidFile = (file) => {
        return file !== null && file !== undefined && file !== "";
    };

    return (
        <Card className="w-full p-3 animate-fadeSlideIn">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[16.66%]">NÚMERO DA VENDA</TableHead>
                        <TableHead className="w-[16.66%]">NÚMERO DA NOTA</TableHead>
                        <TableHead className="w-[16.66%]">VALOR TOTAL</TableHead>
                        <TableHead className="w-[16.66%]">DATA</TableHead>
                        <TableHead className="w-[16.66%]">STATUS</TableHead>
                        <TableHead className="w-[16.66%] text-right">AÇÕES</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={6} className="text-center text-muted-foreground">
                                NENHUMA VENDA ENCONTRADA
                            </TableCell>
                        </TableRow>
                    ) : (
                        rows.map((nfe) => (
                            <TableRow
                                key={nfe.id}
                                onClick={() => onRowClick?.(nfe)}
                            >
                                <TableCell className="w-[16.66%] font-medium">{nfe.sale_or_dispatch}</TableCell>
                                <TableCell className="w-[16.66%]">{nfe.invoice_number}</TableCell>
                                <TableCell className="w-[16.66%]">{nfe.total_amount}</TableCell>
                                <TableCell className="w-[16.66%]">{nfe.issue_date}</TableCell>
                                <TableCell className="w-[16.66%]">{nfe.status}</TableCell>
                                <TableCell className="w-[16.66%] text-right" onClick={(e) => e.stopPropagation()}>
                                    <div className="flex gap-2 justify-end">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            disabled={!isValidFile(nfe.pdf_url)}
                                            onClick={() => onDownloadPdf?.(nfe.pdf_url)}
                                            className="cursor-pointer"
                                        >
                                            <FileTextIcon />
                                            PDF
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            disabled={!isValidFile(nfe.xml_url)}
                                            onClick={() => onDownloadXml?.(nfe.xml_url)}
                                            className="cursor-pointer"
                                        >
                                            <FileCodeIcon />
                                            XML
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </Card>
    );
}