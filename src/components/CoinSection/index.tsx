import {
    InitialsCoin,
    Coin,
    LogoContent,
    AssetLogo,
    DescriptionCoin,
    InformationCoin,
    TitleCoin,
    CoinContent,
    Percentege,
    Status,
    MainValue,
    Container,

} from './style';

import { Entypo } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { getAssetIcon } from '../../utils/getAssetIcon';


interface CoinSectionProps {
    name: string;
    assetID: string;
    value: number;
    percentege: string;
}


export const CoinSection = ({ assetID, name, value, percentege = '10' }: CoinSectionProps) => {

    const theme = useTheme()

    const uri = getAssetIcon(assetID)
    const color = (Number(percentege) > 0) ? theme.colors.plus_color : theme.colors.secondary
    const percentegeFormated = (Number(percentege) >= 0) ? `+${percentege}` : `${percentege}`


    return (
        <Container>
            <Coin>
                <DescriptionCoin>

                    <LogoContent>
                        <AssetLogo
                            source={{
                                uri
                            }}

                        />
                    </LogoContent>

                    <InformationCoin>
                        <TitleCoin>{name}</TitleCoin>
                        <InitialsCoin>
                            {assetID}
                        </InitialsCoin>

                    </InformationCoin>

                </DescriptionCoin>
                <CoinContent>
                    <MainValue>
                        ${value}
                    </MainValue>
                    <Status>

                        <Percentege color={color}>
                            {percentegeFormated}
                        </Percentege>
                        <Entypo name="arrow-bold-up" size={15} color={color} />
                    </Status>
                </CoinContent>

            </Coin>
        </Container>
    )
}