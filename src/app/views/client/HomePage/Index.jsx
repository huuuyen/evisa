import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box'
// import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "app/components/client/layout/footer.js";
import Header from "app/components/client/layout/header";
import Banner from './BannerForm'
import VietNamVisa from './VietNam-visa'
import Courses from './Courses'
import LanguageSelector from 'app/components/client/layout/language';
export default function Index() {
    let dataService = [
        { id: 1, path: "/assets/images/content/service1.PNG", title: "Fastrack", backgroundColor: "#FF686F" },
        { id: 2, path: "/assets/images/content/service2.PNG", title: "Way2Go", backgroundColor: "#FFFF00" },
        { id: 3, path: "/assets/images/content/service3.PNG", title: "Fast Evisa", backgroundColor: "#2CF2FF" }
    ]
    let dataComboProduct = [
        { id: 1, path: "/assets/images/content/service1.PNG", title: "Fastrack + Fast Evisa ", backgroundColor: "#FF686F" },
        { id: 2, path: "/assets/images/content/service2.PNG", title: "SIM Way2Go + Fast Evisa", backgroundColor: "#FFFF00" },
        { id: 3, path: "/assets/images/content/service3.PNG", title: "Combo Way2Go + Fast Evisa", backgroundColor: "#2CF2FF" }
    ]
    return (
        <>
            <Box>
                <LanguageSelector />
                <Header />
                <Banner />
                <VietNamVisa />
                <Courses data={dataService} title="Other Services" />
                <Courses data={dataComboProduct} title="Combo product" />
                <Footer />
            </Box>
        </>
    );
}
