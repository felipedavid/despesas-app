import { useEffect, useState } from 'react';
import { View, Button, Text } from "react-native";
import { fetchUserCategories } from "@/api/categoriesApi";

function useFetchCategories() {
    const [categories, setCategories] = useState([]);

    const initFetchCategories = async () => {
        const res = await fetchUserCategories();
        console.log(res.data.categories);
        setCategories(res.data.categories);
    }

    return {
        categories,
        initFetchCategories
    }
}

export default function Categories() {
    const { categories, initFetchCategories } = useFetchCategories();

    useEffect(() => {
        initFetchCategories();
    }, []);

    return (
        <View>
            <Button title="Fetch Categories" onPress={initFetchCategories} className="mt-8" />
            {categories.map((category) => (
                <Text key={category.id}>{category.name}</Text>
            ))}
        </View>
    );
}