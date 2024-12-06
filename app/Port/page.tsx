'use client';

import React from 'react';
import WebCatelog from './components/WebCatelog';
import CareerCatelog from './components/CareerCatelog';
import CertCatalog from './components/CertCatalog';
import EduCatelog from './components/EduCatelog';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { fadeIn } from '@/utils/animations';
import { subtleGradient } from '@/utils/styles';

const SectionContainer = styled(Box)`
  animation: ${fadeIn} 0.8s ease-out;
  background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 0;
`;

const SectionTitle = styled(Typography)`
  ${subtleGradient}
  margin-bottom: 1rem;
`;

const SectionDescription = styled(Typography)`
  color: #94a3b8;
  margin-bottom: 2rem;
`;

export default function PortfolioPage() {
  return (
    <Container maxWidth="xl" sx={{ py: 6, mt: 8 }}>
      {/* Education Section */}
      <SectionContainer>
        <SectionTitle variant="h4" fontWeight="bold">
          Education
        </SectionTitle>
        <SectionDescription variant="h6">
          On my education page, discover the academic journey that has shaped my expertise in technology 
          and innovation. From foundational courses in computer engineering to advanced studies in web 
          app development, data science, each educational milestone demonstrates my dedication to mastering 
          complex concepts and staying at the forefront of technological advancements.
        </SectionDescription>
        <EduCatelog />
      </SectionContainer>

      {/* Projects Section */}
      <SectionContainer>
        <SectionTitle variant="h4" fontWeight="bold">
          Projects
        </SectionTitle>
        <SectionDescription variant="h6">
          On my projects page, explore a portfolio reflecting my passion for innovation. From intuitive 
          mobile apps to robust web solutions, each project showcases my expertise and commitment to 
          delivering high-quality, user-centric experiences in the ever-evolving landscape of technology.
        </SectionDescription>
        <WebCatelog />
      </SectionContainer>

      {/* Career Section */}
      <SectionContainer>
        <SectionTitle variant="h4" fontWeight="bold">
          Career
        </SectionTitle>
        <SectionDescription variant="h6">
          Embarking on a dynamic tech career, I leverage creativity and adaptability to navigate challenges. 
          Passionate about shaping innovative solutions, I thrive in collaborative environments, driving 
          impactful results. Continuous learning fuels my growth as I contribute to cutting-edge projects, 
          making a meaningful impact on the tech landscape.
        </SectionDescription>
        <CareerCatelog />
      </SectionContainer>

      {/* Certificates Section */}
      <SectionContainer>
        <SectionTitle variant="h4" fontWeight="bold">
          Certificates
        </SectionTitle>
        <SectionDescription variant="h6">
          Start your journey of skill mastery. Express creativity, adaptability, and enthusiasm for 
          creating innovative solutions. Thrive in a collaborative environment. Achieve impactful results 
          driven by a commitment to continuous learning.
        </SectionDescription>
        <CertCatalog />
      </SectionContainer>
    </Container>
  );
}
