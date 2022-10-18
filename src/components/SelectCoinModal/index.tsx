import {
    AssetLogo,
    Coin,
    Container,
    LogoContent,
    DescriptionCoin,
    TitleCoin,
    InitialsCoin,
} from "./style"


export const SelectCoinModal = () => {

    return (
        <Container>
            <Coin>
                <LogoContent>
                    <AssetLogo
                        source={{
                            uri: 'https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_512/6113eae75525442485b593d9e42d18f6.png'
                        }}

                    />
                </LogoContent>
            </Coin>
            <DescriptionCoin>
                <TitleCoin>TESTE</TitleCoin>
                <InitialsCoin>
                    TST
                </InitialsCoin>

            </DescriptionCoin>
        </Container>
    )
}