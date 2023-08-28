import React from "react";
import { Link } from "react-router-dom";
import Container from '@mui/material/Container'
// import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "app/components/client/layout/footer.js";
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
const ExpansionPanel = styled(Accordion)(() => ({
    "&.root": {
        boxShadow: "none",
        border: "1px solid rgba(0, 0, 0, .125)",
        "&:not(:last-child)": { borderBottom: 0 },
        "&:before": { display: "none" },
        "&$expanded": { margin: "auto" },
    },
}));
const AccordionRoot = styled("div")(({ theme }) => ({
    width: "100%",
    "& .heading": {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const ExpansionPanelSummary = styled(AccordionSummary)({
    "&.root": {
        minHeight: 56,
        marginBottom: -1,
        backgroundColor: "rgba(0, 0, 0, .03)",
        borderBottom: "1px solid #000000",
        "&$expanded": { minHeight: 56 },
    },
    "& .content": { "&$expanded": { margin: "12px 0" } },
});

const ExpansionPanelDetails = styled(AccordionDetails)(({ theme }) => ({
    "&.root": { padding: theme.spacing(2) },
}));

export default function Index() {
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (_, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const listFAQ = [
        { id: 1, title: "Payment details?", detail: "Elementum eaque curae sed do nulla, viverra class. Cum dicta vestibulum voluptates, imperdiet totam ullamco, officia nostrum tempor itaque incididunt nobis suscipit molestias maecenas. Explicabo perferendis veniam. Error! Gravida porttitor molestias at distinctio placeat. Ipsum eu, " },
        { id: 2, title: "Payment details?", detail: "tesst" },
        { id: 3, title: "Payment details?", detail: "tesst" },
        { id: 4, title: "Payment details?", detail: "tesst" },
        { id: 5, title: "Payment details?", detail: "tesst" },
        { id: 6, title: "Payment details?", detail: "tesst" },
        { id: 7, title: "Payment details?", detail: "tesst" },
        { id: 8, title: "Payment details?", detail: "tesst" },
        { id: 9, title: "Payment details?", detail: "tesst" },
        { id: 10, title: "Payment details?", detail: "tesst" },
        { id: 11, title: "Payment details?", detail: "tesst" }
    ]
    return (
        <>
            <Header />
            <Box >
                <Container sx={{ py: { xs: 2, md: 3 } }}>
                    <Box sx={{ marginTop: "2px" }}>
                        <Container>
                            <Box
                                sx={{
                                    py: { xs: 2, md: 5 },
                                    px: { xs: 2, md: 5 },

                                }}>
                                <Box style={{ marginBottom: '20px' }}>
                                    <Typography style={{ fontSize: "30px", fontWeight: "600", }} >Frequently Asked Questions</Typography>
                                </Box>
                                <AccordionRoot>
                                    {listFAQ.map(({ id, title, detail }) => (
                                        <Accordion style={{ margin: "10px 0" }}>
                                            <AccordionSummary
                                                id="panel1a-header"
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                            >
                                                <Typography className="heading">{title}</Typography>
                                            </AccordionSummary>

                                            <AccordionDetails>
                                                <Typography>
                                                    {detail}
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    ))}
                                </AccordionRoot>

                            </Box>
                        </Container >
                    </Box >
                </Container>
            </Box>

            <Footer />
        </>
    );
}
