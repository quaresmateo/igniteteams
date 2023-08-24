import { Highlight } from '@/components/Highlight'
import { Container } from './styles'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'

export function Players() {
  return (
    <Container>
      <Header shoeBackButton />
      <Highlight title='Nome da turma' subtitle='adiciona a galera e separe os times' />
      <Button label='Remover turma' type='SECONDARY' />
    </Container>
  )
}
