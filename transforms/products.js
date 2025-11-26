import { formatarCEST, formatarNCM, formatarReal } from "@/utils/formatters";

export function transformProduct(product) {
    return {
        ...product,
        images: [product?.photo_ids?.[0]?.directus_files_id?.id],
        type_of_packaging: product?.package_id?.type_of_packaging,
        purchase_cost: formatarReal(product?.purchase_cost),
        supplier_name: product?.supplier_id?.supplier_name,
        cest: formatarCEST(product?.cest),
        ncm: formatarNCM(product?.ncm),
    };
}