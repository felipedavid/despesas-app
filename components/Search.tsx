import icons from "@/constants/icons";
import { useLocalSearchParams, usePathname } from "expo-router";
import { useState } from "react";
import { Text, View, Image, TextInput } from "react-native";

function Search() {
    const path = usePathname();
    const params = useLocalSearchParams<{query?: string}>();
    const [search, setSearch] = useState(params.query || "");

    function handleSearch(text: string) {
        setSearch(text);
    }

    return (
        <View className="flex flex-row items-center justify-between w-full px-4 rounded-lg bg-accent-100 border border-primary-100 mt-5 py-2">
            <View className="flex-1 flex flex-row items-center justify-start z-50">
                <Image source={icons.search} className="size-5"/>
                <TextInput
                    value={search}
                    onChange={(e) => handleSearch(e.nativeEvent.text)}
                    placeholder="Search for anything"
                    className="text-sm font-rubik text-black-300 ml-2 flex-1"
                />
            </View>
        </View>
    );
}

export default Search;