import { Box, Button, Container, Typography, colors, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useRouter } from 'next/navigation';

export default function MainContent() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box
        component={Container}
        position="absolute"
        display="flex"
        flexDirection="column"
        gap={2}
        top="20%"
        width={isMobile ? '80%' : '50%'}
        marginLeft={isMobile ? 'auto' : 3}
        alignItems={isMobile ? 'center' : 'flex-start'}
        textAlign={isMobile ? 'center' : 'left'}
        justifyItems={isMobile ? 'center' : 'flex-start'}
        
      >
        <Typography variant={isMobile ? 'h5' : 'h1'} color="white" fontWeight="bold">
          Tanuson Deachaboonchana
        </Typography>
        <Typography variant={isMobile ? 'h5' : 'h4'} color="white" fontWeight="semi-bold">
          Software Engineer, FullStack Developer
        </Typography>
        <Typography variant={isMobile ? 'body1' : 'h6'} color="white" fontWeight="semi">
          CEDT student, Enthusiastic Software Developer specializing in Web Ap Development, committed to empowering
          others through innovative and user-centric digital solutions.
        </Typography>
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
      </Box>
    </>
  );
}