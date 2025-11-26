import { directusToAxiosParams } from "@/utils/serviceUtils";
import { transformData } from '@/utils/serviceUtils';
import { directus } from '@/lib/directus';

import { transformNfe } from "@/transforms/nfes";

export const nfesService = {
    getAll: async (search = '') => {
        const params = directusToAxiosParams({
            fields: ['*'],
            search,
        })

        const { data } = await directus.get('/items/nfes', { params });
        return transformData(data?.data, transformNfe);
    },
    getById: async (id) => {
        const { data } = await directus.get(`/items/nfes/${id}`);
        return data?.data
    },
    create: async (data) => {
        return await directus.post('/items/nfes', data);
    },
    update: async (id, data) => {
        return await directus.patch(`/items/nfes/${id}`, data);
    },
    delete: async (id) => {
        return await directus.delete(`/items/nfes/${id}`);
    },
};