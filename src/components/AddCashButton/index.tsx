import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
    AddCash,
    AddCashContainer

} from './style'

export const AddCashButton = () => {

    const theme = useTheme()

    return (
        <AddCashContainer>
            <AddCash>

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
        </AddCashContainer>
    )
}