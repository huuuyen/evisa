import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
// import { ReactComponent as LogoSvg } from '/assets/images/logos/logo3.svg';
// import { Logo } from 'app/components/Logo';
import Navigation from 'app/components/navigation/navigation'
import AuthNavigation from 'app/components/navigation/auth-navigation'
import { useTheme } from '@mui/material/styles'
import { Menu, Close } from '@mui/icons-material'

const Header = () => {
    const [visibleMenu, setVisibleMenu] = useState(false)
    const { breakpoints } = useTheme()

    const matchMobileView = useMediaQuery(breakpoints.down('md'))

    return (
        <Box sx={{ background: "#810C11", color: "#FFFFFF" }}>
            <Container sx={{ py: { xs: 2, md: 3 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <img src="/assets/images/logos/logo3.svg" />
                    <Box sx={{ ml: 'auto', display: { xs: 'inline-flex', md: 'none' } }}>
                        <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>
                            <Menu />
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexDirection: { xs: 'column', md: 'row' },

                            transition: (theme) => theme.transitions.create(['top']),
                            ...(matchMobileView && {
                                py: 6,
                                backgroundColor: 'background.paper',
                                zIndex: 'appBar',
                                position: 'fixed',
                                color: "rgba(52, 49, 76, 1)",
                                height: { md: 'auto' },
                                top: visibleMenu ? 0 : '-120vh',
                                left: 0,
                            }),
                        }}
                    >
                        <Box /> {/* Magic space */}
                        <Navigation visibleMenu={visibleMenu} />
                        <AuthNavigation visibleMenu={visibleMenu} />
                        {visibleMenu && matchMobileView && (
                            <IconButton
                                sx={{
                                    position: 'fixed',
                                    top: 10,
                                    right: 10,
                                }}
                                onClick={() => setVisibleMenu(!visibleMenu)}
                            >
                                <Close />
                            </IconButton>
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Header
