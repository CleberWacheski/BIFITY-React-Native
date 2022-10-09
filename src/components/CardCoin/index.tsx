import {
    Container,
    AvatarCoin,
    Title,
    Value,
    CardPlusCoin,
    PlusText,
    AssetLogo,
} from './style'

import { Entypo } from '@expo/vector-icons';
import { icons } from '../../AssetsIcons/icons';
import { theme } from '../../styles';


interface CardCoinProps {
    Id: string;
    Coin: string;
    CoinValue: string;
    percentege : string;
}

export const CardCoin = ({ Coin, Id, CoinValue,percentege }: CardCoinProps) => {

    const uri = icons.find((icon) => icon.asset_id === Id)?.url


    return (
        <Container
            activeOpacity={0.6}

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
            <CardPlusCoin>
                <Entypo name={(Number(percentege) > 0) ? 'arrow-bold-up' : 'arrow-bold-down'} size={10}
                    color={(Number(percentege) > 0) ? '#F7B502' : theme.colors.secondary} />
                <PlusText>
                    {percentege}
                </PlusText>
            </CardPlusCoin>
        </Container >
    )

}