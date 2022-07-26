import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { switchTheme } from '../features/theme/themeSlice';
import { filterList } from '../features/all-events/allEventsSlice';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';
import Autocomplete from '@mui/material/Autocomplete';

const Navbar = () => {
  const { darkMode } = useSelector((store) => store.theme);
  const { eventsList } = useSelector((store) => store.allEvents);
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
            }
          : {
              borderRadius: '5px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }
      }
    >
      <IconButton
        // color='primary'
        onClick={() => dispatch(switchTheme())}
        sx={
          darkMode
            ? {
                color: 'primary.main',
                border: 'solid 1px',
                borderRadius: '100px',
                borderColor: 'primary.main',
                width: '3vw',
              }
            : {
                color: '#ffffff',
                border: 'solid 1px',
                borderRadius: '100px',
                borderColor: '#ffffff',
                width: '3vw',
              }
        }
      >
        {darkMode ? (
          <WbSunnyOutlinedIcon fontSize='medium' />
        ) : (
          <Brightness2OutlinedIcon fontSize='medium' />
        )}
      </IconButton>
      <Autocomplete
        noOptions
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
      <Typography component='h3' variant='h3' color={darkMode && 'primary'}>
        Suca
      </Typography>
    </AppBar>
  );
};

export default Navbar;
