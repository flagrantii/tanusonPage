'use client';

import React from 'react';
import { Box, Typography, Grid, Tooltip, Zoom } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, useInView } from 'framer-motion';
import { ProjectDetail } from '@/data/interface';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';

const TechCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: ${({ theme }) => theme.palette.primary.main};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing(1.5)};
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
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const getTechIcon = (tech: string) => {
    const techIcons: { [key: string]: JSX.Element } = {
      'React': <CodeIcon sx={{ color: '#61DAFB' }} />,
      'Node.js': <CodeIcon sx={{ color: '#68A063' }} />,
      'TypeScript': <CodeIcon sx={{ color: '#3178C6' }} />,
    };
    return techIcons[tech] || <CodeIcon sx={{ color: 'primary.main' }} />;
  };

  return (
    <Box ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
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
          Technologies & Architecture
        </Typography>

        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
          {project.technologies.map((tech, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Tooltip 
                title={`Click to learn more about ${tech}`}
                TransitionComponent={Zoom}
                arrow
              >
                <TechCard
                  variants={item}
                  initial="hidden"
                  animate={isInView ? "show" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => window.open(`https://www.google.com/search?q=${tech}+technology`, '_blank')}
                >
                  {getTechIcon(tech)}
                  <Typography 
                    color="white"
                    sx={{ 
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      fontWeight: 500
                    }}
                  >
                    {tech}
                  </Typography>
                </TechCard>
              </Tooltip>
            </Grid>
          ))}
        </Grid>

        {project.techDetails && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            <Box mt={{ xs: 3, sm: 4, md: 5 }}>
              <Typography 
                variant="h6" 
                color="white" 
                gutterBottom
                sx={{
                  fontSize: { xs: '1.2rem', sm: '1.4rem' },
                  fontWeight: 600,
                  mb: 2
                }}
              >
                Technical Details
              </Typography>
              <Grid container spacing={{ xs: 1.5, sm: 2, md: 3 }}>
                {project.techDetails.database && (
                  <Grid item xs={12} md={6}>
                    <TechCard variants={item}>
                      <StorageIcon sx={{ 
                        color: 'primary.main',
                        fontSize: { xs: 24, sm: 28 }
                      }} />
                      <Box>
                        <Typography 
                          color="white"
                          sx={{ 
                            fontSize: { xs: '0.9rem', sm: '1rem' },
                            fontWeight: 500
                          }}
                        >
                          Database
                        </Typography>
                        <Typography 
                          color="gray" 
                          variant="body2"
                          sx={{ 
                            fontSize: { xs: '0.8rem', sm: '0.9rem' },
                            mt: 0.5
                          }}
                        >
                          {project.techDetails.database}
                        </Typography>
                      </Box>
                    </TechCard>
                  </Grid>
                )}

                {project.techDetails.hosting && (
                  <Grid item xs={12} md={6}>
                    <TechCard variants={item}>
                      <CloudIcon sx={{ 
                        color: 'primary.main',
                        fontSize: { xs: 24, sm: 28 }
                      }} />
                      <Box>
                        <Typography 
                          color="white"
                          sx={{ 
                            fontSize: { xs: '0.9rem', sm: '1rem' },
                            fontWeight: 500
                          }}
                        >
                          Hosting
                        </Typography>
                        <Typography 
                          color="gray" 
                          variant="body2"
                          sx={{ 
                            fontSize: { xs: '0.8rem', sm: '0.9rem' },
                            mt: 0.5
                          }}
                        >
                          {project.techDetails.hosting}
                        </Typography>
                      </Box>
                    </TechCard>
                  </Grid>
                )}
              </Grid>
            </Box>
          </motion.div>
        )}
      </motion.div>
    </Box>
  );
} 