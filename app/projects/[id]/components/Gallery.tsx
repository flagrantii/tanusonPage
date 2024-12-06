'use client';

import React, { useState } from 'react';
import { Box, Grid, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { ProjectDetail } from '@/data/interface';
import Image from 'next/image';

const ImageCard = styled(motion.div)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
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

  return (
    <>
      <Grid container spacing={3}>
        {project.images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ImageCard
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                width={400}
                height={300}
                style={{ width: '100%', height: 'auto' }}
              />
            </ImageCard>
          </Grid>
        ))}
      </Grid>

      <LightboxModal
        open={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
      >
        <LightboxContent>
          <IconButton
            onClick={() => setSelectedImage(null)}
            sx={{ position: 'absolute', top: -40, right: -40, color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
          <IconButton
            onClick={handlePrev}
            sx={{ position: 'absolute', left: -60, top: '50%', color: 'white' }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{ position: 'absolute', right: -60, top: '50%', color: 'white' }}
          >
            <ChevronRightIcon />
          </IconButton>
          {selectedImage !== null && (
            <Image
              src={project.images[selectedImage]}
              alt={`${project.title} screenshot ${selectedImage + 1}`}
              width={1200}
              height={800}
              style={{ 
                width: 'auto',
                height: 'auto',
                maxWidth: '90vw',
                maxHeight: '90vh',
                objectFit: 'contain'
              }}
            />
          )}
        </LightboxContent>
      </LightboxModal>
    </>
  );
} 