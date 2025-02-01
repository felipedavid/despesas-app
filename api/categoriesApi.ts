import api from "./api"

const URLS = {
    fetchUsersCategories: "/category"
}

export async function fetchUserCategories() {
    const res = await api.get(URLS.fetchUsersCategories)
    return res;
}
