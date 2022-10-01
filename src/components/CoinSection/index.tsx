import { icons } from '../../AssetsIcons/icons';
import {
    InitialsCoin,
    Coin,
    LogoContent,
    AssetLogo,
    DescriptionCoin,
    InformationCoin,
    TitleCoin,
    MainValue,
    Container,


} from './style';



interface CoinSectionProps {
    name: string;
    assetID: string;
    value: number;
}


export const CoinSection = ({ assetID, name, value }: CoinSectionProps) => {

    const uri = icons.find((icon) => icon.asset_id === assetID)!.url


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
                <MainValue>
                    ${value}
                </MainValue>
            </Coin>
        </Container>
    )
}