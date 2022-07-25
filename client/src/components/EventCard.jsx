import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const EventCard = ({ event }) => {
  return (
    <Paper elevation={10}>
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
      <Box sx={{ height: '10vh' }}>
        <Typography variant='h6' component='h5'>
          {event.title}
        </Typography>
      </Box>
    </Paper>
  );
};

export default EventCard;
