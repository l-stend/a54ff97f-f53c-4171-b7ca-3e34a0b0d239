import React from 'react';
import CartCard from './CartCard';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer } from '../features/cart/cartDrawerSlice';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

const CartDrawer = () => {
  const { isDrawerOpen } = useSelector((store) => store.cartDrawer);
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <Drawer
      open={isDrawerOpen}
      sx={{ width: '50vw' }}
      item
      // xs={{ width: '100vw' }}
      // md={{ width: '50vw' }}
      // lg={{ width: '30vw' }}
      anchor='right'
      onClose={dispatch(toggleDrawer)}
      // sx={{ backgroundColor: 'background.paper' }}
      // onOpen={dispatch(toggleDrawer)}
    >
      <IconButton onClick={() => dispatch(toggleDrawer())}>
        <ArrowForwardIcon />
      </IconButton>
      <Typography>Cart</Typography>
      <Box>
        {cartItems.map((event) => (
          <CartCard event={event} />
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Button size='small' variant='outlined'>
          Clear Cart
        </Button>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
