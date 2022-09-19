import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import GridWrapper from './components/GridWrapper';
import { useEffect, useState } from 'react';
import getPhoto from './api/fetchData';
import { Url, UrlPage } from './constants/global';

const theme = createTheme();

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [addData, setData] = useState(0);

  const childToParent = (heroData: any) => {
    setData(heroData);
  };

  useEffect(() => {
    getPhoto(Url + UrlPage(0, 2 + addData)).then((data) => setPhotos(data));
  }, [addData]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Hero childToParent={childToParent} />
        <GridWrapper photos={photos} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
