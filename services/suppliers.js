import { directusToAxiosParams } from "@/utils/serviceUtils";
import { transformData } from '@/utils/serviceUtils';
import { directus } from '@/lib/directus';

import { transformSupplier } from "@/transforms/suppliers";

export const suppliersService = {
    getAll: async (search = '') => {
        const params = directusToAxiosParams({
            fields: ['*'],
            search,
        })

        const { data } = await directus.get('/items/suppliers', { params });
        return transformData(data?.data, transformSupplier);
    },
    getById: async (id) => {
        const { data } = await directus.get(`/items/suppliers/${id}`);
        return data?.data
    },
    create: async (data) => {
        return await directus.post('/items/suppliers', data);
    },
    update: async (id, data) => {
        return await directus.patch(`/items/suppliers/${id}`, data);
    },
    delete: async (id) => {
        return await directus.delete(`/items/suppliers/${id}`);
    },
};