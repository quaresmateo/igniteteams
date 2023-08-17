import { Container, Logo } from '@/components/Header/style'
import logoImg from '@/assets/Logo.png'

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
    </Container>
  )
}
