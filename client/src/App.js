import './App.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, EventsContainer } from './components';
// import EventsContainer from './components/EventsContainer';
import { getAllEvents } from './features/all-events/allEventsSlice';
import { switchTheme } from './features/theme/themeSlice';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material/';
import Paper from '@mui/material/Paper';
import { darkTheme, lightTheme } from './utils/themes';
import Box from '@mui/material/Box';
import { CartDrawer } from './components';

function App() {
  const { darkMode } = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <button onClick={() => dispatch(switchTheme())}> theme test</button>
      <CssBaseline />
      <Box>
        <Navbar />
        <EventsContainer />
        <ToastContainer
          position='bottom-center'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme='dark'
        />
        <CartDrawer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
