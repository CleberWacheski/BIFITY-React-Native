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
    color: ${({ theme }) => theme.colors.baseline};
    font-family: ${({ theme }) => theme.fonts.Bold};
    font-size: ${RFValue(13)}px;

`

export const ContentButtonAdd = styled.View`

    margin: 23px 0 0 20px;
`