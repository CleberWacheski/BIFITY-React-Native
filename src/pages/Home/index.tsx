import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import BitcoinLogo from '../../../assets/BitcoinLogo.svg'

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
    InitialsCoin,
    ButtonSection,
    OptionText,
    MainSection,
    Coin,
    LogoContent,
    DescriptionCoin,
    ValueCoin,
    InformationCoin,
    TitleCoin,
    MainValue,
    SumaryValue,
    Assets,
    DescriptionAssets,
    TitleAssets,


} from './style';
import { theme } from '../../styles';
import { CardCoin } from '../../components/CardCoin';
import { FlatList, ListViewComponent, ScrollView } from 'react-native';

const Home: React.FC = () => {
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
                <Ionicons
                    name="notifications"
                    size={26}
                    color={theme.colors.secondary}
                />
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
                <MainSection>
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
                </MainSection>
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
                    <CardCoin />
                    <CardCoin />
                    <CardCoin />
                    <CardCoin />
                    <CardCoin />
                </ScrollView>
            </Assets>


        </Container>
    )
}

export default Home;