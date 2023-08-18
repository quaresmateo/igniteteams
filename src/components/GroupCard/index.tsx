import { Container, GroupIcon, Title } from '@/components/GroupCard/styles'
import { TouchableOpacityProps } from 'react-native'

type Props = {
  title: string
} & TouchableOpacityProps

export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <GroupIcon />
      <Title>{title}</Title>
    </Container>
  )
}
