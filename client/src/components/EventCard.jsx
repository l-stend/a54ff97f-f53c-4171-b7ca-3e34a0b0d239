import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { removeFromList } from '../features/all-events/allEventsSlice';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';

const EventCard = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
    dispatch(removeFromList(item._id));
  };

  return (
    <Paper
      id='event-card-wrapper'
      elevation={10}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: '2em',
      }}
    >
      {/*//////// UPPER PART /////////////*/}
      <Box
        id='event-card-upper-section'
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
            id='add-to-cart-button'
            sx={{ borderRadius: '25px', height: '3vh', width: '4vw' }}
            variant='outlined'
            size='small'
            onClick={() => addToCartHandler(event)}
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
        id='event-card-title-wrapper'
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
        <Typography id='event-card-title' variant='button-text' component='h5'>
          {event.title}
        </Typography>
      </Box>
      <Divider sx={{ marginX: '.5em' }} />
      {/*//////// INFO /////////////*/}
      <Box
        id='event-card-info-wrapper'
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
          }}
          target='_blank'
        >
          <Typography
            id='event-card-link'
            component='h6'
            variant='caption'
            sx={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            <FmdGoodIcon fontSize='small' sx={{ height: '12px' }} />{' '}
            {event.venue.name}
          </Typography>
        </Link>
        <Typography
          id='event-card-time'
          component='subtitle2'
          variant='caption'
          sx={{ fontSize: '12px' }}
        >
          <AccessTimeFilledIcon fontSize='small' sx={{ height: '12px' }} />{' '}
          {moment(event.startTime).format('LT')}
        </Typography>
      </Box>
      {/*//////// COLLAPSE /////////////*/}
      <Box
        id='event-card-artists-wrapper'
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          paddingY: '.5em',
        }}
      >
        {!isExpanded && (
          <Tooltip title='Show artists' placement='right' arrow>
            <ExpandMoreIcon
              fontSize='medium'
              onClick={() => setIsExpanded(true)}
            />
          </Tooltip>
        )}
      </Box>
      <Collapse
        id='event-card-artists-collapse'
        in={isExpanded}
        timeout='auto'
        unmountOnExit
      >
        <Box
          id='event-card-collapse-wrapper'
          sx={{
            paddingX: '1em',
            display: 'flex',
            flexDirection: 'colum',
            // justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <List
            id='event-card-artists-list'
            subheader={<ListSubheader>Artists</ListSubheader>}
          >
            {event.artists.length === 0
              ? 'No list available'
              : event.artists.map((artist) => (
                  <ListItem
                    id='event-card-artists-item'
                    key={artist.id}
                    sx={{ fontSize: '15px' }}
                  >
                    {artist.name}
                  </ListItem>
                ))}
          </List>
        </Box>
        <Box
          id='event-card-close-collapse-button-wrapper'
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingY: '.5em',
          }}
        >
          {isExpanded && (
            <Tooltip title='Hide artists' placement='right' arrow>
              <ExpandLessIcon
                fontSize='medium'
                onClick={() => setIsExpanded(false)}
              />
            </Tooltip>
          )}
        </Box>
      </Collapse>
    </Paper>
  );
};

export default EventCard;
