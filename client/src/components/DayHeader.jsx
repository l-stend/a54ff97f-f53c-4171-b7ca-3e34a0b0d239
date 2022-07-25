import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const DayHeader = ({ day, subHeaders, eventsList }) => {
  const [isOpen, setIsOpen] = useState(true);

  // const dayEvents = eventsList.filter((event) => event.date === day);
  // console.log(dayEvents);

  return (
    <Box>
      <ListSubheader disableSticky={false}>
        <ListItemButton
          onClick={() => setIsOpen(!isOpen)}
          sx={{ marginY: '1em' }}
        >
          <ListItemText primary={day} />
          {isOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListSubheader>
      <Collapse in={isOpen} timeout='auto' unmountOnExit>
        <Container>
          <Grid container spacing={2}>
            {eventsList
              .filter((event) => event.date === day)
              .map((event) => (
                <Grid item xs={3}>
                  <Paper>
                    <Typography variant='h4'>suca</Typography>
                  </Paper>
                </Grid>
              ))}
          </Grid>
        </Container>
      </Collapse>
    </Box>
  );
};

export default DayHeader;
