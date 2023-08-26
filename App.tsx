import theme from '@/theme'
import { StatusBar } from 'react-native'
import { Groups } from '@/screens/Groups'
import { Players } from '@/screens/Players'
import { NewGroup } from '@/screens/NewGroup'
import { Loading } from '@/components/Loading'
import { ThemeProvider } from 'styled-components/native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='light-content' translucent />

      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  )
}
