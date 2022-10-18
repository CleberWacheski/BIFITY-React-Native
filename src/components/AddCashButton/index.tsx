import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import {
    AddCash,
} from './style'



export const AddCashButton = ({ ...rest }: TouchableOpacityProps) => {

    const theme = useTheme()

    return (
        <AddCash {...rest}>
            <FontAwesome5 name="coins" size={32} color={theme.colors.secondary} />
            <Ionicons name="add-circle" size={22} color={theme.colors.secondary}
                style={{
                    transform: [{
                        translateY: 10,
                    }, {
                        translateX: -6
                    }]

                }}
            />
        </AddCash>

    )
}