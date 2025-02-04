import { useEffect } from 'react';
import { View, Text } from "react-native";
import { fetchUserCategories } from "@/api/categoriesApi";
import { APIStatus } from "@/api/api";
import useApi from "@/api/hooks/useApi";

function useCategories() {
    const { data: data, exec: initFetchCategories, status } = useApi(fetchUserCategories);

    useEffect(() => {
        initFetchCategories();
    }, [])
    console.log(data);

    return [data, status];
}

export default function Categories() {
    const [categories, status] = useCategories();

    return (
        <View>
            {
                status === APIStatus.PENDING || status === APIStatus.IDLE ?
                    <Text>Loading...</Text> :
                    categories?.map((category) => (
                        <Text key={category.id}>{category.name}</Text>
                    ))
            }
        </View>
    );
}
