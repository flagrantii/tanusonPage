'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Box, Typography, Grid, TextField, Button, 
  Card, IconButton, Snackbar, Alert,
  useTheme, useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  GitHub, LinkedIn, Email, 
  Send, X, ArrowOutward
} from '@mui/icons-material';
import Link from 'next/link';

const ContactCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  height: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.05),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

const SocialButton = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  svg {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(5px);
    border-radius: 12px;
    transition: all 0.3s ease;
    
    fieldset {
      border-color: rgba(255, 255, 255, 0.1);
      border-width: 1px;
      transition: all 0.3s ease;
    }
    
    &:hover fieldset {
      border-color: rgba(255, 255, 255, 0.2);
    }
    
    &.Mui-focused {
      background: rgba(255, 255, 255, 0.05);
      
      fieldset {
        border-color: ${({ theme }) => theme.palette.primary.main};
        border-width: 2px;
      }
    }
  }

  .MuiInputLabel-root {
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s ease;
    
    &.Mui-focused {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }

  input, textarea {
    color: white;
    font-size: 1rem;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

const SendButton = styled(Button)`
  background: linear-gradient(45deg, #2196F3, #64B5F6);
  border-radius: 12px;
  padding: 12px 24px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(33, 150, 243, 0.3);
    background: linear-gradient(45deg, #1976D2, #42A5F5);
  }

  &:disabled {
    background: linear-gradient(45deg, #9e9e9e, #bdbdbd);
  }
`;

const socialLinks = [
  { 
    icon: <GitHub />, 
    url: 'https://github.com/flagrantii', 
    color: '#fff',
    label: 'GitHub'
  },
  { 
    icon: <LinkedIn />, 
    url: 'https://www.linkedin.com/in/tanuson-deachaboonchana-743a3029b/', 
    color: '#0077B5',
    label: 'LinkedIn'
  },
  { 
    icon: <X />, 
    url: 'https://twitter.com/TanusonD10318', 
    color: '#000000',
    label: 'Twitter'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });
  const [isLoading, setIsLoading] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSnackbar({
        open: true,
        message: 'Message sent successfully! I will get back to you soon.',
        severity: 'success'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSnackbar({
        open: true,
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
        severity: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box 
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{ 
        p: { xs: 2, sm: 4, md: 6 }, 
        mt: { xs: 4, sm: 6, md: 8 },
        maxWidth: '1400px',
        mx: 'auto'
      }}
    >
      <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
        <Grid item xs={12} md={6}>
          <ContactCard
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Typography 
              variant="h4" 
              gutterBottom
              sx={{ 
                background: 'linear-gradient(to right, #64B5F6, #2196F3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 3,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
                fontWeight: 600
              }}
            >
              Get in Touch
            </Typography>

            <form onSubmit={handleSubmit}>
              <StyledTextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <StyledTextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <StyledTextField
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
              <SendButton
                type="submit"
                variant="contained"
                size="large"
                startIcon={<Send />}
                disabled={isLoading}
                sx={{ 
                  mt: 2,
                  background: 'linear-gradient(45deg, #2196F3, #64B5F6)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1976D2, #42A5F5)'
                  }
                }}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </SendButton>
            </form>
          </ContactCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <ContactCard
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Typography 
              variant="h4" 
              gutterBottom
              sx={{ 
                background: 'linear-gradient(to right, #64B5F6, #2196F3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 3,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
                fontWeight: 600
              }}
            >
              Connect With Me
            </Typography>

            <Box 
              sx={{ 
                display: 'flex', 
                gap: { xs: 2, sm: 3 }, 
                mb: 4,
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', sm: 'flex-start' }
              }}
            >
              {socialLinks.map((social, index) => (
                <Link 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <SocialButton
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 300
                    }}
                    style={{ color: social.color }}
                  >
                    {social.icon}
                    <motion.div
                      className="hover-effect"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </SocialButton>
                </Link>
              ))}
            </Box>

            <Box>
              <Typography 
                variant="body1" 
                color="gray" 
                gutterBottom
                sx={{ 
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  opacity: 0.8
                }}
              >
                Or reach me directly at:
              </Typography>
              <Typography 
                variant="h6" 
                color="primary.light"
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  wordBreak: 'break-all'
                }}
              >
                <Email /> tanuson679@gmail.com
              </Typography>
            </Box>
          </ContactCard>
        </Grid>
      </Grid>

      <AnimatePresence>
        {snackbar.open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <Snackbar
              open={snackbar.open}
              autoHideDuration={6000}
              onClose={() => setSnackbar({ ...snackbar, open: false })}
            >
              <Alert 
                severity={snackbar.severity}
                sx={{ 
                  width: '100%',
                  backdropFilter: 'blur(10px)',
                  background: snackbar.severity === 'success' 
                    ? 'rgba(46, 125, 50, 0.9)'
                    : 'rgba(211, 47, 47, 0.9)'
                }}
              >
                {snackbar.message}
              </Alert>
            </Snackbar>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
} 