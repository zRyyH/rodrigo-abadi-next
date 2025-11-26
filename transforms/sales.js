import { DIRECTUS_BASE_URL } from "@/config/directus";
import { formatarData, formatarReal } from "@/utils/formatters"

export function transformSale(sale) {
    return {
        ...sale,
        sale_date: formatarData(sale.sale_date),
    };
};

export function transformSaleView(sale) {
    const xml_id = sale?.nfe_id?.xml_id?.id
    const pdf_id = sale?.nfe_id?.pdf_id?.id

    const xml_url = xml_id ? `${DIRECTUS_BASE_URL}/assets/${sale?.nfe_id?.xml_id?.id}` : undefined
    const pdf_url = pdf_id ? `${DIRECTUS_BASE_URL}/assets/${sale?.nfe_id?.pdf_id?.id}` : undefined

    return {
        ...sale,
        xml_url: xml_url,
        pdf_url: pdf_url,
        product: {
            imagePath: sale?.product_id?.photo_ids?.[0]?.directus_files_id,
            name: sale?.product_id?.name,
            value: formatarReal(sale?.product_id?.purchase_cost),
            quantity: sale?.units
        },
        invoice_number: sale?.nfe_id?.invoice_number,
        date: formatarData(sale?.sale_date),
        nfe_key: sale?.nfe_id?.nfe_key,
        product_revenue: formatarReal(sale?.product_revenue),
        shipping_revenue: formatarReal(sale?.shipping_revenue),
        shipping_fees: formatarReal(sale?.shipping_fees),
        sales_fee_and_taxes: formatarReal(sale?.sales_fee_and_taxes),
        total_amount: formatarReal(sale?.total_amount),
        profit: formatarReal(sale?.total_amount - sale?.product_id?.purchase_cost),
    };
}