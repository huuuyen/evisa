import React from 'react'

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

const Payment = () => {
    return (
        <Box sx={{ marginTop: "2px" }}>
            <Container>
                <Box
                    sx={{
                        backgroundColor: '#F9F9F9',
                        border: '1px solid #810C11',
                        py: { xs: 2, md: 5 },
                        px: { xs: 2, md: 5 },

                    }}
                >
                    <Typography variant="h2" component="h2" sx={{ mb: 1, fontWeight: "bold", fontSize: '15px', marginBottom: "15px" }}>
                        Payment details
                    </Typography>
                    <Typography sx={{ fontWeight: "500" }}>Full name (First name Middle name Last name): LUU QUANG TRUNG</Typography>
                    <Typography sx={{ fontWeight: "500" }}>Passport number: 101111505</Typography>
                    <Typography sx={{ fontWeight: "500" }}>Registration code: E230608USA10111150513</Typography>
                    <Typography sx={{ fontWeight: "500" }}>Date of birth (DD/MM/YYYY): 01/07/1994</Typography>
                    <Typography sx={{ fontWeight: "500" }}>Email: trunglq@gmail.com</Typography>
                    <Typography sx={{ fontWeight: "500" }}>Nationality: United States of America</Typography>
                    <Typography sx={{ fontWeight: "500" }}>Grant Evisa valid from (DD/MM/YYYY): 13/06/2023 To (DD/MM/YYYY): 12/07/2023</Typography>
                    <Typography sx={{ fontWeight: "500" }}>Description: E Visa</Typography>
                    <Typography sx={{ fontWeight: "500" }}>Amount USD: 25 USD</Typography>
                    <Typography sx={{ fontWeight: "500" }}>Exchange rate: 23,370</Typography>
                    <Typography sx={{ fontWeight: "500" }}>Amount VND: 584,250 VNĐ</Typography>

                </Box>
                <Box
                    sx={{
                        py: { xs: 2, md: 2 },
                        px: { xs: 2, md: 2 },

                    }}
                >
                    <RadioGroup
                        row
                        name="gender"

                    >
                        <FormControlLabel
                            value="Male"
                            label="Pay E-visa Fee at VietCombank payment gateway (accepted by Vietnam Immigration Department)"
                            labelPlacement="end"
                            control={<Radio color="secondary" />}
                        />
                    </RadioGroup>
                    <FormControlLabel
                        control={<Checkbox />}
                        label="I agree"
                    />

                </Box>
            </Container >
        </Box >
    )
}

export default Payment
