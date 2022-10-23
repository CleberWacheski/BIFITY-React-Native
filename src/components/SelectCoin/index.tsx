import { TouchableOpacityProps } from "react-native";
import { getAssetIcon } from "../../utils/getAssetIcon";
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

    const uri = getAssetIcon(Id)

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