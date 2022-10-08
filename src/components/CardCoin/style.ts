import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled.TouchableOpacity`

    background-color: #211E41;
    width: 150px;
    padding: 15px 20px;
    border-radius: 10px;
    align-items: center;
    margin: 0 15px;
`

export const AvatarCoin = styled.View`
    background-color: #12111E;
    padding: 12px;
    border-radius: 100px;
    margin-bottom: 8px;


`
export const AssetLogo = styled.Image`
    width: 35px;
    height: 35px;

`

export const Title = styled.Text`
     color: #A7A7A7;
    font-family: ${({ theme }) => theme.fonts.SemiBold};
    font-size: ${RFValue(10)}px;

`
export const Value = styled.Text`
    margin-top: -6px;
     color: ${({ theme }) => theme.colors.baseline};
    font-family: ${({ theme }) => theme.fonts.Bold};
    font-size: ${RFValue(10)}px;

`
export const CardPlusCoin = styled.View`

    margin-top: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2px 8px;
    background-color: #12111E;
    border-radius: 20px;

`

export const PlusText = styled.Text`
    color: #A7A7A7;
    font-family: ${({ theme }) => theme.fonts.SemiBold};
    font-size: ${RFValue(8)}px;
    margin-left: 5px;


`