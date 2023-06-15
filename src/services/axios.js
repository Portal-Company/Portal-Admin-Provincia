import axios from 'axios';

export const createApiClient = (token) => {
    return axios.create({
        baseURL: "https://portal-das-escolas-api.onrender.com",
        // baseURL: "http://localhost:4444",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });
};