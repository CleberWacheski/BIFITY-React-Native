import { CoinName, Container } from "./style"


interface InicialsCoinSelectProps {
    name : string
    active : boolean;
}

export const InicialsCoinSelect = ({name,active} : InicialsCoinSelectProps) => {
    return (
        <Container>
            <CoinName active={active}>
                {name}
            </CoinName>
        </Container>
    )
}