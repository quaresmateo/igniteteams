import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type FilterStyleProps = {
  isActive: boolean
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActive }) => css`
    margin-right: 12px;
    height: 38px;
    width: 70px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    border: ${isActive ? `2px solid ${theme.COLORS.GREEN_700}` : 'none'};
  `}
`

export const Title = styled.Text<FilterStyleProps>`
  ${({ theme, isActive }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${isActive ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
    text-transform: uppercase;
  `}
`

