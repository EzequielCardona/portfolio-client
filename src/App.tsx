import React from 'react';
import './App.css';
import GlobalStyles from './global';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = ():JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <div style={{minHeight:'100vh', marginBottom:'-72.5px', paddingTop:'90.7px'}}>
        content
      </div>
      <Footer />
    </>
  );
}

export default App;
