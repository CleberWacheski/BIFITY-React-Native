import {
    Container,
    Balance,
    TotalBalance,
    Description,
    Value,
    PercentegeCard,
    Percentege,
    ProfitCard,
    ProfitContent,
    ProfitDescription,
    ProfitValue,
} from './style'

import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { BalanceDetailsModal } from '../BalanceDetailsModal';
import { useTheme } from 'styled-components';

interface BalanceComponentProps {
    balanceValue: number;
    profitValue: number;
    balancePercentege: number;
}

export const BalanceComponent = ({ balanceValue, profitValue, balancePercentege }: BalanceComponentProps) => {

    const theme = useTheme()

    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => { setModalVisible(false) }

    function OpenModal() {

        if (balanceValue != 0) {
            setModalVisible(true)
        }
    }

    return (
        <Container
            activeOpacity={0.8}
            onPress={OpenModal}
        >
            <Balance>
                <TotalBalance>
                    <Description>
                        Total balance
                    </Description>
                    <Value>
                        $ {balanceValue}
                    </Value>
                </TotalBalance>
                <PercentegeCard>
                    <Percentege>
                        <Ionicons
                            name={(balancePercentege >= 0) ? 'caret-up' : 'caret-down'}
                            size={12}
                            color={(balancePercentege >= 0) ? '#50C878' : theme.colors.secondary}
                        />
                        {balancePercentege}%
                    </Percentege>
                </PercentegeCard>
            </Balance>

            <ProfitCard>
                <ProfitContent>
                    <ProfitDescription>
                        Profit
                    </ProfitDescription>
                    <ProfitValue>
                        $ {profitValue}
                    </ProfitValue>
                </ProfitContent>
            </ProfitCard>

            <BalanceDetailsModal
                closeModal={closeModal}
                visible={modalVisible}


            />

        </Container>
    )
}