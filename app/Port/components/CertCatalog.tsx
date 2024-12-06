'use client';

import React from 'react';
import { cert } from '@/data/cert';
import CertCard from './CertCard';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { scaleIn } from '@/utils/animations';

const ScrollContainer = styled(Box)`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  padding: 16px 0;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }
`;

const CertContainer = styled(Box)<{ delay: number }>`
  animation: ${scaleIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.delay}ms;
  opacity: 0;
  flex: 0 0 auto;
  width: 100%;
  scroll-snap-align: start;
  
  @media (min-width: 600px) {
    width: calc(50% - 12px);
  }
`;

export default function CertCatalog() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ScrollContainer>
      {cert.map((certItem, index) => (
        <CertContainer key={certItem.id} delay={index * 100}>
          <CertCard certProps={certItem} />
        </CertContainer>
      ))}
    </ScrollContainer>
  );
}
