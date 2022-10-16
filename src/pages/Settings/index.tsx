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
    
    const userImageUrl = user.picture.replace("s96-c", "s500-c");

    console.log(user.picture)

    return (
        <Container>
            <ProfileContent>
                <Avatar
                    source={{
                        uri: userImageUrl
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