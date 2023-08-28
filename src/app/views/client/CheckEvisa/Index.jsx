import React from "react";
import { Link } from "react-router-dom";
import Container from '@mui/material/Container'
// import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "app/components/client/layout/footer.js";
import { Span } from "app/components/Typography";
import Header from "app/components/client/layout/header";
import Typography from '@mui/material/Typography'
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Button,
    Box,
    FormControlLabel,
    Grid, styled,
    Autocomplete,
    TextField,
    RadioGroup,
    Checkbox,
    Radio
} from "@mui/material";
import LanguageSelector from 'app/components/client/layout/language';

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
export default function Index() {
    return (
        <>
            <LanguageSelector />
            <Header />
            <Box >
                <Container sx={{ py: { xs: 2, md: 3 } }}>
                    <Box sx={{ marginTop: "2px" }}>
                        <Container>
                            <Box
                                sx={{
                                    py: { xs: 2, md: 5 },
                                    px: { xs: 2, md: 5 },
                                    textAlign: 'center',

                                }}
                            >
                                <Typography variant="h2" component="h2" sx={{ mb: 1, fontWeight: "bold", marginBottom: "30px", fontSize: { xs: 15, md: 35 } }}>
                                    Check application status and download E-Visa
                                </Typography>
                                <Box sx={{
                                    boxShadow: "0px 4px 10px 0px #00000040;",
                                    backgroundColor: '#F9F9F9',
                                    width: { xs: '100%', md: 680 },
                                    paddingBottom: "30px",
                                    margin: '0 auto',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                }}>
                                    <Typography sx={{ pt: 3, fontWeight: 'bold', color: '#000000', fontSize: { xs: 15, md: 35 } }}>evisa status search</Typography>
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
                                                    <StyleLable>Registration code</StyleLable>
                                                    <StyleTextField name="code" fullWidth size='small' />
                                                </>

                                            </Grid>

                                            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                                                <>
                                                    <StyleLable>Email</StyleLable>
                                                    <StyleTextField name="Email" fullWidth size='small' />
                                                </>

                                            </Grid>

                                            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                                                <>
                                                    <StyleLable>Date of birth</StyleLable>
                                                    <StyleTextField name="date" fullWidth size='small' />
                                                </>

                                            </Grid>

                                            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                                                <>
                                                    <StyleLable>Captcha</StyleLable>
                                                    <StyleTextField name="Captcha" fullWidth size='small' />
                                                </>

                                            </Grid>


                                        </Grid>
                                        <Box style={{ marginTop: "40px" }}>
                                            <Button style={{ width: "260px", background: "#810C11", fontWeight: "bold", color: "#FFFFFF", borderRadius: "5px" }} size="large">
                                                SEARCH
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Container >
                    </Box >
                </Container>
            </Box>

            <Footer />
        </>
    );
}
