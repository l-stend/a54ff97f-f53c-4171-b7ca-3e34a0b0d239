import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { removeFromList } from '../features/all-events/allEventsSlice';
import EventsContainer from './EventsContainer';
import ParticipantsBadge from './ParticipantsBadge';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Tooltip from '@mui/material/Tooltip';

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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '4vh',
          padding: '.3em',
        }}
      >
        <ParticipantsBadge attending={event.attending} />
        <Tooltip title='Add to cart' placement='left' arrow>
          <Button
            sx={{ borderRadius: '25px', height: '3vh', width: '4vw' }}
            variant='outlined'
            size='small'
            onClick={() => addToCartHandler(event._id)}
          >
            Add{' '}
            <AddCircleRoundedIcon
              fontSize='small'
              sx={{ paddingLeft: '0.2em' }}
            />
          </Button>
        </Tooltip>
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
