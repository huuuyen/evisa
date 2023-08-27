import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
// import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "app/components/client/layout/footer.js";
import Header from "app/components/client/layout/header";
import StepForm from './StepForm';
export default function Index() {

    return (
        <>
            <Header />
            <Box >
                <Container sx={{ py: { xs: 2, md: 3 } }}> <StepForm /></Container>
            </Box>

            <Footer />
        </>
    );
}
