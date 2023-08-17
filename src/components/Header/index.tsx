import { BackButton, BackIcon, Container, Logo } from '@/components/Header/style'
import logoImg from '@/assets/Logo.png'

type Props = {
  shoeBackButton?: boolean
}

export function Header({ shoeBackButton = false }: Props) {
  return (
    <Container>
      {shoeBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  )
}
