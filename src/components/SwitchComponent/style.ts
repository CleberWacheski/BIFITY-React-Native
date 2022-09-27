import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    margin-top: 25px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`
export const SettignName = styled.Text`


    color: ${({ theme }) => theme.colors.baseline};
    font-family: ${({ theme }) => theme.fonts.SemiBold};
    font-size: ${RFValue(12)}px;

`
