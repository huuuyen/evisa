import React from 'react'

import {
    Button,
    Box,
    FormControlLabel,
    Grid, styled,
    Autocomplete,
    TextField
} from "@mui/material";
import { Span } from "app/components/Typography";
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
// import { StyledButton } from '../styled-button'

const StyleTextField = styled(TextField)(() => ({
    width: '100%',
}));
const StyleLable = styled(Span)(() => ({
    textAlign: 'left',
    fontSize: "15px",
    fontWeight: "500",
    lineHeight: '18px',
    paddingBottom: '5px',
    color: "#000000",
    display: "block"
}));
const suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Albania' },
];

const Banner = () => {
    return (
        <Box sx={{ background: "#810C11", color: "#FFFFFF", marginTop: "2px" }}>
            <Container>
                <Box
                    sx={{
                        backgroundColor: '#810C11',
                        py: { xs: 2, md: 10 },
                        px: { xs: 2, md: 8 },
                        textAlign: 'center',

                    }}
                >
                    <Typography variant="h2" component="h2" sx={{ mb: 1, fontWeight: "bold", fontSize: { xs: 15, md: 35 } }}>
                        The Most Trusted Vietnam Visa, Immigration & Expatriate Consultant
                    </Typography>
                    <Box sx={{
                        backgroundColor: 'white',
                        width: { xs: '100%', md: 560 },
                        height: '365px',
                        margin: '0 auto',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                        <Typography sx={{ pt: 3, fontWeight: 'bold', color: '#000000', fontSize: { xs: 15, md: 35 } }}>Start</Typography>
                        <Box
                            sx={{

                                flexDirection: { xs: 'column', md: 'row' },
                                justifyContent: 'space-around',
                                px: { xs: 2, md: 8 },
                                mx: 'auto',
                            }}
                        >
                            <Grid container spacing={1}>
                                <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                                    <>
                                        <StyleLable>Current nationality</StyleLable>
                                        <Autocomplete
                                            name="nationality"
                                            options={suggestions}
                                            getOptionLabel={(option) => option.label}
                                            getOptionDisabled={(option) => option === suggestions[0] || option === suggestions[2]}
                                            renderInput={(params) => (
                                                <StyleTextField {...params} fullWidth size='small' />
                                            )}
                                        />
                                    </>

                                </Grid>

                                <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                                    <>
                                        <StyleLable>Services</StyleLable>
                                        <Autocomplete
                                            name="nationality"
                                            options={suggestions}
                                            getOptionLabel={(option) => option.label}
                                            getOptionDisabled={(option) => option === suggestions[0] || option === suggestions[2]}
                                            renderInput={(params) => (
                                                <StyleTextField {...params} fullWidth size='small' />
                                            )}
                                        />
                                    </>

                                </Grid>
                            </Grid>
                            <Box style={{ marginTop: "40px" }}>
                                <Button style={{ width: "260px", background: "#810C11", fontWeight: "bold", color: "#FFFFFF", borderRadius: "5px" }} size="large">
                                    Tiếp tục
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container >
        </Box >
    )
}

export default Banner
