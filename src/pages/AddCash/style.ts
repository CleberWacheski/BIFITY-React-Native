import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"
import { TextInput } from 'react-native'

interface CardProps {
    color: string;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 35px 25px;

`
export const Title = styled.Text`
    text-align: center;
    color : ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.Bold};
    font-size: ${RFValue(24)}px;
    
`
export const CardContent = styled.View<CardProps>`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color:  ${({ theme }) => theme.colors.primary_card}; 
    width: 90%;
    margin-top: 25px;
    height: 60px;
    align-self: center;
    padding: 5px 15px;
    border-radius: 8px;

`
export const Input = styled(TextInput)`
    color : ${({ theme }) => theme.colors.text_value};
    font-family: ${({ theme }) => theme.fonts.SemiBold};
`

export const Select = styled.TouchableOpacity`
    background-color:  ${({ theme }) => theme.colors.plus_color}; 
    align-self: center;
    margin-top: 25px;
    height: 60px;
    padding: 2px;
    border-radius: 8px;
    width: 90%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 8px;
    
`
export const TextSelect = styled.Text`
    padding-left: 10px;
    color : ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.SemiBold};
    font-size: ${RFValue(18)}px;
`
