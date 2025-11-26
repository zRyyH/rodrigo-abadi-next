"use client";

import { TableSearch } from "@/components/sections/TableSearch";
import { SalesTable } from "@/components/tables/SalesTable";
import PageCard from "@/components/common/PageCard";
import { salesService } from "@/services/sales";

export default function Sales() {
    return (
        <div className="gap-4 flex flex-col animate-fadeSlideIn">
            <PageCard
                title="Vendas"
                redirect="/upload"
                buttonText="Criar Venda"
            />

            <TableSearch service={salesService} collection={"sales"} >
                <SalesTable />
            </TableSearch>
        </div>
    );
}