import HeroBGImage from '../assets/Hero.png'
import { mediaQueries } from '../styles/mediaQueries'
import styled, { keyframes } from 'styled-components'
import {
  COLUMN_ALIGN_CENTER___JUSTIFY_START,
  LineBreak,
  MAX_WIDTH_RESPONSIVENESS,
  ROW_ALIGN_START__JUSTIFY_START,
} from '../styles/global-styles'
import HeroLogo from '../assets/Hero-Logo.svg'
import { TEXT_32_400, TEXT_64_900 } from '../styles/global-typography'
import BlueSquare from '../assets/Blue-Rect.png'
import OrangeSquare from '../assets/Orange-Rect.png'

const OrangeIconItems = [
  {
    bottom: 25,
    right: 10,
    rotation: 10,
    size: 15,
  },
  {
    bottom: 23,
    right: 25,
    rotation: 10,
    size: 20,
  },
  {
    bottom: 33,
    right: 22,
    rotation: 30,
    size: 15,
  },
  {
    bottom: 45,
    right: 29,
    rotation: 30,
    size: 15,
  },
  {
    bottom: 43,
    right: 33,
    rotation: 90,
    size: 21,
  },
  {
    bottom: 71,
    right: 37,
    rotation: 90,
    size: 15,
  },
  {
    bottom: 71,
    right: 43,
    rotation: 70,
    size: 15,
  },
  {
    bottom: 61,
    right: 43,
    rotation: 90,
    size: 20,
  },
]

export const Hero = () => {
  return (
    <HeroContainer>
      <ContentContainer>
        <HeroLogoWrapper>
          <HeroLogoContainer>
            {OrangeIconItems.map(({ bottom, right, size, rotation }, index) => (
              <OrangeBulletStyled
                key={index}
                src={OrangeSquare}
                $rotation={rotation}
                alt={'Image'}
                $bottom={bottom}
                $right={right}
                size={size}
              />
            ))}
            {OrangeIconItems.map(({ bottom, right, size, rotation }, index) => (
              <BlueBulletStyled
                key={index}
                src={BlueSquare}
                $rotation={rotation}
                alt={'Image'}
                $bottom={bottom}
                $left={right}
                size={size}
              />
            ))}
            <HeroLogoStyled src={HeroLogo} alt="Logo" />
          </HeroLogoContainer>
          <CompanyNameWrapper>
            <CompanyName>M</CompanyName>
            <BlueCharacter>I</BlueCharacter>
            <CompanyName>N</CompanyName>
            <OrangeCharacter>E</OrangeCharacter>
            &nbsp; &nbsp; &nbsp;
            <CompanyName>MASTERS</CompanyName>
          </CompanyNameWrapper>
        </HeroLogoWrapper>
        <HeroDescription>
          Secure your land, deploy miner NFTs. <LineBreak />
          <BlueDescription> Opt for peaceful development </BlueDescription>
          or
          <OrangeDescription> Engage in exhilarating wars</OrangeDescription>
        </HeroDescription>
      </ContentContainer>
    </HeroContainer>
  )
}

