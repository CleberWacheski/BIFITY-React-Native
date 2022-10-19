import { FlashList } from "@shopify/flash-list";
import { useEffect, useState } from "react";
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
    assets: assetsProps[];
    setModalVisible: () => void;
}

export const ModalComponent = ({ visible, assets, setModalVisible }: ModalComponentProps) => {

    const [assetActive, setAssetActive] = useState({ name: 'Bitcoin', id: 'BTC' })

    const { navigate } = useNavigation<NavigationProp<RootTabsParamList>>()

    function handleSelectAssetActive(item: assetsProps) {

        setAssetActive({
            name: item.name,
            id: item.assetId
        })
    }



    useEffect(() => {

        navigate('AddCash', { assetActive, assets })
        setModalVisible()

    }, [assetActive])

    return (

        <Modal
            animationType="slide"
            visible={visible}
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