'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, IconButton, Tab, Tabs, Chip, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectDetail } from '@/data/interface';
import { getProjectById, getRelatedProjects } from '@/data/projects';
import DeviceFrameset from './DeviceFrameset';
import ProjectOverview from './ProjectOverview';
import TechStack from './TechStack';
import Features from './Features';
import Gallery from './Gallery';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { useRouter } from 'next/navigation';

const PageWrapper = styled(Box)`
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 100%);
  padding-top: 70px;

  @media (max-width: 768px) {
    padding-top: 60px;
  }
`;

const ContentLayout = styled(Box)<{ deviceView: string }>`
  display: grid;
  grid-template-columns: ${({ deviceView }) => 
    deviceView === 'laptop' ? '0.5fr 1024px' :
    deviceView === 'tablet' ? '1fr 768px' :
    '1fr 375px'
  };
  gap: 2rem;
  max-width: 100vw;
  overflow-x: hidden;
  margin: 0 auto;
  padding: 0 max(1rem, calc((100vw - 1400px) / 2));

  @media (max-width: ${({ deviceView }) => 
    deviceView === 'laptop' ? '1500px' :
    deviceView === 'tablet' ? '1200px' :
    '900px'
  }) {
    grid-template-columns: 1fr;
    padding: 0;
    gap: 0;
  }
`;

const MainContent = styled(Box)<{ deviceView: string }>`
  padding: clamp(1rem, 3vw, 2rem);
  max-width: ${({ deviceView }) => 
    deviceView === 'laptop' ? '800px' :
    deviceView === 'tablet' ? '600px' :
    '100%'
  };
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    max-width: min(600px, 95%);
  }
`;

const DevicePreview = styled(Box)<{ deviceView: string }>`
  width: ${({ deviceView }) => 
    deviceView === 'laptop' ? '1024px' :
    deviceView === 'tablet' ? '768px' :
    '375px'
  };
  position: sticky;
  top: 90px;
  height: calc(100vh - 90px);
  padding: clamp(1rem, 2vw, 2rem);
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.5s ease;

  @media (max-width: ${({ deviceView }) => 
    deviceView === 'laptop' ? '1500px' :
    deviceView === 'tablet' ? '1200px' :
    '900px'
  }) {
    width: 100%;
    position: relative;
    top: 0;
    height: auto;
    min-height: ${({ deviceView }) => 
      deviceView === 'phone' ? 'min(600px, 90vh)' : 
      deviceView === 'tablet' ? 'min(800px, 90vh)' : 
      'min(500px, 90vh)'
    };
    border-left: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0;
    margin: 0 auto 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }
`;

const StyledTabs = styled(Tabs)`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: clamp(0.3rem, 1vw, 0.5rem);
  margin: 0 auto clamp(1rem, 3vw, 2rem);
  max-width: min(600px, 95%);

  .MuiTab-root {
    color: rgba(255, 255, 255, 0.7);
    text-transform: none;
    font-weight: 500;
    min-width: clamp(80px, 15vw, 120px);
    padding: clamp(0.5rem, 1vw, 1rem);
    font-size: clamp(0.875rem, 2vw, 1rem);

    &.Mui-selected {
      color: #3b82f6;
    }
  }

  .MuiTabs-indicator {
    background: #3b82f6;
    height: 3px;
    border-radius: 3px;
  }
`;

const ProjectHeader = styled(Box)`
  margin-bottom: clamp(1rem, 3vw, 2rem);
  padding: clamp(1rem, 2vw, 2rem);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    margin: 0 auto 1rem;
    max-width: min(600px, 95%);
    
    > div:first-of-type {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      
      > div:first-of-type {
        width: 100%;
        
        h4 {
          font-size: clamp(1.5rem, 5vw, 2rem);
        }
      }
      
      > div:last-of-type {
        width: 100%;
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        justify-content: flex-start;
      }
    }
  }
`;

const RelatedProjects = styled(Box)`
  margin: clamp(2rem, 5vw, 4rem) auto 0;
  padding: clamp(1rem, 2vw, 2rem);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: min(600px, 95%);

  > div:last-child {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
    gap: clamp(0.5rem, 2vw, 1rem);
    margin-top: 1rem;
  }
`;

