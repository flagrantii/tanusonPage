'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Chip, IconButton, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectDetail } from '@/data/interface';
import { getProjectById } from '@/data/projects';
import DeviceFrameset from './DeviceFrameset';
import ProjectOverview from './ProjectOverview';
import TechStack from './TechStack';
import Features from './Features';
import Gallery from './Gallery';


const DeviceContainer = styled(Box)`
  position: fixed;
  right: 0;
  top: 0;
  width: 45%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%);

  @media (max-width: 1200px) {
    position: relative;
    width: 100%;
    height: 60vh;
    margin-bottom: 2rem;
  }
`;

const ContentContainer = styled(Box)`
  width: 55%;
  min-height: 100vh;
  padding: 2rem;
  padding-top: 80px;

  @media (max-width: 1200px) {
    width: 100%;
    min-height: auto;
  }
`;

const TabPanel = styled(Box)`
  padding: 2rem 0;
`;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <AnimatePresence mode="wait">
      {value === index && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <TabPanel {...other}>{children}</TabPanel>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ProjectDetailUI({ params }: { params: { id: string } }) {
  const [tabValue, setTabValue] = useState(0);
  const [deviceView, setDeviceView] = useState<'phone' | 'tablet' | 'laptop'>('phone');
  const project = getProjectById(params.id);

  if (!project) return null;

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box display="flex" flexDirection={{ xs: 'column', lg: 'row' }}>
      <ContentContainer>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': {
              color: 'grey.500',
              '&.Mui-selected': {
                color: 'primary.main',
              },
            },
          }}
        >
          <Tab label="Overview" />
          <Tab label="Tech Stack" />
          <Tab label="Features" />
          <Tab label="Gallery" />
        </Tabs>

        <CustomTabPanel value={tabValue} index={0}>
          <ProjectOverview project={project} />
        </CustomTabPanel>

        <CustomTabPanel value={tabValue} index={1}>
          <TechStack project={project} />
        </CustomTabPanel>

        <CustomTabPanel value={tabValue} index={2}>
          <Features project={project} />
        </CustomTabPanel>

        <CustomTabPanel value={tabValue} index={3}>
          <Gallery project={project} />
        </CustomTabPanel>
      </ContentContainer>

      <DeviceContainer>
        <DeviceFrameset 
          project={project}
          view={deviceView}
          onViewChange={setDeviceView}
        />
      </DeviceContainer>
    </Box>
  );
} 