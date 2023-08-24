import { Button } from '@/components/Button'
import { ButtonIcon } from '@/components/ButtonIcon'
import { Container, Form } from '@/screens/Players/styles'
import { Header } from '@/components/Header'
import { Highlight } from '@/components/Highlight'
import { Input } from '@/components/Input'

export function Players() {
  return (
    <Container>
      <Header shoeBackButton />
      <Highlight title='Nome da turma' subtitle='adiciona a galera e separe os times' />

      <Form>
        <Input placeholder='Nome da pessoa' autoCorrect={false} />
        <ButtonIcon icon='add' />
      </Form>

      <Button label='Remover turma' type='SECONDARY' />
    </Container>
  )
}
