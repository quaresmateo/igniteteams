import { TextInputProps } from 'react-native'
import { Container } from '@/components/Input/styles'

type Props = TextInputProps

export function Input({ ...rest }: Props) {
  return <Container {...rest} />
}
