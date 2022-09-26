import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
    Container,
    Header,
    HeaderContent,
    Avatar,
    Text,
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


} from './style';
import { theme } from '../../styles';

const Home: React.FC = () => {
    return (
        <Container>
            <Header>
                <HeaderContent>
                    <Avatar
                        source={{
                            uri: 'https://avatars.githubusercontent.com/u/94264158?v=4'
                        }}
                    />
                    <Text>
                        WELCOME BACK
                    </Text>
                </HeaderContent>
                <Ionicons
                    name="notifications"
                    size={26}
                    color={theme.colors.secondary}
                />
            </Header>

            <Balance>
                <TotalBalance>
                    <Description>
                        Total balance
                    </Description>
                    <Value>
                        $13450.00
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
                        $13250.00
                    </ProfitValue>
                </ProfitContent>
                <ProfitPercentege>
                    5.7%
                </ProfitPercentege>
            </ProfitCard>

            


        </Container>
    )
}

export default Home;