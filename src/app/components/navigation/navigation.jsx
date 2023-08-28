import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import { Link as ScrollLink } from 'react-scroll'
import { useNavigate, Link } from 'react-router-dom';
// import { navigations } from './navigation.data'
let navigations = [
    {
        label: 'Trang chủ',
        path: '/index', // '/',
    },

    {
        label: 'Dịch vụ Visa',
        path: '/service', // '/testimonial',
    },
    {
        label: 'FAQ',
        path: '/FAQ', // '/mentors',
    },
    {
        label: 'Tra cứu evisa',
        path: '/check-evisa', // '/mentors',
    },
]
const Navigation = (visibleMenu) => {
    const navigate = useNavigate();
    const [selectedMenu, setSelectedMenu] = useState('');


    const handleRoute = (event, path) => {
        navigate(`/${path}`)
        setSelectedMenu(path);
    }
    return (<Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        {navigations.map(({ path: destination, label }) => (
            //  <Link
            //  key={destination}
            //  to={destination}
            //      // onClick={(e) => handleRoute(e, destination)}
            //      sx={{
            //          position: 'relative',
            //          cursor: 'pointer',
            //          fontWeight: 600,
            //          display: 'inline-flex',
            //          alignItems: 'center',
            //          justifyContent: 'center',
            //          px: { xs: 0, md: 3 },
            //          mb: { xs: 3, md: 0 },
            //          fontSize: { xs: '1.2rem', md: 'inherit' },
            //          color: 'inherit', // Mặc định sẽ kế thừa màu sắc từ cha
            //          textDecoration: 'none', // Loại bỏ gạch chân mặc định
            //          ...(destination === '/' && {
            //              color: 'primary.main',
            //          }),

            //          '& > div': { display: 'none' },

            //          '&.current>div': { display: 'block' },
            //          ...(destination === selectedMenu && {
            //              borderBottom: '2px solid red', // Thay 'red' bằng màu của dấu gạch dưới
            //          }),
            //      }}
            //  >
            //      {label}
            //  </Link>
            <Box
                component={ScrollLink}
                // key={destination}
                activeClass="current"
                // to={destination}
                // onClick={(e) => handleRoute(e, destination)}
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
                    ...(destination === selectedMenu && {
                        borderBottom: '2px solid red', // Thay 'red' bằng màu của dấu gạch dưới
                    }),
                }}
            >
                <Link
                    key={destination}
                    to={destination}> {label}</Link>

            </Box>
        ))}
    </Box>

    )
}

export default Navigation
