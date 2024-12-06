'use client';

import React from 'react';
import { Box, Container, Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';

const LoadingContainer = styled(Container)`
  padding-top: 100px;
  padding-bottom: 50px;
`;

const LoadingSection = styled(Box)`
  background: rgba(17, 25, 40, 0.75);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 2rem;
  margin-bottom: 2rem;
`;

export default function LoadingUI() {
  return (
    <LoadingContainer maxWidth="lg">
      <LoadingSection>
        <Skeleton variant="text" width="60%" height={60} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
        <Box display="flex" gap={2} mb={3}>
          <Skeleton variant="rounded" width={100} height={32} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
          <Skeleton variant="rounded" width={100} height={32} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
        </Box>
        <Skeleton variant="rectangular" height={200} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
      </LoadingSection>
    </LoadingContainer>
  );
} 