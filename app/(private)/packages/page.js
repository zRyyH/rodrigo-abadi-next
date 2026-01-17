"use client";

import { PackagesTable } from "@/components/tables/PackagesTable";
import { TableSearch } from "@/components/sections/TableSearch";
import { packagesService } from "@/services/packages";
import PageCard from "@/components/common/PageCard";

export default function Packages() {
    return (
        <div className="gap-4 flex flex-col animate-fadeSlideIn">
            <PageCard
                title="EMBALAGENS"
                redirect="/packages/create"
                buttonText="CRIAR EMBALAGEM"
            />
            <TableSearch service={packagesService} collection={"packages"} >
                <PackagesTable />
            </TableSearch>
        </div>
    );
}