import React from 'react'
import styled from 'styled-components'
import Logo from '../../../assets/Logo-Header.svg'
import { mediaQueries } from '../../../styles/mediaQueries'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    navigate(`/`)
  }

  return (
    <HeaderStyle onClick={handleLogoClick}>
      <Image src={Logo} alt="Logo" />
    </HeaderStyle>
  )
}

export default Header

const HeaderStyle = styled.header`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 10;
  border-radius: 8px;
  background: #10002b90;
  padding: 8px;
  cursor: pointer;
`
const Image = styled.img`
  ${mediaQueries.lessThan('lg')`  
      width: 61px;
      height:70px
  `}
  ${mediaQueries.lessThan('md')`
        width:41px;
        height: 50px;
        padding:6px;
  `}
   ${mediaQueries.lessThan('sm')`
        width:28px;
        height: 35px;
        padding:0px;
  `}
`
