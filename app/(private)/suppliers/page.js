"use client";

import { SuppliersTable } from "@/components/tables/SuppliersTable";
import { TableSearch } from "@/components/sections/TableSearch";
import { suppliersService } from "@/services/suppliers";
import PageCard from "@/components/common/PageCard";

export default function Suppliers() {
    return (
        <div className="gap-4 flex flex-col animate-fadeSlideIn">
            <PageCard
                title="FORNECEDOR"
                redirect="/suppliers/create"
                buttonText="CRIAR FORNECEDOR"
            />
            <TableSearch service={suppliersService} collection={"suppliers"} >
                <SuppliersTable />
            </TableSearch>
        </div>
    );
}