"use client";

import SaleView from "@/components/views/SaleView";
import { useQuery } from "@tanstack/react-query";
import { salesService } from "@/services/sales";
import { useParams } from "next/navigation";

export default function Sale() {
    const params = useParams();

    const { data, isPending } = useQuery({
        queryKey: ["sale", params.id],
        queryFn: () => salesService.getById(params.id),
    });

    return (
        <SaleView {...data} loading={isPending} />
    )
}