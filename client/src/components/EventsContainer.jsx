import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllEvents } from '../features/all-events/allEventsSlice';
import { addToCart } from '../features/cart/cartSlice';
import { removeFromList } from '../features/all-events/allEventsSlice';
import _ from 'lodash';
import DayHeader from './DayHeader';
import { List } from '@mui/material';

const EventsContainer = () => {
  const { eventsList, isLoading } = useSelector((store) => store.allEvents);
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [shownEvents, setShownEvents] = useState([]);
  const [subHeaders, setSubHeaders] = useState([]);

  useEffect(() => {
    (async () => {
      await dispatch(getAllEvents());
    })();
  }, []);

  useEffect(() => {
    setSubHeaders(_(eventsList).map('date').uniq().value());
    console.log(subHeaders);
  }, [eventsList]);

  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
    dispatch(removeFromList(item._id));
  };

  return (
    <section>
      <div className='events-list'>
        <List>
          {subHeaders?.map((day) => (
            <DayHeader
              key={day}
              day={day}
              eventsList={eventsList}
              subHeaders={subHeaders}
            />
          ))}
        </List>
        {eventsList?.map((event) => (
          <div key={event._id} onClick={() => addToCartHandler(event)}>
            <p>{event.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsContainer;
