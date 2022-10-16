import {
    Container,

} from './style'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';


export const BackPage = () => {

    const { goBack } = useNavigation()
    const theme = useTheme()

    return (
        <Container onPress={()=> goBack()}>
            <MaterialCommunityIcons name="backburger" size={28} color={theme.colors.baseline} />
        </Container>
    )
}