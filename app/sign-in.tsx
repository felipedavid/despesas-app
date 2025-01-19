import icons from "@/constants/icons";
import images from "@/constants/images";
import { Redirect } from "expo-router";
import { useState } from "react";
import { SafeAreaView, ScrollView, Image, Text, View, TouchableOpacity } from "react-native";

function SignIn() {
    const [loggedIn, setLoggedIn] = useState(false);

    function handleLogin() {
        setLoggedIn(true);
    }

    if (loggedIn) return <Redirect href="/"/>

    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerClassName="h-full">
                <Image source={images.onboarding} className="w-full h-4/6" resizeMode="contain"/>
                <View className="pb-10">
                    <Text className="text-base text-center uppercase font-rubik text-black-200">Bem-vindo(a) ao Saldo+</Text>
                    <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
                        Vamos lá alcançar a sua {"\n"}
                        <Text className="text-primary-300">liberdade financeira!</Text>
                    </Text>

                    <Text className="text-lg font-rubik text-black-200 text-center mt-12">
                        Entrar no Saldo+ com a Google
                    </Text>

                    <TouchableOpacity onPress={handleLogin} className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5">
                        <View className="flex flex-row items-center justify-center">
                            <Image source={icons.google} className="w-5 h-5" resizeMode="contain"/>
                            <Text className="text-lg font-rubik-medium text-black-300 ml-2">Continuar com Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn;