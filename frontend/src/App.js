import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({ delay: 300, once: true });
  }, []);
  return (
    <>
      <Header />
      <MainSection>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailsPage />} />
        </Routes>
      </MainSection>
      <Footer />
    </>
  );
};

export default App;

const MainSection = styled.section``;
