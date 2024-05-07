import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Sidebar from './Sidebar';
import Posts from './Posts';
import { mediaQueries } from '../styles/mediaQueries';

const HomePage = () => {
  return (
    <HomePageSection>
      <Hero />
      <Main data-aos-once="true" data-aos="fade-down" data-aos-delay="600">
        <Posts data-aos="fade-down" data-aos-delay="300" data-aos-once="true" />
        <Sidebar
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-once="true"
        />
      </Main>
    </HomePageSection>
  );
};

export default HomePage;
const HomePageSection = styled.section`
  overflow-x: clip;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  ${mediaQueries.lessThan('xs')`
  width: 90%;
  flex-direction:column;
  margin:0 auto;
  `}
`;