const moveAnimationBlue = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(-200%, -200%); }
  100% { transform: translate(0, 0); }
  `

const moveAnimationOrange = keyframes`
   0% { transform: translate(0, 0); }
  50% { transform: translate(200%, -200%); }
  100% { transform: translate(0, 0); }
  `

const HeroContainer = styled.section`
  background-image: url(${HeroBGImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 1100px;
  position: relative;
  margin-bottom: 120px;
  ${mediaQueries.lessThan('lg')`
   margin-bottom:100px;
`}
  ${mediaQueries.lessThan('md')`
    height: 1000px;
    margin-bottom:80px;
  `}
  ${mediaQueries.lessThan('sm')`
    height: 800px;
     margin-bottom:60px;
  `}
  ${mediaQueries.lessThan('xs')`
    height: 516px;
     margin-bottom:40px;
    `}
`

const ContentContainer = styled.div`
  ${MAX_WIDTH_RESPONSIVENESS}
  position: absolute;
  bottom: 10%;
  left: 5%;
  width: 90%;
  margin: auto;
  background: rgba(90, 24, 154, 0.1);
  box-shadow: 0px 8px 100px 30px rgba(16, 0, 43, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 32px;
  ${COLUMN_ALIGN_CENTER___JUSTIFY_START}
  gap: 32px;
  padding-bottom: 58px;
  color: var(--Whitish);
  ${mediaQueries.lessThan('md')`
    padding-bottom: 48px;
    gap: 24px;
    `}
  ${mediaQueries.lessThan('sm')`
    padding-bottom: 32px;
    gap: 16px;
    `}
    ${mediaQueries.lessThan('xs')`
    padding-bottom: 16px;
    gap: 8px;
    `}
        ${mediaQueries.greaterThan('bsc')`
    left: calc(calc(100% - 1920px) / 2);
    `}
`

const HeroLogoWrapper = styled.div`
  ${COLUMN_ALIGN_CENTER___JUSTIFY_START}
  margin-top: -100px;
  ${mediaQueries.lessThan('md')`
    margin-top: -80px;
    `}
  ${mediaQueries.lessThan('sm')`
    margin-top: -60px;
    `}
    ${mediaQueries.lessThan('xs')`
    margin-top: -40px;
    `}
`

const HeroLogoContainer = styled.div`
  position: relative;
`

const OrangeBulletStyled = styled.img`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  right: ${props => props.$right}%;
  bottom: ${props => props.$bottom}%;
  transform: rotate(${props => props.$rotation}deg);
  // Apply the dynamic animation
  animation: ${moveAnimationOrange} 5s infinite ease;
  ${mediaQueries.lessThan('sm')`
    width: 10px;
    height: 10px;
  `}
`
const BlueBulletStyled = styled.img`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  left: ${props => props.$left}%;
  bottom: ${props => props.$bottom}%;
  transform: rotate(${props => props.$rotation}deg);
  // Apply the dynamic animation
  animation: ${moveAnimationBlue} 5s infinite ease;
  ${mediaQueries.lessThan('sm')`
    width: 10px;
    height: 10px;
  `}
`
const HeroLogoStyled = styled.img`
  width: 445px;
  height: 272px;
  position: relative;
  z-index: 1;
  ${mediaQueries.lessThan('sm')`
    width: 300px;
    height: 184px;
    `}
  ${mediaQueries.lessThan('xs')`
    width: 196px;
    height: 106px;`}
`

const CompanyName = styled.h1`
  ${TEXT_64_900}
  font-family: 'Big Shoulders Stencil Text', sans-serif;
  ${mediaQueries.lessThan('md')`
    font-size: 56px;
    `}
  ${mediaQueries.lessThan('sm')`
    font-size: 48px;
    `}
  ${mediaQueries.lessThan('xs')`
    font-size: 32px;
  `}
`

const HeroDescription = styled.span`
  ${TEXT_32_400}
  text-align: center;
  line-height: 37px;
  font-family: 'Ubuntu', sans-serif;
  ${mediaQueries.lessThan('md')`
    font-size: 28px;
    line-height: 32px;
    `}
  ${mediaQueries.lessThan('sm')`
    font-size: 24px;
    line-height: 28px;
    `}
  ${mediaQueries.lessThan('xs')`
    font-size: 14px;
    line-height: 18px;
    `}
`

const BlueCharacter = styled('h1')`
  font-family: 'Big Shoulders Stencil Text', sans-serif;
  color: var(--Pastal-Blue);
  ${TEXT_64_900}
  ${mediaQueries.lessThan('md')`
    font-size: 56px;
    `}
  ${mediaQueries.lessThan('sm')`
    font-size: 48px;
    `}
  ${mediaQueries.lessThan('xs')`
    font-size: 32px;
  `}
`

const OrangeCharacter = styled('h1')`
  font-family: 'Big Shoulders Stencil Text', sans-serif;
  color: var(--Orange);
  ${TEXT_64_900}
  ${mediaQueries.lessThan('md')`
    font-size: 56px;
    `}
  ${mediaQueries.lessThan('sm')`
    font-size: 48px;
    `}
  ${mediaQueries.lessThan('xs')`
    font-size: 32px;
  `}
`

const BlueDescription = styled(HeroDescription)`
  color: var(--Pastal-Blue);
`

const OrangeDescription = styled(HeroDescription)`
  color: var(--Orange);
`

const CompanyNameWrapper = styled.div`
  ${ROW_ALIGN_START__JUSTIFY_START}
`
