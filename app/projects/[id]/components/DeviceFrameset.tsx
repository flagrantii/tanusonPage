'use client';

import React, { useState } from 'react';
import { Box, IconButton, Tooltip, Switch, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TabletIcon from '@mui/icons-material/Tablet';
import LaptopIcon from '@mui/icons-material/Laptop';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import { ProjectDetail } from '@/data/interface';

const DeviceContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DeviceFrame = styled(motion.div)<{ view: string; isDarkMode: boolean; rotation: number }>`
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
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
  transition: all 0.5s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ view }) => view === 'phone' ? '50%' : '30%'};
    height: ${({ view }) => view === 'phone' ? '24px' : '16px'};
    background: #000;
    border-radius: 0 0 12px 12px;
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ view }) => view === 'phone' ? '120px' : '60px'};
    height: 4px;
    background: #333;
    border-radius: 2px;
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

const DeviceButton = styled(IconButton)<{ isActive?: boolean }>`
  background: ${({ isActive }) => 
    isActive ? 'rgba(59, 130, 246, 0.3)' : 'rgba(255, 255, 255, 0.1)'
  };
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(59, 130, 246, 0.4);
    transform: translateY(-2px);
  }
`;

const RotationControls = styled(Box)`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.8rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
`;

interface DeviceFramesetProps {
  project: ProjectDetail;
  view: 'phone' | 'tablet' | 'laptop';
  onViewChange: (view: 'phone' | 'tablet' | 'laptop') => void;
}

export default function DeviceFrameset({ project, view, onViewChange }: DeviceFramesetProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleRotate = (direction: 'left' | 'right') => {
    setRotation(prev => direction === 'left' ? prev - 90 : prev + 90);
  };

  return (
    <DeviceContainer>
      <DeviceFrame
        view={view}
        isDarkMode={isDarkMode}
        rotation={rotation}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <DeviceScreen>
          <iframe 
            src={project.demoUrl || project.githubUrl} 
            title={project.title}
            style={{
              filter: isDarkMode ? 'invert(1) hue-rotate(180deg)' : 'none',
              transform: `scale(${view === 'phone' ? 0.75 : 1})`,
            }}
          />
        </DeviceScreen>
      </DeviceFrame>

      <Controls>
        <DeviceButton 
          isActive={view === 'phone'}
          onClick={() => onViewChange('phone')}
        >
          <PhoneIphoneIcon sx={{ color: 'white' }} />
        </DeviceButton>
        <DeviceButton 
          isActive={view === 'tablet'}
          onClick={() => onViewChange('tablet')}
        >
          <TabletIcon sx={{ color: 'white' }} />
        </DeviceButton>
        <DeviceButton 
          isActive={view === 'laptop'}
          onClick={() => onViewChange('laptop')}
        >
          <LaptopIcon sx={{ color: 'white' }} />
        </DeviceButton>
        <Box sx={{ width: '1px', bgcolor: 'rgba(255,255,255,0.2)', mx: 1 }} />
        <DeviceButton onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? 
            <DarkModeIcon sx={{ color: 'white' }} /> : 
            <LightModeIcon sx={{ color: 'white' }} />
          }
        </DeviceButton>
      </Controls>

      <RotationControls>
        <DeviceButton onClick={() => handleRotate('left')}>
          <RotateLeftIcon sx={{ color: 'white' }} />
        </DeviceButton>
        <DeviceButton onClick={() => handleRotate('right')}>
          <RotateRightIcon sx={{ color: 'white' }} />
        </DeviceButton>
      </RotationControls>
    </DeviceContainer>
  );
} 