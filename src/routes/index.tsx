import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from '../../src/pages/Home';
import { assetsProps, useAssets } from "../hooks/useCoinAPI";
import { Currencies } from "../pages/Currencies";
import { Notifications } from "../pages/Notifications";
import { Settings } from "../pages/Settings";
import { theme } from "../styles";
import { SwitchTabBarIcon } from "../utils/SwitchTabBarIcon";



export type RootTabsParamList = {
    Home: undefined;
    Currencies: { assets: assetsProps[] } | undefined;
    Settings: undefined;
    Notifications: undefined;
}


export type ScreenProps = BottomTabScreenProps<RootTabsParamList>

export const Routes = () => {

    const Tab = createBottomTabNavigator<RootTabsParamList>()
    const { data, isLoading } = useAssets()

    if (isLoading) {
        return null
    }

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon(props) {
                    return SwitchTabBarIcon({ TabBarIcon: props, route: route.name })
                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#211E41',
                    borderTopWidth: 0,
                    height: 45,
                },
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.baseline,
            })}

        >

            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Currencies" component={Currencies} initialParams={{ assets: data }} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Notifications" component={Notifications} />

        </Tab.Navigator>
    )


}