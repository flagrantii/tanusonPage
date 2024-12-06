'use client';

import React from 'react';
import { certJson } from '@/data/interface';
import { AnimatedCard } from './AnimatedCard';
import { Box, Chip, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { subtleGradient } from '@/utils/styles';

const CertTitle = styled(Typography)`
  ${subtleGradient}
`;

const CertImage = styled('img')`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 1rem;
  transition: transform 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const SkillChip = styled(Chip)`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const OrganizationLogo = styled('img')`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  padding: 4px;
`;

export default function CertCard({ certProps }: { certProps: certJson }) {
  return (
    <AnimatedCard>
      <Box display="flex" alignItems="center" gap={2} mb={2}>
        <OrganizationLogo
          src={certProps.author.imageUrl}
          alt={certProps.category.org}
        />
        <Box flex={1}>
          <CertTitle variant="h6">
            {certProps.title}
          </CertTitle>
          <Box display="flex" alignItems="center" gap={1} mt={0.5}>
            <Typography variant="caption" color="gray">
              {certProps.date}
            </Typography>
            <Typography variant="caption" color="primary.light">
              • {certProps.category.org}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Typography color="white" variant="body2" mb={2}>
        {certProps.description}
      </Typography>

      <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
        {certProps.skills?.map((skill, index) => (
          <SkillChip
            key={index}
            label={skill}
            size="small"
          />
        ))}
      </Box>

      <Link href={certProps.href} target="_blank">
        <CertImage
          src={certProps.author.cersimage}
          alt={`${certProps.title} Certificate`}
        />
      </Link>
    </AnimatedCard>
  );
}
