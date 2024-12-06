'use client';

import React from 'react';
import { Box, Typography, Chip, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { ProjectDetail } from '@/data/interface';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import StarIcon from '@mui/icons-material/Star';

const MetricCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-5px);
  }
`;

interface ProjectOverviewProps {
  project: ProjectDetail;
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" color="white" gutterBottom>
          {project.title}
        </Typography>
        <Typography color="gray" paragraph>
          {project.longDescription}
        </Typography>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <AccessTimeIcon sx={{ color: 'primary.main', fontSize: 40, mb: 2 }} />
              <Typography variant="h6" color="white">
                Timeline
              </Typography>
              <Typography color="gray">
                {project.timeline}
              </Typography>
            </MetricCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <PersonIcon sx={{ color: 'primary.main', fontSize: 40, mb: 2 }} />
              <Typography variant="h6" color="white">
                Role
              </Typography>
              <Typography color="gray">
                {project.role}
              </Typography>
            </MetricCard>
          </Grid>
          {project.metrics && (
            <>
              <Grid item xs={12} sm={6} md={3}>
                <MetricCard
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <GroupIcon sx={{ color: 'primary.main', fontSize: 40, mb: 2 }} />
                  <Typography variant="h6" color="white">
                    Users
                  </Typography>
                  <Typography color="gray">
                    {project.metrics.users}
                  </Typography>
                </MetricCard>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <MetricCard
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <StarIcon sx={{ color: 'primary.main', fontSize: 40, mb: 2 }} />
                  <Typography variant="h6" color="white">
                    Satisfaction
                  </Typography>
                  <Typography color="gray">
                    {project.metrics.satisfaction}
                  </Typography>
                </MetricCard>
              </Grid>
            </>
          )}
        </Grid>
      </motion.div>
    </Box>
  );
} 