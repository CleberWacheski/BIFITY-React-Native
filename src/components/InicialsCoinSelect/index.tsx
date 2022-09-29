import { CoinName, Container } from "./style"


interface InicialsCoinSelectProps {
    name : string
    active : boolean;
    handleSetAssetActive : (assetName : string) => void;
}

export const InicialsCoinSelect = ({name,active,handleSetAssetActive} : InicialsCoinSelectProps) => {


    return (
        <Container onPress={()=>handleSetAssetActive (name) }>
            <CoinName active={active}>
                {name}
            </CoinName>
        </Container>
    )
}