import React from 'react';
import moment from 'moment';
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

const CartCard = ({ event }) => {
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
      }}
    >
      <CardMedia
        component='img'
        height='100%'
        // maxWidth='10vw'
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
        <Box sx={{ minHeight: '50%', paddingBottom: 'inherit' }}>
          <Typography variant='button-text' component='h5'>
            {event.title}
          </Typography>
        </Box>
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
              // width: '40%',
              // textOverflow: 'ellipsis',
              // overflow: 'hidden',
              // whiteSpace: 'nowrap',
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
            {moment(event.startTime).format('LT')}
          </Typography>
        </Box>
      </CardContent>

      <Box sx={{ flex: '1' }}>
        <CardActions>
          <IconButton size='medium'>
            <HighlightOffIcon fontSize='large' color='primary' />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
};

export default CartCard;
