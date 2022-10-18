import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`

    background-color: ${({theme})=> theme.colors.primary_card};
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 20px;
    
`
export const Coin = styled.View`


`
export const LogoContent = styled.View`
    padding: 10px;
    background-color: #212125;
    border-radius: 10px;
    margin-right: 14px;
`

export const AssetLogo = styled.Image`
    width: 35px;
    height: 35px;
    object-fit: cover;

`


export const DescriptionCoin = styled.View`
`

export const TitleCoin = styled.Text`
    color: ${({ theme }) => theme.colors.baseline};
    font-family: ${({ theme }) => theme.fonts.Bold};
    font-size: ${RFValue(14)}px;

`
export const InitialsCoin = styled.Text`
    color: ${({ theme }) => theme.colors.baseline};
    font-family: ${({ theme }) => theme.fonts.Regular};
    font-size: ${RFValue(12)}px;
    margin-top: -10px;

`