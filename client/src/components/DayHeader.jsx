import React, { useState } from 'react';
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

const DayHeader = ({ day, subHeaders, eventsList }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Box>
      <ListItemButton onClick={() => setIsOpen(!isOpen)}>
        <ListItemText primary={day} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen} timeout='auto' unmountOnExit>
        <Grid container spacing={2}>
          {eventsList
            .filter((event) => event.date === day)
            .map((event) => {
              <Grid item xs={4}>
                {event.title}
              </Grid>;
            })}
        </Grid>
      </Collapse>
    </Box>
  );
};

export default DayHeader;
