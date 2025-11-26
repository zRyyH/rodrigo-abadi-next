"use client";

import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import SearchbarWithFilters from "@/components/sections/SearchBar";
import useSearchWithFilters from "@/hooks/useSearchWithFilters";
import { Pagination } from "@/components/common/Pagination";
import { usePagination } from "@/hooks/usePagination";
import { useMutation } from "@/hooks/useMutation";

export function TableSearch({ children, collection, service }) {
    const searchProps = useSearchWithFilters([collection]);

    const { mutate: onDelete } = useMutation(service.delete, {
        title: "Delete",
        msg: "Item deletado com sucesso",
        redirect: `/${collection}`,
        invalidateQueryKey: collection,
    });

    const { data, isPending } = useQuery({
        queryKey: [collection, searchProps.search, searchProps.activeFilters],
        queryFn: () => service.getAll(searchProps.search, searchProps.activeFilters),
    });

    const paginationProps = usePagination(data?.data);

    return (
        <div className="flex flex-col gap-4" >
            <SearchbarWithFilters {...searchProps} />

            {
                React.cloneElement(children, {
                    rows: paginationProps.currentData,
                    loading: isPending,
                    onDelete: (item) => onDelete(item.id)
                })
            }

            <Pagination {...paginationProps} />
        </div>
    );
}