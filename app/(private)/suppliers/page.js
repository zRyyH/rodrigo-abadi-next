"use client";

import { SuppliersTable } from "@/components/tables/SuppliersTable";
import { TableSearch } from "@/components/sections/TableSearch";
import { suppliersService } from "@/services/suppliers";
import PageCard from "@/components/common/PageCard";

export default function Suppliers() {
    return (
        <div className="gap-4 flex flex-col animate-fadeSlideIn">
            <PageCard
                title="Fornecedores"
                redirect="/suppliers/create"
                buttonText="Criar Fornecedor"
            />
            <TableSearch service={suppliersService} collection={"suppliers"} >
                <SuppliersTable />
            </TableSearch>
        </div>
    );
}