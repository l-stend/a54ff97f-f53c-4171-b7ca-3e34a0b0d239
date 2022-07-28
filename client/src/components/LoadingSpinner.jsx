import React from 'react';
import './styles/LoadingSpinner.css';
import { useSelector } from 'react-redux';
import Box from '@mui/system/Box';

const LoadingSpinner = () => {
  const { darkMode } = useSelector((store) => store.theme);
  return (
    <Box
      id='spinner-wrapper'
      style={{
        marginTop: '40vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <div className={darkMode ? 'chaoticOrbit' : 'chaoticOrbitLight'}></div>
    </Box>
  );
};

export default LoadingSpinner;
