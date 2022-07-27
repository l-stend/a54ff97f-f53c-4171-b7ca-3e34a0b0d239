import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  smallCard: {
    width: '38vw',
    [theme.breakpoints.down('md')]: {
      width: '100vw',
    },
    [theme.breakpoints.up('lg')]: {
      width: '48vw',
    },
    [theme.breakpoints.up('md')]: {
      width: '38vw',
    },
  },

  smallCardImage: {
    maxWidth: '25vh',
    [theme.breakpoints.only('xs')]: {
      maxWidth: '15vh',
      flex: '3',
    },
  },

  navButton: {
    width: '3vw',
    [theme.breakpoints.only('xs')]: {
      width: '11vw',
    },
  },

  participantsBadge: {
    width: '4vw',
    [theme.breakpoints.only('xs')]: {
      width: '15vw',
    },
  },
}));
