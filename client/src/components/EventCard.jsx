import React, { useState } from 'react';
import moment from 'moment';
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
import FmdGoodIcon from '@mui/icons-material/FmdGoodOutlined';
import Link from '@mui/material/Link';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';

const EventCard = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);
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
      {/*//////// UPPER PART /////////////*/}
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
      {/*//////// IMAGE /////////////*/}
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
      {/*//////// TITLE /////////////*/}
      <Box
        sx={{
          width: '90%',
          height: '8vh',
          marginX: '5%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'baseline',
        }}
      >
        <Typography variant='button-text' component='h5'>
          {event.title}
        </Typography>
      </Box>
      <Divider />
      {/*//////// INFO /////////////*/}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'baseline',
          paddingY: '1em',
        }}
      >
        <Link
          href={event.venue.direction}
          underline='hover'
          sx={{
            fontSize: '12px',
            width: '40%',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          <Typography component='subtitle2' variant='caption'>
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
          {moment(event.startTime).format('LT')}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          paddingY: '.5em',
        }}
      >
        {!isExpanded && (
          <ExpandCircleDownRoundedIcon
            fontSize='medium'
            onClick={() => setIsExpanded(true)}
          />
        )}
      </Box>
      {/*//////// COLLAPSE /////////////*/}
      <Collapse in={isExpanded} timeout='auto' unmountOnExit>
        <Typography
          component='subtitle2'
          variant='caption'
          sx={{ fontSize: '12px' }}
        >
          <AccessTimeFilledIcon fontSize='small' sx={{ height: '12px' }} />{' '}
          {moment(event.startTime).format('LT')}
        </Typography>
      </Collapse>
    </Paper>
  );
};

export default EventCard;
