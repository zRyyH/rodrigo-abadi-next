"use client";

import { TableSearch } from "@/components/sections/TableSearch";
import { NfesTable } from "@/components/tables/NfesTable";
import PageCard from "@/components/common/PageCard";
import { nfesService } from "@/services/nfes";

export default function Sales() {
    function onDownload(url) {
        window.location.href = url
    }

    return (
        <div className="gap-4 flex flex-col animate-fadeSlideIn">
            <PageCard
                title="Notas Fiscais"
                redirect="/upload"
                buttonText="Criar Nota Fiscal"
            />

            <TableSearch service={nfesService} collection={"nfes"} >
                <NfesTable onDownloadPdf={onDownload} onDownloadXml={onDownload} />
            </TableSearch>
        </div>
    );
}