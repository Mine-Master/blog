import styled from '@emotion/styled'
import { BaseButton } from '../base/index'
import {
  ROW_ALIGN_CENTER__SPACE_B,
  ROW_CENTER,
} from '../../styles/global-styles'
import { TEXT_24_400 } from '../../styles/global-typography'
import { css } from '@emotion/react'
import { mediaQueries } from '../../styles/mediaQueries'

export const PrimaryButton = ({ children, ...props }) => {
  return <PrimaryButtonStyled {...props}>{children}</PrimaryButtonStyled>
}

export const PrimaryButtonStyled = styled(BaseButton)`
  ${ROW_ALIGN_CENTER__SPACE_B};
  padding: 14px 24px 14px 16px;
  gap: 16px;
  height: 60px;
  ${TEXT_24_400}
  font-family: 'Ubuntu', sans-serif;
  background: rgba(254, 247, 255, 0.16);
  /* Elevation - Primary BTN */
  box-shadow: 0px 4px 18px rgba(36, 0, 70, 0.28);
  border-radius: 16px;
  color: var(--Primary);
  border: 2.5px solid var(--Primary);
  &:hover {
    color: var(--Whitish);
    /* Gradient/2 color */
    background: linear-gradient(92.74deg, #9d4edd 4.16%, #5a189a 99.16%);
    /* Inner-shadow - Hover Primary BTN */
    box-shadow: inset 0px -4px 8px rgba(36, 0, 70, 0.34);
  }
  // style when loading props is true
  ${props =>
    props.loading &&
    css`
      pointer-events: none;
      color: var(--Whitish);
      ${ROW_CENTER}
      ${mediaQueries.lessThan(`md`)`
    height:55px;
    `}
      ${mediaQueries.lessThan('sm')`
      padding: 12px 16px 12px 12px;
      height: 48px;
      font-size: 16px;
      `}
      ${mediaQueries.lessThan('xs')`
      padding: 8px 12px 8px 8px;
      height: 40px;
      font-size: 14px;
      `}
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
      height:55px;
    `}
    ${mediaQueries.lessThan('sm')`
    padding: 12px 16px 12px 12px;
    height: 42px;
    font-size: 16px;
    `}
    ${mediaQueries.lessThan('xs')`
    padding: 8px 12px 8px 8px;
    height: 35px;
    font-size: 14px;
    `}
`
