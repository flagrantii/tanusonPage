'use client';

import { Box, Typography } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/navigation'
import { styled } from '@mui/material/styles';

const NavItem = styled(Typography)`
  position: relative;
  color: white;
  cursor: pointer;
  padding: 4px 8px;
  transition: all 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${props => props.theme.palette.primary.main};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${props => props.theme.palette.primary.light};
    &:after {
      width: 100%;
    }
  }
`;

export default function NavbarRoute() {
    const router = useRouter()
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={4}
            ml="auto"
            mr={4}
        >
            <NavItem onClick={() => router.push('/')}>Home</NavItem>
            <NavItem onClick={() => router.push('/Port')}>Port</NavItem>
            <NavItem onClick={() => router.push('/Info')}>Info</NavItem>
        </Box>
    )
}
