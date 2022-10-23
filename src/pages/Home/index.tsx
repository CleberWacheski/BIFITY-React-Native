import React, { useContext, useEffect } from 'react';

import {
    Container,
    Header,
    HeaderContent,
    Avatar,
    Text,
    Assets,
    List,
    DescriptionAssets,
    TitleAssets,
    ContentButtonAdd,
} from './style';

import { CardCoin } from '../../components/CardCoin';
import { NotificationsButton } from '../../components/NotificationsButton';
import { RootTabsParamList } from '../../routes/routes';
import { FlashList } from '@shopify/flash-list';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { UserContext } from '../../contexts/userContext';
import { BalanceComponent } from '../../components/BalanceComponent';
import { AddCashButton } from '../../components/AddCashButton';
import { BalanceAndProfitContent } from '../../contexts/BalanceAndProfitContent';


type ScreenProps = BottomTabScreenProps<RootTabsParamList, 'Home'>

const Home = ({ navigation, route }: ScreenProps) => {

    const assets = route.params!.assets
    const { user } = useContext(UserContext)
    const userImageUrl = user.picture.replace("s96-c", "s500-c");
    const itemSize = assets.length

    const { summary, getBalanceData,balance } = useContext(BalanceAndProfitContent)

    useEffect(() => {
        getBalanceData(assets)
    }, [balance])


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

            <BalanceComponent
                balanceValue={summary.balance}
                profitValue={summary.profit}
                balancePercentege={summary.balancePercentege}
            />

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
                        estimatedItemSize={itemSize}
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

            <ContentButtonAdd>
                <AddCashButton
                    onPress={() => navigation.navigate('AddCash')}

                />
            </ContentButtonAdd>


        </Container>
    )
}

export default Home