import { Button } from '@/components/Button'
import { Container, Content, GroupIcon } from '@/screens/NewGroup/styles'
import { Header } from '@/components/Header'
import { Highlight } from '@/components/Highlight'
import { Input } from '@/components/Input'

export function NewGroup() {
  return (
    <Container>
      <Header shoeBackButton />
      <Content>
        <GroupIcon />
        <Highlight title='Nova turma' subtitle='Crie uma turma para adicionar novas pessoas' />
        <Input placeholder='Nome da turma' />
        <Button label='Criar' />
      </Content>
    </Container>
  )
}
