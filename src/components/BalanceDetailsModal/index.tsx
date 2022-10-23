import {
    Modal,
    Container,
    Title,
    ModalContent,
    CloseModalButton,
    List,
} from './style'

import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { DetailsBalance } from '../DetailsBalance';
import { FlashList } from '@shopify/flash-list';
import { useContext } from 'react';
import { BalanceAndProfitContent } from '../../contexts/BalanceAndProfitContent';


interface BalanceDetailsModalProps {
    visible: boolean;
    closeModal: () => void;
}

export const BalanceDetailsModal = ({ closeModal, visible }: BalanceDetailsModalProps) => {

    const theme = useTheme()
    const { balance } = useContext(BalanceAndProfitContent)
    const itemsSize = balance.length

    return (
        <Modal
            animationType="slide"
            visible={visible}
        >
            <Container>
                <Title>
                    BALANCE DETAILS
                </Title>
                <ModalContent>
                    <CloseModalButton
                        onPress={closeModal}
                    >
                        <AntDesign name="closecircle" size={35} color={theme.colors.secondary} />


                    </CloseModalButton>
                    <List>
                        {itemsSize != 0 &&
                            <FlashList
                                data={balance}
                                keyExtractor={balance => balance.id}
                                estimatedItemSize={itemsSize}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) => {
                                    return (
                                        <DetailsBalance
                                            id={item.id}
                                            Coinid={item.coin.id}
                                            name={item.coin.name}
                                            date={item.date}
                                            value={item.value}
                                        />

                                    )
                                }}
                            />
                        }
                    </List>
                </ModalContent>

            </Container>

        </Modal>
    )
}