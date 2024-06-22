import { Box, Button, Container, Typography, colors, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useRouter } from 'next/navigation';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import DownloadIcon from '@mui/icons-material/Download';
import Link from 'next/link';

export default function MainContent() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDownload = () => {
    router.push('/resume/tanuson_resume.pdf');
  }

  return (
    <>
      <Box
        component={Container}
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
      >
        <Typography variant={isMobile ? 'h5' : 'h1'} color="white" fontWeight="bold">
          Tanuson Deachaboonchana
        </Typography>
        <Typography variant={isMobile ? 'h6' : 'h5'} color="white" fontWeight="semi-bold">
          Software Engineer, FullStack Developer
        </Typography>
        <Typography variant={isMobile ? 'body1' : 'h6'} color="white" fontWeight="semi">
          CEDT student, Enthusiastic Software Developer specializing in Web Ap Development, committed to empowering
          others through innovative and user-centric digital solutions.
        </Typography>
        <Box
        display={"flex"}
        flexDirection={"row"}
        gap={3}
        marginTop={2}
        >
            <Link href="https://github.com/flagrantii" target='_blank'><GitHubIcon sx={{color:"white"}} fontSize='large'/></Link>
            <Link href="https://www.linkedin.com/in/tanuson-deachaboonchana-743a3029b/" target='_blank'><LinkedInIcon sx={{color:"white"}} fontSize='large'/></Link>
            <Link href="https://twitter.com/TanusonD10318" target='_blank'><TwitterIcon sx={{color:"white"}} fontSize='large'/></Link>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          gap={2}
          marginTop={2}
        >
          <Button
            variant="outlined"
            endIcon={<SendIcon />}
            size="large"
            sx={{
              color: colors.blue[800],
              borderColor: colors.blue[800],
              '&:hover': { backgroundColor: 'white' },
              width: 'fit-content',
              marginTop: 2,
              marginLeft: isMobile ? 'auto' : 0,
              marginRight: isMobile ? 'auto' : 0,
            }}
            onClick={() => router.push('/Port')}
          >
            See More
          </Button>

          <Button
            variant="contained"
            endIcon={<DownloadIcon />}
            size="large"
            sx={{
              color: colors.blue[50],
              borderColor: colors.blue[50],
              backgroundColor: colors.blue[800],
              '&:hover': { backgroundColor: 'white', color: colors.blue[800]},
              width: 'fit-content',
              marginTop: 2,
              marginLeft: isMobile ? 'auto' : 0,
              marginRight: isMobile ? 'auto' : 0,
            }}
            onClick={() => {handleDownload()}}
          >
            Download Resume
          </Button>
        </Box>
      </Box>
    </>
  );
}