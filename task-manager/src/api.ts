import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constant";

// Define the shape of the refresh token response
interface RefreshTokenResponse {
    access: string;
}

// Create an Axios instance with a base URL
const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL as string,
});

// Add a request interceptor to attach the access token to headers
api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers = config.headers || {}; // Ensure headers exist
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor to handle token refresh on 401 errors
api.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

        // Check if the error is due to an expired token and retry the request
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem(REFRESH_TOKEN);
                if (!refreshToken) {
                    throw new Error("No refresh token found");
                }

                // Request a new access token using the refresh token
                const res: AxiosResponse<RefreshTokenResponse> = await api.post("/api/token/refresh/", {
                    refresh: refreshToken,
                });

                // Update the access token in localStorage
                localStorage.setItem(ACCESS_TOKEN, res.data.access);

                // Retry the original request with the new access token
                return api(originalRequest);
            } catch (refreshError) {
                console.log("Token refresh failed:", refreshError);

                // Clear tokens and redirect to login if refresh fails
                localStorage.removeItem(ACCESS_TOKEN);
                localStorage.removeItem(REFRESH_TOKEN);
                window.location.href = "/login";
            }
        }

        return Promise.reject(error);
    }
);

export default api;