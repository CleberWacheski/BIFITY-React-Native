import React, { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


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
    Assets,
    List,
    DescriptionAssets,
    TitleAssets,
    AddCashContainer,
    AddCash,


} from './style';

import { CardCoin } from '../../components/CardCoin';
import { NotificationsButton } from '../../components/NotificationsButton';
import { RootTabsParamList } from '../../routes/routes';
import { FlashList } from '@shopify/flash-list';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { UserContext } from '../../contexts/userContext';
import { useTheme } from 'styled-components';


type ScreenProps = BottomTabScreenProps<RootTabsParamList, 'Home'>

const Home = ({ navigation, route }: ScreenProps) => {

    const assets = route.params?.assets
    const { user } = useContext(UserContext)
    const userImageUrl = user.picture.replace("s96-c", "s500-c");
    const theme = useTheme()


    return (
        <Container>
            <Header>
                <HeaderContent>
                    <Avatar
                        source={{
                            uri: userImageUrl
                        }}
                    />
                    <Text>
                        {user.name}
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

            <Assets>
                <DescriptionAssets>
                    <TitleAssets>
                        ASSETS
                    </TitleAssets>
                </DescriptionAssets>

                <List >
                    <FlashList
                        data={assets}
                        keyExtractor={coin => coin.assetId}
                        estimatedItemSize={5}
                        showsHorizontalScrollIndicator={false}
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
                </List>
            </Assets>

            <AddCashContainer>
                <AddCash>

                    <FontAwesome5 name="coins" size={32} color={theme.colors.secondary} />
                    <Ionicons name="add-circle" size={22} color={theme.colors.secondary}
                        style={{
                            transform : [{
                                translateY: 10,
                            },{
                                translateX : -6
                            }]
                            
                        }}
                    />
                </AddCash>
            </AddCashContainer>

        </Container>
    )
}

export default Home