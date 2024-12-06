'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const StatContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const StatItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

interface ProjectStatsProps {
  timeline: string;
  role: string;
  techCount: number;
  features: number;
}

export default function ProjectStats({ timeline, role, techCount, features }: ProjectStatsProps) {
  const stats = [
    { label: 'Timeline', value: timeline },
    { label: 'Role', value: role },
    { label: 'Technologies', value: techCount },
    { label: 'Key Features', value: features },
  ];

  return (
    <StatContainer>
      {stats.map((stat, index) => (
        <StatItem
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Typography variant="h4" color="primary.light" fontWeight="bold">
            {typeof stat.value === 'number' ? stat.value : stat.value.split(' ')[0]}
          </Typography>
          <Typography variant="body2" color="gray">
            {stat.label}
          </Typography>
        </StatItem>
      ))}
    </StatContainer>
  );
} 