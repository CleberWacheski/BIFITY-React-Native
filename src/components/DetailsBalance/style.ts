import { TouchableOpacity } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled.View`

    background-color: ${({ theme }) => theme.colors.primary_card};
    padding: 10px 15px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: ${RFValue(100)}px;
    border-radius: 10px;
    margin-bottom: 20px;
`

export const CoinDetail = styled.View`

    flex-direction: column;
    
    
    
`

export const CoinName = styled.Text`
    color: ${({ theme }) => theme.colors.baseline};
    font-family: ${({ theme }) => theme.fonts.Regular};
    font-size: ${RFValue(12)}px;
`

export const IconCoin = styled.Image`
    width: 35px;
    height: 35px;
    object-fit: cover;
    
`
export const Details = styled.View`

    flex-direction: row;

`

export const DetailsContent = styled.View`
    flex-direction: column;
    margin-right: 20px;
    align-items: center;
    justify-content: center;
    
`



export const DateValue = styled.Text`

    color: ${({ theme }) => theme.colors.baseline};
    font-family: ${({ theme }) => theme.fonts.Regular};
    font-size: ${RFValue(10)}px;

    
`

export const Value = styled.Text`
    color: #50C878;
    font-family: ${({ theme }) => theme.fonts.Regular};
    font-size: ${RFValue(16)}px;
    align-self: flex-end;

`

export const RemoveItemContent = styled(TouchableOpacity)`
    padding: 0 5px;
    margin-top: -5px;
    align-self: flex-start;
`