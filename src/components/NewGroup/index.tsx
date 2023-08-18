import { Container, Content, GroupIcon } from '@/components/NewGroup/styles'
import { Header } from '@/components/Header'
import { Highlight } from '@/components/Highlight'
import { Button } from '@/components/Button'

export function NewGroup() {
  return (
    <Container>
      <Header shoeBackButton />
      <Content>
        <GroupIcon />
        <Highlight title='Nova turma' subtitle='Crie uma turma para adicionar novas pessoas' />
        <Button label='Criar' />
      </Content>
    </Container>
  )
}
