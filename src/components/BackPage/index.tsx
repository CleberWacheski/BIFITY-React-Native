import {
    Container,

} from './style'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export const BackPage = () => {

    const { goBack } = useNavigation()

    return (
        <Container onPress={()=> goBack()}>
            <MaterialCommunityIcons name="backburger" size={28} color="white" />
        </Container>
    )
}