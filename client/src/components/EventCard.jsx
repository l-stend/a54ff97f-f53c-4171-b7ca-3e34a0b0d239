import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const EventCard = ({ event }) => {
  return (
    <Paper
      elevation={10}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
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
