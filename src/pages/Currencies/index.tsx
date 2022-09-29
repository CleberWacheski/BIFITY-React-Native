import { FlashList } from "@shopify/flash-list"
import { useState } from "react"
import { Dimensions } from "react-native"
import { LineChart } from "react-native-chart-kit"
import { BackPage } from "../../components/BackPage"
import { CoinSection } from "../../components/CoinSection"
import { InicialsCoinSelect } from "../../components/InicialsCoinSelect"
import { NotificationsButton } from "../../components/NotificationsButton"
import { ScreenProps } from "../../routes"
import { theme } from '../../styles/index'

import {
    Container,
    Header,
    Title,
    ChartContent,
} from "./style"


export const Currencies = ({ navigation, route }: ScreenProps) => {

    const exchanges = route.params?.exchanges.map((exchange) => {
        return {
            exchange_id: exchange.exchange_id
        }
    })

    const [assetActive, setassetActive] = useState('')

    const handleSetAssetActive = (assetName: string) => { setassetActive(assetActive) }

    console.log(assetActive)

    return (
        <Container>
            <Header>
                <BackPage />
                <NotificationsButton />
            </Header>

            <Title>
                TRADING
            </Title>

            <FlashList
                data={exchanges}
                keyExtractor={coin => coin.exchange_id}
                estimatedItemSize={337}
                renderItem={({ item }) => {
                    return (
                        <InicialsCoinSelect
                            active={(assetActive === item.exchange_id)}
                            name={item.exchange_id}
                            handleSetAssetActive={handleSetAssetActive}
                        />
                    )
                }}
                horizontal
            />

            <CoinSection />

            <ChartContent>
                <LineChart
                    data={{

                        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                        datasets: [
                            {
                                data: [
                                    0,
                                    1,
                                    9,
                                    2,
                                    20,
                                    5,
                                    1,
                                    9,
                                    2,
                                    20,
                                    5,
                                ]
                            }
                        ]
                    }}
                    bezier={false}
                    width={Dimensions.get("window").width - 10}
                    height={250}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    withDots={false}
                    withVerticalLines={false}
                    withHorizontalLines={false}

                    transparent
                    chartConfig={{
                        decimalPlaces: 0,
                        strokeWidth: 2,
                        fillShadowGradientToOpacity: 0.4,
                        fillShadowGradient: theme.colors.secondary,

                        color: (opacity = 1) => theme.colors.secondary,
                        labelColor: (opacity = 0.1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </ChartContent>




        </Container>
    )
}