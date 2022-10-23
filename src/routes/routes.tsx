import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from '../pages/Home';
import { assetsProps } from "../hooks/useCoinAPI";
import { Currencies } from "../pages/Currencies";
import { Notifications } from "../pages/Notifications";
import { Settings } from "../pages/Settings";
import { SwitchTabBarIcon } from "../utils/SwitchTabBarIcon";
import { useTheme } from "styled-components";
import { AddCash } from "../pages/AddCash";


export type RootTabsParamList = {

    Home: { assets: assetsProps[] } | undefined;
    Currencies: { assets: assetsProps[], assetActive: string } | undefined;
    AddCash: { assets: assetsProps[], assetActive: { name: string, id: string }} | undefined;
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
                    backgroundColor: theme.colors.primary,
                    borderTopWidth: 0,
                    height: 45,
                },

                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.baseline,
            })}

        >

            <Tab.Screen name='Home' component={Home} initialParams={{ assets: data }} />
            <Tab.Screen name="AddCash" component={AddCash} initialParams={{ assets: data, assetActive: { name: 'Bitcoin', id: 'BTC' } }} />
            <Tab.Screen name="Currencies" component={Currencies} initialParams={{ assets: data, assetActive: 'ETH' }} />
            <Tab.Screen name="Settings" component={Settings} />

        </Tab.Navigator>
    )


}