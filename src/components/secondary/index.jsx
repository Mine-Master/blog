import styled from '@emotion/styled'
import { BaseButton } from '../base/index'
import {
  ROW_ALIGN_CENTER__SPACE_B,
  ROW_CENTER,
} from '../../styles/global-styles'
import { TEXT_24_400 } from '../../styles/global-typography'
import { mediaQueries } from '../../styles/mediaQueries'
import { css } from '@emotion/react'

export const SecondaryButton = ({ children, ...props }) => {
  return <SecondaryButtonStyled {...props}>{children}</SecondaryButtonStyled>
}

export const SecondaryButtonStyled = styled(BaseButton)`
  ${ROW_ALIGN_CENTER__SPACE_B};
  padding: 14px 24px 14px 16px;
  gap: 16px;
  height: 60px;
  ${TEXT_24_400}
  border: none;
  background: transparent;
  border-radius: 16px;
  color: var(--Primary);
  font-family: 'Ubuntu', sans-serif;
  &:hover {
    color: #3c096c;
    background: transparent;
  }
  // style when loading props is true
  ${props =>
    props.loading &&
    css`
      pointer-events: none;
      color: #3c096c;
      ${ROW_CENTER}
    `}

  // style disabled
  ${props =>
    props.disabled &&
    css`
      pointer-events: none;
      background-color: rgba(90, 24, 154, 0.1);
      img {
        opacity: 50%;
      }
      color: rgba(90, 24, 154, 0.5);
      border: none;
      box-shadow: none;
    `}
    ${mediaQueries.lessThan(`md`)`
    height:50px;
    `}
     @media (max-width: 866px) {
    justify-content: center;
  }
  ${mediaQueries.lessThan(`sm`)`
    justify-content: space-between;
  `}
`
