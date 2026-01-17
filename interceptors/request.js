import { tokenStorage } from '@/utils/tokenStorage';

export const requestInterceptor = (config) => {
    const token = tokenStorage.getAccessToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
};

export const requestErrorInterceptor = (error) => {
    return Promise.reject(error);
}