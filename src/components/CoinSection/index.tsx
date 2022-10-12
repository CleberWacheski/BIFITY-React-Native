import { icons } from '../../AssetsIcons/icons';
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


interface CoinSectionProps {
    name: string;
    assetID: string;
    value: number;
    percentege: string;
}


export const CoinSection = ({ assetID, name, value, percentege = '10' }: CoinSectionProps) => {

    const uri = icons.find((icon) => icon.asset_id === assetID)!.url
    const color = (Number(percentege) > 0) ? '#F7B502' : '#FF2CDF'
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