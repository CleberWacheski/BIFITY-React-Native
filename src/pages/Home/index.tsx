import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import BitcoinLogo from '../../../assets/BitcoinLogo.svg'
import EthereumLogo from '../../../assets/EthereumLogo.svg'

import {
    Container,
    Header,
    HeaderContent,
    Avatar,
    Text,
    Balance,
    TotalBalance,
    Description,
    Value,
    PercentegeCard,
    Percentege,
    ProfitCard,
    ProfitContent,
    ProfitDescription,
    ProfitValue,
    ProfitPercentege,
    Section,
    ContentSection,
    TitleSection,
    ButtonSection,
    OptionText,
    Assets,
    DescriptionAssets,
    TitleAssets,


} from './style';

import { CardCoin } from '../../components/CardCoin';
import { ScrollView } from 'react-native';
import { NotificationsButton } from '../../components/NotificationsButton';
import { CoinSection } from '../../components/CoinSection';


export const Home: React.FC = () => {

    return (
        <Container>
            <Header>
                <HeaderContent>
                    <Avatar
                        source={{
                            uri: 'https://avatars.githubusercontent.com/u/94264158?v=4'
                        }}
                    />
                    <Text>
                        WELCOME BACK
                    </Text>
                </HeaderContent>
                <NotificationsButton />
            </Header>

            <Balance>
                <TotalBalance>
                    <Description>
                        Total balance
                    </Description>
                    <Value>
                        $13450.00
                    </Value>
                </TotalBalance>
                <PercentegeCard>
                    <Percentege>
                        <Ionicons
                            name="caret-up-sharp"
                            size={12}
                            color="#9BFFF2"
                        />
                        +15%
                    </Percentege>
                </PercentegeCard>
            </Balance>

            <ProfitCard>
                <ProfitContent>
                    <ProfitDescription>
                        Profit
                    </ProfitDescription>
                    <ProfitValue>
                        $13250.00
                    </ProfitValue>
                </ProfitContent>
                <ProfitPercentege>
                    5.7%
                </ProfitPercentege>
            </ProfitCard>

            <Section>
                <ContentSection>
                    <TitleSection>
                        HOLDINGS
                    </TitleSection>
                    <ButtonSection>
                        <OptionText>
                            See All
                        </OptionText>
                    </ButtonSection>
                </ContentSection>
                <CoinSection
                    assetID="BTC"
                    name="Bitcoin"
                    value={26927}
                />
            </Section>

            <Assets>
                <DescriptionAssets>
                    <TitleAssets>
                        ASSETS
                    </TitleAssets>
                    <ButtonSection>
                        <OptionText>
                            view all
                        </OptionText>
                    </ButtonSection>
                </DescriptionAssets>

                <ScrollView
                    horizontal
                >
                    <CardCoin
                        Coin='Bitcoin'
                        CoinValue='$6012.00'
                        Color='#F7B502'
                        Plus='+2.17'
                        Variant='UP'
                        ImgComponent={BitcoinLogo}

                    />

                    <CardCoin
                        Coin='Ethereum'
                        CoinValue='$4512.00'
                        Color='#45BA62'
                        Plus='-1.17'
                        Variant='DOWN'
                        ImgComponent={EthereumLogo}

                    />

                </ScrollView>

            </Assets>


        </Container>
    )
}
