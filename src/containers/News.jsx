import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  COLUMN_ALIGN_CENTER___JUSTIFY_START,
  COLUMN_ALIGN_START__JUSTIFY_START,
  MAX_WIDTH_RESPONSIVENESS,
  ROW_ALIGN_CENTER__SPACE_B,
} from '../styles/global-styles';
import { mediaQueries } from '../styles/mediaQueries';
import {
  TEXT_24_400,
  TEXT_32_500,
  TEXT_32_700,
  TEXT_48_700,
} from '../styles/global-typography';
import { PrimaryButton } from '../components/primary';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { ThreeDotLoading } from '../components/loading';
import { Divider } from '@mui/material';

const News = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const [blog, setBlog] = useState({ data: [] });
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const reqOptions = {
          Headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`,
          },
        };
        const response = await fetch(
          `${config.api}/api/news-and-events?populate=*`,
          reqOptions,
        );
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        setTimeout(fetchBlog, 1000);
        setBlog({ data: [] });
      }
    };

    fetchBlog();
  }, []);

  if (!blog.data || blog.data.length === 0) {
    return <ThreeDotLoading />;
  }

  const lastBlogPost =
    blog.data && blog.data.length > 0 ? blog.data[blog.data.length - 1] : null;

  return (
    <NewsWrapper>
      <Title>News & Events</Title>
      <CardNews>
        {lastBlogPost && (
          <NewCard>
            <Image
              src={`${config.api}${lastBlogPost.attributes.image.data.attributes.url}`}
              alt={lastBlogPost.attributes.Name}
            />
            <VerticalDivider orientation="vertical" flexItem />
            <CardText>
              <TitleCard>{lastBlogPost.attributes.Name}</TitleCard>
              <DescriptionCard>
                {lastBlogPost.attributes.summary}
              </DescriptionCard>
              <ReadMoreButton
                onClick={() => handleReadMoreClick(lastBlogPost.id)}
              >
                Read More
              </ReadMoreButton>
            </CardText>
          </NewCard>
        )}
      </CardNews>
      <OldCardContainer>
        {blog.data &&
          blog.data.slice(0, -1).map((card, index) => (
            <Card key={index}>
              <CardImage
                src={`${config.api}${card.attributes && card.attributes.image.data.attributes.url}`}
                alt={card.attributes.Name}
              />
              <CardTextDesc>
                <CardTitle>{card.attributes && card.attributes.Name}</CardTitle>
                <CardDesc>
                  {card.attributes && card.attributes.summary}
                </CardDesc>
                <ReadMoreButton onClick={() => handleReadMoreClick(card.id)}>
                  Read More
                </ReadMoreButton>
              </CardTextDesc>
            </Card>
          ))}
      </OldCardContainer>
    </NewsWrapper>
  );
};

export default News;

const NewsWrapper = styled.section`
  margin: 0 auto;
  width: 90%;
  ${MAX_WIDTH_RESPONSIVENESS}
  ${COLUMN_ALIGN_CENTER___JUSTIFY_START}
  gap:32px;
`;
const Title = styled.h1`
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
`;
const CardNews = styled.div`
  ${COLUMN_ALIGN_CENTER___JUSTIFY_START}
  flex-direction: column-reverse;
  gap: 32px;
  width: 100%;
`;
const NewCard = styled.div`
  ${MAX_WIDTH_RESPONSIVENESS}
  ${ROW_ALIGN_CENTER__SPACE_B}
  margin: 60px auto;
  gap: 70px;
  padding: 32px;
  background: rgba(254, 247, 255, 0.16);
  box-shadow: inset 0px -4px 8px rgba(36, 0, 70, 0.34);
  border-radius: 32px;
  ${mediaQueries.lessThan('md')`
    gap: 48px;
    flex-direction: column;
    margin: 40px auto;
    align-items:flex-start;
     padding: 24px;
    border-radius: 24px;
    `}
  ${mediaQueries.lessThan('sm')`
    gap: 24px;
    margin: 0;
     padding: 16px;
    border-radius: 16px;
    `}
`;
const CardText = styled.div`
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap:24px;
  width: 50%;
  ${mediaQueries.lessThan('md')`
  width:100%;
  `}
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  border-radius: 32px;
  ${mediaQueries.lessThan('md')`
    width: 100%;
    border-radius:24px;
    `}
  ${mediaQueries.lessThan('sm')`
    border-radius:16px;
    `}
`;
const TitleCard = styled.h2`
  color: var(--Primary);
  ${TEXT_48_700}
  ${mediaQueries.lessThan('md')`
  font-size: 40px;
  `}
  ${mediaQueries.lessThan('sm')`
  font-size: 32px;
  `}
  ${mediaQueries.lessThan('xs')`
  font-size: 16px;
  `}
`;
const DescriptionCard = styled.p`
  ${TEXT_32_700}
  color: rgba(90, 24, 154, 0.5);
  line-height: 33.6px;
  ${mediaQueries.lessThan('xl')`
  font-size: 30px;
  `}
  ${mediaQueries.lessThan('lg')`
  font-size: 28px;
  `}
  ${mediaQueries.lessThan('md')`
  font-size: 24px;
  `}
  ${mediaQueries.lessThan('sm')`
  font-size: 20px;
  `}
  ${mediaQueries.lessThan('xs')`
  font-size: 16px;
  line-height:16.09px;
  `}
`;

const Card = styled.div`
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap:16px;
  width: 100%;
  background: rgba(254, 247, 255, 0.16);
  box-shadow: inset 0px -4px 8px rgba(36, 0, 70, 0.34);
  border-radius: 32px;
  justify-content: space-between;
  ${mediaQueries.lessThan('md')`
    width: 100%;
    
    border-radius: 24px;
  `}
  ${mediaQueries.lessThan('sm')`
    
    border-radius: 16px;`}
`;
const CardImage = styled.img`
  height: auto;
  width: 100%;
  border-radius: 32px;
  max-height: 400px;
  min-height: 400px;
  ${mediaQueries.lessThan('md')`
    border-radius:24px;
    min-height:280px;
    `}
  ${mediaQueries.lessThan('sm')`
    border-radius:16px;
     max-height: auto;
  min-height: auto;
    `}
`;
const CardTitle = styled.h2`
  ${TEXT_32_500}
  color: var(--Primary);
  ${mediaQueries.lessThan('md')`
  font-size: 28px;
  `}
  ${mediaQueries.lessThan('sm')`
  font-size: 24px;
  margin-top:16px;
  margin-bottom:8px;
  `}
  ${mediaQueries.lessThan('xs')`
  // font-size: 14px;
  `}
`;
const CardDesc = styled.p`
  ${TEXT_24_400}
  color: rgba(90, 24, 154, 0.5);
  line-height: 33.6px;
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
  `}
  ${mediaQueries.lessThan('xs')`
  font-size: 14px;
  line-height:16.09px;
  `}
`;
const ReadMoreButton = styled(PrimaryButton)`
  padding: 16px 56px;
  ${mediaQueries.lessThan('sm')`
  padding: 12px 48px;
  font-size: 16px;
  `}
  ${mediaQueries.lessThan('xs')`
  padding: 8px 32px;
  font-size: 14px;
  `}
`;

const CardTextDesc = styled.div`
  padding: 32px;
  ${COLUMN_ALIGN_START__JUSTIFY_START}
  gap:16px;
  min-height: 370px;
  justify-content: space-between;
  ${mediaQueries.lessThan('md')`
     padding:24px;
  `}
  ${mediaQueries.lessThan('sm')`
    padding:20px;
    min-height:auto
  `}
`;

const OldCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  width: 100%;
  padding-bottom: 50px;
  ${mediaQueries.lessThan('md')`
    padding-bottom: 40px;
  `}
  ${mediaQueries.lessThan('sm')`
   grid-template-columns: repeat(1, 1fr);
    gap: 16px;
    padding-bottom: 30px;
  `}
   ${mediaQueries.lessThan('xs')`
   
    padding-bottom: 20px;
  `}
`;
const VerticalDivider = styled(Divider)`
  width: 2px;
  background: #5a189a1a;
  ${mediaQueries.lessThan('sm')`
    display:none;
    `}
`;
