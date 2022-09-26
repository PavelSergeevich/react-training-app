import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Info, Title } from '../constants/global';

const GitLink = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'View the resource '}
      <Link
        color="inherit"
        href="https://github.com/PavelSergeevich/react-training-app"
        target="_blank"
      >
        Git Repo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        {Title}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        {Info}
      </Typography>
      <GitLink />
    </Box>
  );
};

export default Footer;
