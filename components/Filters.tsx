import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, Text } from "react-native";

function Filters() {
    const params = useLocalSearchParams<{filter?: string}>();
    const [selectedCategory, setSelectedCategory] = useState(params.filter || "All");

    function handleCategory(category: string) {

    }

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex flex-row gap-5">
            <Text>Filters</Text>
        </ScrollView>
    );
}

export default Filters;