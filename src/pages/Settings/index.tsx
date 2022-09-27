import { SwitchComponent } from "../../components/SwitchComponent";

import {
    Container,
    ProfileContent,
    Avatar,
    UserName,
    SignOut,
    SignOutText,

} from "./style"


export const Settings = () => {

    

    return (
        <Container>
            <ProfileContent>
                <Avatar
                    source={{
                        uri: 'https://avatars.githubusercontent.com/u/94264158?v=4'
                    }}
                />
                <UserName>Cleber Wacheski</UserName>
            </ProfileContent>
            <SignOut>
                <SignOutText>
                    Sign out
                </SignOutText>
            </SignOut>

            <SwitchComponent
                settign="DARK/LIGHT MODE"
            />
           


        </Container>
    )
}