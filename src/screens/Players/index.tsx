import { Container, Form, HeaderList, NumberOfPlayers } from '@/screens/Players/styles'
import { PlayerCard } from '@/components/PlayerCard'
import { ButtonIcon } from '@/components/ButtonIcon'
import { useRoute } from '@react-navigation/native'
import { Highlight } from '@/components/Highlight'
import { ListEmpty } from '@/components/ListEmpty'
import { Filter } from '@/components/Filter'
import { Header } from '@/components/Header'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { FlatList } from 'react-native'
import { useState } from 'react'

export function Players() {
  const [team, setTeam] = useState('time a')
  const [players, setPlayers] = useState<string[]>([])

  const route = useRoute()

  const { group } = route.params as { group: string }

  return (
    <Container>
      <Header shoeBackButton />
      <Highlight title={group} subtitle='adiciona a galera e separe os times' />

      <Form>
        <Input placeholder='Nome da pessoa' autoCorrect={false} />
        <ButtonIcon icon='add' />
      </Form>

      <HeaderList>
        <FlatList
          data={['time a', 'time b']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Filter title={item} onPress={() => setTeam(item)} isActive={item === team} />}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <PlayerCard name={item} />}
        ListEmptyComponent={<ListEmpty message='Não há pessoas ness time  🍃' />}
        contentContainerStyle={[players.length === 0 && { flex: 1 }, { paddingBottom: 100 }]}
        showsVerticalScrollIndicator={false}
      />

      <Button label='Remover turma' type='SECONDARY' />
    </Container>
  )
}
