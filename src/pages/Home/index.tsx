import React from 'react';
import { Ionicons } from '@expo/vector-icons';


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
import { NotificationsButton } from '../../components/NotificationsButton';
import { CoinSection } from '../../components/CoinSection';
import { ScreenProps } from '../../routes';
import { FlashList } from '@shopify/flash-list';


export const Home = ({ navigation, route }: ScreenProps) => {

    const assets = route.params!.assets
    

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
                        WELLCOME BACK
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
                </DescriptionAssets>

                <FlashList
                    data={assets}
                    keyExtractor={coin => coin.assetId}
                    estimatedItemSize={5}
                    renderItem={({ item }) => {
                        return (
                            <CardCoin
                                Coin={item.name}
                                Id={item.assetId}
                                CoinValue={`$${item.price}`}
                            />
                        )
                    }}
                    horizontal
                />


            </Assets>


        </Container>
    )
}
