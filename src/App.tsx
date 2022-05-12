import React from 'react';
import GlobalStyles from './global';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';

const App = ():JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
