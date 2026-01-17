import { tokenStorage } from '@/utils/tokenStorage';
import { directus } from '@/config/directus';

export const authService = {
    login: async (credentials) => {
        const response = await directus.post('/auth/login', credentials);
        const { access_token, refresh_token } = response.data.data;
        tokenStorage.setTokens(access_token, refresh_token);
        return response.data;
    },

    logout: () => {
        tokenStorage.clearTokens();
    }
};