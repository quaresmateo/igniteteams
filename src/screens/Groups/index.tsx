import { useNavigation } from '@react-navigation/native'
import { Container } from '@/screens/Groups/styles'
import { GroupCard } from '@/components/GroupCard'
import { Highlight } from '@/components/Highlight'
import { ListEmpty } from '@/components/ListEmpty'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { FlatList } from 'react-native'
import { useState } from 'react'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()
  function handleNavigateToNewGroup() {
    navigation.navigate('new')
  }

  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='Jogue com a sua turma' />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={<ListEmpty message='Nenhuma turma encontrada. 🤷‍♂️' />}
        showsHorizontalScrollIndicator={false}
      />
      <Button label='Criar turma' onPress={handleNavigateToNewGroup} />
    </Container>
  )
}
