import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export default function Comment(props) {
  return (
    <Card sx={{ minWidth: 275 }} style={{"margin":"30px"}}>
      <CardContent>
        <Typography variant="h5" component="div">
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          08-08-2021 08:35
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
