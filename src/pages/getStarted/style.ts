import styled from "styled-components/native"
import { RFValue } from 'react-native-responsive-fontsize'



export const Container = styled.SafeAreaView`
    flex: 1;  
    align-items: center;
    justify-content: center;
    padding: 10px;
    
`
export const Content = styled.View`
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   

`
export const AppName = styled.Text`
    font-family: 'serif';
    font-size: ${RFValue(40)}px;
    color: ${({ theme }) => theme.colors.baseline};

`
export const Image = styled.Image`
    
`

export const Description = styled.View`
    margin-top: 90px;
    margin-bottom: 20px;

`
export const Title = styled.Text`
     text-align: center;
     font-family: ${({ theme }) => theme.fonts.SemiBold};
     color: ${({ theme }) => theme.colors.baseline};
`
export const Text = styled.Text`
    text-align: center;
    font-size: ${RFValue(8)}px;
    font-family: ${({ theme }) => theme.fonts.Regular};
    color: ${({ theme }) => theme.colors.baseline};
`
export const TextButton = styled.Text`
    font-size: ${RFValue(9)}px;
    font-family: ${({ theme }) => theme.fonts.Regular};
    color: ${({ theme }) => theme.colors.baseline};

`