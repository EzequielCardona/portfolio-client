import React from 'react';
import './App.css';
import GlobalStyles from './global';
import { ContentWrapper } from './Components/Common/StylesMixing';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = ():JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <ContentWrapper>
        content
      </ContentWrapper>
      <Footer />
    </>
  );
}

export default App;
