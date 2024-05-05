import React from "react";
import { CircularProgress, Box } from "@mui/material";

function Loading() {
  return (
    <Box
      height="100dvh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="black"
    >
      <CircularProgress />
    </Box>
  );
}

export default Loading;
