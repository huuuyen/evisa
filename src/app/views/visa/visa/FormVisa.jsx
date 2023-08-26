// import { DatePicker } from "@mui/lab";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
import InputLabel from '@mui/material/InputLabel';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker, DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import {
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Icon,
    Radio,
    RadioGroup,
    styled,
    Stack,
    Box,
    Typography,
    Autocomplete
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

import ImageUpload from './imageFile';


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
    width: "200px",
    borderRadius: "10px"
}));

const StyleButtonSubmit = {
    margin: "30px 0",
    justifyContent: "center"
}
const TextField = styled(TextValidator)(() => ({
    width: "100%",
    // marginBottom: "16px",
}));
const SpanNote = styled(Span)(() => ({
    fontSize: "10px",
    paddingBottom: '5px',
    fontStyle: "italic",
    color: "#8B8B8B",
}));
const StyleLable = styled(Span)(() => ({
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: '18px',
    paddingBottom: '5px',
    color: "#000000",
    display: "block"
}));
const StyleTitle = styled(Span)(() => ({
    fontSize: "15px",
    fontWeight: "700",
    lineHeight: '22.5px',
    paddingBottom: '5px',
    color: "#000000",
    marginTop: "20px",
    display: 'flex',
}));
const frameStyle = {
    // width: '450px',
    height: '250px',
    border: '2px dashed #1EB15A',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
    }
}));





