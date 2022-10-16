import { useContext } from "react";
import { SwitchComponent } from "../../components/SwitchComponent";
import { UserContext } from "../../contexts/userContext";

import {
    Container,
    ProfileContent,
    Avatar,
    UserName,
    SignOut,
    SignOutText,
} from "./style"


export const Settings = () => {

    const { user } = useContext(UserContext)


    return (
        <Container>
            <ProfileContent>
                <Avatar
                    source={{
                        uri: user.picture
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