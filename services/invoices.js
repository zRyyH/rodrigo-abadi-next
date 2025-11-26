import { directusToAxiosParams } from "@/utils/serviceUtils";
import { transformData } from '@/utils/serviceUtils';
import { directus } from '@/lib/directus';

import { transformInvoice } from "@/transforms/invoices";

export const invoicesService = {
    getAll: async (search = '') => {
        const params = directusToAxiosParams({
            fields: ['*', 'origin_id.*'],
            search,
        })

        const { data } = await directus.get('/items/invoices', { params });
        return transformData(data?.data, transformInvoice);
    },
    getById: async (id) => {
        const { data } = await directus.get(`/items/invoices/${id}`);
        return data?.data
    },
    create: async (data) => {
        return await directus.post('/items/invoices', data);
    },
    update: async (id, data) => {
        return await directus.patch(`/items/invoices/${id}`, data);
    },
    delete: async (id) => {
        return await directus.delete(`/items/invoices/${id}`);
    },
};