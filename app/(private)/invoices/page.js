"use client";

import { InvoicesTable } from "@/components/tables/InvoicesTable";
import { TableSearch } from "@/components/sections/TableSearch";
import { invoicesService } from "@/services/invoices";
import PageCard from "@/components/common/PageCard";

export default function Invoices() {
    return (
        <div className="gap-4 flex flex-col animate-fadeSlideIn">
            <PageCard
                title="Notas Fiscais"
                redirect="/invoices/create"
                buttonText="Criar Nota Fiscal"
            />
            <TableSearch collection={"invoices"} service={invoicesService} >
                <InvoicesTable />
            </TableSearch>
        </div>
    );
}