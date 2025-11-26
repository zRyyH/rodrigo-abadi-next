import { directusToAxiosParams } from "@/utils/serviceUtils";
import { transformOrigin } from "@/transforms/origins";
import { transformData } from '@/utils/serviceUtils';
import { directus } from '@/lib/directus';

export const originsService = {
    getAll: async (search = '') => {
        const params = directusToAxiosParams({
            fields: ['*'],
            search,
        })

        const { data } = await directus.get('/items/origins', { params });
        return transformData(data?.data, transformOrigin);
    },
    getById: async (id) => {
        const { data } = await directus.get(`/items/origins/${id}`);
        return data?.data
    },
    create: async (data) => {
        return await directus.post('/items/origins', data);
    },
    update: async (id, data) => {
        return await directus.patch(`/items/origins/${id}`, data);
    },
    delete: async (id) => {
        return await directus.delete(`/items/origins/${id}`);
    },
};