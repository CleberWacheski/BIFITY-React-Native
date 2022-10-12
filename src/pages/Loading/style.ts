import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled.View`
    flex: 1;  
    background-color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    justify-content: center;
    padding: 10px;

`

export const Title = styled.Text`
   
   font-family: 'serif';
   font-size: ${RFValue(45)}px;
   color: ${({ theme }) => theme.colors.baseline};

    
`

export const AnimationContent = styled.View`
   



`