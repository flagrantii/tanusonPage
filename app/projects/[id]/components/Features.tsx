'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { ProjectDetail } from '@/data/interface';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
`;

export default function Features({ project }: { project: ProjectDetail }) {
  return (
    <Grid container spacing={3}>
      {project.features.map((feature, index) => (
        <Grid item xs={12} md={4} key={index}>
          <FeatureCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <LightbulbIcon sx={{ color: 'primary.main', fontSize: 40, mb: 2 }} />
            <Typography color="white" variant="h6" gutterBottom>
              {feature}
            </Typography>
          </FeatureCard>
        </Grid>
      ))}
    </Grid>
  );
} 