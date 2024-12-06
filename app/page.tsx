"use client"
import MainContent from "@/components/MainContent";
import Spline from "@splinetool/react-spline";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { useState } from "react";

const HomeContainer = styled(Box)`
  min-height: 100vh;
  position: relative;
  background: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing(2)};

  @media (max-width: 768px) {
    padding-top: ${props => props.theme.spacing(10)};
    align-items: flex-start;
  }
`;

const SplineContainer = styled(Box)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 50%;
  height: 80vh;
  z-index: 0;
  opacity: 0.8;
  transition: all 0.5s ease;

  @media (max-width: 1200px) {
    width: 100%;
    height: 50vh;
    opacity: 0.3;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    height: 40vh;
    top: auto;
    bottom: 0;
    transform: none;
  }
`;

const ContentWrapper = styled(Box)`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

export default function Home() {
  const theme = useTheme(); 
  const [isDesktop, setIsDesktop] = useState(0);
  useEffect(() => {
    setIsDesktop(window.innerWidth)
  }, []);

  return (
    <HomeContainer>
      <ContentWrapper>
        <MainContent />
      </ContentWrapper>
      {
      (isDesktop >=1600)? 
        <Spline className="h-2" scene="https://prod.spline.design/lsjnayOXzDK5gyEj/scene.splinecode" />
      : null
    }
    </HomeContainer>
  );
}
