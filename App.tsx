import { Groups } from '@/screens/Groups'
import theme from '@/theme'
import { ThemeProvider } from 'styled-components'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from '@/components/Loading'
import { StatusBar } from 'react-native'
import { NewGroup } from '@/screens/NewGroup'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='light-content' translucent />

      {fontsLoaded ? <NewGroup /> : <Loading />}
    </ThemeProvider>
  )
}
