import React, { useState } from 'react';
import moment from 'moment';
import EventCard from './EventCard';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const DayHeader = ({ day, subHeaders, eventsList }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box>
      {/* ////////// SUB HEADER ///////// */}
      <ListSubheader
        disableSticky={false}
        sx={{
          paddingTop: '5vh',
          marginBottom: '2em',
          backgroundColor: 'background.default',
        }}
      >
        <ListItemButton
          onClick={() => setIsOpen(!isOpen)}
          sx={{
            marginY: '1em',
            backgroundColor: 'background.paper',
            border: '1px solid',
            borderColor: 'primary.main',
            opacity: '.7',
            borderRadius: '5px',
            paddingY: '2vh',
          }}
        >
          <ListItemText primary={moment(day).format('ddd MMMM Do')} />
          {isOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListSubheader>
      {/* ////////// EVENT CARD'S COLLAPSE ///////// */}
      <Collapse in={isOpen} timeout='auto' unmountOnExit>
        <Container sx={{ width: '95vw' }}>
          <Grid container spacing={2}>
            {eventsList
              .filter((event) => event.date === day)
              .map((event) => (
                <Grid key={event._id} item xs={10} md={4} lg={3}>
                  <EventCard event={event} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </Collapse>
    </Box>
  );
};

export default DayHeader;
