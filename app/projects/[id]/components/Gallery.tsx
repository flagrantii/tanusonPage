'use client';

import React, { useState } from 'react';
import { Box, Grid, Modal, IconButton, Typography, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { ProjectDetail } from '@/data/interface';
import Image from 'next/image';
import { ImageNotSupported } from '@mui/icons-material';

const ImageCard = styled(motion.div)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 0;
  padding-bottom: 75%; // 4:3 aspect ratio
  background: rgba(255, 255, 255, 0.03);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    padding-bottom: 66.67%; // 3:2 aspect ratio for tablets
  }

  @media (max-width: 480px) {
    padding-bottom: 56.25%; // 16:9 aspect ratio for mobile
  }
`;

const LightboxModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LightboxContent = styled(Box)`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  margin: 0 20px;

  @media (max-width: 768px) {
    margin: 0 10px;
  }
`;

const NoImagesContainer = styled(motion.div)`
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;

  @media (max-width: 768px) {
    min-height: 250px;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    min-height: 200px;
    padding: 1rem;
  }
`;

export default function Gallery({ project }: { project: ProjectDetail }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleNext = () => {
    setSelectedImage(prev => 
      prev !== null ? (prev + 1) % project.images.length : null
    );
  };

  const handlePrev = () => {
    setSelectedImage(prev => 
      prev !== null ? (prev - 1 + project.images.length) % project.images.length : null
    );
  };

  if (project.images.length === 0) {
    return (
      <NoImagesContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Stack spacing={3} alignItems="center">
          <ImageNotSupported 
            sx={{ 
              fontSize: 60, 
              color: 'rgba(255, 255, 255, 0.3)',
              mb: 2 
            }} 
          />
          
          <Typography 
            variant="h5" 
            fontWeight="bold"
            color="white"
          >
            No Images Available
          </Typography>
          
          <Typography 
            variant="body1" 
            textAlign="center" 
            color="white"
            sx={{ maxWidth: '500px' }}
          >
            This project doesn't have any screenshots or images yet. 
            Check back later or visit the project repository for more details.
          </Typography>
        </Stack>
      </NoImagesContainer>
    );
  }

  return (
    <>
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
        {project.images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ImageCard
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                priority={index < 6} // Load first 6 images immediately
              />
            </ImageCard>
          </Grid>
        ))}
      </Grid>

      <LightboxModal
        open={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        sx={{
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.9)'
          }
        }}
      >
        <LightboxContent>
          <IconButton
            onClick={() => setSelectedImage(null)}
            sx={{ 
              position: 'absolute', 
              top: { xs: -30, sm: -40 }, 
              right: { xs: -10, sm: -40 }, 
              color: 'white',
              '@media (max-width: 480px)': {
                top: 10,
                right: 10,
              }
            }}
          >
            <CloseIcon />
          </IconButton>
          
          {project.images.length > 1 && (
            <>
              <IconButton
                onClick={handlePrev}
                sx={{ 
                  position: 'absolute', 
                  left: { xs: 10, sm: -60 }, 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.6)'
                  }
                }}
              >
                <ChevronLeftIcon />
              </IconButton>
              <IconButton
                onClick={handleNext}
                sx={{ 
                  position: 'absolute', 
                  right: { xs: 10, sm: -60 }, 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.6)'
                  }
                }}
              >
                <ChevronRightIcon />
              </IconButton>
            </>
          )}
          
          {selectedImage !== null && (
            <Image
              src={project.images[selectedImage]}
              alt={`${project.title} screenshot ${selectedImage + 1}`}
              width={1200}
              height={800}
              style={{ 
                width: '100%',
                height: 'auto',
                maxWidth: '90vw',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
              priority
            />
          )}
        </LightboxContent>
      </LightboxModal>
    </>
  );
} 