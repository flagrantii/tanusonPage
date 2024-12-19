import { Box, Button, Container, Typography, colors, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useRouter } from 'next/navigation';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import DownloadIcon from '@mui/icons-material/Download';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PiXCircleDuotone } from 'react-icons/pi';

const MotionBox = motion(Box as any);
const MotionButton = motion(Button as any);
const MotionTypography = motion(Typography as any);

export default function MainContent() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDownload = () => {
    router.push('/resume/Tanuson_Resume_Dec24_2.pdf');
  }

  return (
    <MotionBox
      component={Container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      position="absolute"
      display="flex"
      flexDirection="column"
      gap={2}
      top={isMobile ? '30%' : '20%'}
      width={isMobile ? '80%' : '50%'}
      marginLeft={isMobile ? 'auto' : 3}
      alignItems={isMobile ? 'center' : 'flex-start'}
      textAlign={isMobile ? 'center' : 'left'}
      justifyItems={isMobile ? 'center' : 'flex-start'}
      justifyContent={isMobile ? 'center' : 'flex-start'}
      maxWidth={isMobile ? '100%' : '50%'}
      left={isMobile ? 40 : 0}
      sx={{
        perspective: '1000px',
      }}
    >
      <MotionTypography 
        variant={isMobile ? 'h5' : 'h1'} 
        color="white" 
        fontWeight="bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        Tanuson Deachaboonchana
      </MotionTypography>

      <MotionTypography 
        variant={isMobile ? 'h6' : 'h5'} 
        color="white" 
        fontWeight="semi-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Software Engineer, FullStack Developer
      </MotionTypography>

      <MotionTypography 
        variant={isMobile ? 'body1' : 'h6'} 
        color="white" 
        fontWeight="semi"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        CEDT student, Enthusiastic Software Developer specializing in Web App Development, committed to empowering
        others through innovative and user-centric digital solutions.
      </MotionTypography>

      <MotionBox
        display="flex"
        flexDirection="row"
        gap={3}
        marginTop={2}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {[
          { href: "https://github.com/flagrantii", Icon: GitHubIcon },
          { href: "https://www.linkedin.com/in/tanuson-deachaboonchana-743a3029b/", Icon: LinkedInIcon },
          { href: "https://twitter.com/TanusonD10318", Icon: XIcon }
        ].map(({ href, Icon }, index) => (
          <motion.div
            key={href}
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href={href} target='_blank'>
              <Icon 
                sx={{
                  color: "white",
                  fontSize: 'large',
                  filter: 'drop-shadow(0px 0px 8px rgba(255,255,255,0.5))'
                }}
              />
            </Link>
          </motion.div>
        ))}
      </MotionBox>

      <MotionBox
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        gap={2}
        marginTop={2}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <MotionButton
          variant="outlined"
          endIcon={<SendIcon />}
          size="large"
          whileHover={{ 
            scale: 1.05,
            rotateX: 10,
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          sx={{
            color: colors.blue[800],
            borderColor: colors.blue[800],
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            '&:hover': { 
              backgroundColor: 'rgba(255,255,255,0.2)',
              borderColor: colors.blue[600],
            },
            width: isMobile ? '100%' : 'fit-content',
            marginTop: 2,
            marginLeft: isMobile ? 'auto' : 0,
            marginRight: isMobile ? 'auto' : 0,
          }}
          onClick={() => router.push('/Port')}
        >
          See More
        </MotionButton>

        <MotionButton
          variant="contained"
          endIcon={<DownloadIcon />}
          size="large"
          whileHover={{ 
            scale: 1.05,
            rotateX: 10,
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          sx={{
            color: colors.blue[50],
            backgroundColor: colors.blue[800],
            '&:hover': { 
              backgroundColor: colors.blue[700],
            },
            width: isMobile ? '100%' : 'fit-content',
            marginTop: 2,
            marginLeft: isMobile ? 'auto' : 0,
            marginRight: isMobile ? 'auto' : 0,
          }}
          onClick={handleDownload}
        >
          Download Resume
        </MotionButton>
      </MotionBox>
    </MotionBox>
  );
}