import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Comment(props) {
  
  return (
    <Card sx={{ minWidth: 275 }} style={{"margin":"15px"}}>
      <CardContent>
        <Typography variant="h5" component="div">
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {props.name}
        </Typography>
        <Typography variant="body2">
          {props.answer}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
