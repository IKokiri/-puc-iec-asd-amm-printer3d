import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  Link
} from "react-router-dom";

export default function Product(props) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{margin:"20px"}}>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/details/${props.id}`}>Saber Mais</Button>
      </CardActions>
    </Card>
  );
}