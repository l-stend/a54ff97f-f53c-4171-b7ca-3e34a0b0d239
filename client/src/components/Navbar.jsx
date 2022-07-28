import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from '../utils/classes';
import { switchTheme } from '../features/theme/themeSlice';
import { toggleDrawer } from '../features/cart/cartDrawerSlice';
import { filterList } from '../features/all-events/allEventsSlice';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';
import Autocomplete from '@mui/material/Autocomplete';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Badge from '@mui/material/Badge';

const Navbar = () => {
  const { darkMode } = useSelector((store) => store.theme);
  const { eventsList } = useSelector((store) => store.allEvents);
  const { cartItems } = useSelector((store) => store.cart);
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <AppBar
      sx={
        darkMode
          ? {
              backgroundColor: 'background.paper',
              borderRadius: '5px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              paddingY: '.7vh',
            }
          : {
              borderRadius: '5px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              paddingY: '.7vh',
            }
      }
    >
      {/* //////// THEME BUTTON //////// */}
      <IconButton
        id='navbar-theme-button'
        onClick={() => dispatch(switchTheme())}
        className={classes.navButton}
        sx={
          darkMode
            ? {
                color: 'primary.main',
                border: 'solid 1px',
                borderRadius: '100px',
                borderColor: 'primary.main',
              }
            : {
                color: '#ffffff',
                border: 'solid 1px',
                borderRadius: '100px',
                borderColor: '#ffffff',
              }
        }
      >
        {darkMode ? (
          <WbSunnyOutlinedIcon fontSize='medium' />
        ) : (
          <Brightness2OutlinedIcon fontSize='medium' />
        )}
      </IconButton>
      {/* //////// SEARCH BAR //////// */}
      <Autocomplete
        id='navbar-search-bar'
        sx={{ width: '40vw' }}
        renderInput={(params) => (
          <TextField {...params} label='Search your event' />
        )}
        options={eventsList}
        getOptionLabel={(event) => event.title}
        renderOption={(props, event) => (
          <Box component='li' {...props} key={event._id}>
            {event.title}
          </Box>
        )}
        onInputChange={(e) => dispatch(filterList(e.target.value))}
      />
      {/* //////// CART BUTTON //////// */}
      <Badge
        id='navbar-cart-button-badge'
        color='primary'
        overlap='circular'
        badgeContent={cartItems.length}
      >
        <IconButton
          id='navbar-cart-button'
          onClick={() => dispatch(toggleDrawer())}
          className={classes.navButton}
          sx={
            darkMode
              ? {
                  color: 'primary.main',
                  border: 'solid 1px',
                  borderRadius: '100px',
                  borderColor: 'primary.main',
                }
              : {
                  color: '#ffffff',
                  border: 'solid 1px',
                  borderRadius: '100px',
                  borderColor: '#ffffff',
                }
          }
        >
          {<ShoppingCartCheckoutIcon />}
        </IconButton>
      </Badge>
    </AppBar>
  );
};

export default Navbar;
