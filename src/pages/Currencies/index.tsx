import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { FlashList } from "@shopify/flash-list"
import { useEffect, useState } from "react"
import { Dimensions, ActivityIndicator, View } from "react-native"
import { LineChart } from "react-native-chart-kit"
import { BackPage } from "../../components/BackPage"
import { CoinSection } from "../../components/CoinSection"
import { InicialsCoinSelect } from "../../components/InicialsCoinSelect"
import { NotificationsButton } from "../../components/NotificationsButton"
import { useStatus } from "../../hooks/useCoinAPI"
import { RootTabsParamList } from "../../routes"
import { theme } from '../../styles/index'
import { SortDays } from "../../utils/OrdenationDays"

import {
    Container,
    Header,
    LoadingContent,
    Title,
    ChartContent,
} from "./style"


type ScreenProps = BottomTabScreenProps<RootTabsParamList, 'Currencies'>

export const Currencies = ({ navigation, route }: ScreenProps) => {

    const assets = route.params!.assets
    const [assetActive, setAssetActive] = useState(route.params!.assetActive)
    const assetSelected = assets!.find((asset) => asset.assetId === assetActive)
    const { data, isLoading, isFetching, refetch } = useStatus(assetActive)


    useEffect(() => {
        refetch()

    }, [assetActive])


    useEffect(() => {
        setAssetActive(route.params!.assetActive)

    }, [route.params!.assetActive])



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
                data={assets}
                keyExtractor={coin => coin.assetId}
                estimatedItemSize={5}
                extraData={assetActive}
                renderItem={({ item }) => {
                    return (
                        <InicialsCoinSelect
                            active={(assetActive === item.assetId)}
                            name={item.name}
                            onPress={() => setAssetActive(item.assetId)}
                        />
                    )
                }}
                horizontal
            />
            {(isLoading || isFetching) ?

                <LoadingContent>
                    <ActivityIndicator color={theme.colors.secondary} size='large' />
                </LoadingContent>

                :

                <>

                    <CoinSection
                        assetID={assetSelected!.assetId}
                        name={assetSelected!.name}
                        value={assetSelected!.price}
                        percentege={data!.percentege}
                    />



                    <ChartContent>
                        <LineChart
                            data={{

                                labels: SortDays(),
                                datasets: [
                                    {
                                        data: (!!data) ? data.SevenLastRates : [1, 2, 3]
                                    }
                                ]
                            }}
                            bezier={false}
                            width={Dimensions.get("window").width - 20}
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

                </>
            }



        </Container>
    )
}