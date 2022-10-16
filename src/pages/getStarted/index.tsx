import { LinearGradient } from "expo-linear-gradient"
import { StatusBar, TouchableOpacity } from "react-native"
import Logo from '../../../assets/Logo.svg'

import {
    Container,
    AppName,
    Content,
    Description,
    Title,
    Text,
    TextButton
} from "./style"
import { SignInWithGoogle } from "../../Oauth/SignInWithGoogle"
import { useContext } from "react"
import { UserContext } from "../../contexts/userContext"
import { useTheme } from 'styled-components'


interface GetStartedProps {
    handleAuthenticated: () => void;
}

export const GetStarted = ({ handleAuthenticated }: GetStartedProps) => {


    const theme = useTheme() 

    const { handleSetUser } = useContext(UserContext)


    async function SignIn() {

        const user = await SignInWithGoogle()

        if (user?.name) {
            handleSetUser(user)
            handleAuthenticated()
        }

    }

    return (
        <LinearGradient
            colors={[theme.colors.primary, '#201329', '#481C4A']}
            locations={[0.1, 0.9, 1]}
            start={{
                x: 0.9,
                y: 0.1
            }}
            end={{
                x: 0.1,
                y: 0.99
            }}

            style={{
                flex: 1
            }}
        >
            <Container>

                <StatusBar
                    hidden
                />
                <Content>
                    <Logo
                        width={100}
                        height={100}
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
                        padding: 16,
                        borderRadius: 30
                    }}
                    onPress={SignIn}
                >
                    <TextButton>
                        Swipe to get started
                    </TextButton>
                </TouchableOpacity>
            </Container>
        </LinearGradient>
    )
}