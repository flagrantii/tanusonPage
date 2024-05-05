"use client"
import { Box, Button, Container, Typography, colors } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { useRouter } from 'next/navigation';

export default function MainContent() {
    const router = useRouter()
  return (
    <>
        <Box
            component={Container}
            position={"absolute"}
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            top={"20%"}
            width={"50%"}
            marginLeft={3}
        >
            <Typography variant="h1" color={"white"} fontWeight={"bold"} fontSize={"h1"}>Tanuson Deachaboonchana</Typography>
            <Typography variant="h4" color={"white"} fontWeight={"semi-bold"} fontSize={"h4"}>Software Engineer, FullStack Developer</Typography>
            <Typography variant="h6" color={"white"}fontWeight={"semi"} fontSize={"h4"}>CEDT student, Enthusiastic Software Developer specializing in Web Ap Development , committed to empowering others through innovative and user-centric digital solutions.</Typography>
            <Button 
                variant="outlined" 
                endIcon={<SendIcon />}
                sx={{
                    color: "white",
                    borderColor: "white",
                    '&:hover': {
                        backgroundColor: colors.blue[800],
                    },
                    width: "fit-content",
                    marginTop: 2
                }}
                onClick={() => router.push('/Port')}
            >
                See More
            </Button>
        </Box>
    </>
  )
}
