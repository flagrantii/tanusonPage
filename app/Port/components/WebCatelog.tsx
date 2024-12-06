'use client';

import React from 'react';
import WebCard from './WebCard';
import { webs } from '@/data/web';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { scaleIn } from '@/utils/animations';
import { motion } from 'framer-motion';

const AnimatedGrid = styled(Grid)<{ delay: number }>`
  animation: ${scaleIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.delay}ms;
  opacity: 0;
`;

const CatalogGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${props => props.theme.spacing(3)};
  width: 100%;
  margin: 0 auto;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing(2)};
  }
`;

const ProjectCard = styled(motion.div)`
  height: 100%;
  break-inside: avoid;
`;

export default function WebCatelog() {
  return (
    <CatalogGrid>
      {webs.map((web, index) => (
        <ProjectCard
          key={web.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <WebCard webProps={web} />
        </ProjectCard>
      ))}
    </CatalogGrid>
  );
}
