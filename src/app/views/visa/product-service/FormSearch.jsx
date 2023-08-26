import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { useNavigate } from 'react-router-dom';
import {
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Icon,
    Radio,
    RadioGroup,
    styled,
    Autocomplete
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import DialogAddService from './dialog/AddService';
import { set } from "lodash";
const TextField = styled(TextValidator)(() => ({
    width: "100%",
    marginBottom: "16px",
}));
const AutoComplete = styled(Autocomplete)(() => ({
    width: "100%",
    marginBottom: '16px',
}));

const suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Albania' },
    { label: 'Algeria' },
    { label: 'American Samoa' },
    { label: 'Andorra' },
    { label: 'Angola' },
    { label: 'Anguilla' },
    { label: 'Antarctica' },
    { label: 'Antigua and Barbuda' },
    { label: 'Argentina' },
    { label: 'Armenia' },
    { label: 'Aruba' },
    { label: 'Australia' },
    { label: 'Austria' },
    { label: 'Azerbaijan' },
    { label: 'Bahamas' },
    { label: 'Bahrain' },
    { label: 'Bangladesh' },
    { label: 'Barbados' },
    { label: 'Belarus' },
    { label: 'Belgium' },
    { label: 'Belize' },
    { label: 'Benin' },
    { label: 'Bermuda' },
    { label: 'Bhutan' },
    { label: 'Bolivia, Plurinational State of' },
    { label: 'Bonaire, Sint Eustatius and Saba' },
    { label: 'Bosnia and Herzegovina' },
    { label: 'Botswana' },
    { label: 'Bouvet Island' },
    { label: 'Brazil' },
    { label: 'British Indian Ocean Territory' },
    { label: 'Brunei Darussalam' },
];
const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
    boxShadow: " 0px 4px 4px 0px #00000040"
}));
const SimpleForm = () => {
    const [state, setState] = useState({ date: new Date() });
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
            if (value !== state.password) return false;

            return true;
        });
        return () => ValidatorForm.removeValidationRule("isPasswordMatch");
    }, [state.password]);

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    };

    const handleChange = (event) => {
        event.persist();
        setState({ ...state, [event.target.name]: event.target.value });
    };
    const openAddService = () => {
        setIsOpen(!isOpen);
    };
    const handleClose = (open) => {
        console.log("open", open)
        setIsOpen(open);
    };
    const handleAddService = (event) => {
        console.log(event)
    };
    const handleDateChange = (date) => setState({ ...state, date });

    const {
        username,
        firstName,
        creditCard,
        mobile,
        password,
        confirmPassword,
        gender,
        date,
        email,
    } = state;
    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6}>
                    <Grid item lg={2} md={2} sm={12} xs={12} sx={{ mt: 2 }}>
                        <AutoComplete
                            options={suggestions}
                            getOptionLabel={(option) => option.label}
                            getOptionDisabled={(option) => option === suggestions[0] || option === suggestions[2]}
                            renderInput={(params) => (
                                <TextField {...params} label="Từ ngày đến ngày" variant="standard" fullWidth />
                            )}
                        />
                    </Grid>
                    <Grid item lg={2} md={2} sm={12} xs={12} sx={{ mt: 2 }}>
                        <AutoComplete
                            name="place"
                            options={suggestions}
                            getOptionLabel={(option) => option.label}
                            getOptionDisabled={(option) => option === suggestions[0] || option === suggestions[2]}
                            renderInput={(params) => (
                                <TextField {...params} label="Đại lý" variant="standard" fullWidth />
                            )}
                        />
                    </Grid>
                    <Grid item lg={2} md={2} sm={12} xs={12} sx={{ mt: 2 }}>
                        <AutoComplete
                            name="nationality"
                            options={suggestions}
                            getOptionLabel={(option) => option.label}
                            getOptionDisabled={(option) => option === suggestions[0] || option === suggestions[2]}
                            renderInput={(params) => (
                                <TextField {...params} label="Nationality" variant="standard" fullWidth />
                            )}
                        />
                    </Grid>
                    <Grid item lg={2} md={2} sm={12} xs={12} sx={{ mt: 2 }}>
                        <TextField
                            type="text"
                            name="registrationCode"
                            label="Registration Code"
                            variant="standard"
                            onChange={handleChange}
                            value={firstName || ""}

                        />
                    </Grid>
                    <Grid item lg={2} md={2} sm={12} xs={12} sx={{ mt: 2 }}>
                        <TextField
                            variant="standard"
                            type="text"
                            name="email"
                            label="Email"
                            onChange={handleChange}
                            value={email || ""}
                        />

                    </Grid>
                </Grid>

                <StyledButton variant="contained" color="inherit">
                    Tìm kiếm
                </StyledButton>
            </ValidatorForm>
            <StyledButton style={{ float: 'right', right: 0 }} variant="contained" color="inherit" onClick={openAddService}>
                Thêm dịch vụ
            </StyledButton>
            <DialogAddService handleAddService={handleAddService} openDialog={isOpen} handleClose={handleClose} />
        </div >
    );
};

export default SimpleForm;
