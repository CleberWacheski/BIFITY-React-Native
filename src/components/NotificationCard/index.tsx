import {
    Container,
    ContentNotification,
    NotificationText,
    Date,

} from './style'

import { FontAwesome } from '@expo/vector-icons';
import { theme } from '../../styles';

interface NotificationCardProps {
    newNotification: boolean;
    textNotitification: string;
    DateNotitification: string;

}


export const NotificationCard = ({ newNotification, DateNotitification, textNotitification }: NotificationCardProps) => {

    const color = (newNotification) ? theme.colors.secondary : theme.colors.baseline


    return (
        <Container>
            <FontAwesome
                name="circle"
                size={20}
                color={color}
                style={{
                    marginTop: 4
                }}
            />
            <ContentNotification>
                <NotificationText>
                    {textNotitification}
                </NotificationText>
                <Date>
                    {DateNotitification}
                </Date>
            </ContentNotification>
        </Container>

    )
}