import React from 'react';
import { useStyles } from '../utils/classes';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';

const ParticipantsBadge = ({ attending }) => {
  const classes = useStyles();

  const calculateBadgeContent = (participants) => {
    if (participants >= 100 && participants < 500) return '100+';
    if (participants >= 500 && participants < 1000) return '500+';
    if (participants >= 1000) return '1000+';
    else return '';
  };

  return (
    <>
      {attending >= 100 ? (
        <Tooltip
          title={`${calculateBadgeContent(attending)} already attending`}
          placement='right'
          arrow
        >
          <Chip
            className={classes.participantsBadge}
            label={calculateBadgeContent(attending)}
            color='primary'
            size='small'
            sx={{ height: '3vh' }}
          />
        </Tooltip>
      ) : (
        <Chip
          className={classes.participantsBadge}
          label={calculateBadgeContent(attending)}
          color='primary'
          variant='outlined'
          size='small'
          sx={{ height: '3vh', width: '4vw' }}
        />
      )}
    </>
  );
};

export default ParticipantsBadge;
