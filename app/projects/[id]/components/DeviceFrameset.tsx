'use client';

import React, { useState } from 'react';
import { Box, IconButton, Tooltip, Switch, Typography, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TabletIcon from '@mui/icons-material/Tablet';
import LaptopIcon from '@mui/icons-material/Laptop';
import { ProjectDetail } from '@/data/interface';
import { GitHub, Code, OpenInNew } from '@mui/icons-material';

const DeviceContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const DeviceFrame = styled(motion.div)<{ view: string; isDarkMode: boolean; rotation: number }>`
  position: relative;
  width: ${({ view }) => 
    view === 'phone' ? '375px' : 
    view === 'tablet' ? '768px' : 
    '840px'
  };
  height: ${({ view }) => 
    view === 'phone' ? '667px' : 
    view === 'tablet' ? '1024px' : 
    '525px'
  };
  max-width: 100%;
  max-height: ${({ view }) => view === 'phone' ? '80vh' : '70vh'};
  background: ${({ isDarkMode }) => isDarkMode ? '#1a1a1a' : 'white'};
  border-radius: ${({ view }) => 
    view === 'phone' ? '36px' : 
    view === 'tablet' ? '24px' : 
    '16px'
  };
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  transform: scale(${({ view }) => view === 'laptop' ? 0.85 : 1});
  transition: all 0.5s ease;

  @media (max-width: 768px) {
    width: ${({ view }) => 
      view === 'phone' ? '280px' : 
      view === 'tablet' ? '500px' : 
      '560px'
    };
    height: ${({ view }) => 
      view === 'phone' ? '560px' : 
      view === 'tablet' ? '700px' : 
      '375px'
    };
  }

  @media (max-width: 480px) {
    width: ${({ view }) => 
      view === 'phone' ? '240px' : 
      view === 'tablet' ? '400px' : 
      '420px'
    };
    height: ${({ view }) => 
      view === 'phone' ? '480px' : 
      view === 'tablet' ? '600px' : 
      '320px'
    };
  }

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
    transform: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
  flex-wrap: wrap;
  justify-content: center;
  width: auto;
  max-width: 90%;

  @media (max-width: 768px) {
    bottom: 0.5rem;
    padding: 0.4rem;
    gap: 0.4rem;
    background: rgba(0, 0, 0, 0.7);
  }
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

  @media (max-width: 768px) {
    padding: 6px;
    
    svg {
      font-size: 1.2rem;
    }
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

  @media (max-width: 768px) {
    right: 1rem;
    padding: 0.5rem;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

interface DeviceFramesetProps {
  project: ProjectDetail;
  view: 'phone' | 'tablet' | 'laptop';
  onViewChange: (view: 'phone' | 'tablet' | 'laptop') => void;
}

export default function DeviceFrameset({ project, view, onViewChange }: DeviceFramesetProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  if(project.demoUrl == null || project.demoUrl == ""){
    return (
      <DeviceContainer>
        <DeviceFrame
          view={view}
            isDarkMode={isDarkMode}
            rotation={0}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <DeviceScreen>
              <Stack
                spacing={3}
                alignItems="center"
                justifyContent="center"
                sx={{
                  height: '100%',
                  p: 3,
                  background: isDarkMode ? '#1a1a1a' : '#f5f5f5',
                  color: isDarkMode ? '#fff' : '#000'
                }}
              >
                { (project.status == "development") ?
                <>
                <Typography variant="h5" fontWeight="bold">
                  Demo is in development
                </Typography>
                <Typography variant="body1" textAlign="center" color="text.secondary">
                  This project is currently in development.
                  Check out the repository for more details.
                </Typography>
                </>
                :
                <>
                <Typography variant="h5" fontWeight="bold">
                  Demo is not available
                </Typography>
                <Typography variant="body1" textAlign="center" color="text.secondary">
                  This project is already terminated.
                </Typography>
                </>
                }

                <Stack direction="row" spacing={2}>
                  {project.githubUrl && (
                    <Button
                      variant="contained"
                      startIcon={<GitHub />}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        bgcolor: 'background.paper',
                        '&:hover': { transform: 'translateY(-2px)' }
                      }}
                    >
                      View Source
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button
                      variant="outlined"
                      startIcon={<OpenInNew />}
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        borderColor: 'divider',
                        '&:hover': { transform: 'translateY(-2px)' }
                      }}
                    >
                      Live Preview
                    </Button>
                  )}
                </Stack>
              </Stack>
            </DeviceScreen>
          </DeviceFrame>
        </DeviceContainer>
    )
  }

  return (
    <DeviceContainer>
      <DeviceFrame
        view={view}
        isDarkMode={isDarkMode}
        rotation={0}
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
      </Controls>
    </DeviceContainer>
  );
} 