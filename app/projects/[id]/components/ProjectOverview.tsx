'use client';

import React from 'react';
import { Box, Typography, Chip, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ProjectDetail } from '@/data/interface';

const OverviewContainer = styled(Box)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: ${props => props.theme.spacing(3)};
  margin: 0 auto ${props => props.theme.spacing(4)};
  max-width: 800x;
  width: 100%;

  @media (max-width: 600px) {
    padding: ${props => props.theme.spacing(2)};
    margin-bottom: ${props => props.theme.spacing(2)};
  }
`;

const Description = styled(Typography)`
  color: rgba(255, 255, 255, 0.9);
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  line-height: 1.8;
  margin: ${props => props.theme.spacing(3)} 0;
  
  @media (max-width: 600px) {
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

interface ProjectOverviewProps {
  project: ProjectDetail;
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <OverviewContainer>
      <Typography 
        variant="h4" 
        color="primary.light"
        sx={{
          fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
          fontWeight: 600,
          mb: 2
        }}
      >
        {project.shortDescription}
      </Typography>

      <Stack 
        direction={{ xs: 'column', sm: 'row' }} 
        spacing={2} 
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        mb={2}
      >
        <Chip 
          label={project.status} 
          color={project.status === 'Completed' ? 'success' : 'primary'}
          size="small"
        />
        <Typography 
          color="gray" 
          variant="body2"
          sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }}
        >
          {project.timeline}
        </Typography>
      </Stack>

      <Description variant="body1">
        {project.longDescription || project.description}
      </Description>

    </OverviewContainer>
  );
} 