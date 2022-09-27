import { ThemeProvider } from 'styled-components'
import { theme } from './src/styles';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import { useState } from 'react';
import { GetStarted } from './src/pages/getStarted';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })

  const [login, setLogin] = useState(false)

  if (!fontsLoaded) {
    return null
  }

  function handleSignIn () {
    setLogin(true)
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        {
          (!login) ? <GetStarted SignIn={handleSignIn} /> : <Routes />
        }
      </ThemeProvider>
    </NavigationContainer>
  )
}

