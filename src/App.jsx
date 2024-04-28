import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/header/Header';
import Detail from './containers/NewsDetails';
import { Footer, FooterMargin } from './components/common/footer/Footer';
import styled from 'styled-components';
import Main from './containers/Main';

const App = () => {
  return (
    <>
      <Header />
      <MainSection>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </MainSection>
      <Footer />
      <FooterMargin />
    </>
  );
};

export default App;

const MainSection = styled.section``;
