import React, { useState } from "react";
import i18n from '../../i18n';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'


const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(e.target.value);
    }

    return (
        <Box >
            <Container style={{ display: "flex", justifyContent: "flex-end" }}>
                <select style={{ border: "none", height: "26px" }} defaultValue={selectedLanguage} onChange={chooseLanguage}>
                    <option value="vn">Việt Nam</option>
                    <option value="de">German</option>
                    <option value="en">English</option>
                    <option value="it">Italian</option>
                </select>
            </Container>
        </Box>

    );
};

export default LanguageSelector;