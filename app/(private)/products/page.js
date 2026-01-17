"use client";

import { TableSearch } from "@/components/sections/TableSearch";
import { ProductsTable } from "@/components/tables/ProductsTable";
import { productsService } from "@/services/products";
import PageCard from "@/components/common/PageCard";

export default function Products() {
    return (
        <div className="gap-4 flex flex-col animate-fadeSlideIn">
            <PageCard
                title="PRODUTOS"
                redirect="/products/create"
                buttonText="CRIAR PRODUTO"
            />
            <TableSearch service={productsService} collection={"products"} >
                <ProductsTable />
            </TableSearch>
        </div>
    );
}