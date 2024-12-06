'use client';

import React from 'react';
import { education } from '@/data/edu';
import EduCard from './EduCard';
import { Box, styled } from '@mui/material';
import { scaleIn } from '@/utils/animations';

const EduContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const EduItem = styled(Box)<{ delay: number; isEven: boolean }>`
  animation: ${scaleIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.delay}ms;
  opacity: 0;
  transform: translateX(${props => props.isEven ? '20px' : '-20px'});
  margin-left: ${props => props.isEven ? '5%' : '0'};
  margin-right: ${props => props.isEven ? '0' : '5%'};
  
  @media (max-width: 600px) {
    margin: 0;
    transform: none;
  }
`;

export default function EduCatelog() {
  return (
    <EduContainer>
      {education.map((edu, index) => (
        <EduItem 
          key={edu.id} 
          delay={index * 200}
          isEven={index % 2 === 0}
        >
          <EduCard eduProps={edu} />
        </EduItem>
      ))}
    </EduContainer>
  );
}
