import {
    Container,
    AvatarCoin,
    Title,
    Value,
    CardPlusCoin,
    PlusText,
} from './style'

import { Entypo } from '@expo/vector-icons';
import { SvgProps } from 'react-native-svg';
import { FC } from 'react';

interface CardCoinProps {
    ImgComponent: FC<SvgProps>;
    Color: string;
    Coin: string;
    CoinValue: string;
    Plus: string;
    Variant: "UP" | "DOWN"
}

export const CardCoin = ({ Coin, ImgComponent, Plus, CoinValue, Variant, Color }: CardCoinProps) => {

    return (
        <Container
            activeOpacity={0.6}  
            
        >
            <AvatarCoin>
                <ImgComponent
                    width={30}
                    height={30}
                    color={Color}
                    fill={Color}
                    style={{
                        transform: [{
                            translateY: -2
                        }],
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
                <Entypo name={(Variant === 'UP') ? 'arrow-bold-up' : 'arrow-bold-down'} size={10} color={Color} />
                <PlusText>
                    {Plus}
                </PlusText>
            </CardPlusCoin>
        </Container >
    )


}