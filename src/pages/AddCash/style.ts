import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"
import { TextInput, TouchableOpacity } from 'react-native'



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
export const CardContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color:  ${({ theme }) => theme.colors.primary_card}; 
    width: 90%;
    margin-top: 5px;
    height: 60px;
    align-self: center;
    padding: 5px 15px;
    border-radius: 8px;

`
export const Label = styled.Text`   
    color: ${({ theme }) => theme.colors.secondary}; 
    font-family: ${({ theme }) => theme.fonts.SemiBold};
    margin-top: 20px;
    margin-left: 10px;



`
export const Input = styled(TextInput)`
    color : ${({ theme }) => theme.colors.text_value};
    font-family: ${({ theme }) => theme.fonts.Regular};
    font-size: ${RFValue(12)}px;
    width: 80%;


`

export const Select = styled(TouchableOpacity)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color:  ${({ theme }) => theme.colors.primary_card}; 
    width: 90%;
    margin-top: 5px;
    align-self: center;
    padding: 12px 15px;
    border-radius: 8px;

    
`
export const SelectContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Logo = styled.Image`
    width: 35px;
    height: 35px;
    object-fit: cover;
    

`
export const TextSelect = styled.Text`
    padding-left: 10px;
    color : ${({ theme }) => theme.colors.text_value};
    font-family: ${({ theme }) => theme.fonts.Bold};
    font-size: ${RFValue(16)}px;
`
export const ContentAddButton = styled.View`

    margin-top: 20px;
    align-self: center;
`