import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 40px 25px;

`;

export const ProfileContent = styled.View`
  align-self:center;
  align-items: center;

`
export const Avatar = styled.Image`
   margin-top: 35px;
  height: 150px;
  width: 150px;
  border-radius: 75px;


`
export const UserName = styled.Text`
    margin-top: 15px;
    color: ${({ theme }) => theme.colors.baseline};
    font-family: ${({ theme }) => theme.fonts.Regular};
    font-size: ${RFValue(16)}px;


`

export const SignOut = styled.TouchableOpacity`
    margin-top: 10px;
    background-color:  ${({ theme }) => theme.colors.secondary}; 
    align-self: center;
    width: 100px;
    padding: 6px;
    border-radius: 15px;
    
`

export const SignOutText = styled.Text`
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.Bold};
    font-size: ${RFValue(13)}px;
`