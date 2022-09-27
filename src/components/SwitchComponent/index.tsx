import { Switch } from "react-native"
import { useState } from "react";
import {
    Container,
    SettignName


} from "./style";
import { theme } from "../../styles";

interface SwitchComponentProps {
    settign: string;
}

export const SwitchComponent = ({ settign }: SwitchComponentProps) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)

    return (
        <Container>
            <SettignName>
                {settign}
            </SettignName>


            <Switch
                trackColor={{ false: theme.colors.secondary, true: theme.colors.baseline }}
                thumbColor={isEnabled ? theme.colors.baseline : theme.colors.secondary}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
            />
        </Container>


    )
}