import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ThreeDotLoading } from '../components/Loading';
import config from '../config';
import { useParams } from 'react-router-dom';
import { mediaQueries } from '../styles/mediaQueries';

const SinglePost = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({ data: [] });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          `${config.api}/api/blogs/${id}/?populate=*`,
        );
        const data = await response.json();
        setDetails(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) {
    return <ThreeDotLoading />;
  }

  const { attributes } = details.data;
  return (
    <Single data-aos="fade-down" data-aos-delay="300" data-aos-once="true">
      <Wrapper>
        <Image
          src={`${config.api}${
            attributes && attributes.image.data.attributes.url
          }`}
          alt={attributes && attributes.title}
        />
        <Title>{attributes && attributes.title}</Title>
        <Info>
          <Author>MineMaster</Author>
          <PostDate>{attributes && attributes.date}</PostDate>
        </Info>
        <Description>{attributes && attributes.description}</Description>
      </Wrapper>
    </Single>
  );
};

export default SinglePost;
const Single = styled.div`
  flex: 7;
  margin: 15px;
  padding: 30px;
  background: rgb(13 9 13 / 16%);
  border: 3px solid var(--Orange);
  border-radius: 10px;
  height: fit-content;
  ${mediaQueries.lessThan('md')`
    border-radius: 28px;
   `}
  ${mediaQueries.lessThan('sm')`
    padding: 20px ;
    border-radius: 20px;
  `}
  ${mediaQueries.lessThan('xs')`
    border-radius: 16px;
    padding:10px 10px 20px ;
  `}
`;
const Wrapper = styled.div``;
const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 16px;
  object-fit: cover;
`;
const Title = styled.h1`
  text-align: center;
  margin: 10px;
  font-family: 'Lora', serif;
  font-size: 36px;
  color: #fef7ff;
  ${mediaQueries.lessThan('md')`
  font-size: 34px;
  `}
  ${mediaQueries.lessThan('sm')`
    font-size:28px 
    `}
    ${mediaQueries.lessThan('xs')`
     font-size:34px 
    `}
`;
const Description = styled.p`
  color: #fef7ff;
  font-size: 24px;
  padding: 20px;
  &::first-letter {
    margin-left: 20px;
    font-size: 30px;
    font-weight: 600;
    ${mediaQueries.lessThan('md')`
     font-size: 28px;
  `}
    ${mediaQueries.lessThan('sm')`
      font-size: 22px;
  `}
  ${mediaQueries.lessThan('xs')`
     font-size: 20px; 
  `}
  }
  ${mediaQueries.lessThan('md')`
  font-size: 22px;
  `}
  ${mediaQueries.lessThan('sm')`
  font-size: 18px;
  padding:0;
  `}
  ${mediaQueries.lessThan('xs')`
  font-size: 16px;
  `}
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Author = styled.span`
  font-family: 'Lora', serif;
  font-style: italic;
  font-size: 14px;
  color: #fef7ff;
  margin: 15px;
`;
const PostDate = styled.span`
  font-family: 'Lora', serif;
  font-style: italic;
  font-size: 14px;
  color: #fef7ff;
  margin: 15px;
`;
