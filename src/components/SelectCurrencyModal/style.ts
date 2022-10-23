import styled from "styled-components/native";
import { Modal as ModalRN } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

export const Modal = styled(ModalRN)`
    flex: 1;
`
export const Title = styled.Text`
    text-align: center;
    color : ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.Bold};
    font-size: ${RFValue(24)}px;
    margin-bottom: 12px;

`
export const ModalContent = styled.View`
    flex: 1;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.primary};

`
export const List = styled.View`
    flex: 1;

`