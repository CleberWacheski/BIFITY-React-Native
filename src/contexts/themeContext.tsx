import { createContext, ReactNode, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { DARK_THEME, LIGHT_THEME } from '../styles';

interface ProviverProps {
    children: ReactNode;
}

interface themeContextProps {

    defaultTheme: boolean
    setThemeMode: (state: boolean) => void;
}

export const themeContext = createContext({} as themeContextProps)


export const ThemeContextProvider = ({ children }: ProviverProps) => {

    const [defaultTheme, setDefaultTheme] = useState(false)
    const theme = (!defaultTheme) ? DARK_THEME : LIGHT_THEME

    const setThemeMode = (state: boolean) => {
        setDefaultTheme(state)
    }

    return (
        <themeContext.Provider value={{ defaultTheme, setThemeMode }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </themeContext.Provider>
    )
}