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
import {
  getFavoritesFromSStorage,
  getPhotosFromSStorage,
  isSStorage,
} from './utils/sessionStorage';
import PaginationBar from './utils/usePagination';

const theme = createTheme();

export default function App() {
  const [photos, setPhotos] = useState(getPhotosFromSStorage());
  const [favorites, setFavorites] = useState(getFavoritesFromSStorage());
  const [cardsToShow, setCardsToShow] = useState([]);
  const [allToggle, setAllToggle] = useState(false);
  const [favoriteToggle, setFavoriteToggle] = useState(false);

  const showAll = (heroData: boolean) => {
    setFavoriteToggle(!heroData);
    setAllToggle(heroData);
  };

  const showFavorites = (heroData: boolean) => {
    setAllToggle(!heroData);
    setFavoriteToggle(heroData);
  };

  useEffect(() => {
    if (isSStorage()) {
      setPhotos(getPhotosFromSStorage());
    } else {
      getPhoto(Url + UrlPage(0, 120)).then((data) => setPhotos(data));
    }
  }, []);

  useEffect(() => {
    allToggle ? setCardsToShow(photos) : setCardsToShow(favorites);
    setFavorites(getFavoritesFromSStorage());
    console.log(favorites);
  }, [allToggle, favoriteToggle]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Hero showAll={showAll} showFavorites={showFavorites} />
        {allToggle ? (
          <GridWrapper photos={cardsToShow} />
        ) : (
          <GridWrapper photos={favorites} />
        )}
        <PaginationBar
          setCardsToShow={(p: React.SetStateAction<never[]>) =>
            setCardsToShow(p)
          }
        />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
