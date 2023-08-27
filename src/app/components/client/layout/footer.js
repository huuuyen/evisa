/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
// import Box from "components/Box";
// import Typography from "components/Typography";
import { Box, Typography } from '@mui/material';
let content = {
    brand: {
        name: "NATIONAL WEB PORTAL ON IMMIGRATION",
        image: '/assets/images/logoevisa.PNG',

        route: "/",
    },
    socials: [
        {
            icon: <FacebookIcon />,
            link: "https://www.facebook.com/CreativeTim/",
        },
        {
            icon: <TwitterIcon />,
            link: "https://twitter.com/creativetim",
        },
        {
            icon: <GitHubIcon />,
            link: "https://github.com/creativetimofficial",
        },
        {
            icon: <YouTubeIcon />,
            link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
        },
    ],
    menus: [
        {
            name: "Liên hệ",
            items: [
                { name: "contact@immigration.gov.vn", href: "https://iradesign.io/" },
                { name: "02438257941", href: "https://www.creative-tim.com/bits" },
                { name: "02839202300", href: "https://www.creative-tim.com/affiliates/new" },
            ],
        },
        {
            name: "Giờ tiếp khách",
            items: [
                { name: "Sáng: 08:00 - 11:30", },
                { name: "(Thứ Hai - thứ Bảy)", },
                { name: "Chiều: 13:30 - 16:00", },
                { name: "(Thứ Hai - Thứ Sáu)", },
            ],
        },
    ],
};

function DefaultFooter() {
    const { brand, socials, menus, copyright } = content;
    return (
        <Box component="footer" style={{ background: "#810C11", color: "#FFFFFF", paddingTop: "30px" }}>
            <Container>
                <Grid container spacing={3} style={{ alignItems: "flex-end", borderBottom: "1px solid #01D2FE" }}>
                    <Grid item xs={12} md={6} sx={{ ml: "auto", mb: 3 }}>
                        <Box>
                            <Link to={brand.route}>
                                <Box component="img" src={brand.image} alt={brand.name} mb={2} />
                            </Link>
                            <Typography variant="h6">{brand.name}</Typography>
                        </Box>
                        <Typography
                            display="block"
                            variant="button"
                            fontWeight="bold"
                            marginTop="30px"
                            textTransform="capitalize"
                            mb={1}
                        >
                            Trụ sở tại Hà Nội
                        </Typography>
                        <Box component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                            <Box p={0} m={0} lineHeight={1.25}>
                                <Typography
                                    variant="button"
                                    fontWeight="300"
                                    textTransform="capitalize"
                                >44-46 đường Trần Phú, quận Ba Đình, Hà Nội
                                </Typography>
                            </Box>
                        </Box>

                        <Typography
                            display="block"
                            variant="button"
                            fontWeight="bold"
                            marginTop="30px"
                            textTransform="capitalize"
                            mb={1}
                        >
                            Cơ quan đại diện tại TP. Hồ Chí Minh
                        </Typography>
                        <Box component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                            <Box p={0} m={0} lineHeight={1.25}>
                                <Typography
                                    variant="button"
                                    fontWeight="300"
                                    textTransform="capitalize"
                                >333-335-337 đường Nguyễn Trãi, Q1, TP. Hồ Chí Minh
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    {menus.map(({ name: title, items }) => (
                        <Grid key={title} item xs={6} md={3} sx={{ mb: 3 }} >
                            <Typography
                                display="block"
                                variant="button"
                                fontWeight="bold"
                                textTransform="capitalize"
                                mb={1}
                            >
                                {title}
                            </Typography>
                            <Box component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                                {items.map(({ name, route, href }) => (
                                    <Box key={name} component="li" p={0} m={0} lineHeight={1.25}>
                                        {href ? (
                                            <Typography
                                                component="a"
                                                href={href}
                                                target="_blank"
                                                rel="noreferrer"
                                                variant="button"
                                                fontWeight="300"
                                                textTransform="capitalize"
                                            >
                                                {name}
                                            </Typography>
                                        ) : (
                                            <Typography

                                                variant="button"
                                                fontWeight="300"
                                                textTransform="capitalize"
                                            >
                                                {name}
                                            </Typography>
                                        )}
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <Grid item xs={12} sx={{ textAlign: "center", my: 3, pb: 3 }}>
                    Bản quyền thuộc về Cục Quản lý xuất nhập cảnh
                </Grid>
            </Container >
        </Box >
    );
}

// Typechecking props for the DefaultFooter


export default DefaultFooter;
