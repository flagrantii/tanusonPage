'use client';

import React, { useState } from 'react';
import { Box, IconButton, Tooltip, Switch } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TabletIcon from '@mui/icons-material/Tablet';
import LaptopIcon from '@mui/icons-material/Laptop';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import { ProjectDetail } from '@/data/interface';

const DeviceFrame = styled(motion.div)<{ view: string; isDarkMode: boolean }>`
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
  background: ${({ isDarkMode }) => isDarkMode ? '#1a1a1a' : 'white'};
  border-radius: ${({ view }) => 
    view === 'phone' ? '36px' : 
    view === 'tablet' ? '24px' : 
    '16px'
  };
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  transform-origin: center;
  perspective: 1000px;
`;

const Controls = styled(Box)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.8rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  z-index: 10;
`;

interface DeviceFramesetProps {
  project: ProjectDetail;
  view: 'phone' | 'tablet' | 'laptop';
  onViewChange: (view: 'phone' | 'tablet' | 'laptop') => void;
}

export default function DeviceFrameset({ project, view, onViewChange }: DeviceFramesetProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  
  const rotateY = useMotionValue(0);
  const rotateX = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isRotating) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    rotateY.set((x - centerX) / 20);
    rotateX.set((centerY - y) / 20);
  };

  return (
    <Box 
      position="relative" 
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        rotateY.set(0);
        rotateX.set(0);
      }}
    >
      <DeviceFrame
        view={view}
        isDarkMode={isDarkMode}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ 
          rotateY: rotateY,
          rotateX: rotateX 
        }}
      >
        <iframe 
          src={project.demoUrl || project.githubUrl} 
          title={project.title}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            filter: isDarkMode ? 'invert(1) hue-rotate(180deg)' : 'none'
          }}
        />
      </DeviceFrame>

      <Controls>
        <Tooltip title="Phone View">
          <IconButton 
            onClick={() => onViewChange('phone')}
            sx={{ 
              color: view === 'phone' ? 'primary.main' : 'white',
              '&:hover': { transform: 'scale(1.1)' }
            }}
          >
            <PhoneIphoneIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Tablet View">
          <IconButton 
            onClick={() => onViewChange('tablet')}
            sx={{ 
              color: view === 'tablet' ? 'primary.main' : 'white',
              '&:hover': { transform: 'scale(1.1)' }
            }}
          >
            <TabletIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Laptop View">
          <IconButton 
            onClick={() => onViewChange('laptop')}
            sx={{ 
              color: view === 'laptop' ? 'primary.main' : 'white',
              '&:hover': { transform: 'scale(1.1)' }
            }}
          >
            <LaptopIcon />
          </IconButton>
        </Tooltip>
        <Box sx={{ height: '24px', bgcolor: 'rgba(255,255,255,0.2)', width: '1px', mx: 1 }} />
        <Tooltip title="Toggle Theme">
          <IconButton 
            onClick={() => setIsDarkMode(!isDarkMode)}
            sx={{ color: 'white' }}
          >
            {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Tooltip>
        <Tooltip title="Toggle 3D Rotation">
          <IconButton 
            onClick={() => setIsRotating(!isRotating)}
            sx={{ 
              color: isRotating ? 'primary.main' : 'white',
              '&:hover': { transform: 'scale(1.1)' }
            }}
          >
            <ThreeDRotationIcon />
          </IconButton>
        </Tooltip>
      </Controls>
    </Box>
  );
} 