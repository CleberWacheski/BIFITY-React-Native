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
    ProfitPercentege,
} from './style'

import { Ionicons } from '@expo/vector-icons';

interface BalanceComponentProps {
    balanceValue: number;
    profitValue: number;
}

export const BalanceComponent = ({ balanceValue, profitValue }: BalanceComponentProps) => {

    return (
        <Container>
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
                            name="caret-up-sharp"
                            size={12}
                            color="#9BFFF2"
                        />
                        +15%
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
                <ProfitPercentege>
                    5.7%
                </ProfitPercentege>
            </ProfitCard>

        </Container>
    )
}