const SimpleForm = () => {

    const [state, setState] = useState({ date: new Date() });
    const [selectedDate, setSelectedDate] = useState(
        new Date('2014-08-18T21:11:54')
    )
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const gridItemStyle = {
        paddingLeft: '30px', // Thêm padding bên trái
        paddingRight: '30px', // Thêm padding bên phải
    };
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
    const handleFileChange = (file) => {
        setUploadedFiles((prevFiles) => [...prevFiles, file]);
    };
    const handleChange = (event) => {
        event.persist();
        setState({ ...state, [event.target.name]: event.target.value });
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
            <Container>
                <Stack spacing={3}>
                    <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                        <>
                            <StyleTitle>Foreigner's images</StyleTitle>
                            <Grid container spacing={1}>
                                <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                    <>
                                        <StyleLable>Portrait photography</StyleLable>
                                        <ImageUpload id="image-upload-1" onFileChange={handleFileChange} />
                                    </>
                                </Grid>
                                <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                    <>
                                        <StyleLable>Passport data page image</StyleLable>
                                        <ImageUpload id="image-upload-2" onFileChange={handleFileChange} />
                                    </>
                                </Grid>

                            </Grid>
                        </>
                        <>
                            <StyleTitle>Personal Information(PNR)</StyleTitle>
                            <Grid container spacing={1}>
                                <>
                                    <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                        <>
                                            <StyleLable>Full name</StyleLable>
                                            <TextField
                                                type="text"
                                                name="username"
                                                value={username || ""}
                                                onChange={handleChange}
                                            />
                                            <SpanNote>(First name Middle name Last name)</SpanNote>
                                        </>
                                    </Grid>

                                    <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                        <>
                                            <StyleLable>Sex</StyleLable>
                                            <RadioGroup
                                                row
                                                name="gender"
                                                sx={{ mb: 2 }}
                                                value={gender || ""}
                                                onChange={handleChange}
                                            >
                                                <FormControlLabel
                                                    value="Male"
                                                    label="Male"
                                                    labelPlacement="end"
                                                    control={<Radio color="secondary" />}
                                                />

                                                <FormControlLabel
                                                    value="Female"
                                                    label="Female"
                                                    labelPlacement="end"
                                                    control={<Radio color="secondary" />}
                                                />
                                            </RadioGroup>
                                        </>
                                    </Grid>
                                </>
                                <>
                                    <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                        <>
                                            <StyleLable>Date of birth</StyleLable>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <DatePicker
                                                    value={date}
                                                    onChange={handleDateChange}
                                                    renderInput={(props) => (
                                                        <TextField
                                                            {...props}
                                                            id="mui-pickers-date"
                                                            sx={{ mb: 2, width: "100%" }}
                                                        />
                                                    )}
                                                />
                                            </LocalizationProvider>
                                        </>
                                    </Grid>

                                    <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                        <>
                                            <StyleLable style={{ marginTop: '23px' }}></StyleLable>
                                            <RadioGroup
                                                row
                                                name="gender"
                                                sx={{ mb: 2 }}
                                                value={gender || ""}
                                                onChange={handleChange}
                                            >
                                                <FormControlLabel
                                                    value="date"
                                                    label="Full date,month and year"
                                                    labelPlacement="end"
                                                    control={<Radio color="secondary" />}
                                                />

                                                <FormControlLabel
                                                    value="year"
                                                    label="Only year is known"
                                                    labelPlacement="end"
                                                    control={<Radio color="secondary" />}
                                                />
                                            </RadioGroup>
                                        </>
                                    </Grid>
                                </>
                                <>
                                    <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                        <>
                                            <StyleLable>Current nationality</StyleLable>
                                            <Autocomplete
                                                name="nationality"
                                                options={suggestions}
                                                getOptionLabel={(option) => option.label}
                                                getOptionDisabled={(option) => option === suggestions[0] || option === suggestions[2]}
                                                renderInput={(params) => (
                                                    <TextField {...params} fullWidth />
                                                )}
                                            />
                                        </>
                                    </Grid>

                                    <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                        <>
                                            <StyleLable>Nationality at birth</StyleLable>
                                            <TextField
                                                type="text"
                                                name="Nationality"
                                                value={firstName || ""}

                                            />
                                        </>
                                    </Grid>
                                </>

                                <>
                                    <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                        <>
                                            <StyleLable>Religion</StyleLable>
                                            <TextField
                                                type="text"
                                                name="Religion"
                                                value={firstName || ""}

                                            />
                                        </>
                                    </Grid>

                                    <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                        <>
                                            <StyleLable>Occupation</StyleLable>
                                            <TextField
                                                type="text"
                                                name="Occupation"
                                                value={firstName || ""}

                                            />
                                        </>
                                    </Grid>
                                </>

                                <>
                                    <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                        <>
                                            <StyleLable>Permanent residential address</StyleLable>
                                            <TextField
                                                type="text"
                                                name="Permanent"
                                                value={firstName || ""}

                                            />
                                        </>
                                    </Grid>

                                    <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                        <>
                                            <StyleLable>Email</StyleLable>
                                            <TextField
                                                type="text"
                                                name="Email"
                                                value={firstName || ""}

                                            />
                                        </>
                                    </Grid>
                                </>

                                <>
                                    <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                        <>
                                            {/* <StyleLable>Permanent residential address</StyleLable>
                                            <TextField
                                                type="text"
                                                name="Permanent"
                                                value={firstName || ""}

                                            /> */}
                                        </>
                                    </Grid>

                                    <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                        <>
                                            <StyleLable>Re-enter email</StyleLable>
                                            <TextField
                                                type="text"
                                                name="ReEmail"
                                                value={firstName || ""}

                                            />
                                        </>
                                    </Grid>
                                </>

                                <>
                                    <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                        <>
                                            <StyleLable>Passport number</StyleLable>
                                            <TextField
                                                type="text"
                                                name="PassportNumber"
                                                value={firstName || ""}

                                            />
                                        </>
                                    </Grid>

                                    <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                        <>
                                            <StyleLable>Type</StyleLable>
                                            <Autocomplete
                                                name="nationality"
                                                options={suggestions}
                                                getOptionLabel={(option) => option.label}
                                                getOptionDisabled={(option) => option === suggestions[0] || option === suggestions[2]}
                                                renderInput={(params) => (
                                                    <TextField {...params} fullWidth />
                                                )}
                                            />

                                        </>
                                    </Grid>
                                </>

                                <>
                                    <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                        <>
                                            <StyleLable>Expiry date</StyleLable>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <DatePicker
                                                    value={date}
                                                    onChange={handleDateChange}
                                                    renderInput={(props) => (
                                                        <TextField
                                                            {...props}
                                                            id="mui-pickers-date"
                                                            sx={{ mb: 2, width: "100%" }}
                                                        />
                                                    )}
                                                />
                                            </LocalizationProvider>
                                        </>
                                    </Grid>
                                    <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                        <>
                                            <StyleLable>Intended date of entry</StyleLable>
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <DatePicker
                                                    value={date}
                                                    onChange={handleDateChange}
                                                    renderInput={(props) => (
                                                        <TextField
                                                            {...props}
                                                            id="mui-pickers-date"
                                                            sx={{ mb: 2, width: "100%" }}
                                                        />
                                                    )}
                                                />
                                            </LocalizationProvider>

                                        </>
                                    </Grid>
                                </>

                                <>
                                    <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                        <>
                                            <StyleLable>Intended length of stay in Viet Nam</StyleLable>
                                            <TextField
                                                type="text"
                                                name="Intendedlength"
                                                value={firstName || ""}

                                            />
                                        </>
                                    </Grid>

                                    <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                        <>
                                            <StyleLable>Purpose of entry</StyleLable>
                                            <Autocomplete
                                                name="Purposeofentry"
                                                options={suggestions}
                                                getOptionLabel={(option) => option.label}
                                                getOptionDisabled={(option) => option === suggestions[0] || option === suggestions[2]}
                                                renderInput={(params) => (
                                                    <TextField {...params} fullWidth />
                                                )}
                                            />

                                        </>
                                    </Grid>
                                </>

                                <>
                                    <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                        <>
                                            <StyleLable>Intended temporary residential address in Viet Nam</StyleLable>
                                            <TextField
                                                type="text"
                                                name="Intendedtemporary"
                                                value={firstName || ""}

                                            />
                                        </>
                                    </Grid>

                                    <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                        <>
                                            <StyleLable>City/Province</StyleLable>
                                            <Autocomplete
                                                name="Province"
                                                options={suggestions}
                                                getOptionLabel={(option) => option.label}
                                                getOptionDisabled={(option) => option === suggestions[0] || option === suggestions[2]}
                                                renderInput={(params) => (
                                                    <TextField {...params} fullWidth />
                                                )}
                                            />

                                        </>
                                    </Grid>
                                </>
                            </Grid>
                        </>

                        <>
                            <StyleTitle>Inviting/ guarentering agency/ organization (if any)</StyleTitle>
                            <Grid container spacing={1}>
                                <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                    <>
                                        <StyleLable>Name of hosting organisation</StyleLable>
                                        <TextField
                                            type="text"
                                            name="nameorganisation"
                                            value={firstName || ""}

                                        />
                                    </>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                    <>
                                        <StyleLable>Address</StyleLable>
                                        <TextField
                                            type="text"
                                            name="Address"
                                            value={firstName || ""}

                                        />
                                    </>
                                </Grid>
                            </Grid>
                        </>

                        <>
                            <StyleTitle>Under 14 years old accompanying child(ren) included in your passport (if any)</StyleTitle>
                            <Grid container spacing={1}>
                                <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                    <>
                                        <StyleLable>Full name (First name Middle name Last name)</StyleLable>
                                        <TextField
                                            type="text"
                                            name="Fullname"
                                            value={firstName || ""}

                                        />
                                    </>

                                    <>
                                        <StyleLable>Date of birth</StyleLable>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                value={date}
                                                onChange={handleDateChange}
                                                renderInput={(props) => (
                                                    <TextField
                                                        {...props}
                                                        id="mui-pickers-date"
                                                        sx={{ mb: 2, width: "100%" }}
                                                    />
                                                )}
                                            />
                                        </LocalizationProvider>
                                    </>
                                    <>
                                        <StyleLable>Sex</StyleLable>
                                        <RadioGroup
                                            row
                                            name="gender"
                                            sx={{ mb: 2 }}
                                            value={gender || ""}
                                            onChange={handleChange}
                                        >
                                            <FormControlLabel
                                                value="Male"
                                                label="Male"
                                                labelPlacement="end"
                                                control={<Radio color="secondary" />}
                                            />

                                            <FormControlLabel
                                                value="Female"
                                                label="Female"
                                                labelPlacement="end"
                                                control={<Radio color="secondary" />}
                                            />
                                        </RadioGroup>
                                    </>
                                </Grid>
                                <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                    <>
                                        <StyleLable>Portrait photography</StyleLable>
                                        <ImageUpload id="image-upload-3" onFileChange={handleFileChange} />
                                    </>
                                </Grid>
                            </Grid>

                        </>

                        <>
                            <StyleTitle>Requested information</StyleTitle>
                            <Grid container spacing={1}>
                                <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                    <>
                                        <StyleLable>Grant Evisa valid from</StyleLable>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                name="GrantEvisa"
                                                value={date}
                                                onChange={handleDateChange}
                                                renderInput={(props) => (
                                                    <TextField
                                                        {...props}
                                                        id="mui-pickers-date"
                                                        sx={{ mb: 2, width: "100%" }}
                                                    />
                                                )}
                                            />
                                        </LocalizationProvider>
                                    </>
                                </Grid>
                                <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                    <>
                                        <StyleLable>To</StyleLable>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                name="To"
                                                value={date}
                                                onChange={handleDateChange}
                                                renderInput={(props) => (
                                                    <TextField
                                                        {...props}
                                                        id="mui-pickers-date"
                                                        sx={{ mb: 2, width: "100%" }}
                                                    />
                                                )}
                                            />
                                        </LocalizationProvider>
                                    </>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                    <>
                                        <StyleLable>Allowed to entry through checkpoint</StyleLable>
                                        <Autocomplete
                                            name="nationality"
                                            options={suggestions}
                                            getOptionLabel={(option) => option.label}
                                            getOptionDisabled={(option) => option === suggestions[0] || option === suggestions[2]}
                                            renderInput={(params) => (
                                                <TextField {...params} fullWidth />
                                            )}
                                        />
                                    </>
                                </Grid>
                                <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                    <>
                                        <StyleLable>Exit through checkpoint</StyleLable>
                                        <Autocomplete
                                            name="nationality"
                                            options={suggestions}
                                            getOptionLabel={(option) => option.label}
                                            getOptionDisabled={(option) => option === suggestions[0] || option === suggestions[2]}
                                            renderInput={(params) => (
                                                <TextField {...params} fullWidth />
                                            )}
                                        />
                                    </>
                                </Grid>
                            </Grid>
                        </>
                        <Grid container spacing={1} style={StyleButtonSubmit}>
                            <StyledButton variant="outlined" color="inherit">
                                Từ chối
                            </StyledButton>

                            <StyledButton variant="contained" type="submit" style={{ background: "#1EB15A" }}>
                                Duyệt Evisa
                            </StyledButton>
                            {/* <Button color="primary" variant="contained" type="submit">
                                <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
                            </Button> */}
                        </Grid>


                    </ValidatorForm>
                </Stack>
            </Container>


        </div >
    );
};

export default SimpleForm;
