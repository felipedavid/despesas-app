import api from "./api"

const URLS = {
    healthcheckUrl: "/healthcheck"
}

export function healthcheck() {
    return api.get(URLS.healthcheckUrl, {
        baseURL: "http://192.168.0.109:8080"
    })
}