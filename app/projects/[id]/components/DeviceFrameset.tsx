'use client';

import React from 'react';
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TabletIcon from '@mui/icons-material/Tablet';
import LaptopIcon from '@mui/icons-material/Laptop';
import { ProjectDetail } from '@/data/interface';

const DeviceFrame = styled(motion.div)<{ view: string }>`
  position: relative;
  width: ${({ view }) => 
    view === 'phone' ? '375px' : 
    view === 'tablet' ? '768px' : 
    '1024px'
  };
  height: ${({ view }) => 
    view === 'phone' ? '667px' : 
    view === 'tablet' ? '1024px' : 
    '640px'
  };
  background: white;
  border-radius: ${({ view }) => 
    view === 'phone' ? '36px' : 
    view === 'tablet' ? '24px' : 
    '16px'
  };
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  transform-origin: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ view }) => view === 'phone' ? '50%' : '30%'};
    height: ${({ view }) => view === 'phone' ? '24px' : '16px'};
    background: #000;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    z-index: 2;
  }
`;

const DeviceScreen = styled(Box)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: white;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const ViewControls = styled(Box)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
`;

interface DeviceFramesetProps {
  project: ProjectDetail;
  view: 'phone' | 'tablet' | 'laptop';
  onViewChange: (view: 'phone' | 'tablet' | 'laptop') => void;
}

export default function DeviceFrameset({ project, view, onViewChange }: DeviceFramesetProps) {
  return (
    <Box position="relative">
      <DeviceFrame
        view={view}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <DeviceScreen>
          <iframe 
            src={project.demoUrl || project.githubUrl} 
            title={project.title}
          />
        </DeviceScreen>
      </DeviceFrame>

      <ViewControls>
        <IconButton 
          onClick={() => onViewChange('phone')}
          sx={{ 
            color: view === 'phone' ? 'primary.main' : 'white',
            '&:hover': { transform: 'scale(1.1)' }
          }}
        >
          <PhoneIphoneIcon />
        </IconButton>
        <IconButton 
          onClick={() => onViewChange('tablet')}
          sx={{ 
            color: view === 'tablet' ? 'primary.main' : 'white',
            '&:hover': { transform: 'scale(1.1)' }
          }}
        >
          <TabletIcon />
        </IconButton>
        <IconButton 
          onClick={() => onViewChange('laptop')}
          sx={{ 
            color: view === 'laptop' ? 'primary.main' : 'white',
            '&:hover': { transform: 'scale(1.1)' }
          }}
        >
          <LaptopIcon />
        </IconButton>
      </ViewControls>
    </Box>
  );
} 