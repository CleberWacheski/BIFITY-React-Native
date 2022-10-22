import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"


export const Container = styled.View`
`

export const Balance = styled.View`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.primary_card};
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

`
export const TotalBalance = styled.View``


export const Description = styled.Text`

    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.SemiBold};
    
`
export const Value = styled.Text`

    color: ${({ theme }) => theme.colors.text_value};
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.Bold};
    
`
export const PercentegeCard = styled.View`
    margin-top: 5px;
    
`
export const Percentege = styled.Text`
    color: ${({ theme }) => theme.colors.text_value};
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.Regular};
    
`
export const ProfitCard = styled.View`
    padding: 15px 20px;
    background-color: ${({ theme }) => theme.colors.card_detail};
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

`

export const ProfitContent = styled.View`

`

export const ProfitDescription = styled.Text`
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.Regular};


`

export const ProfitValue = styled.Text`
    color: ${({ theme }) => theme.colors.text_value};
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.SemiBold};

`
