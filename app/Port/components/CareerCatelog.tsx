'use client';

import React from 'react';
import { career } from '@/data/career';
import CareerCard from './CareerCard';
import { Box, styled } from '@mui/material';
import { scaleIn } from '@/utils/animations';

const TimelineContainer = styled(Box)`
  position: relative;
  padding-left: 32px;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, #3b82f6 0%, rgba(59, 130, 246, 0.1) 100%);
  }
`;

const TimelineItem = styled(Box)<{ delay: number }>`
  position: relative;
  margin-bottom: 24px;
  animation: ${scaleIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.delay}ms;
  opacity: 0;
  
  &::before {
    content: '';
    position: absolute;
    left: -36px;
    top: 24px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #3b82f6;
    border: 2px solid #000;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
  }
`;

export default function CareerCatelog() {
  return (
    <TimelineContainer>
      {career.map((careerItem, index) => (
        <TimelineItem key={careerItem.id} delay={index * 150}>
          <CareerCard careerProps={careerItem} />
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
}
