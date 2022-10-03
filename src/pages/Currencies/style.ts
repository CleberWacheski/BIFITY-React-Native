import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
    padding: 20px;
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
`;


export const Header = styled.View`
    margin-top: 25px;
    flex-direction: row;
    justify-content: space-between;


`

export const LoadingContent = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    margin-top: 15px;
    color: ${({ theme }) => theme.colors.baseline};
    font-family: ${({ theme }) => theme.fonts.Bold};
    font-size: ${RFValue(18)}px;


`

export const ChartContent = styled.View`
    flex: 1;
    margin-top: 25px;
    transform: translateX(-20px);
    

`