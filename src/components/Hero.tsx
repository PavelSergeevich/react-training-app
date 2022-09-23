import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Info, Title } from '../constants/global';

const Hero = ({ showAll, showFavorites }: any) => {
  const allToggle = true;
  const favoriteToggle = true;

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {Title}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          {Info}
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button
            data-testid="heroBtn"
            variant="contained"
            color="primary"
            onClick={() => {
              showAll(allToggle);
            }}
          >
            All photos
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              showFavorites(favoriteToggle);
            }}
          >
            Favorites
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
