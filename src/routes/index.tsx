import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useEffect, useState } from "react";
import { api } from "../../services/coinapi";

import { Home } from '../../src/pages/Home';
import { Currencies } from "../pages/Currencies";
import { Notifications } from "../pages/Notifications";
import { Settings } from "../pages/Settings";
import { theme } from "../styles";
import { SwitchTabBarIcon } from "../utils/SwitchTabBarIcon";

export type RootTabsParamList = {
    Home: undefined;
    Currencies: { exchanges: CoinApi[] } | undefined;
    Settings: undefined;
    Notifications: undefined;
}

interface CoinApi {
    exchange_id: string;
    website: string;
    name: string;
    data_start: string;
    data_end: string;
    data_quote_start: string;
    data_quote_end: string;
    data_orderbook_start: string;
    data_orderbook_end: string;
    data_trade_start: string;
    data_trade_end: string;
    data_symbols_count: number;
    volume_1hrs_usd: number;
    volume_1day_usd: number;
    volume_1mth_usd: number;
}

export type ScreenProps = BottomTabScreenProps<RootTabsParamList>

export const Routes = () => {

    const Tab = createBottomTabNavigator<RootTabsParamList>()
    const [exchanges, setExchanges] = useState<CoinApi[]>([])

    useEffect(() => {

        const getExchanges = async () => {
            const { data } = await api.get('exchanges')
            const exchanges: CoinApi[] = data

            setExchanges(exchanges)
        }

        getExchanges()

    }, [])

    if (exchanges.length === 0) {
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
            <Tab.Screen name="Currencies" component={Currencies} initialParams={{ exchanges }}  />
            <Tab.Screen name="Settings" component={Settings} /> 
            <Tab.Screen name="Notifications" component={Notifications} />

        </Tab.Navigator>
    )


}