import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import { styled, Autocomplete, TextField, Grid } from '@mui/material';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
const DialogRoot = styled('div')(({ theme }) => ({
    '& form': {
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column',
        width: 'fit-content'
    },
    '& .formControl': {
        marginTop: theme.spacing(2),
        minWidth: 120
    },
    '& .formControlLabel': {
        marginTop: theme.spacing(1)
    }
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
];
const StyleDialogTitle = styled(DialogTitle)(({ theme }) => ({
    color: "#0A101D",
    fontSize: "15px",
    fontWeight: "700",
    border: "1px solid #34A853"
}));
const StyleTextField = styled(TextField)(() => ({
    width: "100%",
    // marginBottom: "16px",
}));
const gridItemStyle = {
    paddingLeft: '30px', // Thêm padding bên trái
    paddingRight: '30px', // Thêm padding bên phải
};
const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
    width: "200px",
    borderRadius: "10px"
}));
export default function MaxWidthDialog({ openDialog, handleAddService, handleClose }) {
    // const [open, setOpen] = useState(false);
    const [state, setState] = useState({});
    const [fullWidth, setFullWidth] = useState(true);
    const {
        username,
        firstName,
        creditCard,
        mobile,
        password,
        confirmPassword,
        gender,
        date,
        ServiceName,
    } = state;

    const handleSubmit = (value) => {
        handleAddService(value)
    }
    function Close() {
        handleClose(!openDialog);
    }


    return (
        <DialogRoot>
            <Dialog
                open={openDialog}
                fullWidth={true}
                maxWidth="md"
                onClose={Close}
                PaperProps={{ style: { borderRadius: '10px' } }}
                aria-labelledby="max-width-dialog-title"
            >
                <StyleDialogTitle id="max-width-dialog-title">Thêm Sản phẩm dịch vụ</StyleDialogTitle>

                <DialogContent >
                    <form noValidate>
                        <Grid container spacing={1}>
                            <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                <StyleTextField
                                    type="text"
                                    name="ServiceName"
                                    label="Tên sản phẩm dịch vụ"
                                    value={ServiceName || ""}

                                />
                            </Grid>
                            <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                <AutoComplete
                                    name="place"
                                    options={suggestions}
                                    getOptionLabel={(option) => option.label}
                                    getOptionDisabled={(option) => option === suggestions[0] || option === suggestions[2]}
                                    renderInput={(params) => (
                                        <TextField {...params} label="Thời gian hoàn thành dịch vụ" variant="standard" fullWidth />
                                    )}
                                />
                            </Grid>
                            <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                <AutoComplete
                                    name="place"
                                    options={suggestions}
                                    getOptionLabel={(option) => option.label}
                                    getOptionDisabled={(option) => option === suggestions[0] || option === suggestions[2]}
                                    renderInput={(params) => (
                                        <StyleTextField {...params} label="Mức độ ưu tiên" fullWidth />
                                    )}
                                />
                            </Grid>

                        </Grid>
                    </form>
                </DialogContent>

                <DialogActions>
                    {/* <Button onClick={Close} color="primary">
                        Close
                    </Button> */}
                    <StyledButton variant="contained" type="submit" style={{ background: "#1EB15A" }}>
                        Thêm sản phẩm
                    </StyledButton>
                </DialogActions>
            </Dialog>
        </DialogRoot>
    );
}
