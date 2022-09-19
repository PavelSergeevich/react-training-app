import Toolbar from '@mui/material/Toolbar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import * as React from 'react';

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <CameraIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Placeholder Album App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
