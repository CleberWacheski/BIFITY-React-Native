import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react"

interface BackgroundPros {
    children: ReactNode;
}

export const Background = ({ children }: BackgroundPros) => {
    return (
        <Background>
            {/* <LinearGradient
                // Background Linear Gradient
                colors={['rgba(87, 83, 83, 0.17)', 'transparent']}
            /> */}
            {children}
        </Background>
    )
}
