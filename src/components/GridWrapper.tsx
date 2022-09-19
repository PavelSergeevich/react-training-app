import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import PhotoCardFavorite from './PhotoCardFavorite';

interface PhotoProps {
  albumId: number;
  id: number;
  //thumbnailUrl: string;
  title: string;
  url: string;
}

interface PhotoSet {
  photos: Array<PhotoProps>;
}

const GridWrapper = (props: PhotoSet) => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {props.photos.map((photo: PhotoProps) => (
          <Grid item key={photo.id} xs={12} sm={6} md={4}>
            {/*<PhotoCard*/}
            {/*  url={photo.url}*/}
            {/*  albumId={photo.albumId}*/}
            {/*  id={photo.id}*/}
            {/*  title={photo.title}*/}
            {/*/>*/}
            <PhotoCardFavorite
              title={photo.title}
              url={photo.url}
              albumId={photo.albumId}
              id={photo.id}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GridWrapper;
