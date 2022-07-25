import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { removeFromList } from '../features/all-events/allEventsSlice';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

const EventCard = ({ event }) => {
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
    dispatch(removeFromList(item._id));
    console.log('aljfglaf');
  };

  return (
    <Paper
      elevation={10}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box>
        <Button
          sx={{ borderRadius: '50%' }}
          onClick={() => addToCartHandler(event._id)}
        >
          <AddCircleRoundedIcon fontSize='medium' />
        </Button>
      </Box>
      <img
        src={event.flyerFront}
        alt="Event's poster"
        style={{
          width: '96%',
          height: '45vh',
          margin: '2%',
          borderRadius: '3px',
          objectFit: 'fill',
        }}
      />
      <Box
        sx={{
          width: '90%',
          height: '8vh',
          // paddingX: '5%',
          marginX: '5%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'baseline',
        }}
      >
        <Typography
          variant='button-text'
          component='h5'
          sx={
            {
              // display: '-webkit-box',
              // webkitLineClamp: '2',
              // webkitBoxOrient: 'vertical',
              // textOverflow: 'ellipsis',
              // whiteSpace: 'nowrap',
              // overflow: 'hidden',
              // width: '100%',
            }
          }
        >
          {event.title}
        </Typography>
      </Box>
    </Paper>
  );
};

export default EventCard;
