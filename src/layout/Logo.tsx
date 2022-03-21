import React from 'react';
import { Box } from '@mui/material';

export default function Logo() {
  return (
    <Box component='img' src='/static/logo.svg' sx={{ width: 40, height: 40 }} />
  );
}
