import { directusToAxiosParams } from "@/utils/serviceUtils";
import { transformProduct } from "@/transforms/products";
import { transformData } from '@/utils/serviceUtils';
import { directus } from '@/lib/directus';


export const productsService = {
    getAll: async (search = '') => {
        const params = directusToAxiosParams({
            fields: ['*.*.*.*'],
            search,
        })

        const { data } = await directus.get('/items/products', { params });
        return transformData(data?.data, transformProduct);
    },
    getById: async (id) => {
        const params = directusToAxiosParams({
            fields: ['*.*.*'],
        })

        const { data } = await directus.get(`/items/products/${id}`, { params });
        return data?.data
    },
    create: async (data) => {
        return await directus.post('/items/products', data);
    },
    update: async (id, data) => {
        return await directus.patch(`/items/products/${id}`, data);
    },
    delete: async (id) => {
        return await directus.delete(`/items/products/${id}`);
    },
};