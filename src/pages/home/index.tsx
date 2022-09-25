import { StatusBar, TouchableOpacity } from "react-native"
import { Background } from "../../components/background"
import {
    Container,
    Image,
    AppName,
    Content,
    Description,
    Title,
    Text,
    TextButton
} from "./style"

export const Home = () => {
    return (
        <Background>
            <Container>
                <StatusBar
                    hidden
                />
                <Content>
                    <Image
                        source={require('../../../assets/Logo.png')}
                    />
                    <AppName>
                        BITIFY
                    </AppName>
                </Content>
                <Description>
                    <Title>
                        The Most {`\n`}
                        Trusted & Secure {`\n`}
                        Crypto Wallet {`\n`}
                    </Title>
                    <Text>
                        Best trading platform and more reliable financial transactions.
                    </Text>
                </Description>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#1D1B32',
                        padding: 14,
                        borderRadius: 30
                    }}
                >
                    <TextButton>
                        Swipe to get started
                    </TextButton>
                </TouchableOpacity>
            </Container>
        </Background>
    )
}