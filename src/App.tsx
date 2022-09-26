import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import GridWrapper from './components/GridWrapper';
import { useState } from 'react';

const theme = createTheme();

export default function App() {
  const [toggle, setToggle] = useState(true);

  const showAll = (heroData: boolean) => {
    setToggle(heroData);
  };

  const showFavorites = (heroData: boolean) => {
    setToggle(!heroData);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Hero showAll={showAll} showFavorites={showFavorites} />
        <GridWrapper toggle={toggle} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
