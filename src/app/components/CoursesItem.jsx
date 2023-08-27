import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import IconButton, { iconButtonClasses } from '@mui/material/IconButton'
import ArrowForward from '@mui/icons-material/ArrowForward'


const CourseCardItem = ({ item }) => {
    return (
        <Box
            sx={{
                px: 1,
                py: 4,
            }}
        >
            <Box>
                <img src={item.path} style={{ width: "100%", height: "100%" }} alt={'Course ' + item.id} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: item.backgroundColor }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h6">{item.title}</Typography>
                </Box>
                <IconButton
                    color="primary"
                    sx={{ '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' } }}
                >
                    <ArrowForward />
                </IconButton>
            </Box>
        </Box>
    )
}

export default CourseCardItem
