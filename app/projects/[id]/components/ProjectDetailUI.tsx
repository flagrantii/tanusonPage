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
  position: relative;
  transition: all 0.5s ease;
  max-width: 100vw;
  overflow-x: hidden;
  padding: 0 1rem;

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
  padding: 2rem;
  max-width: ${({ deviceView }) => 
    deviceView === 'laptop' ? '800px' :
    deviceView === 'tablet' ? '600px' :
    '100%'
  };
  margin: 0 auto;
  transition: all 0.5s ease;

  @media (max-width: 768px) {
    padding: 1rem;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
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
  padding: 2rem;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.5s ease;
  overflow: hidden;

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
      deviceView === 'phone' ? '600px' : 
      deviceView === 'tablet' ? '800px' : 
      '500px'
    };
    border-left: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0;
    margin: 0 0 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    min-height: ${({ deviceView }) => 
      deviceView === 'phone' ? '520px' : 
      deviceView === 'tablet' ? '650px' : 
      '450px'
    };
  }
`;

const StyledTabs = styled(Tabs)`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 0.5rem;
  margin-bottom: 2rem;

  .MuiTab-root {
    color: rgba(255, 255, 255, 0.7);
    text-transform: none;
    font-weight: 500;
    min-width: 120px;

    &.Mui-selected {
      color: #3b82f6;
    }
  }

  .MuiTabs-indicator {
    background: #3b82f6;
    height: 3px;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    margin: 0 0.5rem 1rem 0.5rem;
    
    .MuiTab-root {
      min-width: 80px;
      padding: 0.5rem;
      font-size: 0.875rem;
    }
  }
`;

const ProjectHeader = styled(Box)`
  margin-bottom: 2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 0 0.5rem 1rem 0.5rem;
    
    > div:first-of-type {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      
      > div:last-of-type {
        width: 100%;
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
      }
    }
  }
`;

const RelatedProjects = styled(Box)`
  margin-top: 4rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    margin: 2rem 0.5rem;
    padding: 1rem;
  }
`;

const ProjectCard = styled(motion.div)`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
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