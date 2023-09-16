import { Container, Content, GroupIcon } from '@/screens/NewGroup/styles'
import { useNavigation } from '@react-navigation/native'
import { Highlight } from '@/components/Highlight'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Input } from '@/components/Input'
import { useState } from 'react'

export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  function handleNew() {
    navigation.navigate('players', { group })
  }
  return (
    <Container>
      <Header shoeBackButton />
      <Content>
        <GroupIcon />
        <Highlight title='Nova turma' subtitle='Crie uma turma para adicionar novas pessoas' />
        <Input onChangeText={setGroup} placeholder='Nome da turma' />
        <Button onPress={handleNew} label='Criar' />
      </Content>
    </Container>
  )
}
