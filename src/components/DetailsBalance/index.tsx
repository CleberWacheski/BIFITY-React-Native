import { useContext } from 'react';
import { icons } from '../../AssetsIcons/icons';
import { FontAwesome } from '@expo/vector-icons';

import { BalanceAndProfitContent } from '../../contexts/BalanceAndProfitContent';
import {
    Container,
    CoinDetail,
    CoinName,
    IconCoin,
    Details,
    DetailsContent,
    DateValue,
    Value,
    RemoveItemContent,

} from './style'
import { useTheme } from 'styled-components';

interface DetailsBalanceProps {
    name: string;
    date: Date;
    Coinid: string;
    value: number;
    id: string;
}

export const DetailsBalance = ({ date, name, value, id,Coinid }: DetailsBalanceProps) => {

    const uri = icons.find((asset) => asset.asset_id === Coinid)!.url
    const theme = useTheme()

    const { removeItemInBalance } = useContext(BalanceAndProfitContent)

    const dateFormated = new Date(date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: '2-digit',
        dateStyle: 'full'
    })

    return (
        <Container>
            <CoinDetail>
                <CoinName>
                    {name}
                </CoinName>
                <IconCoin
                    source={{
                        uri
                    }}
                />
            </CoinDetail>
            <Details>
                <DetailsContent>
                    <DateValue>
                        {dateFormated}
                    </DateValue>
                    <Value>
                        + {value}$
                    </Value>
                </DetailsContent>

                <RemoveItemContent
                    onPress={() => removeItemInBalance(id)}
                >
                    <FontAwesome name="trash" size={22} color={theme.colors.secondary} />
                </RemoveItemContent>
            </Details>


        </Container>
    )
}