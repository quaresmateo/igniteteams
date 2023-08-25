import { Button } from '@/components/Button'
import { ButtonIcon } from '@/components/ButtonIcon'
import { Container, Form, HeaderList, NumberOfPlayers } from '@/screens/Players/styles'
import { Header } from '@/components/Header'
import { Highlight } from '@/components/Highlight'
import { Input } from '@/components/Input'
import { Filter } from '@/components/Filter'
import { FlatList } from 'react-native'
import { useState } from 'react'

export function Players() {
  const [team, setTeam] = useState('team a')
  const [players, setPlayers] = useState<string[]>([])

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

      {/* <Button label='Remover turma' type='SECONDARY' /> */}
    </Container>
  )
}
