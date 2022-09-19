import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

interface PhotoProps {
  albumId: number;
  id: number;
  //thumbnailUrl: string;
  title: string;
  url: string;
}

const PhotoCard = (props: PhotoProps) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component="img"
        sx={{
          // 16:9
          pt: '56.25%',
        }}
        image={props.url}
        alt={props.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {`Album: ${props.albumId}, ID: ${props.id}`}
        </Typography>
        <Typography>{props.title}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Add to favorites</Button>
      </CardActions>
    </Card>
  );
};

export default PhotoCard;
