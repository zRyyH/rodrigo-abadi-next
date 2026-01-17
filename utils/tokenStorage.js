const isBrowser = typeof window !== 'undefined';

export const tokenStorage = {
    getAccessToken: () => {
        return isBrowser ? localStorage.getItem('accessToken') : null;
    },

    getRefreshToken: () => {
        return isBrowser ? localStorage.getItem('refreshToken') : null;
    },

    setTokens: (accessToken, refreshToken) => {
        if (!isBrowser) return;
        localStorage.setItem('accessToken', accessToken);

        if (refreshToken) {
            localStorage.setItem('refreshToken', refreshToken);
        }
    },

    clearTokens: () => {
        if (!isBrowser) return;
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    },
};