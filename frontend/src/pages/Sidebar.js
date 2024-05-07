import React from 'react';
import styled from 'styled-components';
import Miners from '../assets/Miners.png';
import { COMMINUTIES_ITEMS } from '../constants';
import { mediaQueries } from '../styles/mediaQueries';

const Sidebar = () => {
  const handleSocialIconClick = (socialUrl) => {
    window.open(socialUrl, '_blank');
  };

  return (
    <SidebarStyle
      data-aos-once="true"
      data-aos="fade-down"
      data-aos-delay="300"
    >
      <SideBarItem>
        <Title>ABOUT US</Title>
        <Image src={Miners} alt="Miners" />
        <Text>
          Our game empowers you, promoting financial inclusivity and showcasing
          limitless innovation in the digital world. It provides immersive
          gameplay coupled with real-world value generation.
        </Text>
      </SideBarItem>
      <SideBarItem>
        <Title>FOLLOW US</Title>
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
      </SideBarItem>
    </SidebarStyle>
  );
};

export default Sidebar;

const SidebarStyle = styled.div`
  flex: 3;
  margin: 15px;
  padding: 30px 0 30px 0;
  background-color: #fdfdfd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--Whitish);
  background: rgb(13 9 13 / 16%);
  border: 3px solid var(--Orange);
  backdrop-filter: blur(50px);
  height: fit-content;
  ${mediaQueries.lessThan('md')`
  flex:4;
  `}
`;
const SideBarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Title = styled.span`
  margin: 10px;
  padding: 5px;
  width: 80%;
  border-top: 1px solid #a7a4a4;
  border-bottom: 1px solid #a7a4a4;
  font-family: 'Varela Round', sans-serif;
  font-weight: 600px;
  font-size: 16px;
  color: #fef7ff;
  text-align: center;
`;
const Text = styled.p`
  padding: 20px;
  font-family: 'Varela Round', sans-serif;
  font-weight: 600px;
  font-size: 14px;
  color: #fef7ff;
`;
const Image = styled.img`
  padding: 20px;
  object-fit: cover;
  width: 100%;
  height: auto;
`;
const Media = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  width: 100%;
`;
const CommunityIcon = styled.img`
  cursor: pointer;
  margin-top: 15px;
  width: 42px;
  height: 42px;
  padding: 0 4px;
  &:hover {
    border-bottom: 2px solid var(--Orange);
    transform: scale(1.1);
  }
  ${mediaQueries.lessThan('md')`
    width: 36px;
    height: 36px;
  `}
  ${mediaQueries.lessThan('sm')`
      width:26px;
    height:26px;
   `}
  ${mediaQueries.lessThan('xs')`
    width: 42px;
    height: 42px;
   `}
`;
const IconStyle = styled.div``;
