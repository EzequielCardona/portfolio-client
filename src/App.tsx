import React from 'react';
import GlobalStyles from './global';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';

function App():React.ReactElement {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Content />
      <Footer copyright="Copyright 2021 - Todos los derechos reservados" />
    </>
  );
}

export default App;
