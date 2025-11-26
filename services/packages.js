import { directusToAxiosParams } from "@/utils/serviceUtils";
import { transformData } from '@/utils/serviceUtils';
import { directus } from '@/lib/directus';

import { transformPackage } from "@/transforms/packages";

export const packagesService = {
    getAll: async (search = '') => {
        const params = directusToAxiosParams({
            fields: ['*'],
            search,
        })

        const { data } = await directus.get('/items/packages', { params });
        return transformData(data?.data, transformPackage);
    },
    getById: async (id) => {
        const { data } = await directus.get(`/items/packages/${id}`);
        return data?.data
    },
    create: async (data) => {
        return await directus.post('/items/packages', data);
    },
    update: async (id, data) => {
        return await directus.patch(`/items/packages/${id}`, data);
    },
    delete: async (id) => {
        return await directus.delete(`/items/packages/${id}`);
    },
};