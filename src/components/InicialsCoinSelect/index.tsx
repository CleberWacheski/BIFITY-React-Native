import { TouchableOpacityProps } from "react-native";
import { CoinName, Container } from "./style"


interface InicialsCoinSelectProps extends TouchableOpacityProps {
    name: string
    active: boolean;

}

export const InicialsCoinSelect = ({ name, active, ...rest }: InicialsCoinSelectProps) => {


    return (
        <Container {...rest}>
            <CoinName active={active}>
                {name}
            </CoinName>
        </Container>
    )
}