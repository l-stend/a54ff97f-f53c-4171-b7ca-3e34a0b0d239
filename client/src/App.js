import './App.css';
import EventsContainer from './components/EventsContainer';
import { getAllEvents } from './features/all-events/allEventsSlice';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material/';
import Paper from '@mui/material/Paper';
import { darkTheme, lightTheme } from './utils/themes';
import Box from '@mui/material/Box';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box>
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
      </Box>
    </ThemeProvider>
  );
}

export default App;
