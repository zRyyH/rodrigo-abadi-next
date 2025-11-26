import { directusToAxiosParams } from "@/utils/serviceUtils";
import { transformData } from '@/utils/serviceUtils';
import { directus } from '@/lib/directus';

import { transformSale, transformSaleView } from "@/transforms/sales";

export const salesService = {
    getAll: async (search = '') => {
        const params = directusToAxiosParams({
            fields: ['*'],
            search,
        });

        const { data } = await directus.get('/items/sales', { params });
        return transformData(data?.data, transformSale);
    },
    getById: async (id) => {
        const params = directusToAxiosParams({ fields: ['*.*.*'] });
        const { data } = await directus.get(`/items/sales/${id}`, { params });
        return transformSaleView(data?.data);
    },
    create: async (data) => {
        return await directus.post('/items/sales', data);
    },
    update: async (id, data) => {
        return await directus.patch(`/items/sales/${id}`, data);
    },
    delete: async (id) => {
        return await directus.delete(`/items/sales/${id}`);
    },
};