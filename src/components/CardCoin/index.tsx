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
import { useAssetStatus } from '../../hooks/useCoinAPI';
import { theme } from '../../styles';


interface CardCoinProps {
    Id: string;
    Coin: string;
    CoinValue: string;
}

export const CardCoin = ({ Coin, Id, CoinValue }: CardCoinProps) => {

    const uri = icons.find((icon) => icon.asset_id === Id)?.url

    const { data: assetStatus, isLoading, isFetching } = useAssetStatus(Id)

    console.log(assetStatus)

    if (!isLoading) {

        const percentenge = assetStatus!.find((asset) => asset.assetID === Id)

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
                    <Entypo name={(Number(percentenge) > 0) ? 'arrow-bold-up' : 'arrow-bold-down'} size={10}
                        color={(Number(percentenge) > 0) ? '#F7B502' : theme.colors.secondary} />
                    <PlusText>
                        {`${percentenge}`}
                    </PlusText>
                </CardPlusCoin>
            </Container >
        )
    }
    else {
        return null
    }





}