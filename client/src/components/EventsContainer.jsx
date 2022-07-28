import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllEvents } from '../features/all-events/allEventsSlice';
import _ from 'lodash';
import DayHeader from './DayHeader';
import List from '@mui/material/List';
import Box from '@mui/material/Box';

const EventsContainer = () => {
  const { eventsList } = useSelector((store) => store.allEvents);
  const dispatch = useDispatch();
  const [subHeaders, setSubHeaders] = useState([]);

  // fetching events list
  useEffect(() => {
    (async () => {
      await dispatch(getAllEvents());
    })();
  }, []);

  // defining day subheaders
  useEffect(() => {
    setSubHeaders(_(eventsList).map('date').uniq().value());
  }, [eventsList]);

  return (
    <Box id='event-container-wrapper'>
      <List id='events-container-day-sections-list'>
        {subHeaders?.map((day) => (
          <DayHeader
            key={day}
            day={day}
            eventsList={eventsList}
            subHeaders={subHeaders}
          />
        ))}
      </List>
    </Box>
  );
};

export default EventsContainer;
