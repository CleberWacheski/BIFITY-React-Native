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

interface CoinModalProps {
    name: string;
    Id: string;
}


export const SelectCoinModal = ({ Id, name }: CoinModalProps) => {

    const uri = icons.find((asset) => asset.asset_id === Id)!.url

    return (
        <Container>
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