import { Container } from '@/components/Input/styles'
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'

type Props = TextInputProps

export function Input({ ...rest }: Props) {
  const { COLORS } = useTheme()

  return <Container {...rest} placeholderTextColor={COLORS.GRAY_300} />
}
