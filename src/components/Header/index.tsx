import { BackButton, BackIcon, Container, Logo } from '@/components/Header/style'
import logoImg from '@/assets/Logo.png'
import { useNavigation } from '@react-navigation/native'

type Props = {
  shoeBackButton?: boolean
}

export function Header({ shoeBackButton = false }: Props) {
  const navigation = useNavigation()
  function handleGoBack() {
    navigation.navigate('groups')
  }

  return (
    <Container>
      {shoeBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  )
}
