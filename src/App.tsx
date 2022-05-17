import React from 'react';
import GlobalStyles from './global';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import ContentState from './components/context/Content/ContentState';

function App():React.ReactElement {
  return (
    <ContentState>
      <GlobalStyles />
      <Header />
      <Content />
      <Footer copyright="Copyright 2021 - Todos los derechos reservados" />
    </ContentState>
  );
}

export default App;
