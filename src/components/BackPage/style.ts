import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 80px;
    padding: 4px 15px;
    border: ${({theme})=> theme.colors.light_color};
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    align-items: flex-end;
    transform: translateX(-30px);
    align-self: flex-start;
    

`