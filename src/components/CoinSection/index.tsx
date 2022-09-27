import {
    InitialsCoin,
    Coin,
    LogoContent,
    DescriptionCoin,
    ValueCoin,
    InformationCoin,
    TitleCoin,
    MainValue,
    SumaryValue,
    Container,


} from './style';

import BitcoinLogo from '../../../assets/BitcoinLogo.svg'



export const CoinSection = () => {
    return (
        <Container>
            <Coin>
                <DescriptionCoin>

                    <LogoContent>
                        <BitcoinLogo
                            width={30}
                            height={30}
                            color='white'
                            style={{
                                transform: [{
                                    translateY: -4
                                }]
                            }}
                        />
                    </LogoContent>

                    <InformationCoin>
                        <TitleCoin>Bitcoin</TitleCoin>
                        <InitialsCoin>
                            BTC
                        </InitialsCoin>

                    </InformationCoin>

                </DescriptionCoin>
                <ValueCoin>
                    <MainValue>
                        $26927
                    </MainValue>
                    <SumaryValue>
                        2.05 BTC
                    </SumaryValue>
                </ValueCoin>
            </Coin>
        </Container>
    )
}