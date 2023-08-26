import { Button } from '@/components/Button'
import { GroupCard } from '@/components/GroupCard'
import { Header } from '@/components/Header'
import { Highlight } from '@/components/Highlight'
import { ListEmpty } from '@/components/ListEmpty'
import { Container } from '@/screens/Groups/styles'
import { useState } from 'react'
import { FlatList } from 'react-native'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

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
      <Button label='Criar turma' />
    </Container>
  )
}
