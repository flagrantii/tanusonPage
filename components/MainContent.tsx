import { Box, Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { fadeIn } from '@/utils/animations';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import DownloadIcon from '@mui/icons-material/Download';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { subtleGradient } from '@/utils/styles';

const AnimatedBox = styled(Box)`
  animation: ${fadeIn} 0.8s ease-out;
`;

const SocialIcon = styled(Box)`
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-3px);
  }
`;

const StyledButton = styled(Button)(({ theme }) => ({
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[4],
  },
}));

export default function MainContent() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDownload = () => {
    router.push('/resume/Tanuson_Resume_September24.pdf');
  }

  return (
    <AnimatedBox
      component={Container}
      position="absolute"
      display="flex"
      flexDirection="column"
      gap={3}
      top={isMobile ? '30%' : '20%'}
      width={isMobile ? '80%' : '50%'}
      marginLeft={isMobile ? 'auto' : 3}
      sx={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)',
        padding: 4,
        borderRadius: 2,
        backdropFilter: 'blur(8px)',
      }}
    >
      <Typography 
        variant={isMobile ? 'h5' : 'h1'} 
        sx={{
          ...subtleGradient,
          fontSize: isMobile ? '2rem' : '3.5rem',
        }}
      >
        Tanuson Deachaboonchana
      </Typography>
      <Typography variant={isMobile ? 'h6' : 'h5'} color="white" fontWeight="semi-bold">
        Software Engineer, FullStack Developer
      </Typography>
      <Typography variant={isMobile ? 'body1' : 'h6'} color="white" fontWeight="semi">
        CEDT student, Enthusiastic Software Developer specializing in Web App Development, committed to empowering
        others through innovative and user-centric digital solutions.
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        gap={3}
        marginTop={2}
      >
        <SocialIcon>
          <Link href="https://github.com/flagrantii" target='_blank'>
            <GitHubIcon sx={{color:"white", fontSize: 32}} />
          </Link>
        </SocialIcon>
        <SocialIcon>
          <Link href="https://www.linkedin.com/in/tanuson-deachaboonchana-743a3029b/" target='_blank'>
            <LinkedInIcon sx={{color:"white", fontSize: 32}} />
          </Link>
        </SocialIcon>
        <SocialIcon>
          <Link href="https://twitter.com/TanusonD10318" target='_blank'>
            <TwitterIcon sx={{color:"white", fontSize: 32}} />
          </Link>
        </SocialIcon>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        gap={2}
        marginTop={2}
      >
        <StyledButton
          variant="outlined"
          endIcon={<SendIcon />}
          size="large"
          sx={{
            color: 'primary.main',
            borderColor: 'primary.main',
            '&:hover': { 
              backgroundColor: 'primary.main',
              color: 'white',
            },
          }}
          onClick={() => router.push('/Port')}
        >
          See More
        </StyledButton>

        <StyledButton
          variant="contained"
          endIcon={<DownloadIcon />}
          size="large"
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            '&:hover': { 
              backgroundColor: 'primary.dark',
            },
          }}
          onClick={handleDownload}
        >
          Download Resume
        </StyledButton>
      </Box>
    </AnimatedBox>
  );
}