import { useState } from 'react'
import { FlatList } from 'react-native'
import { Input } from '@/components/Input'
import { Filter } from '@/components/Filter'
import { Header } from '@/components/Header'
import { Button } from '@/components/Button'
import { Highlight } from '@/components/Highlight'
import { PlayerCard } from '@/components/PlayerCard'
import { ButtonIcon } from '@/components/ButtonIcon'
import { Container, Form, HeaderList, NumberOfPlayers } from '@/screens/Players/styles'
import { ListEmpty } from '@/components/ListEmpty'

export function Players() {
  const [team, setTeam] = useState('team a')
  const [players, setPlayers] = useState<string[]>([
    'josé',
    'maria',
    'joao',
    'pedrin',
    'joseh',
    'mariah',
    'jãao',
    'pedro'
  ])

  return (
    <Container>
      <Header shoeBackButton />
      <Highlight title='Nome da turma' subtitle='adiciona a galera e separe os times' />

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
