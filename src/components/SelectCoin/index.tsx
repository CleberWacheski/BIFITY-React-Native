import { TouchableOpacityProps } from "react-native";
import { icons } from "../../AssetsIcons/icons";
import {
    AssetLogo,
    Coin,
    Container,
    LogoContent,
    DescriptionCoin,
    TitleCoin,
    InitialsCoin,
} from "./style"

interface CoinModalProps extends TouchableOpacityProps {
    name: string;
    Id: string;
}


export const SelectCoin = ({ Id, name, ...rest }: CoinModalProps) => {

    const uri = icons.find((asset) => asset.asset_id === Id)!.url

    return (
        <Container {...rest}>
            <Coin>
                <LogoContent>
                    <AssetLogo
                        source={{
                            uri
                        }}

                    />
                </LogoContent>
            </Coin>
            <DescriptionCoin>
                <TitleCoin>{name}</TitleCoin>
                <InitialsCoin>
                    {Id}
                </InitialsCoin>

            </DescriptionCoin>
        </Container>
    )
}