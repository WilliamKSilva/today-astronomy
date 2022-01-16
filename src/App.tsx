import React from 'react';
import { Header } from './components/Header';
import { GlobalStyle } from './global/global';
import { Home } from './pages/Home';

function App() {
  
  return (
    <>
      <Header />
      <Home />
      <GlobalStyle />
    </>
  );
}

export default App;
