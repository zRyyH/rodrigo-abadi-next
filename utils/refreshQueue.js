let isRefreshing = false;
let failedQueue = [];

export const refreshQueue = {
    isRefreshing: () => isRefreshing,
    setRefreshing: (value) => {
        isRefreshing = value;
    },

    addToQueue: () => {
        return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
        });
    },

    processQueue: (error = null, token = null) => {
        failedQueue.forEach((prom) => {
            if (error) {
                prom.reject(error);
            } else {
                prom.resolve(token);
            }
        });
        failedQueue = [];
    },
};