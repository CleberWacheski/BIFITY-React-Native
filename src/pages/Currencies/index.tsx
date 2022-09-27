import { ScrollView } from "react-native"
import { BackPage } from "../../components/BackPage"
import { CoinSection } from "../../components/CoinSection"
import { InicialsCoinSelect } from "../../components/InicialsCoinSelect"
import { NotificationsButton } from "../../components/NotificationsButton"

import { 
    Container,
    Header,
    Title,
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
                    maxHeight:75
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

            <CoinSection/>

            
            

        </Container>
    )
}