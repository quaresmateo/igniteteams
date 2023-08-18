import { TouchableOpacityProps } from 'react-native'
import { ButtonTypeStyleProps, Container, Label } from './styles'

type Props = {
  type?: ButtonTypeStyleProps
  label: string
} & TouchableOpacityProps

export function Button({ label, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Label>{label}</Label>
    </Container>
  )
}
