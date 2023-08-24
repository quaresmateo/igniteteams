import { TouchableOpacityProps } from 'react-native'
import { Container, FilterStyleProps, Title } from '@/components/Filter/styles'

type Props = TouchableOpacityProps &
  FilterStyleProps & {
    title: string
  }

export function Filter({ isActive = false, title, ...rest }: Props) {
  return (
    <Container {...rest} isActive={isActive}>
      <Title isActive={isActive}>{title}</Title>
    </Container>
  )
}
