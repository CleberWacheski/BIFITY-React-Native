import { NotificationButton } from "./style"
import { useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import {RootTabsParamList} from '../../routes/routes'
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from "styled-components";

export const NotificationsButton = () => {

    const theme = useTheme()

    const {navigate} = useNavigation<BottomTabNavigationProp<RootTabsParamList>>()

    return (
        <NotificationButton onPress={()=> navigate('Notifications')}>
        <Ionicons
            name="notifications"
            size={26}
            color={theme.colors.secondary}
        />
    </NotificationButton>
    )
}