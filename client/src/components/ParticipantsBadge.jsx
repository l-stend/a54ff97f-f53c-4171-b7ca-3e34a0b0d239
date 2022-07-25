import React from 'react';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';

const ParticipantsBadge = ({ attending }) => {
  const calculateBadgeClass = (participants) => {
    if (participants >= 100 && participants < 500) return 'bronze';
    if (participants >= 500 && participants < 1000) return 'silver';
    if (participants >= 1000) return 'gold';
    else return '';
  };

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
            label={calculateBadgeContent(attending)}
            color='primary'
            size='small'
            sx={{ height: '3vh', width: '4vw' }}
          />
        </Tooltip>
      ) : (
        <Chip
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
