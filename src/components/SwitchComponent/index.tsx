import { Switch } from "react-native"
import { useContext, useEffect, useState } from "react";

import {
    Container,
    SettignName


} from "./style";
import { useTheme } from "styled-components";
import { themeContext } from "../../contexts/themeContext";

interface SwitchComponentProps {
    settign: string;
}

export const SwitchComponent = ({ settign }: SwitchComponentProps) => {

    const { setThemeMode} = useContext(themeContext)

    const theme = useTheme()
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)

    useEffect(()=> {
        setThemeMode(isEnabled)

    },[isEnabled])

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