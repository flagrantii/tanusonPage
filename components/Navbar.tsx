"use client"
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import NavbarRoute from './NavbarRoute';
import { fadeIn } from '@/utils/animations';
import { subtleGradient } from '@/utils/styles';

const AnimatedNav = styled(Box)`
  animation: ${fadeIn} 0.5s ease-out;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease-in-out;
`;

const LogoContainer = styled(Box)`
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export default function Navbar() {
  const [opacity, setOpacity] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const calculatedOpacity = 1 - scrollPosition / 500;
      const usingOpacity = Math.max(0, Math.min(1, calculatedOpacity));
      setOpacity(usingOpacity);
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatedNav
      padding={3}
      display="flex"
      gap={isMobile ? 1 : 2}
      position="fixed"
      width="100%"
      height="10vh"
      alignItems="center"
      top={0}
      sx={{
        background: isScrolled 
          ? 'rgba(0,0,0,0.8)' 
          : 'transparent',
        boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
        opacity,
      }}
    >
      <LogoContainer display="flex" gap={2} onClick={() => router.push("/")}>
        <Image 
          src="/icon/connection.png" 
          alt="logo" 
          width={30} 
          height={30}
        />
        <Typography 
          variant="h6" 
          fontWeight="bold"
          sx={subtleGradient}
        >
          Tanuson Deachaboonchana
        </Typography>
      </LogoContainer>
      <NavbarRoute />
    </AnimatedNav>
  );
}