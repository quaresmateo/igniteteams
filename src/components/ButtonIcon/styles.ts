import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import {MaterialIcons} from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY'
export type ButtonIconTypeProps = keyof typeof MaterialIcons.glyphMap

type Props = {
  type: ButtonIconTypeStyleProps
  name: string
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  align-items: center;
  justify-content: center;

  margin-left: 12px;
`

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type, name }) => ({
  name: name,
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))``

