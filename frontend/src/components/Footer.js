import React from 'react';
import styled from 'styled-components';
import { COMMINUTIES_ITEMS } from '../constants';
import { mediaQueries } from '../styles/mediaQueries';
import Logo from '../assets/Logo-Header.svg';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleSocialIconClick = (socialUrl) => {
    window.open(socialUrl, '_blank');
  };
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    navigate(`/`);
  };

  return (
    <FooterStyles
      data-aos="fade-down"
      data-aos-delay="300"
      data-aos-once="true"
    >
      <CompanyNameWrapper>
        <TitleFirstRow>
          <CompanyName>M</CompanyName>
          <BlueCharacter>I</BlueCharacter>
          <CompanyName>N</CompanyName>
          <OrangeCharacter>E</OrangeCharacter>
        </TitleFirstRow>
        <CompanyName>MASTERS</CompanyName>
        <LeftSideSubTitle>Accessible, Engaging, Rewarding</LeftSideSubTitle>
      </CompanyNameWrapper>
      <LogoStyle src={Logo} alt="Logo" onClick={handleLogoClick} />
      <Follow>
        <Text>Contact US :</Text>
        <Media>
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
      </Follow>
    </FooterStyles>
  );
};

export default Footer;

const FooterStyles = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 3px solid var(--Orange);
  padding: 20px;
  margin-top: 100px;
  ${mediaQueries.lessThan('xs')`
 flex-direction:column;
 gap:20px;
 `}
`;

const Follow = styled.div`
  display: flex;
  flex-direction: column;
  ${mediaQueries.lessThan('xs')`
 width:100%;
 `}
`;

const Text = styled.p`
  font-family: 'Lora', serif;
  color: #fef7ff;
  padding: 10px;
  font-size: 14px;
`;

const Media = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${mediaQueries.lessThan('xs')`
    justify-content: space-between;
    padding-bottom:20px;
 `}
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
`;

const LogoStyle = styled.img`
  cursor: pointer;
  width: 80px;
  height: 80px;
  &:hover {
    transform: scale(1.1);
  }
  ${mediaQueries.lessThan('md')`
        width:61px;
        height: 60px;
  `}
  ${mediaQueries.lessThan('sm')`
        width:70px;
        height: 70px;
  `};
`;

const CompanyNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  flex-wrap: wrap;
`;
const CompanyName = styled.p`
  font-family: 'Big Shoulders Stencil Text', sans-serif;
  color: #fff;
  letter-spacing: 0.05em;
  font-size: 32px;
  ${mediaQueries.lessThan('md')`
    font-size: 26px;
    `}
`;

const BlueCharacter = styled('h1')`
  font-family: 'Big Shoulders Stencil Text', sans-serif;
  color: var(--Pastal-Blue);
  letter-spacing: 0.05em;
  font-size: 32px;
  ${mediaQueries.lessThan('md')`
    font-size: 26px;
    `}
`;

const OrangeCharacter = styled('h1')`
  font-family: 'Big Shoulders Stencil Text', sans-serif;
  color: var(--Orange);
  letter-spacing: 0.05em;
  font-size: 32px;
  ${mediaQueries.lessThan('md')`
    font-size: 26px;
    `}
`;

const TitleFirstRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftSideSubTitle = styled.h4`
  font-family: 'Lora', serif;
  font-size: 13px;
  color: #fef7ff;
  position: relative;
  padding-top: 10px;

  ${mediaQueries.lessThan('sm')`
   text-align: center;
   white-space: nowrap;
    `}
`;
