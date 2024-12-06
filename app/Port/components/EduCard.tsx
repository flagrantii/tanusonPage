'use client';

import React from 'react';
import { eduJson } from '@/data/interface';
import { Box, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import Image from 'next/image';
import { AnimatedCard } from './AnimatedCard';
import { styled } from '@mui/material/styles';
import { subtleGradient } from '@/utils/styles';

const SchoolTitle = styled(Typography)`
  ${subtleGradient}
`;

const SchoolLogo = styled(Box)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const InfoBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: gray;
  svg {
    font-size: 1.2rem;
  }
`;

export default function EduCard({ eduProps }: { eduProps: eduJson }) {
  return (
    <AnimatedCard>
      <Box display="flex" gap={3}>
        <SchoolLogo>
          <Image 
            src={eduProps.img} 
            alt={eduProps.company} 
            width={80} 
            height={80}
            style={{ objectFit: 'contain' }}
          />
        </SchoolLogo>
        
        <Box flex={1}>
          <Typography color="gray" variant="caption">
            {eduProps.date}
          </Typography>
          
          <SchoolTitle variant="h6">
            {eduProps.company}
          </SchoolTitle>
          
          <Box display="flex" flexDirection="column" gap={1} my={1}>
            <InfoBox>
              <SchoolIcon />
              <Typography variant="body2">
                {eduProps.role}
              </Typography>
            </InfoBox>
            <InfoBox>
              <LocationOnIcon />
              <Typography variant="body2">
                {eduProps.location}
              </Typography>
            </InfoBox>
          </Box>
          
          <Typography color="white" variant="body2" mt={2}>
            {eduProps.description}
          </Typography>
        </Box>
      </Box>
    </AnimatedCard>
  );
}
