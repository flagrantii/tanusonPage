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

  @media (max-width: 900px) {
    padding: 1.5rem;
  }

  @media (max-width: 600px) {
    padding: 1.25rem;
  }
`;

const SocialButton = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  padding: 0.875rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 600px) {
    padding: 0.75rem;
  }

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

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    background: 'rgba(18, 18, 18, 0.5)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: '1px',
      transition: 'all 0.3s ease',
    },
    
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    
    '&.Mui-focused': {
      background: 'rgba(18, 18, 18, 0.7)',
      
      '& fieldset': {
        borderColor: theme.palette.primary.main,
        borderWidth: '2px',
      },
    },

    // Input text color
    '& input, & textarea': {
      color: '#ffffff !important',
      WebkitTextFillColor: '#ffffff !important',
      caretColor: '#ffffff !important',
      '&::placeholder': {
        color: 'rgba(255, 255, 255, 0.5) !important',
        WebkitTextFillColor: 'rgba(255, 255, 255, 0.5) !important',
        opacity: 1,
      },
    },

    // Autofill styles for Safari
    '& input:-webkit-autofill, & textarea:-webkit-autofill': {
      boxShadow: '0 0 0 30px rgba(18, 18, 18, 0.8) inset !important',
      WebkitBoxShadow: '0 0 0 30px rgba(18, 18, 18, 0.8) inset !important',
      WebkitTextFillColor: '#ffffff !important',
      caretColor: '#ffffff !important',
      borderRadius: '12px',
    },
  },

  // Label styles
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
    WebkitTextFillColor: 'rgba(255, 255, 255, 0.7)',
    
    '&.Mui-focused': {
      color: theme.palette.primary.main,
      WebkitTextFillColor: theme.palette.primary.main,
    },
  },

  // Input styles
  '& .MuiOutlinedInput-input': {
    padding: '14px 16px',
    fontSize: '1rem',
  },

  '& .MuiInputBase-multiline': {
    padding: '14px 16px',
  },

  // Safari-specific fixes
  '@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)': {
    '& .MuiOutlinedInput-root': {
      background: 'rgba(18, 18, 18, 0.8)',
      '& input, & textarea': {
        color: '#ffffff !important',
        WebkitTextFillColor: '#ffffff !important',
        caretColor: '#ffffff !important',
      },
    },
  },

  // Mobile optimization
  '@media (max-width: 600px)': {
    '& .MuiOutlinedInput-input': {
      fontSize: '0.875rem',
      padding: '12px 14px',
    },
    '& .MuiInputLabel-root': {
      fontSize: '0.875rem',
    },
    '& .MuiInputBase-multiline': {
      minHeight: '120px',
    },
  },
}));

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
        if (response.status === 429) {
          throw new Error(data.error); // Rate limit error message
        }
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
        p: { xs: 2, sm: 3, md: 4 },
        mt: { xs: 8, sm: 10, md: 12 },
        maxWidth: '1200px',
        mx: 'auto',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Grid 
        container 
        spacing={{ xs: 3, sm: 4, md: 4 }}
        alignItems="stretch"
        sx={{
          width: '100%',
          mx: 'auto',
          px: { xs: 1, sm: 2 },
        }}
      >
        <Grid item xs={12} md={6}>
          <ContactCard
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              minHeight: '100%',
            }}
          >
            <Typography 
              variant="h4" 
              gutterBottom
              sx={{ 
                background: 'linear-gradient(to right, #64B5F6, #2196F3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: { xs: 3, sm: 3.5 },
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                fontWeight: 600,
                textAlign: { xs: 'center', sm: 'left' }
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
                sx={{ 
                  mb: { xs: 2.5, sm: 3 },
                  '& .MuiOutlinedInput-root': {
                    height: { xs: '45px', sm: 'auto' }
                  }
                }}
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
                sx={{ 
                  mb: { xs: 2.5, sm: 3 },
                  '& .MuiOutlinedInput-root': {
                    height: { xs: '45px', sm: 'auto' }
                  }
                }}
              />
              <StyledTextField
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                multiline
                rows={isMobile ? 5 : 3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                sx={{ 
                  mb: { xs: 2.5, sm: 3 },
                  '& .MuiOutlinedInput-root': {
                    height: 'auto',
                    minHeight: { xs: '120px', sm: 'auto' }
                  }
                }}
              />
              <Box 
                sx={{ 
                  mt: { xs: 3, sm: 4 },
                  display: 'flex',
                  justifyContent: { xs: 'center', sm: 'flex-start' }
                }}
              >
                <SendButton
                  type="submit"
                  variant="contained"
                  size="medium"
                  startIcon={<Send />}
                  disabled={isLoading}
                  sx={{ 
                    mt: { xs: 1, sm: 1.5 },
                    py: { xs: 1.5, sm: 1.75 },
                    px: { xs: 3, sm: 4 },
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    minWidth: { xs: '200px', sm: 'auto' },
                    background: 'linear-gradient(45deg, #2196F3, #64B5F6)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1976D2, #42A5F5)'
                    }
                  }}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </SendButton>
              </Box>
            </form>
          </ContactCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <ContactCard
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              minHeight: '100%',
            }}
          >
            <Typography 
              variant="h4" 
              gutterBottom
              sx={{ 
                background: 'linear-gradient(to right, #64B5F6, #2196F3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: { xs: 3, sm: 3.5 },
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                fontWeight: 600,
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              Connect With Me
            </Typography>

            <Box 
              sx={{ 
                display: 'flex', 
                gap: { xs: 3, sm: 2 },
                mb: { xs: 4, sm: 3 },
                flexWrap: 'wrap',
                justifyContent: 'center',
                px: { xs: 2, sm: 0 }
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
                    whileHover={{ y: -3, scale: 1.05 }}
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
                  </SocialButton>
                </Link>
              ))}
            </Box>

            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography 
                variant="body1" 
                color="gray" 
                gutterBottom
                sx={{ 
                  fontSize: { xs: '0.875rem', sm: '0.9rem' },
                  opacity: 0.8,
                  mb: 2
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
                  justifyContent: { xs: 'center', sm: 'flex-start' },
                  gap: 1,
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                  wordBreak: 'break-all'
                }}
              >
                <Email sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem' } }} /> 
                tanuson679@gmail.com
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