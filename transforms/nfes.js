import { formatarReal, formatarData } from "@/utils/formatters";
import { DIRECTUS_BASE_URL } from "@/config/directus";

export function transformNfe(nfe) {
    const pdf_url = nfe.pdf_id ? `${DIRECTUS_BASE_URL}/assets/${nfe.pdf_id}` : null
    const xml_url = nfe.xml_id ? `${DIRECTUS_BASE_URL}/assets/${nfe.xml_id}` : null

    return {
        ...nfe,
        total_amount: formatarReal(nfe.total_amount),
        issue_date: formatarData(nfe.issue_date),
        pdf_url,
        xml_url
    };
}