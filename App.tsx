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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'react-native';

export default function App() {

  const [login, setLogin] = useState(false)
  const queryClient = new QueryClient()

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })



  if (!fontsLoaded) {
    return null
  }

  function handleSignIn() {
    setLogin(true)
  }

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <StatusBar barStyle='light-content'  />
          {
            (!login) ? <GetStarted SignIn={handleSignIn} /> : <Routes />
          }
        </ThemeProvider>
      </QueryClientProvider>
    </NavigationContainer>
  )
}

