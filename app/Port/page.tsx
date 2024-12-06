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

const PortfolioContainer = styled(Container)`
  padding-top: ${props => props.theme.spacing(10)};
  padding-bottom: ${props => props.theme.spacing(6)};

  @media (max-width: 768px) {
    padding-top: ${props => props.theme.spacing(8)};
    padding-bottom: ${props => props.theme.spacing(4)};
  }
`;

const SectionContainer = styled(Box)`
  animation: ${fadeIn} 0.8s ease-out;
  background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%);
  backdrop-filter: blur(8px);
  border-radius: ${props => props.theme.spacing(2)};
  padding: ${props => props.theme.spacing(4, 3)};
  margin: ${props => props.theme.spacing(3)} auto;
  max-width: min(1200px, 95%);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: ${props => props.theme.spacing(3, 2)};
    margin: ${props => props.theme.spacing(2)} auto;
    border-radius: ${props => props.theme.spacing(1.5)};
  }
`;

const SectionTitle = styled(Typography)`
  ${subtleGradient}
  font-size: ${props => props.theme.typography.pxToRem(32)};
  margin-bottom: ${props => props.theme.spacing(2)};
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: ${props => props.theme.typography.pxToRem(24)};
  }
`;

const SectionDescription = styled(Typography)`
  color: ${props => props.theme.palette.grey[400]};
  font-size: ${props => props.theme.typography.pxToRem(16)};
  margin-bottom: ${props => props.theme.spacing(4)};
  max-width: 800px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: ${props => props.theme.typography.pxToRem(14)};
    margin-bottom: ${props => props.theme.spacing(3)};
  }
`;

export default function PortfolioPage() {
  return (
    <PortfolioContainer maxWidth="xl">
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
    </PortfolioContainer>
  );
}
