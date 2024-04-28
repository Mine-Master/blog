import styled from '@emotion/styled'
import { Button } from '@mui/material'

export const BaseButton = ({ children, ...props }) => {
  return <BaseButtonStyled {...props}>{children}</BaseButtonStyled>
}

export const BaseButtonStyled = styled(Button)`
  text-transform: capitalize;
  white-space: nowrap;
  font-family: 'Ubuntu', sans-serif;
`
