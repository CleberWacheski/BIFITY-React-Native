import { AddCashButton } from '../../components/AddCashButton'
import { BalanceComponent } from '../../components/BalanceComponet'
import {
    Container,
    Title,
    Input,
    TextSelect,
    CardContent,
    Label,
    Select,
    SelectContent,
    Logo,
    ContentAddButton,
} from './style'

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { icons } from '../../AssetsIcons/icons';
import { useState } from 'react';
import { ModalComponent } from '../../components/Modal';


export const AddCash = () => {

    const uri = icons.find((coin) => coin.asset_id === 'BTC')!.url
    const [modalVisible, setModalVisible] = useState(false);

    const theme = useTheme()

    return (
        <Container>
            <Title>
                ADD YOUR CASH
            </Title>
            <BalanceComponent />

            <Label>Enter the value</Label>
            <CardContent >
                <Input placeholder='$ Ex:  5000,00' keyboardType='numeric' placeholderTextColor={theme.colors.text_value} />
                <FontAwesome5 name="coins" size={30} color={theme.colors.plus_color} />
            </CardContent>

            <Label>Select currency </Label>

            <Select onPress={() => setModalVisible(true)}>
                <SelectContent>
                    <Logo
                        source={{
                            uri
                        }}
                    />
                    <TextSelect>
                        Bitcoin
                    </TextSelect>
                </SelectContent>

                <AntDesign name="caretdown" size={16} color={theme.colors.plus_color} />
            </Select>

            <ContentAddButton>
                <AddCashButton />
            </ContentAddButton>

            <ModalComponent
                visible={modalVisible}
            />

        </Container >
    )
}