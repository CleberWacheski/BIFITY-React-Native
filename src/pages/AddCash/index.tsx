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
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabsParamList } from '../../routes/routes';
import { Text, TouchableOpacity } from 'react-native';

type ScreenProps = BottomTabScreenProps<RootTabsParamList, 'AddCash'>


export const AddCash = ({ navigation, route }: ScreenProps) => {

    const uri = icons.find((coin) => coin.asset_id === route.params!.assetActive.id)!.url

    const assets = route.params!.assets
    const [modalVisible, setModalVisible] = useState(false);
    const assetActive = route.params!.assetActive 

    const theme = useTheme()


    function handleSetVisibleModal() {
        setModalVisible(false)
    }

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



            <TouchableOpacity
                onPress={() => setModalVisible(true)}
            >
                <Select>
                    <SelectContent>
                        <Logo
                            source={{
                                uri 
                            }}
                        />
                        <TextSelect>
                            {assetActive.name}
                        </TextSelect>
                    </SelectContent>
                    <AntDesign name="caretdown" size={16} color={theme.colors.plus_color} />
                </Select>
            </TouchableOpacity>

            <ContentAddButton>
                <AddCashButton />
            </ContentAddButton>

            <ModalComponent
                visible={modalVisible}
                assets={assets}
                setModalVisible={handleSetVisibleModal}
            />

        </Container >
    )
}