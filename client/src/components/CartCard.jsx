import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { putBackToList } from '../features/all-events/allEventsSlice';
import { removeFromCart } from '../features/cart/cartSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FmdGoodIcon from '@mui/icons-material/FmdGoodOutlined';
import Link from '@mui/material/Link';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Tooltip from '@mui/material/Tooltip';

const CartCard = ({ event }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(putBackToList(item));
    dispatch(removeFromCart(item._id));
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '20vh',
        width: '38vw',
        marginY: '1.5vh',
        marginX: '.5vw',
        backgroundColor: 'background.default',
      }}
    >
      {/* ////////// IMAGE ///////// */}
      <CardMedia
        component='img'
        height='100%'
        image={event.flyerFront}
        alt='Poster of the event'
        sx={{ flex: '3', maxWidth: '10vw' }}
      />

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginY: '1vh',
          flex: '4',
        }}
      >
        {/* ////////// TITLE ///////// */}
        <Box sx={{ minHeight: '50%', paddingBottom: 'inherit' }}>
          <Typography variant='button-text' component='h5'>
            {event.title}
          </Typography>
        </Box>
        {/* ////////// INFO ///////// */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 'inherit',
          }}
        >
          <Link
            href={event.venue.direction}
            underline='hover'
            sx={{
              fontSize: '12px',
            }}
          >
            <Typography
              component='subtitle2'
              variant='caption'
              sx={{ marginBottom: '1vh' }}
            >
              <FmdGoodIcon fontSize='small' sx={{ height: '12px' }} />{' '}
              {event.venue.name}
            </Typography>
          </Link>
          <Typography
            component='subtitle2'
            variant='caption'
            sx={{ fontSize: '12px' }}
          >
            <AccessTimeFilledIcon fontSize='small' sx={{ height: '12px' }} />{' '}
            {moment(event.startTime).format('LLL')}
          </Typography>
        </Box>
      </CardContent>
      {/* ////////// REMOVE BUTTON ///////// */}
      <Box sx={{ flex: '1' }}>
        <CardActions>
          <Tooltip title='Remove from cart' placement='bottom' arrow>
            <IconButton size='medium' onClick={() => handleRemoveItem(event)}>
              <HighlightOffIcon fontSize='large' color='primary' />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Box>
    </Card>
  );
};

export default CartCard;
