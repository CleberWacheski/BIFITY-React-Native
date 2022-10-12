import {
    Container,
    AvatarCoin,
    Title,
    Value,
    AssetLogo,
} from './style'

import { useNavigation } from '@react-navigation/native';


import { icons } from '../../AssetsIcons/icons';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';


interface CardCoinProps {
    Id: string;
    Coin: string;
    CoinValue: string;
}

export const CardCoin = ({ Coin, Id, CoinValue }: CardCoinProps) => {

    const uri = icons.find((icon) => icon.asset_id === Id)?.url

    const { navigate } = useNavigation<BottomTabNavigationProp<any>>()


    return (
        <Container
            activeOpacity={0.6}
            onPress={() => navigate('Currencies', { assetActive: Id })}

        >
            <AvatarCoin>
                <AssetLogo
                    source={{
                        uri
                    }}
                />

            </AvatarCoin>
            <Title>
                {Coin}
            </Title>
            <Value>
                {CoinValue}
            </Value>
        </Container >
    )

}