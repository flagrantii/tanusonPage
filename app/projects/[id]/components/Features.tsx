'use client';

import React from 'react';
import { Box, Typography, Grid, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, useInView } from 'framer-motion';
import { ProjectDetail } from '@/data/interface';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.05),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const IconContainer = styled(motion.div)`
  background: rgba(59, 130, 246, 0.1);
  border-radius: 12px;
  padding: 1rem;
  display: inline-flex;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(59, 130, 246, 0.2);
    transform: rotate(10deg);
  }
`;

export default function Features({ project }: { project: ProjectDetail }) {
  const theme = useTheme();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Grid container spacing={3}>
        {project.features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FeatureCard
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.3)'
              }}
            >
              <IconContainer
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <LightbulbIcon 
                  sx={{ 
                    color: 'primary.main', 
                    fontSize: 40,
                    filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))'
                  }} 
                />
              </IconContainer>
              <Typography 
                color="white" 
                variant="h6" 
                gutterBottom
                sx={{
                  fontSize: {
                    xs: '1rem',
                    sm: '1.1rem',
                    md: '1.25rem'
                  },
                  fontWeight: 600,
                  lineHeight: 1.4
                }}
              >
                {feature}
              </Typography>
            </FeatureCard>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
} 