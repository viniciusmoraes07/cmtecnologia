import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth:300,
    margin:30,
    backgroundColor:'#C0C0C0'

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.data}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.casos}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.tipo}
        </Typography>
        <Typography variant="body2" component="p">
          {props.texto}
          
        </Typography>
      </CardContent>
      
    </Card>
  );
}