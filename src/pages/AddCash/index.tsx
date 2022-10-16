import { AddCashButton } from '../../components/AddCashButton'
import { BalanceComponent } from '../../components/BalanceComponet'
import {
    Container,
    Title,
    Input,
    TextSelect,
    CardContent,

} from './style'

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

export const AddCash = () => {

    const theme = useTheme()

    return (
        <Container>
            <Title>
                ADD YOUR CASH
            </Title>
            <BalanceComponent />

            <CardContent >
                <Input placeholder='$ 5000,00' keyboardType='numeric' placeholderTextColor={theme.colors.text_value}/>
                <FontAwesome5 name="coins" size={30} color={theme.colors.plus_color} />
            </CardContent>

            <CardContent>
                <TextSelect>
                    Bitcoin
                </TextSelect>
                <AntDesign name="caretdown" size={15} color="black" />
            </CardContent>

            <AddCashButton />

        </Container >
    )
}