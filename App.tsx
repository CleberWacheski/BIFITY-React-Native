import { ThemeProvider } from 'styled-components'
import { Home } from "./src/pages/home";
import { theme } from './src/styles';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }


  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>

  )
}

