"use client";

import FormManager from "@/components/forms/FormManager";
import ProductForm from "@/components/forms/ProductForm";
import { productsService } from "@/services/products";

export default function EditProductPage() {
    return (
        <div className="animate-fadeSlideIn" >
            <FormManager
                queryKey="products"
                queryFn={productsService.getById}
                createFn={productsService.create}
                updateFn={productsService.update}
                redirectTo="/products"
                initialData={{
                    sku: "",
                    name: "",
                    quantity: "",
                    purchase_cost: "",
                    package_id: "",
                    supplier_id: "",
                    cest: "",
                    ncm: "",
                    photo_ids: []
                }}
            >
                <ProductForm />
            </FormManager>
        </div>
    );
}