import {
    Container,
    AvatarCoin,
    Title,
    Value,
    AssetLogo,
} from './style'

import { useNavigation } from '@react-navigation/native';

import {getAssetIcon} from '../../utils/getAssetIcon'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';


interface CardCoinProps {
    Id: string;
    Coin: string;
    CoinValue: string;
}

export const CardCoin = ({ Coin, Id, CoinValue }: CardCoinProps) => {

    const uri = getAssetIcon(Id)

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