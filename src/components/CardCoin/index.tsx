import {
    Container,
    AvatarCoin,
    Title,
    Value,
    CardPlusCoin,
    PlusText,
} from './style'

import { Entypo } from '@expo/vector-icons';
import BitcoinLogo from '../../../assets/BitcoinLogo.svg'
import { LinearGradient } from 'expo-linear-gradient';


export const CardCoin = () => {

    return (
        <Container>
            <AvatarCoin>
                <BitcoinLogo
                    width={30}
                    height={30}
                    color='#F7B502'
                    style={{
                        transform: [{
                            translateY: -3
                        }],
                    }}
                />
            </AvatarCoin>
            <Title>
                Bitcoin
            </Title>
            <Value>
                $6012.00
            </Value>
            <CardPlusCoin>
                <Entypo name="arrow-bold-up" size={10} color="#F7B502" />
                <PlusText>
                    +2.17
                </PlusText>
            </CardPlusCoin>
        </Container >
    )


}