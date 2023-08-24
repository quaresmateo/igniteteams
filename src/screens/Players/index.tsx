import { Highlight } from '@/components/Highlight'
import { Container } from './styles'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { ButtonIcon } from '@/components/ButtonIcon'

export function Players() {
  return (
    <Container>
      <Header shoeBackButton />
      <Highlight title='Nome da turma' subtitle='adiciona a galera e separe os times' />
      <ButtonIcon icon='add' />
      <Button label='Remover turma' type='SECONDARY' />
    </Container>
  )
}
