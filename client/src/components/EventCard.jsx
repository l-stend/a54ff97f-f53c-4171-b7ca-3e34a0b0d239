import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const EventCard = ({ event }) => {
  return (
    <Paper elevation={3}>
      <img
        src={event.flyerFront}
        alt="Event's poster"
        height='20vh'
        width='20vw'
      />
      <Box>
        <Typography variant='h5' component='h4'>
          {event.title}
        </Typography>
      </Box>
    </Paper>
  );
};

export default EventCard;
