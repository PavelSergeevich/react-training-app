import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useState } from 'react';
import {
  getFavoritesStorage,
  searcher,
  setFavoriteToStorage,
} from '../utils/localStorage';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface PhotoProps {
  albumId: number;
  id: number;
  //thumbnailUrl: string;
  title: string;
  url: string;
  like: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PhotoCardFavorite(props: PhotoProps) {
  const [expanded, setExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(
    searcher(getFavoritesStorage(), props.id)
  );

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoriteClick = () => {
    isFavorite ? setIsFavorite(false) : setIsFavorite(true);
    setFavoriteToStorage(props.id);
  };

  return (
    <Card sx={{ maxWidth: 345 }} data-testid="photoCard">
      <CardMedia
        component="img"
        height="194"
        image={props.url}
        alt={`${props.id}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={handleFavoriteClick}
          data-testid="addFavorite"
        >
          <FavoriteIcon
            data-testid="like"
            color={isFavorite ? 'error' : 'inherit'}
          />
        </IconButton>
        <IconButton aria-label="share" href={props.url} target="_blank">
          <OpenInNewIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>{`Album: ${props.albumId}, ID: ${props.id}`}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
