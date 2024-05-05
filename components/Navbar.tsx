"use client"
import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import HubIcon from '@mui/icons-material/Hub';
import NavbarRoute from './NavbarRoute';

export default function Navbar() {
return (
<>
    <Box
    padding={2}
    display={"flex"}
    justifyContent={"space-between"}
    gap={2}
    >
    <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
    >
        <HubIcon sx={{color:"blue"}} fontSize='large' />
        <Typography variant="h6" color={"white"} fontWeight={"bold"} fontSize={"h6"}>Tanuson Deachaboonchana</Typography>
    </Box>

    <NavbarRoute />
    <Container></Container>
    </Box>
</>
)

}