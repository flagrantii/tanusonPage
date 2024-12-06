'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';

const ErrorContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
`;

export default function ErrorUI() {
  const router = useRouter();

  return (
    <ErrorContainer maxWidth="sm">
      <Typography variant="h4" color="white" gutterBottom>
        Oops! Something went wrong
      </Typography>
      <Typography color="gray" paragraph>
        We couldn't load the project details. Please try again later.
      </Typography>
      <Box display="flex" gap={2}>
        <Button 
          variant="contained" 
          onClick={() => router.push('/Port')}
        >
          Back to Projects
        </Button>
        <Button 
          variant="outlined" 
          onClick={() => window.location.reload()}
        >
          Try Again
        </Button>
      </Box>
    </ErrorContainer>
  );
} 