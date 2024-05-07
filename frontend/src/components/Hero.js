import React from 'react';
import styled from 'styled-components';
import Mine from '../assets/mine.png';
import { mediaQueries } from '../styles/mediaQueries';

const Hero = () => {
  return (
    <HeroStyle>
      <Titles>
        <BigTitle
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-once="true"
          data-aos-offset="-100"
        >
          News & Events
        </BigTitle>
      </Titles>
      <Image
        data-aos-once="true"
        data-aos="fade-down"
        data-aos-delay="400"
        src={Mine}
        alt="minemaster"
      />
    </HeroStyle>
  );
};

export default Hero;
const HeroStyle = styled.div`
  margin-top: 185px;
  ${mediaQueries.lessThan('lg')`
    margin-top: 165px;
    `}
  ${mediaQueries.lessThan('md')`
     margin-top: 135px;
    `}
  ${mediaQueries.lessThan('sm')`
    margin-top: 105px;
    `}
  ${mediaQueries.lessThan('xs')`
  
  `}
`;
const Titles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Lora', serif;
  color: #fff;
`;

const BigTitle = styled.span`
  font-size: 100px;
  font-family: 'Big Shoulders Stencil Text', sans-serif;
  letter-spacing: 0.05em;
  ${mediaQueries.lessThan('lg')`
    font-size: 80px;
    `}
  ${mediaQueries.lessThan('md')`
    font-size: 66px;
    `}
  ${mediaQueries.lessThan('sm')`
    font-size: 58px;
    `}
  ${mediaQueries.lessThan('xs')`
    font-size: 46px;
  `}
`;
const Image = styled.img`
  width: 100%;
  height: 600px;
  margin: 80px 0 40px 0;
  object-fit: cover;
  ${mediaQueries.lessThan('md')`
   height:auto;
    margin: 60px 0 30px 0;
    `}
  ${mediaQueries.lessThan('sm')`
    margin-top: 50px ;
    `}
    ${mediaQueries.lessThan('xs')`
    margin-top: 40px ;
    `}
`;
