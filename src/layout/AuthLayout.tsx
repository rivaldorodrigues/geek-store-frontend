import React, { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Logo from './Logo';

type AuthLayoutProps = {
  children?: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <HeaderStyle>
      <Logo/>
      <Typography
        variant='body2'
        sx={{
          display: { xs: 'none', sm: 'block' },
          mt: { md: -2 },
        }}
      >
        {children}
      </Typography>
    </HeaderStyle>
  );
};

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 5, 0),
  },
}));
