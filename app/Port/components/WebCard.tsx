'use client';

import { Box, Chip, Typography, IconButton } from '@mui/material';
import React from 'react';
import { webJson } from '@/data/interface';
import { AnimatedCard } from './AnimatedCard';
import { styled } from '@mui/material/styles';
import { subtleGradient } from '@/utils/styles';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import InfoIcon from '@mui/icons-material/Info';
import { useRouter } from 'next/navigation';

const ProjectTitle = styled(Typography)`
  ${subtleGradient}
  margin-bottom: 0.5rem;
`;

const ProjectImage = styled('img')`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const ActionButton = styled(IconButton)`
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

export default function WebCard({ webProps }: { webProps: webJson }) {
  const router = useRouter();

  return (
    <AnimatedCard>
      <ProjectImage 
        src={webProps.author.imageUrl} 
        alt={webProps.title}
        onClick={() => router.push(`/projects/${webProps.id}`)}
        style={{ cursor: 'pointer' }}
      />
      
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
        <Box>
          <ProjectTitle variant="h6">
            {webProps.title}
          </ProjectTitle>
          <Typography variant="caption" color="gray">
            {webProps.date}
          </Typography>
        </Box>
        <Chip
          label={webProps.category.title}
          size="small"
          color={webProps.category.title === 'Completed' ? 'success' : 'primary'}
        />
      </Box>

      <Typography color="white" mb={3} sx={{ 
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}>
        {webProps.description}
      </Typography>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="body2" color="primary.light">
          {webProps.author.role}
        </Typography>
        
        <Box display="flex" gap={1}>
          <ActionButton 
            size="small"
            onClick={() => router.push(`/projects/${webProps.id}`)}
          >
            <InfoIcon sx={{ color: 'white' }} />
          </ActionButton>
          
          <Link href={webProps.href} target="_blank" passHref>
            <ActionButton size="small">
              <GitHubIcon sx={{ color: 'white' }} />
            </ActionButton>
          </Link>
          
          {webProps.category.href && (
            <Link href={webProps.category.href} target="_blank" passHref>
              <ActionButton size="small">
                <LaunchIcon sx={{ color: 'white' }} />
              </ActionButton>
            </Link>
          )}
        </Box>
      </Box>
    </AnimatedCard>
  );
}
