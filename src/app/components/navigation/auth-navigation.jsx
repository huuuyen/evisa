import React from 'react'
// import { StyledButton } from '@/components/styled-button'
import {
    Button,
    Box,
    styled
} from "@mui/material";
const StyleButtonToggle = styled(Button)(({ theme }) => ({
    background: "#FFFFFF",
    color: "#810C11",
    borderRadius: "10px",
    fontWeight: "bold",
    border: "none",
    padding: "10px 20px"

}));
const AuthNavigation = ({ visibleMenu }) => {
    console.log(visibleMenu);
    return (
        <Box >
            {visibleMenu ? (
                <Button variant="outlined">
                    Online support
                </Button>
            ) : (
                <StyleButtonToggle variant="outlined">
                    Online support
                </StyleButtonToggle>

            )}
        </Box>
    );
};

export default AuthNavigation
