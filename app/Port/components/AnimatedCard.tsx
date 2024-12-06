'use client';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { fadeIn } from '@/utils/animations';

export const AnimatedCard = styled(Box)`
  animation: ${fadeIn} 0.8s ease-out;
  transition: all 0.3s ease-in-out;
  background: rgba(17, 25, 40, 0.75);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 1.5rem;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(59, 130, 246, 0.5);
  }
`; 