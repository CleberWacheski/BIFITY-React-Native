import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from '../pages/Home';
import { assetsProps, useAssets } from "../hooks/useCoinAPI";
import { Currencies } from "../pages/Currencies";
import { Notifications } from "../pages/Notifications";
import { Settings } from "../pages/Settings";
import { SwitchTabBarIcon } from "../utils/SwitchTabBarIcon";
import { useTheme } from "styled-components";


export type RootTabsParamList = {

    Home: { assets: assetsProps[] } | undefined;
    Currencies: { assets: assetsProps[], assetActive: string } | undefined;
    Settings: undefined;
    Notifications: undefined;
}

interface RoutesParamsProps {
    data: assetsProps[] | undefined
}

export const Routes = ({ data }: RoutesParamsProps) => {

    const Tab = createBottomTabNavigator<RootTabsParamList>()
    const theme = useTheme()

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

            <Tab.Screen name='Home' component={Home} initialParams={{ assets: data }} />
            <Tab.Screen name="Currencies" component={Currencies} initialParams={{ assets: data, assetActive: 'ETH' }} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="Notifications" component={Notifications} />

        </Tab.Navigator>
    )


}