import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

interface Props {
    active : boolean
}

export const Container = styled.TouchableOpacity`

    margin-top: 30px;
    margin-right:43px ;

`;

export const CoinName = styled.Text<Props>`
    
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.baseline};
    font-family: ${({ theme }) => theme.fonts.Bold};

    border-bottom-width: 3px ;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme,active}) => 
        (active) ? theme.colors.secondary : ''};

`