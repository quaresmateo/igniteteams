import { GroupCard } from '@/components/GroupCard'
import { Header } from '@/components/Header'
import { Highlight } from '@/components/Highlight'
import { Container } from '@/screens/Groups/styles'
import { useState } from 'react'
import { FlatList } from 'react-native'

export function Groups() {
  const exampleGroups = ['Turma 1', 'Turma 2', 'Turma 3', 'Turma 4']
  const [groups, setGroups] = useState<string[]>(exampleGroups)

  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='Jogue com a sua turma' />
      <FlatList data={groups} keyExtractor={(item) => item} renderItem={({ item }) => <GroupCard title={item} />} />
    </Container>
  )
}
