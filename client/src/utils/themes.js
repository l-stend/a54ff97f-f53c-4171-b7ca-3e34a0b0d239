import { createTheme } from '@material-ui/core/styles';

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#1F1D31',
      paper: '#0C0B13',
    },
    primary: {
      main: '#22E052',
    },
    text: {
      primary: '#9390B5',
    },
  },
});

export const lightTheme = createTheme({
  type: 'light',
  background: {
    default: '#ffffff',
    paper: '#ffffff',
  },
  palette: {
    primary: {
      main: '#AA1EC7',
    },
  },
});
