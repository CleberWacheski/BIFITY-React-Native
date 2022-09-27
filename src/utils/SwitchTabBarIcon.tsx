import { FontAwesome5 } from '@expo/vector-icons';

interface SwitchTabBarIconProps {
    route: string;

    TabBarIcon: {
        color: string;
        focused: boolean;
        size: number;
    }
}


export const SwitchTabBarIcon = ({ TabBarIcon, route }: SwitchTabBarIconProps) => {
    const {color,focused,size} = TabBarIcon
    let name;

    switch (route) {
        case ('Home') : {
            name = 'home'
           
        }
        break;
        case ('Currencies') : {
            name = 'bitcoin'
        }
        break;
        case ('Settings') : {
            name = "cog"
        };
        break;
        case ('Notifications') : {
            name = "bell"
        };
        break;
        default : return null
    }

    return <FontAwesome5 name={name} size={24} color={color} />

}