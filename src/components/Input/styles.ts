import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled(TextInput)`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_700};
    border-radius: 6px;
    color: ${theme.COLORS.WHITE};
    flex: 1;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    margin-bottom: 20px;
    max-height: 56px;
    min-height: 56px;
    padding: 16px;
  `}
`
