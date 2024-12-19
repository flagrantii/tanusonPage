"use client"
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, IconButton, Drawer, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { fadeIn } from '@/utils/animations';
import { subtleGradient } from '@/utils/styles';

const AnimatedNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease-in-out;
`;

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  height: 70px;
`;

const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const NavLinks = styled(Box)`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)<{ active?: boolean }>`
  color: ${props => props.active ? '#3b82f6' : 'white'};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background: #3b82f6;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenu = styled(Box)`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 100%;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    padding: 2rem;
  }
`;

const MobileNavLink = styled(motion.a)<{ active?: boolean }>`
  color: ${props => props.active ? '#3b82f6' : 'white'};
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 1rem 0;
  display: block;
  text-align: center;
`;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMediaQuery('(max-width:768px)');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Portfolio', path: '/Port' },
    { label: 'About', path: '/Info' },
    { label: 'Contact', path: '/Contact' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatedNav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      style={{
        background: isScrolled ? 'rgba(0,0,0,0.8)' : 'transparent',
        boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <NavContainer maxWidth="xl">
        <LogoContainer
          onClick={() => router.push('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image 
            src="/icon/connection.png" 
            alt="logo" 
            width={30} 
            height={30}
          />
          <Typography 
            variant="h6" 
            sx={subtleGradient}
          >
            Tanuson
          </Typography>
        </LogoContainer>

        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              onClick={() => router.push(item.path)}
              active={pathname === item.path}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>

        <MobileMenu>
          <IconButton 
            onClick={() => setIsMobileMenuOpen(true)}
            sx={{ color: 'white' }}
          >
            <MenuIcon />
          </IconButton>
        </MobileMenu>

        <MobileDrawer
          anchor="right"
          open={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <Box display="flex" justifyContent="flex-end" mb={4}>
            <IconButton 
              onClick={() => setIsMobileMenuOpen(false)}
              sx={{ color: 'white' }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <AnimatePresence>
            {navItems.map((item, index) => (
              <MobileNavLink
                key={item.path}
                onClick={() => {
                  router.push(item.path);
                  setIsMobileMenuOpen(false);
                }}
                active={pathname === item.path}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </MobileNavLink>
            ))}
          </AnimatePresence>
        </MobileDrawer>
      </NavContainer>
    </AnimatedNav>
  );
}