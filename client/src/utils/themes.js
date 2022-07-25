import { createMuiTheme } from '@material-ui/core/styles';

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#1F1D31',
      paper: '#0C0B13',
    },
    // primary: {darkMode ? 'background-image: linear-gradient(to right top, #22e052, #31e04c, #3ce046, #45df3f, #4edf38)' :  'linear-gradient(to right top, #bf22e0, #b523d4, #ab24c8, #a224bd, #9824b1)'},
    primary: {
      main: '#22E052',
    },
    text: {
      primary: '#9390B5',
    },
  },
});
// export const darkTheme = createMuiTheme({
//   palette: {
//     background: {
//       default: darkMode ? '#0C0B13' : '#ffffff',
//     },
//     // primary: {darkMode ? 'background-image: linear-gradient(to right top, #22e052, #31e04c, #3ce046, #45df3f, #4edf38)' :  'linear-gradient(to right top, #bf22e0, #b523d4, #ab24c8, #a224bd, #9824b1)'},
//     primary: {
//       main: darkMode ? '#22E052' : '#9824B1',
//     },
//   },
// });
export const lightTheme = createMuiTheme({
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
