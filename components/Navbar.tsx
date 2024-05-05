"use client"
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import HubIcon from '@mui/icons-material/Hub';
import NavbarRoute from './NavbarRoute';

export default function Navbar() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = document.documentElement.scrollTop;
      const calculatedOpacity = 1 - scrollPosition / 500;
      const usingOpacity = Math.max(0, Math.min(1, calculatedOpacity));
      setOpacity(usingOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Box
        padding={3}
        display={"flex"}
        gap={4}
        position={"fixed"}
        width={"100%"}
        height={"10vh"}
        alignItems={"center"}
        top={0}
        sx={{ inset: 0, opacity }}
      >
        <Box display={"flex"} gap={2}>
          <HubIcon sx={{ color: "blue" }} fontSize='large' />
          <Typography variant="h6" color={"white"} fontWeight={"bold"} fontSize={"h6"}>
            Tanuson Deachaboonchana
          </Typography>
        </Box>
        <NavbarRoute />
      </Box>
    </>
  );
}