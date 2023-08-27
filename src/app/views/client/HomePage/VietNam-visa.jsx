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

const ContentPage = () => {
    const data = [
        { id: 1, path: '/assets/images/content/content1.PNG', content: "Support visas for tourism, business, study and transit" },
        { id: 2, path: '/assets/images/content/content2.PNG', content: "24/7 fast application & simplified form" },
        { id: 3, path: '/assets/images/content/content3.PNG', content: "Urgent & Emergency Vietnam Visa – Expedited Service" },
    ]
    return (
        <Box sx={{ margin: "50px" }}>
            <Container>
                <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{ mb: 1, fontWeight: "700", fontSize: "30px" }}>
                        Why Vietnam-visa?
                    </Typography>
                    <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
                        {data.map(({ id, path, content }) => (
                            <Grid item xs={12} md={4} key={id}>
                                <Box>
                                    <img src={path} />
                                    <Typography sx={{ mb: 1, }}>
                                        {content}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                        {/* <Grid item xs={12} md={4}>
                        <DefaultCounterCard
                            count={70}
                            suffix="+"
                            title="Coded Elements"
                            description="From buttons, to inputs, navbars, alerts or cards, you are covered"
                        />
                    </Grid>
                    <Grid item xs={12} md={4} display="flex">
                        <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
                        <DefaultCounterCard
                            count={15}
                            suffix="+"
                            title="Design Blocks"
                            description="Mix the sections, change the colors and unleash your creativity"
                        />
                        <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <DefaultCounterCard
                            count={4}
                            title="Pages"
                            description="Save 3-4 weeks of work when you use our pre-made pages for your website"
                        />
                    </Grid> */}
                    </Grid>
                </Box>
            </Container >
        </Box >
    )
}

export default ContentPage
