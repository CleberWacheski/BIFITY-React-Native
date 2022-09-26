import { ThemeProvider } from 'styled-components'
import { GetStarted } from "./src/pages/getStarted";
import { theme } from './src/styles';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import Home from './src/pages/Home';

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
      {/* <GetStarted /> */}
      <Home />
    </ThemeProvider>

  )
}

