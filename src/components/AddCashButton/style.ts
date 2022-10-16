import styled from "styled-components/native"

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