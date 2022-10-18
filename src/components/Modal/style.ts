import styled from "styled-components/native";
import { Modal as ModalRN } from 'react-native'

export const Modal = styled(ModalRN)`
    flex: 1;
`
export const ModalContent = styled.View`
    flex: 1;
    padding: 20px;
    background-color: ${({theme})=> theme.colors.primary};

`

