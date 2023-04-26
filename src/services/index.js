import axios from "axios"
import nookies from "nookies"


export const api = axios.create(
    {
        // baseURL: "https://portal-das-escolas-api.onrender.com",
        baseURL: "http://localhost:4444",
        Headers: {
            "content-Type": "application/json",
            Authorization: `Bearer ${nookies.get(null).token}`,
        }
    }
)