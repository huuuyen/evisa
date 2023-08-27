import React from 'react'
import Box from '@mui/material/Box'
import { Link as ScrollLink } from 'react-scroll'
import { useNavigate } from 'react-router-dom';
// import { navigations } from './navigation.data'
let navigations = [
    {
        label: 'Trang chủ',
        path: 'home', // '/',
    },
    {
        label: 'Thanh toán',
        path: 'payment', // '/popular-course',
    },
    {
        label: 'Dịch vụ Visa',
        path: 'service', // '/testimonial',
    },
    {
        label: 'FAQ',
        path: 'FAQ', // '/mentors',
    },
    {
        label: 'Tra cứu evisa',
        path: 'check-evisa', // '/mentors',
    },
]
const Navigation = (visibleMenu) => {
    const navigate = useNavigate();
    const handleRoute = (event, path) => {
        navigate(`/${path}`)
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            {navigations.map(({ path: destination, label }) => (
                <Box
                    component={ScrollLink}
                    key={destination}
                    activeClass="current"
                    to={destination}
                    onClick={(e) => handleRoute(e, destination)}
                    spy={true}
                    smooth={true}
                    duration={350}
                    sx={{
                        position: 'relative',
                        cursor: 'pointer',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        px: { xs: 0, md: 3 },
                        mb: { xs: 3, md: 0 },
                        fontSize: { xs: '1.2rem', md: 'inherit' },
                        ...(destination === '/' && {
                            color: 'primary.main',
                        }),

                        '& > div': { display: 'none' },

                        '&.current>div': { display: 'block' },

                        // '&:hover': {
                        //     color: 'primary.main',
                        //     '&>div': {
                        //         display: 'block',
                        //     },
                        // },
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 12,
                            transform: 'rotate(3deg)',
                            '& img': { width: 44, height: 'auto' },
                        }}
                    >
                        {/* eslint-disable-next-line */}
                        <img src="/images/headline-curve.svg" alt="Headline curve" />
                    </Box>
                    {label}
                </Box>
            ))}
        </Box>
    )
}

export default Navigation