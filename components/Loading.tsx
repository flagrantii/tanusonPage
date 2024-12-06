'use client';

import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

function Loading() {
  return (
    <Box
      height="100dvh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgcolor="black"
      gap={3}
    >
      <Box
        component="img"
        src="/icon/connection.png"
        alt="logo"
        width={60}
        height={60}
        sx={{
          animation: `${pulse} 2s infinite ease-in-out`,
        }}
      />
      <Typography variant="h6" color="primary.main" fontWeight="medium">
        Loading...
      </Typography>
    </Box>
  );
}

export default Loading;
