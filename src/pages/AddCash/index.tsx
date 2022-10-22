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
import { useContext, useEffect, useState } from 'react';
import { ModalComponent } from '../../components/Modal';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabsParamList } from '../../routes/routes';
import { Text, TouchableOpacity } from 'react-native';
import { BalanceAndProfitContent } from '../../contexts/BalanceAndProfitContent';

type ScreenProps = BottomTabScreenProps<RootTabsParamList, 'AddCash'>

interface BalanceProps {
    coin: {
        name: string;
        startValue: number;
        id: string;
    },
    value: number;
    date: Date;
}

export const AddCash = ({ navigation, route }: ScreenProps) => {

    const { addNewBalanceDate, getBalanceData, summary, balance } = useContext(BalanceAndProfitContent)

    const uri = icons.find((coin) => coin.asset_id === route.params!.assetActive.id)!.url

    const assets = route.params!.assets
    const [modalVisible, setModalVisible] = useState(false);
    const [value, setValue] = useState('')
    const assetActive = route.params!.assetActive

    const theme = useTheme()


    function handleSetVisibleModal() {
        setModalVisible(false)
    }

    useEffect(() => {
        getBalanceData(assets)
    }, [balance])



    function handleCreateNewDataBalance() {

        if (value.length != 0) {

            const coin = assets.find((asset) => asset.assetId === assetActive.id)
            const date = new Date()

            const data: BalanceProps = {
                coin: {
                    id: coin!.assetId,
                    name: coin!.name,
                    startValue: coin!.price
                },
                date,
                value: Number(value),
            }

            addNewBalanceDate(data)

            setValue('')

        }

    }

    return (
        <Container>
            <Title>
                ADD YOUR CASH
            </Title>
            <BalanceComponent
                balanceValue={summary.balance}
                profitValue={summary.profit}
                balancePercentege={summary.balancePercentege}
            />

            <Label>Enter the value</Label>
            <CardContent >
                <Input
                    placeholder='$ Ex:  5000,00'
                    keyboardType='numeric'
                    placeholderTextColor={theme.colors.text_value}
                    onChangeText={(e) => setValue(e)}
                    value={value}
                />
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
                <AddCashButton onPress={handleCreateNewDataBalance} />
            </ContentAddButton>

            <ModalComponent
                visible={modalVisible}
                assets={assets}
                setModalVisible={handleSetVisibleModal}
            />

        </Container >
    )
}