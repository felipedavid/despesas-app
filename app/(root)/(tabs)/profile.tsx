import { View, Text, SafeAreaView, ScrollView, Image, Touchable, TouchableOpacity, Settings, ImageSourcePropType } from "react-native";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { settings } from "@/constants/data";

interface SettingsItemProps {
    icon: ImageSourcePropType;
    title: string;
    onPress: () => void;
    textStyles?: string;
    showArrow?: boolean;
}

function SettingsItem(props: SettingsItemProps) {
    const { icon, title, onPress, textStyles, showArrow } = props;

    return (
        <TouchableOpacity onPress={onPress} className="flex flex-row items-center justify-between py-3">
            <View className="flex flex-row items-center gap-3">
                <Image source={icon} className="size-6"/>
                <Text className={`text-lg font-rubik-medium text-black-300 ${textStyles}`}>{title}</Text>
            </View>
            {showArrow && <Image source={icons.rightArrow} className="size-5" />}
        </TouchableOpacity>
    )
}

function Profile() {
    async function handleLogout() {}

    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerClassName="pb-32 px-7"
            >
                <View className="flex flex-row items-center justify-between mt-5">
                    <Text className="text-xl font-rubik-bold">Profile</Text>
                    <Image source={icons.bell} className="size-5"/>
                </View>

                <View className="flex-row justify-center flex mt-5">
                    <View className="flex flex-col items-center relative mt-5">
                        <Image source={images.avatar} className="size-44 rounded-full"/>
                        <TouchableOpacity className="absolute bottom-11 right-2">
                            <Image source={icons.edit} className="size-9"/>
                        </TouchableOpacity>
                        <Text className="text-2xl font-rubik-bold mt-2">Felipe David</Text>
                    </View>
                </View>

                <View className="flex flex-col mt-10">
                    <SettingsItem icon={icons.person} title="Edit Profile" onPress={() => {}} showArrow={true}/>
                    <SettingsItem icon={icons.backArrow} title="My categories" onPress={() => {}}/>
                </View>

                <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
                    {settings.slice(2).map((item, index) => (
                        <SettingsItem
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            onPress={() => {}}
                            textStyles="text-black-200"
                            showArrow={true}
                        />
                    ))}
                </View>

                <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
                    <SettingsItem icon={icons.logout} title="Logout" onPress={handleLogout} textStyles="text-red-300"/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Profile;
