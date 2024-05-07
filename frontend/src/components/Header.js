import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../styles/mediaQueries';
import { useNavigate } from 'react-router-dom';
import { COMMINUTIES_ITEMS } from '../constants';
import Logo from '../assets/Logo-Header.svg';
import useScrollingUp from './Scroll';

const Header = () => {
  const { scrollingUp, screenBeginning } = useScrollingUp();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    navigate(`/`);
  };
  const handleSocialIconClick = (socialUrl) => {
    window.open(socialUrl, '_blank');
  };

  return (
    <HeaderContainer
      $scrollingUp={scrollingUp}
      screenBeginning={screenBeginning}
    >
      <NavbarLogoWrapper>
        <Name data-aos="fade-left" data-aos-delay="300" data-aos-once="true">
          <LogoStyle src={Logo} alt="Logo" onClick={handleLogoClick} />
          <CompanyNameWrapper>
            <CompanyName>M</CompanyName>
            <BlueCharacter>I</BlueCharacter>
            <CompanyName>N</CompanyName>
            <OrangeCharacter>E</OrangeCharacter>
            &nbsp;
            <CompanyName>MASTERS</CompanyName>
          </CompanyNameWrapper>
        </Name>
        <Media data-aos="fade-right" data-aos-delay="300" data-aos-once="true">
          {COMMINUTIES_ITEMS.map((item, index) => {
            return (
              <IconStyle
                key={index}
                onClick={() => handleSocialIconClick(item.url)}
              >
                <CommunityIcon src={item.icon} alt={item.title} />
              </IconStyle>
            );
          })}
        </Media>
      </NavbarLogoWrapper>
    </HeaderContainer>
  );
};

export default Header;

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  margin: 0 auto;
  width: 100%;
  padding: 30px 0;
  z-index: 10000;
  visibility: ${(props) => (props.$scrollingUp ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.$scrollingUp ? '1' : '0')};
  transition: visibility 0.3s linear, opacity 0.3s linear;
  ${mediaQueries.lessThan('lg')` 
        max-width: 1200px;
  `}
  ${mediaQueries.lessThan('md')`
    padding: 20px 0;
  `}
    ${mediaQueries.greaterThan('fhd')`
    width: 1920px;
    left: calc(calc(100% - 1920px) / 2);
  `}
`;

const NavbarLogoWrapper = styled('div')`
  width: 92%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background: rgb(9 2 10 / 24%);
  backdrop-filter: blur(120px);
  border-radius: 24px;
  position: relative;
  z-index: 1;

  ${mediaQueries.lessThan('lg')`
    padding: 15px;
    & > img {
      width: 61px;
      height:70px
}
  `}
  ${mediaQueries.lessThan('md')`
      padding: 10px;
      & > img {
        width:41px;
        height: 50px;
  }
  `}
  ${mediaQueries.lessThan('sm')`
      padding: 10px;
  `}
    ${mediaQueries.greaterThan('fhd')`
  width: 100%;
  `}
`;

const LogoStyle = styled.img`
  cursor: pointer;
  width: 51px;
  height: 50px;
  ${mediaQueries.lessThan('md')`
        width:41px;
        height: 50px;
  `}
  ${mediaQueries.lessThan('sm')`
        width:28px;
        height: 35px;
  `};
`;
const Media = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const CommunityIcon = styled.img`
  cursor: pointer;
  width: 32px;
  height: 32px;
  &:hover {
    transform: scale(1.1);
  }
  ${mediaQueries.lessThan('md')`
    width: 28px;
    height: 28px;
  `}
  ${mediaQueries.lessThan('sm')`
      width:26px;
    height:26px;
   `}
  ${mediaQueries.lessThan('xs')`
    width:24px;
    height:24px;
   `}
`;
const IconStyle = styled.div`
  padding: 0 8px;

  ${mediaQueries.lessThan('sm')`
      padding:0 6px;
   `}
  ${mediaQueries.lessThan('xs')`
  padding:0 4px;
   `}
`;
const Name = styled.div`
  display: flex;
  padding: 0 10px;
  gap: 16px;
  align-items: center;
  ${mediaQueries.lessThan('xs')`
  padding:0 4px;
   gap:8px;
   `}
`;
const CompanyNameWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const CompanyName = styled.p`
  font-family: 'Big Shoulders Stencil Text', sans-serif;
  color: #fff;
  font-size: 32px;
  ${mediaQueries.lessThan('md')`
    font-size: 26px;
    `}
  ${mediaQueries.lessThan('sm')`
    font-size: 20px;
    `}
  ${mediaQueries.lessThan('xs')`
    font-size: 16px;
  `}
`;

const BlueCharacter = styled('h1')`
  font-family: 'Big Shoulders Stencil Text', sans-serif;
  color: var(--Pastal-Blue);
  font-size: 32px;
  ${mediaQueries.lessThan('md')`
    font-size: 26px;
    `}
  ${mediaQueries.lessThan('sm')`
    font-size: 20px;
    `}
  ${mediaQueries.lessThan('xs')`
    font-size: 16px;
  `}
`;

const OrangeCharacter = styled('h1')`
  font-family: 'Big Shoulders Stencil Text', sans-serif;
  color: var(--Orange);
  font-size: 32px;
  ${mediaQueries.lessThan('md')`
    font-size: 26px;
    `}
  ${mediaQueries.lessThan('sm')`
    font-size: 20px;
    `}
  ${mediaQueries.lessThan('xs')`
    font-size: 16px;
  `}
`;
