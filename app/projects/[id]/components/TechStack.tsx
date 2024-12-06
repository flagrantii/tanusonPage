'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { ProjectDetail } from '@/data/interface';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';

const TechCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(59, 130, 246, 0.5);
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function TechStack({ project }: { project: ProjectDetail }) {
  return (
    <Box>
      <Typography variant="h5" color="primary.light" gutterBottom>
        Technologies & Architecture
      </Typography>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Grid container spacing={2}>
          {project.technologies.map((tech, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <TechCard
                variants={item}
                whileHover={{ scale: 1.03 }}
              >
                <CodeIcon sx={{ color: 'primary.main' }} />
                <Typography color="white">
                  {tech}
                </Typography>
              </TechCard>
            </Grid>
          ))}
        </Grid>

        {project.techDetails && (
          <Box mt={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Technical Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TechCard variants={item}>
                  <StorageIcon sx={{ color: 'primary.main' }} />
                  <Box>
                    <Typography color="white">Database</Typography>
                    <Typography color="gray" variant="body2">
                      {project.techDetails.database}
                    </Typography>
                  </Box>
                </TechCard>
              </Grid>
              <Grid item xs={12} md={6}>
                <TechCard variants={item}>
                  <CloudIcon sx={{ color: 'primary.main' }} />
                  <Box>
                    <Typography color="white">Hosting</Typography>
                    <Typography color="gray" variant="body2">
                      {project.techDetails.hosting}
                    </Typography>
                  </Box>
                </TechCard>
              </Grid>
            </Grid>
          </Box>
        )}
      </motion.div>
    </Box>
  );
} 