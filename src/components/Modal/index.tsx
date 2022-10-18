import { FlashList } from "@shopify/flash-list";
import { useState } from "react";
import { assetsProps } from "../../hooks/useCoinAPI";
import { SelectCoinModal } from "../SelectCoinModal";
import { NavigationProp, useNavigation } from '@react-navigation/native'


import {
    Modal,
    ModalContent,
    Title,
    List,

} from "./style"
import { RootTabsParamList } from "../../routes/routes";

interface ModalComponentProps {
    visible: boolean;
    assets: assetsProps[]
}

export const ModalComponent = ({ visible, assets }: ModalComponentProps) => {

    const [assetActive, setAssetActive] = useState({ name: '', id: '' })

    const { navigate } = useNavigation<NavigationProp<RootTabsParamList>>()

    function handleSelectAssetActive(item: assetsProps) {
        setAssetActive({
            name: item.name,
            id: item.assetId
        })

        navigate('AddCash', { assetActive, assets })

    }

    return (

        <Modal
            animationType="slide"
            visible={false}
        >
            <ModalContent>
                <Title>
                    SELECT CURRECY
                </Title>
                <List >
                    <FlashList
                        data={assets}
                        keyExtractor={coin => coin.assetId}
                        estimatedItemSize={5}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <SelectCoinModal
                                    name={item.name}
                                    Id={item.assetId}
                                    onPress={() => handleSelectAssetActive(item)}
                                />
                            )
                        }}
                    />
                </List>


            </ModalContent>
        </Modal>
    )
}