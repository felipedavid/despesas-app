import axios from 'axios';

const axiosParams = {
    baseURL: "http://192.168.0.109:8080",
}

const axiosInstance = axios.create(axiosParams);

function api(axios: any) {
    return {
        get: (url: string, config = {}) => axios.get(url, config),
        delete: (url: string, config = {}) => axios.delete(url, config),
        post: (url: string, config = {}) => axios.post(url, config),
        patch: (url: string, config = {}) => axios.patch(url, config),
        put: (url: string, config = {}) => axios.put(url, config),
    };
}

export default api(axiosInstance);