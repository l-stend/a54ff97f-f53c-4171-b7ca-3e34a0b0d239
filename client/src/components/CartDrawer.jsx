import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer } from '../features/cart/cartDrawerSlice';
import { clearCart } from '../features/cart/cartSlice';
import { restoreList } from '../features/all-events/allEventsSlice';
import CartCard from './CartCard';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';

const CartDrawer = () => {
  const { isDrawerOpen } = useSelector((store) => store.cartDrawer);
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(restoreList());
    dispatch(toggleDrawer());
  };

  return (
    <Drawer open={isDrawerOpen} sx={{ width: '50vw' }} anchor='right'>
      {/* ////////// HEADER ///////// */}
      <Box
        id='drawer-header'
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'baseline',
          marginBottom: '2vh',
          paddingTop: '1vh',
        }}
      >
        <Typography
          id='drawer-title'
          color='primary'
          variant='h6'
          component='h3'
        >
          YOUR CART
        </Typography>
        <Tooltip title='Close cart ' placement='left' arrow>
          <IconButton
            id='drawer-close-button'
            onClick={() => dispatch(toggleDrawer())}
            sx={{
              border: '1px solid',
              borderColor: 'primary.main',
              borderRadius: '50%',
            }}
          >
            <ArrowForwardIcon color='primary' fontSize='small' />
          </IconButton>
        </Tooltip>
      </Box>
      {/* ////////// CART ITEMS ///////// */}
      <Box id='cart-items-list'>
        {cartItems.map((event) => (
          <CartCard id='cart-item-cart' key={event._id} event={event} />
        ))}
      </Box>
      <Divider />
      {/* ////////// CLEAR CART BUTTON ///////// */}
      <Box
        id='drawer-clear-button-wrapper'
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '1.5vh',
        }}
      >
        <Button
          id='drawer-clear-button'
          onClick={() => handleClearCart()}
          size='small'
          variant='outlined'
          sx={{ border: 'solid 2px' }}
        >
          Clear Cart
        </Button>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
