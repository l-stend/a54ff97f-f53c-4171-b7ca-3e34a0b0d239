import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, EventsContainer, CartDrawer } from './components';
import { ToastContainer } from 'react-toastify';
import { switchTheme } from './features/theme/themeSlice';
import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material/';
import { darkTheme, lightTheme } from './utils/themes';
import Box from '@mui/material/Box';

function App() {
  const { darkMode } = useSelector((store) => store.theme);
  const dispatch = useDispatch();

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
          theme={darkMode ? 'dark' : 'light'}
        />
        <CartDrawer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