const ProjectCard = styled(motion.div)`
  padding: clamp(1rem, 2vw, 1.5rem);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  h6 {
    font-size: clamp(1rem, 3vw, 1.25rem);
  }

  &:hover {
    border-color: #3b82f6;
    transform: translateY(-5px);
  }
`;

export default function ProjectDetailUI({ params }: { params: { id: string } }) {
  const [tabValue, setTabValue] = useState(0);
  const [deviceView, setDeviceView] = useState<'phone' | 'tablet' | 'laptop'>('phone');
  const router = useRouter();
  const project = getProjectById(params.id);
  const relatedProjects = getRelatedProjects(params.id);

  if (!project) return null;

  return (
    <PageWrapper>
      <ContentLayout deviceView={deviceView}>
        <MainContent deviceView={deviceView}>
          <ProjectHeader>
            <Box display="flex" alignItems="center" gap={2} mb={3}>
              <IconButton
                onClick={() => router.back()}
                sx={{ 
                  color: 'white',
                  background: 'rgba(255,255,255,0.1)',
                  '&:hover': { background: 'rgba(255,255,255,0.2)' }
                }}
              >
                <ArrowBackIcon />
              </IconButton>
              <Box flex={1}>
                <Typography variant="h4" color="white" fontWeight="bold">
                  {project.title}
                </Typography>
                <Typography color="gray" variant="subtitle1">
                  {project.role} • {project.timeline}
                </Typography>
              </Box>
              <Box display="flex" gap={1}>
                <Button
                  variant="contained"
                  startIcon={<GitHubIcon />}
                  href={project.githubUrl}
                  target="_blank"
                  sx={{ textTransform: 'none' }}
                >
                  View Code
                </Button>
                {project.demoUrl && (
                  <Button
                    variant="outlined"
                    startIcon={<LaunchIcon />}
                    href={project.demoUrl}
                    target="_blank"
                    sx={{ textTransform: 'none' }}
                  >
                    Live Demo
                  </Button>
                )}
              </Box>
            </Box>
            <Typography color="white" variant="body1" sx={{ opacity: 0.8 }}>
              {project.longDescription}
            </Typography>
          </ProjectHeader>

          <StyledTabs
            value={tabValue}
            onChange={(_, newValue) => setTabValue(newValue)}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Overview" />
            <Tab label="Tech Stack" />
            <Tab label="Features" />
            <Tab label="Gallery" />
          </StyledTabs>

          <AnimatePresence mode="wait">
            <motion.div
              key={tabValue}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {tabValue === 0 && <ProjectOverview project={project} />}
              {tabValue === 1 && <TechStack project={project} />}
              {tabValue === 2 && <Features project={project} />}
              {tabValue === 3 && <Gallery project={project} />}
            </motion.div>
          </AnimatePresence>

          {relatedProjects.length > 0 && (
            <RelatedProjects>
              <Typography variant="h6" color="white" mb={3}>
                Related Projects
              </Typography>
              <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={2}>
                {relatedProjects.map((relatedProject, index) => (
                  <ProjectCard
                    key={relatedProject.id}
                    onClick={() => router.push(`/projects/${relatedProject.id}`)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Typography variant="h6" color="white" gutterBottom>
                      {relatedProject.title}
                    </Typography>
                    <Typography color="gray" variant="body2" noWrap>
                      {relatedProject.description}
                    </Typography>
                    <Box display="flex" gap={1} mt={2}>
                      {relatedProject.technologies.slice(0, 3).map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{ 
                            background: 'rgba(59, 130, 246, 0.1)',
                            color: '#3b82f6'
                          }}
                        />
                      ))}
                    </Box>
                  </ProjectCard>
                ))}
              </Box>
            </RelatedProjects>
          )}
        </MainContent>

        <DevicePreview deviceView={deviceView}>
          <DeviceFrameset
            project={project}
            view={deviceView}
            onViewChange={setDeviceView}
          />
        </DevicePreview>
      </ContentLayout>
    </PageWrapper>
  );
} 