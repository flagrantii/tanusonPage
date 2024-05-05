import { Box, Typography } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function NavbarRoute() {
    const router = useRouter()
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
        >
            <Typography onClick={() => router.push('/')} sx={{color:"white", cursor:"pointer"}}>Home</Typography>
            <Typography onClick={() => router.push('/Port')} sx={{color:"white", cursor:"pointer"}}>Port</Typography>
            <Typography onClick={() => router.push('/Info')} sx={{color:"white", cursor:"pointer"}}>Info</Typography>
        </Box>
    )
}
