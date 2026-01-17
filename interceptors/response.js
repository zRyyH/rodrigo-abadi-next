import { refreshTokenService } from '@/services/refreshToken';
import { tokenStorage } from '@/utils/tokenStorage';
import { refreshQueue } from '@/utils/refreshQueue';
import { directus } from '@/config/directus';

const redirectToLogin = () => {
    if (typeof window !== 'undefined') {
        window.location.href = '/';
    }
};

export const responseInterceptor = (response) => {
    return response;
};

export const responseErrorInterceptor = async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
        if (refreshQueue.isRefreshing()) {
            const token = await refreshQueue.addToQueue();
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return directus(originalRequest);
        }
        originalRequest._retry = true;
        refreshQueue.setRefreshing(true);

        try {
            const accessToken = await refreshTokenService();
            directus.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;

            refreshQueue.processQueue(null, accessToken);
            return directus(originalRequest);

        } catch (refreshError) {
            refreshQueue.processQueue(refreshError, null);
            tokenStorage.clearTokens();
            redirectToLogin();
            return Promise.reject(refreshError);

        } finally {
            refreshQueue.setRefreshing(false);
        }
    }

    const errorMessage = error.response?.data?.message || error.message || 'Erro ao processar requisição';

    return Promise.reject({
        message: errorMessage,
        status: error.response?.status,
        data: error.response?.data,
        originalError: error,
    });
};