"use client";

import { OriginsTable } from "@/components/tables/OriginsTable";
import { TableSearch } from "@/components/sections/TableSearch";
import { originsService } from "@/services/origins";
import PageCard from "@/components/common/PageCard";

export default function Origins() {
    return (
        <div className="gap-4 flex flex-col animate-fadeSlideIn">
            <PageCard
                title="ORIGENS"
                redirect="/origins/create"
                buttonText="CRIAR ORIGEM"
            />
            <TableSearch service={originsService} collection={"origins"} >
                <OriginsTable />
            </TableSearch>
        </div>
    );
}