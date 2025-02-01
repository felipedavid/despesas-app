import api from "./api"

const URLS = {
    fetchUsersCategories: "/category"
}

export async function fetchUserCategories() {
    //return api.get(URLS.fetchUsersCategories).then((res: any) => res.categories)
    const res: any = await api.get(URLS.fetchUsersCategories)
    console.log(res.data.categories)
    const data = res.data.categories;
    return {
        data: data};
}
