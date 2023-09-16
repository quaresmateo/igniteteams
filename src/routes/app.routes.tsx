import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

import { NewGroup } from '@/screens/NewGroup'
import { Players } from '@/screens/Players'
import { Groups } from '@/screens/Groups'

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name='groups' component={Groups} />
      <Screen name='new' component={NewGroup} />
      <Screen name='players' component={Players} />
    </Navigator>
  )
}
