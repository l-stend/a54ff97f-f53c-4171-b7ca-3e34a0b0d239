import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllEvents } from '../features/all-events/allEventsSlice';

const EventsContainer = () => {
  const { allEvents, isLoading } = useSelector((store) => store.allEvents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  return <section>EventsContainer</section>;
};

export default EventsContainer;
