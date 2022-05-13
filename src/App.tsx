import React from 'react';
import GlobalStyles from './global';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';

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
