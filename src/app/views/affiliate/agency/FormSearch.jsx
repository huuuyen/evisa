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
                        <TextField
                            type="text"
                            name="agency"
                            label="Nhập tên đại lý"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item lg={2} md={2} sm={12} xs={12} sx={{ mt: 2 }}>
                        <TextField
                            variant="standard"
                            type="text"
                            name="name"
                            label="Nhập tên"

                        />
                    </Grid>
                </Grid>

                <StyledButton variant="contained" color="inherit">
                    Tìm kiếm
                </StyledButton>
            </ValidatorForm>
            <StyledButton style={{ float: 'right', right: 0 }} variant="contained" color="inherit" onClick={openAddService}>
                Tạo tài khoản
            </StyledButton>
            <DialogAddService handleAddService={handleAddService} openDialog={isOpen} handleClose={handleClose} />
        </div >
    );
};

export default SimpleForm;
