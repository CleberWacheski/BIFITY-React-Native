import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    padding: 40px 25px 10px;
    align-items: center;
    flex: 1;
    background-color: ${({theme})=> theme.colors.primary};
    

`

export const Title = styled.Text`
    margin: 20px 0;
    color: ${({ theme }) => theme.colors.baseline};
    font-family: ${({ theme }) => theme.fonts.Bold};
    font-size: ${RFValue(18)}px;

`

export const LogoContent = styled.View`
    margin-top: 20px;
    align-items: center;
    justify-content: center;
`


export const LogoText = styled.Text`
    color: ${({ theme }) => theme.colors.baseline};
    font-family: ${({ theme }) => theme.fonts.SemiBold};
    font-size: ${RFValue(15)}px;
`