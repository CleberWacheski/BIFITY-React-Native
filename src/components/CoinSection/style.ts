import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled.View`
    
`

export const Coin = styled.View`

    margin-top: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

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

    flex-direction: row;
    align-items: center;

`

export const InformationCoin = styled.View``

export const TitleCoin = styled.Text`
    color: ${({ theme }) => theme.colors.baseline};
    font-family: ${({ theme }) => theme.fonts.Bold};
    font-size: ${RFValue(14)}px;

`
export const InitialsCoin = styled.Text`
    color: #6C757D;
    font-family: ${({ theme }) => theme.fonts.Regular};
    font-size: ${RFValue(12)}px;
    margin-top: -10px;

`

export const MainValue = styled.Text`
    color: ${({ theme }) => theme.colors.baseline};
    font-family: ${({ theme }) => theme.fonts.Bold};
    font-size: ${RFValue(13)}px;
    margin-top: 5px;
    align-self: flex-start;

`
