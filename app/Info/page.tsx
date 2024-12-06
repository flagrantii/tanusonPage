'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { fadeIn, slideIn } from '@/utils/animations'
import styled from '@emotion/styled'
import { School, Laptop, Rocket } from "@mui/icons-material";

const StyledSection = styled.section`
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(180deg, rgba(13,17,23,0.8) 0%, rgba(13,17,23,0.4) 100%);
    z-index: -1;
  }

  @media (max-width: 1024px) {
    .content-wrapper {
      flex-direction: column-reverse;
    }
  }
`

const TextContainer = styled(motion.div)`
  h1 {
    background: linear-gradient(to right, #64B5F6, #2196F3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1.5rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 60px;
      height: 3px;
      background: linear-gradient(to right, #64B5F6, #2196F3);
      border-radius: 2px;
    }
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
`

const ImageContainer = styled(motion.div)`
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(33,150,243,0.15), transparent);
    border-radius: 1rem;
    box-shadow: 0 8px 32px rgba(31,38,135,0.15);
  }

  img {
    border-radius: 1rem;
    transition: all 0.4s ease;
    filter: brightness(0.95);
    
    &:hover {
      transform: scale(1.02) translateY(-5px);
      filter: brightness(1.05);
    }
  }
`

const HighlightCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-5px);
  }

  .icon {
    color: #2196F3;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`

export default function InfoPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  const highlights = [
    {
      icon: <School />,
      title: "Education",
      description: "CEDT, Chulalongkorn University"
    },
    {
      icon: <Laptop />,
      title: "Expertise",
      description: "Full-stack Development"
    },
    {
      icon: <Rocket />,
      title: "Focus",
      description: "Innovation & Problem Solving"
    }
  ]

  return (
    <StyledSection ref={ref}>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="content-wrapper flex flex-col lg:flex-row justify-between gap-12 mt-20">
          <TextContainer
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
            }}
            className="w-full lg:w-5/12"
          >
            <motion.h1 
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
              className="text-4xl lg:text-5xl font-bold"
            >
              About Me
            </motion.h1>
            
            <motion.p 
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              className="text-gray-200 text-lg"
            >
              A motivated and highly detail-oriented Software Engineer with a proven track record of designing, developing, and implementing innovative software solutions.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              {highlights.map((item, index) => (
                <HighlightCard
                  key={index}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="icon">{item.icon}</div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </HighlightCard>
              ))}
            </div>

            <motion.h1 
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
              className="text-4xl lg:text-5xl font-bold mt-8"
            >
              My Journey
            </motion.h1>
            
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              className="space-y-4"
            >
              <p className="text-gray-200">
                Since the sixth grade, I've been immersed in the world of technology, exploring various initiatives and studies centered around computers. This early exposure shaped my path in the tech industry.
              </p>
              <p className="text-gray-200">
                My involvement in PCCNST's tech initiatives and ThaiHealth camp experiences have shaped my passion for creating impactful solutions and fostered my love for continuous learning.
              </p>
            </motion.div>
          </TextContainer>

          <ImageContainer
            style={{ y }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.7, 
              ease: "easeOut",
              delay: 0.2 
            }}
            className="w-full lg:w-6/12 flex items-center justify-center sticky top-20"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-md"
            >
              <img 
                className="w-full rounded-lg shadow-2xl"
                src="/image/me5.png" 
                alt="Profile Image"
                loading="lazy"
              />
              <motion.div
                className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Software Engineer
              </motion.div>
            </motion.div>
          </ImageContainer>
        </div>
      </div>
    </StyledSection>
  )
}