import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex:1;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 20px 25px;
`;

export const Header = styled.View`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`
export const HeaderContent = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Avatar = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 25px;
    margin-right: 10px;
`
export const Text = styled.Text`
    color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.Bold};
    font-size: ${RFValue(15)}px;
`
export const Balance = styled.View`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: ${({theme})=> theme.colors.primary_card};
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

`
export const TotalBalance = styled.View``


export const Description = styled.Text`

    color: ${({theme})=> theme.colors.text_detail};
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
    background-color: ${({theme})=> theme.colors.card_detail};
    
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
    color: ${({theme})=> theme.colors.text_detail};
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.Regular};


`
    
export const ProfitValue = styled.Text`
    color: ${({ theme }) => theme.colors.text_value};
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.SemiBold};

`
    
export const ProfitPercentege = styled.Text`
    color: ${({ theme }) => theme.colors.text_value};
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.Regular};
    margin-bottom: 5px;

`

export const Assets = styled.View`
    margin-top: 25px;
    flex: 1;

`
export const List = styled.View`
    height: 100%;
    
`
export const DescriptionAssets = styled.View`

    margin-top: 25px;
    margin-bottom: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`
export const TitleAssets = styled.Text`
    color: ${({theme})=> theme.colors.baseline};
    font-family: ${({theme})=> theme.fonts.Bold};
    font-size: ${RFValue(13)}px;

`
export const AddCashContainer = styled.View`

    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 25px;


`

export const AddCash = styled.TouchableOpacity`

    background-color: ${({theme})=> theme.colors.primary_card}; 
    border-radius: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 70px;
    height: 70px;


`
