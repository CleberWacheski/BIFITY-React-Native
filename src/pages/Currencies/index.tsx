import { Dimensions, ScrollView } from "react-native"
import { LineChart,BarChart } from "react-native-chart-kit"
import { BackPage } from "../../components/BackPage"
import { CoinSection } from "../../components/CoinSection"
import { InicialsCoinSelect } from "../../components/InicialsCoinSelect"
import { NotificationsButton } from "../../components/NotificationsButton"
import {theme} from '../../styles/index'

import {
    Container,
    Header,
    Title,
    ChartContent,
} from "./style"

export const Currencies = () => {


    return (
        <Container>
            <Header>
                <BackPage />
                <NotificationsButton />
            </Header>

            <Title>
                TRADING
            </Title>

            <ScrollView
                horizontal
                style={{
                    maxHeight: 75
                }}
            >
                <InicialsCoinSelect
                    name="BTC"
                    active={true}
                />
                <InicialsCoinSelect
                    name="ETF"
                    active={false}
                />
                <InicialsCoinSelect
                    name="LTC"
                    active={false}
                />
                <InicialsCoinSelect
                    name="XRP"
                    active={false}
                />
                <InicialsCoinSelect
                    name="EOC"
                    active={false}
                />

            </ScrollView>

            <CoinSection />

            <ChartContent>
                <LineChart
                    data={{
                        
                        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"],
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
                    width={Dimensions.get("window").width-10} 
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
                        fillShadowGradientToOpacity : 0.4,
                        fillShadowGradient : theme.colors.secondary,

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