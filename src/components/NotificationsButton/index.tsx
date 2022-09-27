import { NotificationButton } from "./style"
import { theme } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import {RootTabsParamList} from '../../routes/index'
import { Ionicons } from '@expo/vector-icons';

export const NotificationsButton = () => {

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