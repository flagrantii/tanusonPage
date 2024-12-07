'use client';

import React from 'react';
import { Box, Typography, Grid, Chip, Tooltip, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, useInView } from 'framer-motion';
import { ProjectDetail } from '@/data/interface';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import UpdateIcon from '@mui/icons-material/Update';
import { featureIconsMap } from '@/utils/featureIcons';

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;

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

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0 10px 30px -10px rgba(59, 130, 246, 0.3);
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
  transition: all 0.3s ease;
  margin-bottom: 0.5rem;

  &:hover {
    background: rgba(59, 130, 246, 0.2);
    transform: rotate(10deg);
  }
`;

const StatusChip = styled(Chip)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  backdrop-filter: blur(4px);
`;

export default function Features({ project }: { project: ProjectDetail }) {
  const theme = useTheme();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'completed':
        return theme.palette.success.main;
      case 'in-progress':
        return theme.palette.warning.main;
      case 'planned':
        return theme.palette.info.main;
      default:
        return theme.palette.primary.main;
    }
  };

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon fontSize="small" />;
      case 'in-progress':
        return <UpdateIcon fontSize="small" />;
      case 'planned':
        return <AccessTimeIcon fontSize="small" />;
      default:
        return null;
    }
  };

  const getFeatureIcon = (category?: string) => {
    if (!category) return null;
    
    const iconMapping = featureIconsMap[category];
    if (!iconMapping) return null;

    const IconComponent = iconMapping.icon;
    
    return (
      <IconContainer
        whileHover={{ rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
        sx={{
          background: `${iconMapping.gradient}15`,
          '&:hover': {
            background: `${iconMapping.gradient}25`
          }
        }}
      >
        <IconComponent 
          sx={{ 
            color: iconMapping.color,
            fontSize: { xs: 28, sm: 32 },
            filter: `drop-shadow(0 0 8px ${iconMapping.color}40)`
          }} 
        />
      </IconContainer>
    );
  };

  return (
    <Box ref={ref}>
      <Typography 
        variant="h5" 
        color="primary.light" 
        gutterBottom
        sx={{
          fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
          fontWeight: 600,
          mb: 3
        }}
      >
        Key Features
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {project.features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
            >
              {feature.status && (
                <StatusChip
                  icon={getStatusIcon(feature.status) as React.ReactElement}
                  label={feature.status}
                  size="small"
                  sx={{
                    backgroundColor: `${getStatusColor(feature.status)}20`,
                    color: getStatusColor(feature.status),
                    borderColor: getStatusColor(feature.status),
                    '& .MuiChip-icon': {
                      color: getStatusColor(feature.status)
                    }
                  }}
                />
              )}

              {getFeatureIcon(feature.category)}

              <Box>
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
                  {feature.feature}
                </Typography>

                <Typography 
                  color="gray" 
                  variant="body2"
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '0.9rem' },
                    lineHeight: 1.6,
                    opacity: 0.8
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>

              {feature.category && (
                <Chip
                  label={feature.category}
                  size="small"
                  sx={{
                    alignSelf: 'flex-start',
                    mt: 'auto',
                    backgroundColor: `${featureIconsMap[feature.category]?.color}15` || 'rgba(255, 255, 255, 0.1)',
                    color: featureIconsMap[feature.category]?.color || 'gray',
                    fontSize: '0.75rem'
                  }}
                />
              )}
            </FeatureCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
} 