import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import SinglePost from './SinglePost';
import { mediaQueries } from '../styles/mediaQueries';

const DetailsPage = () => {
  return (
    <Container>
      <CompanyNameWrapper>
        <Name data-aos="fade-down" data-aos-delay="300" data-aos-once="true">
          <Wrapper>
            <CompanyName>M</CompanyName>
            <BlueCharacter>I</BlueCharacter>
            <CompanyName>N</CompanyName>
            <OrangeCharacter>E</OrangeCharacter>
            &nbsp;&nbsp;
            <CompanyName>MASTERS</CompanyName>&nbsp;
          </Wrapper>
          <OrangeCharacter
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-once="true"
          >
            NEWS
          </OrangeCharacter>
        </Name>
      </CompanyNameWrapper>
      <Details>
        <SinglePost
          data-aos="fade-down"
          data-aos-delay="500"
          data-aos-once="true"
        />
        <Sidebar
          data-aos="fade-down"
          data-aos-delay="500"
          data-aos-once="true"
        />
      </Details>
    </Container>
  );
};

const Container = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  ${mediaQueries.lessThan('md')`
   margin-top: 130px;
    `}
  ${mediaQueries.lessThan('sm')`
   margin-top: 100px;
    `}
`;
export default DetailsPage;
const Details = styled.div`
  display: flex;
  ${mediaQueries.lessThan('xs')`
  width: 90%;
  flex-direction:column;
  margin:0 auto;
  `}
`;

const CompanyNameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  flex-wrap: wrap;
  ${mediaQueries.lessThan('md')`
   margin-bottom: 40px;
    `}
  ${mediaQueries.lessThan('sm')`
   margin-bottom: 30px;
    `}
`;
const CompanyName = styled.p`
  font-family: 'Big Shoulders Stencil Text', sans-serif;
  color: #fff;
  font-size: 100px;
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

const BlueCharacter = styled('h1')`
  font-family: 'Big Shoulders Stencil Text', sans-serif;
  color: var(--Pastal-Blue);
  font-size: 100px;
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

const OrangeCharacter = styled('h1')`
  font-family: 'Big Shoulders Stencil Text', sans-serif;
  color: var(--Orange);
  font-size: 100px;
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

const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mediaQueries.lessThan('xs')`
  `}
`;

const Wrapper = styled.div`
  display: flex;
`;
