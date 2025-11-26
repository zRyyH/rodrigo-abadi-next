export function transformInvoice(invoice) {
    return {
        ...invoice,
        origin_id: invoice?.origin_id?.origin,
    };
}