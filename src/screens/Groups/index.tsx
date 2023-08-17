import { Header } from '@/components/Header'
import { Highlight } from '@/components/Highlight'
import { Container } from '@/screens/Groups/styles'

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title='Turmas' subtitle='Jogue com a sua turma' />
    </Container>
  )
}
