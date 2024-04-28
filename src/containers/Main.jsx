import React from 'react'
import styled from 'styled-components'
import { Hero } from './Hero'
import News from './News'

const Main = () => {
  return (
    <MainSection>
      <Hero />
      <News />
    </MainSection>
  )
}

export default Main
const MainSection = styled.section`
  overflow-x: clip;
  display: flex;
  flex-direction: column;
`
