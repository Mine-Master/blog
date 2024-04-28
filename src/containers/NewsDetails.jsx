import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  COLUMN_ALIGN_START__JUSTIFY_START,
  MAX_WIDTH_RESPONSIVENESS,
} from '../styles/global-styles';
import { TEXT_32_500, TEXT_48_700 } from '../styles/global-typography';
import { mediaQueries } from '../styles/mediaQueries';
import BackDetails from '../assets/back.detail.svg';
import config from '../config';
import { ThreeDotLoading } from '../components/loading';

const DetailsCard = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({ data: {} });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          `${config.api}/api/news-and-events/${id}/?populate=*`,
        );
        const data = await response.json();
        setDetails(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching details:', error);
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (loading) {
    return <ThreeDotLoading />;
  }

  const { attributes } = details.data;

  return (
    <Details>
      <Image src={BackDetails} alt="back" />
      <Title>What is going on ...</Title>
      <DetailsWrapper>
        <DetailsTitle>{attributes && attributes.Name}</DetailsTitle>
        <DescDetails>{attributes && attributes.description}</DescDetails>
        <Banner
          src={`${config.api}${attributes && attributes.image.data.attributes.url}`}
          alt={attributes && attributes.Name}
        />
      </DetailsWrapper>
      <HorizontalDivider />
    </Details>
  );
};

export default DetailsCard;

const Title = styled.h1`
  margin: 0 auto;
  width: 90%;
  ${TEXT_48_700}
  color: var(--Primary);
  padding-top: 70px;
  font-family: 'Ubuntu', sans-serif;
  ${mediaQueries.lessThan('xl')`
  font-size: 44px;
  `}
  ${mediaQueries.lessThan('lg')`
  font-size: 40px;
  `}
  ${mediaQueries.lessThan('md')`
  font-size: 34px;
  padding-top:50px;
  `}
  ${mediaQueries.lessThan('sm')`

  padding-top:40px;
  `}
  ${mediaQueries.lessThan('xs')`
  
  padding-top:30px;
  `}
`;
const Details = styled.div`
  width: 100%;
`;
const DetailsWrapper = styled.section`
  width: 90%;
  padding: 50px;
  ${MAX_WIDTH_RESPONSIVENESS}
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  margin: 50px auto;
  gap: 48px;
  background: rgba(254, 247, 255, 0.16);
  box-shadow: inset 0px -4px 8px rgba(36, 0, 70, 0.34);
  border-radius: 32px;
  ${mediaQueries.lessThan('md')`
   gap:34px;
   padding: 30px ;
    border-radius: 28px;
   `}
  ${mediaQueries.lessThan('sm')`
    gap: 24px; 
    padding: 20px ;
     border-radius: 20px;
    `}
      ${mediaQueries.lessThan('xs')`
      gap:16px;
       border-radius: 16px;
    `}
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  position: relative;
`;
const DetailsTitle = styled.h1`
  ${TEXT_48_700}
  color: var(--Primary);
  font-family: 'Ubuntu', sans-serif;
  ${mediaQueries.lessThan('xl')`
  font-size: 44px;
  `}
  ${mediaQueries.lessThan('lg')`
  font-size: 40px;
  `}
  ${mediaQueries.lessThan('md')`
  font-size: 34px;
  `}
  ${mediaQueries.lessThan('sm')`
    font-size:28px 
    `}
    ${mediaQueries.lessThan('xs')`
     font-size:24px 
    `}
`;
const DescDetails = styled.p`
  ${TEXT_32_500}
  color: var(--Primary);
  ${mediaQueries.lessThan('xl')`
  font-size: 28px;
  `}
  ${mediaQueries.lessThan('lg')`
  font-size: 24px;
  `}
  ${mediaQueries.lessThan('md')`
  font-size: 20px;
  `}
  ${mediaQueries.lessThan('sm')`
  font-size: 16px;
  margin-top:16px;
  margin-bottom:8px;
  `}
  ${mediaQueries.lessThan('xs')`
  font-size: 14px;
  `}
`;
const Banner = styled.img`
  width: 100%;
  height: auto;
  border-radius: 32px;
  ${mediaQueries.lessThan('md')`
    border-radius:24px;
    `}
  ${mediaQueries.lessThan('sm')`
    border-radius:16px;
    `}
`;
const HorizontalDivider = styled('div')`
  display: none;
  width: 90%;
  height: 2px;
  margin: 0 auto;
  background: linear-gradient(92.74deg, #9d4edd 4.16%, #5a189a 99.16%);
  ${mediaQueries.lessThan('sm')`
  display: block;
  `}
`;
