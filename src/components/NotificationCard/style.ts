import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`

    padding: 5px;
    flex-direction: row;
   

`
export const ContentNotification = styled.View`
    margin-left: 5px;

`
export const NotificationText = styled.Text`
    font-family: ${({theme})=> theme.fonts.SemiBold} ;
    font-size: ${RFValue(14)}px;
    color:  ${({theme})=> theme.colors.baseline};
    
`
export const Date = styled.Text`
    font-family: ${({theme})=> theme.fonts.Regular} ;
    font-size: ${RFValue(12)}px;
    color:  ${({theme})=> theme.colors.baseline};
    
`