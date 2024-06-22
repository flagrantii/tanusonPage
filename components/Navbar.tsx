"use client"
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import HubIcon from '@mui/icons-material/Hub';
import NavbarRoute from './NavbarRoute';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const router = useRouter();

  return (
    <>
      <Box
        padding={3}
        display={"flex"}
        gap={isMobile ? 1 : 2}
        position={"fixed"}
        width={"100%"}
        height={"10vh"}
        alignItems={"center"}
        top={0}
        sx={{ inset: 0, opacity }}
      >
        
            <Box display={"flex"} gap={2}>
                <button title='' onClick={() => router.push("/")}>
                    <Image src="/icon/connection.png" alt="logo" width={30} height={30} />
                </button>
                <Typography variant="h6" color={"white"} fontWeight={"bold"}>
                    Tanuson Deachaboonchana
                </Typography>
            </Box>
        
        <NavbarRoute />
      </Box>
    </>
  );
}