'use client';

import React from 'react';
import { careerJson } from '@/data/interface';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from 'next/image';
import { AnimatedCard } from './AnimatedCard';
import { styled } from '@mui/material/styles';
import { subtleGradient } from '@/utils/styles';

const CompanyTitle = styled(Typography)`
  ${subtleGradient}
`;

const CompanyLogo = styled(Box)`
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

export default function CareerCard({ careerProps }: { careerProps: careerJson }) {
  return (
    <AnimatedCard>
      <Box display="flex" gap={3}>
        <CompanyLogo>
          <Image 
            src={careerProps.img} 
            alt={careerProps.company} 
            width={70} 
            height={70}
            style={{ objectFit: 'contain' }}
          />
        </CompanyLogo>
        
        <Box flex={1}>
          <Typography color="gray" variant="caption">
            {careerProps.date}
          </Typography>
          
          <CompanyTitle variant="h6">
            {careerProps.company}
          </CompanyTitle>
          
          <Box display="flex" alignItems="center" gap={2} my={1}>
            <Typography color="primary.light" fontWeight="medium">
              {careerProps.role}
            </Typography>
            <Box display="flex" alignItems="center" gap={0.5}>
              <LocationOnIcon sx={{ color: 'gray', fontSize: 18 }} />
              <Typography color="gray" variant="body2">
                {careerProps.location}
              </Typography>
            </Box>
          </Box>
          
          <Typography color="white" variant="body2">
            {careerProps.description}
          </Typography>
          
          {careerProps.href && (
            <MuiLink 
              href={careerProps.href} 
              target="_blank" 
              sx={{ 
                display: 'inline-block',
                mt: 2,
                color: 'primary.light',
                '&:hover': { color: 'primary.main' }
              }}
            >
              Visit Company →
            </MuiLink>
          )}
        </Box>
      </Box>
    </AnimatedCard>
  );
}
