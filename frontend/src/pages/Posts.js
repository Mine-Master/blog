import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../styles/mediaQueries';
import { useNavigate } from 'react-router-dom';
import { ThreeDotLoading } from '../components/Loading';
import config from '../config';

const Posts = () => {
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
          `${config.api}/api/blogs?populate=*`,
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

  return (
    <PostsStyles>
      {blog.data &&
        blog.data.map((post, index) => (
          <PostStyles
            key={index}
            data-aos-once="true"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            {post.attributes && (
              <Image
                src={`${config.api}${
                  post.attributes && post.attributes.image.data.attributes.url
                }`}
                alt={post.attributes.title}
              />
            )}
            <PostInfo>
              <PostTitle>{post.attributes && post.attributes.title}</PostTitle>
              <hr />
              <PostSummary>
                {post.attributes && post.attributes.summary}
              </PostSummary>
              <PostDate>{post.attributes && post.attributes.date}</PostDate>
            </PostInfo>
            <Button>
              <ReadMoreButton onClick={() => handleReadMoreClick(post.id)}>
                Read more
              </ReadMoreButton>
            </Button>
          </PostStyles>
        ))}
    </PostsStyles>
  );
};

export default Posts;
const PostsStyles = styled.div`
  flex: 7;
  display: flex;
  flex-wrap: wrap;
  margin: 15px;
  justify-content: space-between;
  ${mediaQueries.lessThan('lg')`
  margin:15px 10px;
  `}
  ${mediaQueries.lessThan('md')`
 flex:7;
  `}
`;

const PostStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 21rem;
  align-self: normal;
  align-items: center;
  margin: 0 12px 40px 12px;

  ${mediaQueries.lessThan('md')`
      width:100%;
      height:auto;
    `}
  ${mediaQueries.lessThan('sm')`
    `}
  ${mediaQueries.lessThan('xs')`
   
  `}
`;
const Image = styled.img`
  width: 100%;
  height: -webkit-fill-available;
  object-fit: cover;
  border-radius: 16px;
  ${mediaQueries.lessThan('md')`
      height:auto;
      padding:0 10px;
      border-radius: 24px;
    `}
`;
const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  max-width: 450px;
  min-height: 230px;
  margin: auto;
  ${mediaQueries.lessThan('md')`
   min-height:auto;
   `}
`;
const PostTitle = styled.span`
  font-family: 'Varela Round', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px;
  cursor: pointer;
  color: #fef7ff;
  text-transform: uppercase;
`;
const PostSummary = styled.span`
  font-family: 'Varela Round', sans-serif;
  font-size: 20px;
  color: #fef7ff;
  line-height: 24px;
  margin-top: 15px;
  margin-bottom: 10px;
`;
const PostDate = styled.span`
  font-family: 'Lora', serif;
  font-style: italic;
  font-size: 13px;
  color: #fff;
  margin: 15px;
  text-align: center;
  width: 100%;
`;
const Button = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;
const ReadMoreButton = styled.button`
  width: 50%;
  display: inline-block;
  text-align: center;
  border-radius: 16px;
  padding: 10px 16px;
  color: var(--Black);
  box-shadow: 0px 4px 8px rgba(36, 0, 70, 0.1);
  margin-top: auto;
  white-space: nowrap;
  &:hover {
    color: var(--Whitish);
    background: linear-gradient(92.74deg, #9d4edd 4.16%, #5a189a 99.16%);
    box-shadow: inset 0px -4px 8px rgba(36, 0, 70, 0.34);
  }
  ${mediaQueries.lessThan('sm')`
  padding: 12px 48px;
  `}
  ${mediaQueries.lessThan('xs')`
  padding: 8px 32px;
  `}
`;
