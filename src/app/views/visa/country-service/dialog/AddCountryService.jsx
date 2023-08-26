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
import { styled, Autocomplete, TextField, Grid, Icon } from '@mui/material';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Span } from 'app/components/Typography';
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
    const [fields, setFields] = useState([]);
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
        price,
        ServiceName,
    } = state;

    const handleSubmit = (value) => {
        handleAddService(value)
    }
    function Close() {
        handleClose(!openDialog);
    }
    const handleAddField = () => {
        const newFieldId = fields.length + 1;
        setFields([...fields, { id: newFieldId, value: '' }]);
    };
    const handleRemoveField = (id) => {
        console.log(id)
        const updatedFields = fields.filter((field) => field.id !== id);
        setFields(updatedFields);
    };
    const handleFieldChange = (id, value) => {

        const updatedFields = fields.map((field) =>
            field.id === id ? { ...field, value } : field
        );
        setFields(updatedFields);
    };
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
                <StyleDialogTitle id="max-width-dialog-title">Thêm Sản phẩm dịch vụ cho quốc gia</StyleDialogTitle>

                <DialogContent >
                    <form noValidate>
                        <Grid container spacing={1}>
                            <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                <StyleTextField
                                    type="text"
                                    name="ServiceName"
                                    label="Chọn quốc gia"
                                />
                            </Grid>
                            <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                            </Grid>
                        </Grid>
                        {fields.map((field) => (
                            <Grid container spacing={1} key={field.id}>
                                <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                    <AutoComplete
                                        name={`place_${field.id}`} // Đảm bảo name là duy nhất cho mỗi trường
                                        options={suggestions}
                                        onChange={(e) => handleFieldChange(field.id, e.target.value)}
                                        getOptionLabel={(option) => option.label}
                                        getOptionDisabled={(option) => option === suggestions[0] || option === suggestions[2]}
                                        renderInput={(params) => (
                                            <StyleTextField {...params} label="Chọn dịch vụ" fullWidth />
                                        )}
                                    />
                                </Grid>
                                <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                    <StyleTextField
                                        type="text"
                                        name="price"
                                        label="Phí dịch vụ"

                                    />
                                </Grid>
                                <Grid item xs={12} style={{ margin: 0, padding: 0 }} sx={{ position: 'relative', mt: 2 }}>
                                    <Icon
                                        onClick={(e) => handleRemoveField(field.id)}
                                        style={{ color: "#f44336", cursor: 'pointer', position: 'absolute', top: -85, right: 0 }}
                                    >
                                        remove_circle
                                    </Icon>
                                </Grid>
                            </Grid>
                        ))}
                        <Grid container spacing={1}>
                            <Grid style={gridItemStyle} item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                                <Span>Thêm sản phẩm</Span> <Icon onClick={handleAddField} style={{ margin: "0 0 -6px 0", cursor: "pointer", color: "#34A853" }} color="green">add_circle</Icon>
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
        </DialogRoot >
    );
}
