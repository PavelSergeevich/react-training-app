import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import PhotoCardFavorite from './PhotoCardFavorite';
import PaginationBar from './features/usePagination';
import { useState } from 'react';
import { FavoriteToggleType, PhotoProps } from '../utils/types';
import PaginationFavoritesBar from './features/usePaginationFavorites';

const GridWrapper = ({ toggle }: FavoriteToggleType) => {
  const [cardsToShow, setCardsToShow] = useState([]);

  const photos = cardsToShow.map((card: PhotoProps) => (
    <Grid item key={card.id} xs={12} sm={6} md={4}>
      <PhotoCardFavorite
        title={card.title}
        url={card.url}
        albumId={card.albumId}
        id={card.id}
        like={card.like}
      />
    </Grid>
  ));

  return (
    <Container sx={{ py: 2 }} maxWidth="md">
      <Grid container spacing={4}>
        {photos}
      </Grid>
      {toggle ? (
        <PaginationBar
          setCardsToShow={(p: React.SetStateAction<never[]>) =>
            setCardsToShow(p)
          }
        />
      ) : (
        <PaginationFavoritesBar
          setCardsToShow={(p: React.SetStateAction<never[]>) =>
            setCardsToShow(p)
          }
        />
      )}
    </Container>
  );
};

export default GridWrapper;
