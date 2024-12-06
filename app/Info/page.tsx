'use client';

import React from 'react';
import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import { fadeIn } from '@/utils/animations';

const Section = styled(Box)`
  min-height: 100vh;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%);
`;

const GlassCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    border-color: rgba(59, 130, 246, 0.5);
  }
`;

const IconWrapper = styled(Box)`
  background: rgba(59, 130, 246, 0.1);
  border-radius: 16px;
  padding: 1rem;
  display: inline-flex;
  margin-bottom: 1rem;
`;

const HighlightText = styled(Typography)`
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProfileImage = styled(motion.img)`
  border-radius: 24px;
  width: 100%;
  height: auto;
  object-fit: cover;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
`;

export default function Info() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Section>
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <HighlightText variant="h2" gutterBottom fontWeight="bold">
                  About Me
                </HighlightText>
                <Typography variant="h5" color="white" paragraph>
                  Passionate Developer & Creative Thinker
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <GlassCard>
                  <IconWrapper>
                    <SchoolIcon sx={{ fontSize: 40, color: '#3b82f6' }} />
                  </IconWrapper>
                  <Typography color="white" paragraph>
                    Since the sixth grade, I attended a school where I explored various initiatives, studies, and hobbies—all centered around computers. This experience clearly highlighted my future interests and how I should progress in the tech industry.
                  </Typography>
                </GlassCard>
              </motion.div>

              <Box mt={4}>
                <motion.div variants={itemVariants}>
                  <GlassCard>
                    <IconWrapper>
                      <CodeIcon sx={{ fontSize: 40, color: '#3b82f6' }} />
                    </IconWrapper>
                    <Typography color="white" paragraph>
                      My involvement in PCCNST's tech and innovation initiatives provided a platform to exercise my creative muscles, ignited my passion for design, and enhanced my ability to handle adversity.
                    </Typography>
                  </GlassCard>
                </motion.div>
              </Box>

              <Box mt={4}>
                <motion.div variants={itemVariants}>
                  <GlassCard>
                    <IconWrapper>
                      <BrushIcon sx={{ fontSize: 40, color: '#3b82f6' }} />
                    </IconWrapper>
                    <Typography color="white" paragraph>
                      Additionally, my participation in a camp at ThaiHeath allowed me to discover my love for building products that positively impact people's lives.
                    </Typography>
                  </GlassCard>
                </motion.div>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ProfileImage
                  src="/image/me5.png"
                  alt="Profile"
                  loading="lazy"
                />
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Section>
  );
}
