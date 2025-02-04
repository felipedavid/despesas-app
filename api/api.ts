import axios from "axios";

const axiosParams = {
  baseURL: "http://192.168.0.109:8080",
  headers: {
    Authorization: "Bearer 5SCPMPDRPSNXSA7BOKQRKY36YE",
  },
};

const axiosInstance = axios.create(axiosParams);

export enum APIStatus {
  IDLE,
  PENDING,
  SUCCESS,
  ERROR,
}

async function withLogging<T>(promise: Promise<T>) {
  promise.catch((error) => {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }

    console.log(error.config);
    throw error;
  });

  return promise;
}

function api(axios: any) {
  return {
    get: (url: string, config = {}) => withLogging(axios.get(url, config)),
    delete: (url: string, config = {}) =>
      withLogging(axios.delete(url, config)),
    post: (url: string, config = {}) => withLogging(axios.post(url, config)),
    patch: (url: string, config = {}) => withLogging(axios.patch(url, config)),
    put: (url: string, config = {}) => withLogging(axios.put(url, config)),
  };
}

export default api(axiosInstance);

