'use client';

import { Box, Chip, Typography, IconButton } from '@mui/material';
import React from 'react';
import { ProjectDetail, webJson } from '@/data/interface';
import { AnimatedCard } from './AnimatedCard';
import { styled } from '@mui/material/styles';
import { subtleGradient } from '@/utils/styles';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import InfoIcon from '@mui/icons-material/Info';
import { useRouter } from 'next/navigation';

const CardContainer = styled(AnimatedCard)`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s ease;
  overflow: hidden;
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectTitle = styled(Typography)`
  ${subtleGradient}
  margin-bottom: 0.5rem;
`;

const ProjectImage = styled('img')`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    height: 180px;
  }
`;

const ProjectContent = styled(Box)`
  padding: ${props => props.theme.spacing(2)};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const TechStack = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing(1)};
  margin-top: auto;
  padding-top: ${props => props.theme.spacing(2)};
`;

const TechChip = styled(Chip)`
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  font-size: 0.75rem;
  height: 24px;
  
  &:hover {
    background: rgba(59, 130, 246, 0.2);
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

export default function WebCard({ webProps }: { webProps: ProjectDetail }) {
  const router = useRouter();

  return (
    <CardContainer>
      <ProjectImage 
        src={webProps.background} 
        alt={webProps.title}
        onClick={() => router.push(`/projects/${webProps.id}`)}
        style={{ cursor: 'pointer' }}
      />
      
      <ProjectContent>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
          <Box>
            <ProjectTitle variant="h6">
              {webProps.title}
            </ProjectTitle>
            <Typography variant="caption" color="gray">
              {webProps.timeline}
            </Typography>
          </Box>
          <Chip
            label={webProps.status}
            size="small"
            color={webProps.status === 'Completed' ? 'success' : 'primary'}
          />
        </Box>

        <Typography 
          color="white" 
          mb={3} 
          sx={{ 
            display: '-webkit-box',
            WebkitLineClamp: { xs: 2, sm: 3 },
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize: { xs: '0.875rem', sm: '1rem' },
            lineHeight: { xs: 1.4, sm: 1.6 },
            maxHeight: { xs: '2.8em', sm: '4.8em' },
          }}
        >
          {webProps.description}
        </Typography>

        <TechStack>
          {webProps.technologies?.map((tech, index) => (
            <TechChip key={index} label={tech} />
          ))}
        </TechStack>

        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Typography variant="body2" color="primary.light">
            {webProps.role}
          </Typography>
          
          <Box display="flex" gap={1}>
            <ActionButton 
              size="small"
              onClick={() => router.push(`/projects/${webProps.id}`)}
            >
              <InfoIcon sx={{ color: 'white' }} />
            </ActionButton>
            
            {webProps.githubUrl && (
              <Link href={webProps.githubUrl} target="_blank" passHref>
                <ActionButton size="small">
                  <GitHubIcon sx={{ color: 'white' }} />
                </ActionButton>
              </Link>
            )}
            
            {webProps.demoUrl && (
              <Link href={webProps.demoUrl} target="_blank" passHref>
                <ActionButton size="small">
                  <LaunchIcon sx={{ color: 'white' }} />
                </ActionButton>
              </Link>
            )}
          </Box>
        </Box>
      </ProjectContent>
    </CardContainer>
  );
}
