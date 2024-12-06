'use client';

import React from 'react';
import WebCard from './WebCard';
import { webs } from '@/data/web';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { scaleIn } from '@/utils/animations';

const AnimatedGrid = styled(Grid)<{ delay: number }>`
  animation: ${scaleIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.delay}ms;
  opacity: 0;
`;

export default function WebCatelog() {
  return (
    <Box sx={{ columnCount: { xs: 1, sm: 2, md: 3 }, columnGap: 3 }}>
      {webs.map((web, index) => (
        <Box key={web.id} sx={{ breakInside: 'avoid', mb: 3 }}>
          <AnimatedGrid delay={index * 100}>
            <WebCard webProps={web} />
          </AnimatedGrid>
        </Box>
      ))}
    </Box>
  );
}
