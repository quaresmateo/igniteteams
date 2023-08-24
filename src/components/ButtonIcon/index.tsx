import { TouchableOpacityProps } from 'react-native'
import { ButtonIconTypeProps, ButtonIconTypeStyleProps, Container, Icon } from '@/components/ButtonIcon/styles'

type Props = TouchableOpacityProps & {
  icon: ButtonIconTypeProps
  type?: ButtonIconTypeStyleProps
}
export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon type={type} name={icon} />
    </Container>
  )
}
