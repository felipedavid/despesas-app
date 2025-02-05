import { Tabs } from 'expo-router';
import { Image, Text, View } from 'react-native';

import icons from '@/constants/icons'

interface TabIconProps {
    focused: boolean;
    icon: any;
    title: string;
}

function TabIcon(props: TabIconProps) {
    const { focused, icon, title } = props;
    return (
        <View className="flex-1 mt-3 flex flex-col items-center">
            <Image
                source={icon}
                tintColor={focused? "#0061ff" : "#666876"}
                resizeMode="contain"
                className="size-6"
                />
            <Text className={`text-xs ${focused? "text-primary-300 font-rubik-medium" : "text-black-200 font-rubik"} text-xs w-full text-center mt-1`}>
                {title}
            </Text>
        </View>
    );
}

function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: 'white',
                    position: 'absolute',
                    borderTopColor: '#0061ff1a',
                    borderTopWidth: 1,
                    minHeight: 70,
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon icon={icons.home} focused={focused} title="Home"/>
                }}
            />
            <Tabs.Screen
                name="transactions"
                options={{
                    title: 'Transactions',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon icon={icons.wallet} focused={focused} title="Transactions"/>
                }}
            />
            <Tabs.Screen
                name="charts"
                options={{
                    title: 'Charts',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon icon={icons.search} focused={focused} title="Charts"/>
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon icon={icons.person} focused={focused} title="Profile"/>
                }}
            />
        </Tabs>
    );
}

export default TabsLayout;