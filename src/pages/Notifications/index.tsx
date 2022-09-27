import { ScrollView } from "react-native"
import Logo from '../../../assets/Logo.svg'
import { BackPage } from "../../components/BackPage"
import { NotificationCard } from "../../components/NotificationCard"
import { 
    Container, 
    Title,
    LogoContent,
    LogoText,

} from './style'


export const Notifications = () => {
    return (
        <Container>

            <BackPage />
            <Title>
                NOTIFICATION
            </Title>

            <ScrollView>
                <NotificationCard
                    newNotification={true}
                    DateNotitification='Apr 23, 2022'
                    textNotitification="Your Bitcoin purchase worth $562.32 has been confirmed"
                />
                <NotificationCard
                    newNotification={true}
                    DateNotitification='Mar 18, 2022'
                    textNotitification="Check your Metamask wallet balance: $6,500"
                />
                <NotificationCard
                    newNotification={false}
                    DateNotitification='Fer 13, 2022'
                    textNotitification="Upload yout profile picture and leave your wallet with your face"
                />
                <NotificationCard
                    newNotification={false}
                    DateNotitification='Jan 08, 2022'
                    textNotitification="Walcome to the world of Bubble we are happy to have you here!"
                />
                <NotificationCard
                    newNotification={false}
                    DateNotitification='Apr 23, 2022'
                    textNotitification="Your Bitcoin purchase worth $562.32 has been confirmed"
                />
            </ScrollView>
            <LogoContent>
                <Logo
                    width={60}
                    height={60}
                />
                <LogoText>
                    BITIFY
                </LogoText>
            </LogoContent>

        </Container>
    )
}