"use client";

import { Card } from "@/components/ui/card";
import { PackageOpen } from "lucide-react";
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription } from "@/components/ui/empty";

export function EmptyTable() {
    return (
        <Card className="w-full p-6">
            <Empty>
                <EmptyHeader>
                    <EmptyMedia variant="icon">
                        <PackageOpen />
                    </EmptyMedia>
                    <EmptyTitle>NENHUM ITEM ADICIONADO</EmptyTitle>
                    <EmptyDescription>
                        ADICIONE ITENS PARA COMEÇAR
                    </EmptyDescription>
                </EmptyHeader>
            </Empty>
        </Card>
    );
}