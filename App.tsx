import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { NavigationContainer } from '@react-navigation/native';
import { Pages } from './src/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'react-native';
import { UserContextProvider } from './src/contexts/userContext';
import { ThemeContextProvider } from './src/contexts/themeContext';


export default function App() {

  const queryClient = new QueryClient()

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }



  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <StatusBar barStyle='light-content' />
        <UserContextProvider>
          <ThemeContextProvider>
            <Pages />
          </ThemeContextProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </NavigationContainer>
  )
}

