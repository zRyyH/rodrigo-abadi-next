import { directus } from '@/config/directus';
import { express } from '@/config/express';
import {
    requestInterceptor,
    requestErrorInterceptor,
} from './request';

import {
    responseInterceptor,
    responseErrorInterceptor,
} from './response';

export const setupInterceptors = () => {
    directus.interceptors.request.use(requestInterceptor, requestErrorInterceptor);
    express.interceptors.request.use(requestInterceptor, requestErrorInterceptor);
    directus.interceptors.response.use(responseInterceptor, responseErrorInterceptor);
    express.interceptors.request.use(requestInterceptor, requestErrorInterceptor);
};